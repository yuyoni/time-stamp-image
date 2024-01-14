import styled from "styled-components";

export default function StyleButton({ name, setter, buttonText }) {
  return (
    <Wrapper>
      <button className={name} onClick={setter} buttonText={buttonText}>
        {buttonText}
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  button {
    font-family: "GmarketSansMedium";
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
