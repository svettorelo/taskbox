import React from "react";
import styled from "styled-components";
import {MyButton} from "./Button";
import PropTypes from "prop-types";

const Input = styled.input.attrs({type:"text"})`
  font-size: 14px;
  padding: 0.4rem;
  width:100%;
  border: 2px solid whitesmoke ;
  border-radius: 5px;
  margin: 0 3px;
`;
const MyDiv = styled.div`
  display:flex;
  width:80%;
  align-items:center; 
`;
export const MyInput = ({text,onButtonClick,state,placeHolder}) => {
  return (
    <MyDiv>
      <Input disabled={state} placeholder={placeHolder} />
      <MyButton text={text} state={state} onButtonClick={onButtonClick}/>
    </MyDiv>
  );
};
MyInput.propTypes = {
  placeHolder: PropTypes.string,
  text: PropTypes.string,
  onButtonClick: PropTypes.func,
  state: PropTypes.bool
};