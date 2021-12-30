import React from "react";
import PropTypes from "prop-types";
import {TaskList} from "./TaskList";
import {useSelector} from "react-redux";
import styled from "styled-components";

const ErrorScreen = styled.div`
  min-height: 100vh;
   background: white;
   display: flex;
   .wrapper-message {
     position: absolute;
     top: 45%;
     right: 0;
     bottom: auto;
     left: 0;
     width: auto;
     height: auto;
     transform: translate3d(0, -50%, 0);
     text-align: center;
   }
   .title-message {
     font-size: 16px;
     line-height: 24px;
     font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
     font-weight: 800;
     color: #555;
   }
   .subtitle-message {
   font-size: 14px;
   line-height: 20px;
   color: #666;
 }
`;
const SadFace = styled.span`
   font-size: 48px;
   line-height: 56px;
   color: #2cc5d2;
   display: block;
   font-family: "percolate";
   &:before {
     content: "\\e60f";
   }
`;

export function PureInboxScreen({error}){
  if(error) return(
    <ErrorScreen >
      <div className="wrapper-message">
        <SadFace />
        <div className="title-message">Oh no!</div>
        <div className="subtitle-message">Something went wrong</div>
      </div>
    </ErrorScreen>
  );
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}
PureInboxScreen.propTypes = {
  /**Error message */
  error: PropTypes.string
}
PureInboxScreen.defaultProps = {
  error: null
}

export function InboxScreen(){
  const isError = useSelector(state => state.isError);
  return <PureInboxScreen error={isError}/>
}