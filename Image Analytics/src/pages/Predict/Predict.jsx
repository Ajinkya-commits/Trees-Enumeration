import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const Predict = () => {
  const [file, setFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [resultImages, setResultImages] = useState([]);
  const [treeCount, setTreeCount] = useState(0);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      setUploadedImage(URL.createObjectURL(selectedFile));
    } else {
      setUploadedImage(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

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
      alert("An error occurred while uploading the file. Please try again.");
    }
  };

  return (
    <>
      <div className="mt-20 flex flex-col justify-center items-center w-full font-bold">
        <h1 className="text-4xl m-3">Tree Detection</h1>
        <input
          type="file"
          onChange={handleFileChange}
          className="text-1xl ml-5 mt-4"
        />
        <Button
          onClick={handleUpload}
          className="mt-4 text-1xl w-[300px] text-white py-2 px-6 rounded-lg "
        >
          Upload and Predict
        </Button>
      </div>

      <div className=" mt-4 w-[100vw]  p-4 flex justify-center rounded-lg shadow-lg">
        <div className="flex flex-row">
          <div className="flex flex-col justify-end items-end p-4  w-full">
            {uploadedImage && (
              <div className="mt-4  ml-[10vw] ">
                <h2 className="text-2xl font-sans font-bold mb-2">
                  Uploaded Image:
                </h2>
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-3/4 h-auto"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col justify-start items-center w-full p-4">
            {resultImages.length > 0 && (
              <div className="mt-4  mr-[10vw]">
                <h2 className="text-2xl font-sans font-bold mb-2">
                  Detected Trees: {treeCount}
                </h2>
                {resultImages.map((img, index) => (
                  <img
                    key={index}
                    src={`http://localhost:5000${img}`}
                    alt={`Result ${index}`}
                    className="w-3/4 h-auto"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Predict;
