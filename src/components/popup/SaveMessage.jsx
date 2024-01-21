import styled from "styled-components";

export default function SaveMessage({
  setSaveConfirm,
  showSaveMessage,
  setShowSaveMessage,
}) {
  return (
    showSaveMessage && (
      <Wrapper>
        <p>저장하시겠습니까?</p>
        <div>
          <button
            className="yes"
            onClick={() => {
              setSaveConfirm(true);
              setShowSaveMessage(false);
            }}
          >
            YES
          </button>
          <button
            className="no"
            onClick={() => {
              setShowSaveMessage(false);
            }}
          >
            NO
          </button>
        </div>
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  width: 400px;
  height: 160px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
  font-size: 24px;
  border-radius: 5px;
  z-index: 999;

  div {
    display: flex;
    gap: 40px;
    .yes,
    .no {
      width: 80px;
      height: 40px;
      color: #f3f3f3;
    }
    .yes {
      background-color: #599f6d;
    }
    .no {
      background-color: #bd4030;
    }
  }
`;
