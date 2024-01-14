import styled from "styled-components";
import StyleButton from "./StyleButton";

export default function ButtonList({
  setTextStyle,
  setTextPosition,
  setFontColor,
  setFont,
}) {
  return (
    <Wrapper>
      <Container>
        <StyleButton
          name={"oneline"}
          buttonText={"oneline"}
          setter={() => setTextStyle("oneline")}
        />
        <StyleButton
          name={"twoline"}
          buttonText={"twoline"}
          setter={() => setTextStyle("twoline")}
        />
        <StyleButton
          name={"top"}
          buttonText={"top"}
          setter={() => setTextPosition("top")}
        />
        <StyleButton
          name={"bottom"}
          buttonText={"bottom"}
          setter={() => setTextPosition("bottom")}
        />
        <StyleButton
          name={"black"}
          buttonText={"black"}
          setter={() => setFontColor("black")}
        />
        <StyleButton
          name={"white"}
          buttonText={"white"}
          setter={() => setFontColor("white")}
        />
      </Container>
      <Container>
        <StyleButton
          name={"GmarketSans"}
          buttonText={"폰트1"}
          setter={() => setFont("GmarketSans")}
        />
        <StyleButton
          name={"DNFBitBitv2"}
          buttonText={"폰트2"}
          setter={() => setFont("DNFBitBitv2")}
        />
        <StyleButton
          name={"DOSGothic"}
          buttonText={"폰트3"}
          setter={() => setFont("DOSGothic")}
        />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
