import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CBxDiv = styled.div`
  width: 44px;
  background: transparent;
  display: flex;
  align-items: center;
`;
const InputCheckbox = styled.input.attrs({type:"checkbox"})`
  display: inline;
  margin: 0 auto;
  box-shadow: #2cc5d2 0 0 0 1px inset;
`;
const Title = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 9px;
  white-space: nowrap;
  background: transparent;
  flex: 1 1;
`;

const TaskDiv = styled.div`
  border-radius: 4px;
  margin: 3px 0;
  display: flex;
  align-items: center;
`;

export const Task = ({task:{id,title,state},onArchiveTask,onPinTask}) => {
  return (
    <TaskDiv className={`list-item ${state}`}>
        <CBxDiv  onClick={()=>onArchiveTask(id)}
              id={`archiveTask-${id}`} aria-label={`archiveTask-${id}`}>
          <InputCheckbox defaultChecked={state === "TASK_ARCHIVED"}
                         disabled={true} name="checked"/>
        </CBxDiv>
        <Title>
          {title}
        </Title>
        <div className="actions" onClick={ev=>ev.stopPropagation()}>
        {state!=="TASK_ARCHIVED" && (
          //eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={()=>onPinTask(id)}>
            <span className="icon-star" id={`pinTask-${id}`} aria-label={`pinTask-${id}`}/>
          </a>
        )}
      </div>
    </TaskDiv>
  );
};

Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired
  }),
  /**Event to archive the task */
  onArchiveTask: PropTypes.func,
  /**Event to pin the task */
  onPinTask: PropTypes.func
};