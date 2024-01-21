import styled from "styled-components";

export default function ResetButton({ uploadedInfo, setUploadedInfo }) {
  return (
    uploadedInfo?.lastModified && (
      <Wrapper>
        <button className="reset" onClick={() => setUploadedInfo(null)}>
          RESET
        </button>
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  grid-area: reset;
  display: flex;
  justify-content: center;

  .reset {
    font-family: "DOSGothic";
    background: #bd4030;
    box-shadow: 0px 7px 0px 0px #962b1f;

    position: relative;
    float: left;
    width: 60px;
    height: 50px;
    margin: 10px 0 10px 0;
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
