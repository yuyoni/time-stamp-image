import styled from "styled-components";
import SaveButton from "./SaveButton";
import CopyToClipboard from "react-copy-to-clipboard";

export default function SaveButtonBox({
  uploadedInfo,
  setShowSaveMessage,
  copyImage,
}) {
  return (
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
  );
}

const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`;
