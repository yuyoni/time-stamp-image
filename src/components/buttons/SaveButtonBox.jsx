import styled from "styled-components";
import SaveButton from "./SaveButton";
import CopyToClipboard from "react-copy-to-clipboard";
import useSave from "../../hooks/useSave";

export default function SaveButtonBox({
  canvasRef,
  uploadedInfo,
  setShowSaveMessage,
  saveConfirm,
  setSaveConfirm,
  setShowCopyMessage,
}) {
  useSave(
    canvasRef,
    uploadedInfo,
    saveConfirm,
    setSaveConfirm,
    setShowSaveMessage
  );

  // 캔버스 blob객체를 생성한 후 url을 클립보드에 복사하는 함수
  const copyImage = () => {
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      const clipboardData = new ClipboardItem({ "image/png": blob });
      navigator.clipboard.write([clipboardData]).then(() => {
        setShowCopyMessage(true);
        setTimeout(() => {
          setShowCopyMessage(false);
        }, 2000);
      });
    });
  };

  return (
    uploadedInfo && (
      <ButtonContainer>
        <div onClick={() => setShowSaveMessage(true)}>
          <SaveButton text={"save"} />
        </div>
        <CopyToClipboard text={uploadedInfo.url}>
          <div onClick={copyImage}>
            <SaveButton text={"copy"} />
          </div>
        </CopyToClipboard>
      </ButtonContainer>
    )
  );
}

const ButtonContainer = styled.div`
  grid-area: savebuttons;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
