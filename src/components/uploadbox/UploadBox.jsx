import { useRef, useState } from "react";
import imgfile from "../../assets/imgfile.png";
import styled from "styled-components";

export default function UploadBox({
  uploadedInfo,
  setUploadedInfo,
  canvasRef,
}) {
  const [isActive, setActive] = useState(false);

  const imgRef = useRef();

  // 드래그 앤 드롭을 제어하는 함수들
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
    const { name, size, type, lastModified } = file;
    const formattedSize = (size / (1024 * 1024)).toFixed(2) + "mb";
    const url = URL.createObjectURL(file);
    const fileInfo = { name, formattedSize, type, lastModified, url };

    setUploadedInfo(fileInfo);
  };

  // 파일 업로드 함수
  const handleUpload = (e) => {
    const file = e.target.files[0];
    console.log(file); // 파일 객체 확인
    if (file) {
      setFileInfo(file);
    }
  };

  // 클립보드에서 파일 가져와서 처리
  const handleClipboardChange = async (event) => {
    const items = event.clipboardData.items;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf("image") !== -1) {
        const blob = await item.getAsFile();
        setFileInfo(blob);
      }
    }
  };

  return (
    <Wrapper>
      <label
        className={`preview${isActive ? " active" : ""}`} // isActive 값에 따라 className 제어
        onDragEnter={handleDragStart}
        onDragOver={handleDragOver}
        onDragLeave={handleDragEnd}
        onDrop={handleDrop}
        onPaste={handleClipboardChange}
      >
        <input
          ref={imgRef}
          type="file"
          accept="image/*"
          className="file"
          onChange={handleUpload}
        />
        {uploadedInfo ? (
          <>
            <canvas
              className="preview-img"
              ref={canvasRef}
              alt={uploadedInfo.name}
            />
          </>
        ) : (
          <>
            <img className="img-icon" src={imgfile} alt="img-icon" />
            <p className="preview_msg">Click, Drop or Paste Image</p>
          </>
        )}
      </label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  grid-area: uploadbox;

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
    background: #f3f3f3;
    border: 1px solid #111;
    border-radius: 12px;
    padding: 4px 32px;
    cursor: pointer;
  }

  .preview {
    width: 300px;
    height: 150px;
    margin: auto;
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
    background-color: #a49078;
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
