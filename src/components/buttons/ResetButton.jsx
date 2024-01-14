import styled from "styled-components";

export default function ResetButton({ setUploadedInfo }) {
  return (
    <Wrapper>
      <button className="reset" onClick={() => setUploadedInfo(null)}>
        RESET
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .reset {
    font-family: "DOSGothic";
    background: #bd4030;
    box-shadow: 0px 7px 0px 0px #962b1f;

    display: block;
    position: relative;
    float: left;
    width: 60px;
    height: 50px;
    padding: 0;
    margin: 10px 20px 10px 0;
    text-align: center;
    font-size: 18px;

    color: #f3f3f3;
    border-radius: 50%;
    transition: all 0.2s;

    &:hover {
      margin-top: 12px;
      margin-bottom: 8px;
      box-shadow: 0px 5px 0px 0px #962b1f;
    }

    &:active {
      margin-top: 15px;
      margin-bottom: 5px;
      box-shadow: 0px -2px 0px 0px #962b1f;
    }
  }
`;
