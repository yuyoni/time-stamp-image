import styled from "styled-components";
import StyleButton from "./StyleButton";

export default function StyleButtonBox({
  uploadedInfo,
  setTextStyle,
  setTextPosition,
  setFontColor,
  setFont,
}) {
  return (
    uploadedInfo && (
      <Wrapper>
        <Container>
          <StyleButton
            name={"oneline"}
            buttontext={"한줄"}
            setter={() => setTextStyle("oneline")}
          />
          <StyleButton
            name={"twoline"}
            buttontext={"두줄"}
            setter={() => setTextStyle("twoline")}
          />
          <StyleButton
            name={"top"}
            buttontext={"top"}
            setter={() => setTextPosition("top")}
          />
          <StyleButton
            name={"bottom"}
            buttontext={"bottom"}
            setter={() => setTextPosition("bottom")}
          />
          <StyleButton
            name={"black"}
            buttontext={"black"}
            setter={() => setFontColor("black")}
          />
          <StyleButton
            name={"white"}
            buttontext={"white"}
            setter={() => setFontColor("white")}
          />
        </Container>
        <Container>
          <StyleButton
            name={"GmarketSans"}
            buttontext={"폰트1"}
            setter={() => setFont("GmarketSansMedium")}
          />
          <StyleButton
            name={"DNFBitBitv2"}
            buttontext={"폰트2"}
            setter={() => setFont("DNFBitBitv2")}
          />
          <StyleButton
            name={"DOSGothic"}
            buttontext={"폰트3"}
            setter={() => setFont("DOSGothic")}
          />
        </Container>
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  grid-area: stylebuttons;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
