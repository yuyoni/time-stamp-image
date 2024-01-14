import React from "react";
import styled from "styled-components";

export default function Button({ text }) {
  return (
    <Wrapper>
      <div className="button__content">
        <p className="button__text">{text}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  position: relative;
  padding: 0;
  margin-top: 40px;
  width: 160px;
  height: 80px;
  border: 2px solid lightgray;
  outline: none;
  background-color: #f4f5f6;
  border-radius: 28px;
  box-shadow: -6px -20px 35px #ffffff, -6px -10px 15px #e4e2e2,
    -20px 0px 30px #ffffff, 6px 20px 25px rgba(0, 0, 0, 0.1);
  transition: 0.13s ease-in-out;
  cursor: pointer;

  &:active {
    box-shadow: none;

    .button__content {
      box-shadow: none;

      .button__text {
        transform: translate3d(32px, 12px, 0px);
      }
    }
  }

  .button__content {
    position: absolute;
    top: 4px;
    display: grid;
    padding: 20px;
    width: 115px;
    height: 32px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    box-shadow: inset 0px -8px 0px #dddddd, 0px -8px 0px #f4f5f6;
    border-radius: 23px;
    transition: 0.13s ease-in-out;
    z-index: 1;
  }

  .button__text {
    position: relative;
    transform: translate3d(32px, 4px, 0px);
    margin: 0;
    align-self: end;
    grid-column: 1/5;
    grid-row: 2;
    text-align: center;
    font-size: 24px;
    background-color: #888888;

    color: transparent;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    transition: 0.13s ease-in-out;
  }
`;
