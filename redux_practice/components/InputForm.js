// InputForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { add_todo } from "../commons/action";

import styled from 'styled-components';
//styeld-component
const Styled = styled.div`
  text-align: center;
  margin-top: 30px;
  input {
    width: 60vw;
    height: 30px;
  }

  button{
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 10px;
  }
  `;

const InputForm = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    setText(value);
  };

  const handleClick = () => {
    const todo = {
      title: text,
      isComplete: false,
    };

    dispatch(add_todo(todo));
    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Styled>
      <input
        type="text"
        placeholder="할 일을 입력하세요~"
        onChange={handleChange}
        value={text}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleClick}>+</button>
    </Styled>
  );
};

export default InputForm