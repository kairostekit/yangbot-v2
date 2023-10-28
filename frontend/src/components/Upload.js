import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UploadAndDisplayImage = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const newSelectedImages = Array.from(event.target.files);

    newSelectedImages.forEach((image) => {
      const timestamp = new Date().getTime();
      const username = "your_username"; // ค่า username ที่คุณต้องการ
      const newFileName = `${username}.${timestamp}.jpg`;

      // สร้าง Blob จากไฟล์
      const blob = new Blob([image], { type: image.type });

      // สร้าง Blob URL
      const blobUrl = URL.createObjectURL(blob);

      // สร้างลิงก์สำหรับการดาวน์โหลด
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = newFileName;

      // คลิกลิงก์สำหรับการดาวน์โหลด
      downloadLink.click();

      // ล้าง Blob URL ออก
      URL.revokeObjectURL(blobUrl);
    });

    setSelectedImages(newSelectedImages);
  };

  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <>
      
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-primary">
            อัพโหลดรูปภาพ
          </h4>
        </div>
          <div className="w-50  ">
              {selectedImages.map((image, index) => (
            <div key={index}>
              <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(image)}/>
            <br />
            <button onClick={() => removeImage(index)}>Remove</button>
            <br />
          </div>
            ))}
            <br />
            <br />
            <input
            type="file"
            className="form-control"
            multiple
            onChange={handleImageChange}
            />
            
          </div>
      
      
    </>
    
  );
}

export default UploadAndDisplayImage;
