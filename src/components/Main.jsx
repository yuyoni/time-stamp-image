import { useRef, useState } from "react";
import styled from "styled-components";
import useDraw from "../hooks/useDraw";
import ResetButton from "./buttons/ResetButton";
import SaveButtonBox from "./buttons/SaveButtonBox";
import StyleButtonBox from "./buttons/StyleButtonBox";
import CopyMessage from "./popup/CopyMessage";
import SaveMessage from "./popup/SaveMessage";
import UploadBox from "./uploadbox/UploadBox";
import CustomDateButton from "./buttons/CustomDateButton";

export default function Main() {
  const [selectedDate, setSelectedDate] = useState(null);

  const [uploadedInfo, setUploadedInfo] = useState(null);

  const [font, setFont] = useState("GmarketSansMedium");
  const [fontColor, setFontColor] = useState("white");
  const [textPosition, setTextPosition] = useState("bottom");
  const [textStyle, setTextStyle] = useState("oneline");

  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [showSaveMessage, setShowSaveMessage] = useState(false);

  const [saveConfirm, setSaveConfirm] = useState(false);

  const canvasRef = useRef(null);

  useDraw(
    uploadedInfo,
    canvasRef,
    fontColor,
    font,
    textStyle,
    textPosition,
    selectedDate
  );

  return (
    <Container>
      <CopyMessage showCopyMessage={showCopyMessage} />
      <SaveMessage
        setSaveConfirm={setSaveConfirm}
        showSaveMessage={showSaveMessage}
        setShowSaveMessage={setShowSaveMessage}
      />
      <ResetButton
        uploadedInfo={uploadedInfo}
        setUploadedInfo={setUploadedInfo}
      />
      <CustomDateButton
        uploadedInfo={uploadedInfo}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <UploadBox
        uploadedInfo={uploadedInfo}
        setUploadedInfo={setUploadedInfo}
        canvasRef={canvasRef}
      />
      <StyleButtonBox
        uploadedInfo={uploadedInfo}
        setFont={setFont}
        setFontColor={setFontColor}
        setTextPosition={setTextPosition}
        setTextStyle={setTextStyle}
      />
      <SaveButtonBox
        canvasRef={canvasRef}
        uploadedInfo={uploadedInfo}
        setShowSaveMessage={setShowSaveMessage}
        saveConfirm={saveConfirm}
        setSaveConfirm={setSaveConfirm}
        setShowCopyMessage={setShowCopyMessage}
      />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-areas:
    ". reset stylebuttons"
    "date-picker uploadbox  stylebuttons"
    ". savebuttons stylebuttons";
  justify-content: center;
  align-items: center;
  column-gap: 40px;
`;
