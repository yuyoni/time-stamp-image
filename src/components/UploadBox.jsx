import styled from "styled-components";
import imgfile from "../assets/imgfile.png";

export default function UploadBox() {
  return (
    <Wrapper>
      <label className="preview">
        <input type="file" className="file" />
        <img className="img-icon" src={imgfile} alt="img-icon" />
        <p className="preview_msg">클릭 혹은 파일을 이곳에 드롭하세요.</p>
      </label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .file {
    display: none;
  }
  .img-icon {
    width: 100px;
    height: 100px;
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

  .preview_msg {
    font-weight: 500;
    font-size: 18px;
    margin: 20px 0 10px;
  }
`;
