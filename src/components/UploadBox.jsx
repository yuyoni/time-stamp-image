import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import imgfile from "../assets/imgfile.png";
import formatTimestamp from "../utils/formatTimestamp";
import Button from "./Button";
import CopyToClipboard from "react-copy-to-clipboard";
import calculateTextPosition from "../utils/caculateTextPosition";

export default function UploadBox() {
  const [isActive, setActive] = useState(false);
  const [uploadedInfo, setUploadedInfo] = useState(null);
  const [font, setFont] = useState("GmarketSansMedium");
  const [fontColor, setFontColor] = useState("white");
  const [textPosition, setTextPosition] = useState("bottom");
  const [textStyle, setTextStyle] = useState("twoline");

  const imgRef = useRef();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (uploadedInfo) {
      // 이미지 그리기
      const img = new Image();
      img.src = uploadedInfo.url;
      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // 캔버스의 크기를 이미지의 크기로 설정
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // 텍스트 그리기

        // 날짜 변환
        const date = formatTimestamp(uploadedInfo.lastModified);

        // 폰트 크기 계산
        const fontSize = canvas.width * 0.05;

        // 폰트 스타일
        ctx.fillStyle = fontColor;
        ctx.font = `${fontSize}px ${font}`;
        ctx.shadowColor = `${
          fontColor === "white"
            ? "rgba(0, 0, 0, 0.5)"
            : "rgba(255, 255, 255, 0.8)"
        }`;
        ctx.shadowBlur = 2;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        calculateTextPosition(
          textStyle,
          fontSize,
          textPosition,
          canvas,
          date,
          ctx
        );
      };
    }
  }, [uploadedInfo, font, fontColor, textPosition, textStyle]);

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

  // 파일 저장하는 함수
  const saveImage = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL("image/png"); // png 형식 사용

    // a 태그를 생성하고 다운로드 링크로 사용
    const a = document.createElement("a");
    a.href = dataURL;
    const renamedFile = uploadedInfo.name.split(".")[0] + "_time";
    a.download = renamedFile; // 파일명
    a.click();
  };

  // 캔버스 blob객체를 생성한 후 url을 클립보드에 복사하는 함수
  const copyToClipboard = () => {
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      const clipboardData = new ClipboardItem({ "image/png": blob });
      navigator.clipboard.write([clipboardData]);
    });
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
      {uploadedInfo?.lastModified && (
        <FontStyleContainer>
          <ColorContainer>
            <button className="oneline" onClick={() => setTextStyle("oneline")}>
              oneline
            </button>
            <button className="twoline" onClick={() => setTextStyle("twoline")}>
              twoline
            </button>
            <button className="top" onClick={() => setTextPosition("top")}>
              top
            </button>
            <button
              className="bottom"
              onClick={() => setTextPosition("bottom")}
            >
              bottom
            </button>
            <button className="black" onClick={() => setFontColor("black")}>
              black
            </button>
            <button className="white" onClick={() => setFontColor("white")}>
              white
            </button>
          </ColorContainer>
          <FontContainer>
            <button
              className="GmarketSans"
              onClick={() => setFont("GmarketSansMedium")}
            >
              폰트1
            </button>
            <button
              className="DNFBitBitv2"
              onClick={() => setFont("DNFBitBitv2")}
            >
              폰트2
            </button>
            <button className="DOSGothic" onClick={() => setFont("DOSGothic")}>
              폰트3
            </button>
          </FontContainer>
        </FontStyleContainer>
      )}
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
            <p className="preview_msg">Click or Drop Image</p>
          </>
        )}
      </label>
      {uploadedInfo && (
        <ButtonContainer>
          <div onClick={saveImage}>
            <Button text={"save"} />
          </div>
          <CopyToClipboard text={uploadedInfo.url}>
            <div onClick={copyToClipboard}>
              <Button text={"copy"} />
            </div>
          </CopyToClipboard>
        </ButtonContainer>
      )}
    </Wrapper>
  );
}

const FontStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  button {
    display: block;
    position: relative;
    float: left;
    width: 80px;
    padding: 0;
    margin: 10px 20px 10px 0;
    text-align: center;
    line-height: 40px;

    color: #fff;
    border-radius: 5px;
    transition: all 0.2s;

    cursor: pointer;

    &:hover {
      margin-top: 12px;
      margin-bottom: 8px;
    }

    &:active {
      margin-top: 15px;
      margin-bottom: 5px;
    }
  }
`;
const ColorContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  button {
    font-family: "GmarketSansMedium";
  }
  .black {
    background-color: #313131;
    color: white;
    box-shadow: 0px 5px 0px 0px #000000;

    &:hover {
      box-shadow: 0px 4px 0px 0px #000000;
    }
    &:active {
      box-shadow: 0px 0px 0px 0px #000000;
    }
  }
  .white {
    background-color: #ffffff;
    color: black;
    box-shadow: 0px 5px 0px 0px #b2b2b2;

    &:hover {
      box-shadow: 0px 4px 0px 0px #b2b2b2;
    }
    &:active {
      box-shadow: 0px 0px 0px 0px #b2b2b2;
    }
  }
  .oneline,
  .twoline {
    background-color: #599f8c;
    color: white;
    box-shadow: 0px 5px 0px 0px #346457;

    &:hover {
      box-shadow: 0px 4px 0px 0px #346457;
    }
    &:active {
      box-shadow: 0px 0px 0px 0px #346457;
    }
  }

  .top,
  .bottom {
    background-color: #563e58;
    color: white;
    box-shadow: 0px 5px 0px 0px #382c39;

    &:hover {
      box-shadow: 0px 4px 0px 0px #382c39;
    }
    &:active {
      box-shadow: 0px 0px 0px 0px #382c39;
    }
  }
`;
const FontContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  .GmarketSans {
    font-family: "GmarketSansMedium";
    background: #bd4030;
    box-shadow: 0px 5px 0px 0px #962b1f;

    &:hover {
      box-shadow: 0px 4px 0px 0px #962b1f;
    }
    &:active {
      box-shadow: 0px 0px 0px 0px #962b1f;
    }
  }
  .DNFBitBitv2 {
    font-family: "DNFBitBitv2";
    background: #e0b83e;
    box-shadow: 0px 5px 0px 0px #be8617;

    &:hover {
      box-shadow: 0px 4px 0px 0px #be8617;
    }
    &:active {
      box-shadow: 0px 0px 0px 0px #be8617;
    }
  }
  .DOSGothic {
    font-family: "DOSGothic";
    background: #7f9626;
    box-shadow: 0px 5px 0px 0px #5a6b17;

    &:hover {
      box-shadow: 0px 4px 0px 0px #5a6b17;
    }
    &:active {
      box-shadow: 0px 0px 0px 0px #5a6b17;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`;
