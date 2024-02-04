import styled from "styled-components";
import StyleButton from "./StyleButton";

export default function StyleButtonBox({
  uploadedInfo,
  setTextStyle,
  setTextPosition,
  setFontColor,
  setFont,
}) {
  const buttonData = [
    {
      name: "oneline",
      buttontext: "한줄",
      setter: () => setTextStyle("oneline"),
    },
    {
      name: "twoline",
      buttontext: "두줄",
      setter: () => setTextStyle("twoline"),
    },
    { name: "top", buttontext: "top", setter: () => setTextPosition("top") },
    {
      name: "bottom",
      buttontext: "bottom",
      setter: () => setTextPosition("bottom"),
    },
    { name: "black", buttontext: "black", setter: () => setFontColor("black") },
    { name: "white", buttontext: "white", setter: () => setFontColor("white") },
  ];

  return (
    uploadedInfo && (
      <Wrapper>
        <Container>
          {buttonData.map((button, index) => (
            <StyleButton
              key={index}
              name={button.name}
              buttontext={button.buttontext}
              setter={button.setter}
            />
          ))}
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
