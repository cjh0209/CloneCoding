import React from "react";
import { useDispatch } from "react-redux";
import { delete_todo } from "../commons/action";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Item = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 30px;
  delete{
    margin-left: 10px;
  }
`;

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const { id, title, isComplete } = todo;

  const handleClick = () => {
    dispatch(delete_todo(id));
  
  /*
  const [check, nocheck] = useState(false);

  const handleCheck = () => {
    nocheck(!check);
  };
  */
};
  

  return (
    <Item>
        <div>
          <span>{title}</span>
          <button className="delete" onClick={handleClick}>{isComplete || "삭제"}</button>
        </div>
    </Item>
);}

export default TodoItem;