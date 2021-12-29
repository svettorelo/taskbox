import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  cursor: pointer;
  line-height: normal;
  width: 7em;
  padding: 0.5em;
  border: 0;
  border-radius: 0.5em;
  background-color: steelblue;
  color: whitesmoke;
  
  ${props => !props.disabled && 
  `  &:hover {
       color:steelblue;
       background-color:whitesmoke;
     }
  `}
  
  ${props => props.disabled &&
  `  cursor: not-allowed !important;
     opacity: 0.5;
     &:hover {
       transform: none;
     }
  `}
`;

/**
 * Button component to add tasks
 */
export const MyButton = ({text,onButtonClick,state}) => {
  return (
    <Button disabled={state} onClick={(ev => onButtonClick(ev))}>
      {text}
    </Button>
  );
}
MyButton.propTypes = {
  text: PropTypes.string,
  onButtonClick: PropTypes.func,
  state: PropTypes.bool
}