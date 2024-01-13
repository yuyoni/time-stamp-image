import { useState } from "react";
import styled from "styled-components";
import imgfile from "../assets/imgfile.png";
import formatTimestamp from "../utils/formatTimestamp";

export default function UploadBox() {
  const [isActive, setActive] = useState(false);
  const [uploadedInfo, setUploadedInfo] = useState(null);

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setActive(false);

    const file = event.dataTransfer.files[0];
    setFileInfo(file);
  };

  // 파일 정보를 세팅하는 함수
  const setFileInfo = (file) => {
    console.log(file); // 파일 객체 확인
    const { name, size, type, lastModified } = file;
    const formattedSize = (size / (1024 * 1024)).toFixed(2) + "mb";

    const fileInfo = { name, formattedSize, type, lastModified };

    setUploadedInfo(fileInfo);
  };

  // 미리보기 업로드 함수
  const handleUpload = (e) => {
    const file = e.target.files[0];
    setFileInfo(file);

    // FileReader를 사용하여 이미지 미리보기를 생성
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedInfo((prevInfo) => ({
        ...prevInfo,
        preview: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <Wrapper>
      {uploadedInfo && formatTimestamp(uploadedInfo.lastModified)}
      <label
        className={`preview${isActive ? " active" : ""}`} // isActive 값에 따라 className 제어
        onDragEnter={handleDragStart}
        onDragOver={handleDragOver}
        onDragLeave={handleDragEnd}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          className="file"
          onChange={handleUpload}
        />
        {uploadedInfo ? (
          <>
            <img
              className="preview-img"
              src={uploadedInfo.preview}
              alt={uploadedInfo.name}
            />
          </>
        ) : (
          <>
            <img className="img-icon" src={imgfile} alt="img-icon" />
            <p className="preview_msg">Click or Drop Image</p>
          </>
        )}
      </label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .file {
    display: none;
  }

  .img-icon {
    width: 120px;
    height: 150px;
    pointer-events: none;
  }

  .file::file-selector-button {
    font-size: 14px;
    background: #fff;
    border: 1px solid #111;
    border-radius: 12px;
    padding: 4px 32px;
    cursor: pointer;
  }

  .preview {
    width: 300px;
    height: 150px;
    margin: auto;
    background-color: #fff;
    border-radius: 5px;
    border: 3px dashed #eee;
    padding: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .preview:hover {
    border-color: #111;
  }

  .preview.active {
    background-color: #efeef3;
    border-color: #111;
  }

  .preview-img {
    max-width: 130%;
    max-height: 130%;
  }

  .preview_msg {
    font-weight: 500;
    font-size: 18px;
    margin: 20px 0 10px;
  }
`;
