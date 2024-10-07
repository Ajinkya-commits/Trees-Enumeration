import React, { useState } from "react";
import axios from "axios";

const Predict = () => {
  const [file, setFile] = useState(null);
  const [resultImages, setResultImages] = useState([]);
  const [treeCount, setTreeCount] = useState(0);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResultImages(response.data.result_images);
      setTreeCount(response.data.tree_count);
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  return (
    <div>
      <h1>Tree Detection</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload and Predict</button>

      {resultImages.length > 0 && (
        <div>
          <h2>Detected Trees: {treeCount}</h2>
          {resultImages.map((img, index) => (
            <img
              key={index}
              src={`http://localhost:5000${img}`}
              alt={`Result ${index}`}
              style={{ display: "block", margin: "10px 0" }} // Optional: for better layout
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Predict;
