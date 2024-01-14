import styled from "styled-components";

export default function FontStyleButton({
  setTextStyle,
  setTextPosition,
  setFontColor,
  setFont,
}) {
  return (
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
        <button className="bottom" onClick={() => setTextPosition("bottom")}>
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
        <button className="DNFBitBitv2" onClick={() => setFont("DNFBitBitv2")}>
          폰트2
        </button>
        <button className="DOSGothic" onClick={() => setFont("DOSGothic")}>
          폰트3
        </button>
      </FontContainer>
    </FontStyleContainer>
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
