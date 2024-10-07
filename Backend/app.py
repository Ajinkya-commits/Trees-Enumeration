import argparse
import io
import os
import cv2
from flask import Flask, request, jsonify  
from flask_cors import CORS
from PIL import Image
from ultralytics import YOLO

# Disable TensorFlow optimizations (optional)
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

app.config['UPLOAD_FOLDER'] = 'static/uploads'

@app.route("/")
def index():
    return jsonify({"message": "Welcome to the Tree Counting API"}), 200

@app.route("/about")
def about():
    return jsonify({"message": "This API performs tree counting using YOLO."}), 200

@app.route("/upload", methods=["POST"])
def upload():
    if 'file' in request.files:
        try:
            f = request.files['file']
            upload_folder = app.config['UPLOAD_FOLDER']
            # Ensure upload folder exists
            if not os.path.exists(upload_folder):
                os.makedirs(upload_folder)

            filepath = os.path.join(upload_folder, f.filename)
            print("Upload folder is", filepath)
            f.save(filepath)

            file_extension = f.filename.rsplit('.', 1)[1].lower()
            print("File extension is", file_extension)

            if file_extension in ['jpg', 'jpeg', 'png']:
                # Read the image using OpenCV
                img = cv2.imread(filepath)
                if img is None:
                    print("Failed to read the image")
                    return jsonify({"error": "Error reading the image"}), 400

                # Encode the image as a JPEG
                is_success, buffer = cv2.imencode(".jpg", img)
                if not is_success:
                    print("Failed to encode the image")
                    return jsonify({"error": "Error encoding the image"}), 400
                
                frame = buffer.tobytes()

                # Load image with PIL
                try:
                    image = Image.open(io.BytesIO(frame))
                except Exception as e:
                    print("Error opening image with PIL:", str(e))
                    return jsonify({"error": "Error opening image with PIL"}), 400

                # Load the YOLO model
                try:
                    yolo = YOLO('model/best.pt')  # Adjust path if necessary
                except Exception as e:
                    print("Error loading YOLO model:", str(e))
                    return jsonify({"error": "Error loading YOLO model"}), 500
                
                results = yolo(image)

                # Count the number of trees detected
                tree_count = len(results[0].boxes)

                # Save the result images and prepare response data
                result_img_paths = []
                for i, result in enumerate(results):
                    result_img_path = os.path.join(upload_folder, f"result_{i}_{f.filename}")
                    result.save(result_img_path)
                    print(f"Saved result image to {result_img_path}")
                    
                    # Check if the file was saved successfully
                    if os.path.exists(result_img_path):
                        print(f"Result image saved successfully: {result_img_path}")
                        result_img_paths.append(f"/static/uploads/result_{i}_{f.filename}")

                    else:
                        print(f"Failed to save result image: {result_img_path}")

                # Return JSON response
                return jsonify({
                    "original_image": f"uploads/{f.filename}",
                    "result_images": result_img_paths,
                    "tree_count": tree_count
                }), 200
            else:
                print("Unsupported file extension")
                return jsonify({"error": "Unsupported file extension"}), 400
        except Exception as e:
            print("Error during prediction:", str(e))
            return jsonify({"error": f"Error during prediction: {str(e)}"}), 500

    return jsonify({"error": "No file uploaded"}), 400

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Flask app exposing YOLO models for tree detection")
    parser.add_argument("--port", default=5000, type=int, help="Port number")
    args = parser.parse_args()
    app.run(host="0.0.0.0", port=args.port, debug=True)
