import styled from "styled-components";

export default function CopyMessage() {
  return <Wrapper>클립보드에 복사되었습니다.</Wrapper>;
}

const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border-radius: 5px;
  z-index: 999;
`;
