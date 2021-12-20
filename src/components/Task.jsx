import React from "react";
import PropTypes from "prop-types";

export const Task = ({task:{id,title,state},onArchiveTask,onPinTask}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input type="checkbox" defaultChecked={state === "TASK_ARCHIVED"}
               disabled={true} name="checked"/>
        <span className="checkbox-custom" onClick={()=>onArchiveTask(id)}
              id={`archiveTask-${id}`} aria-label={`archiveTask-${id}`}/>
      </label>
      <div className="title">
        <input value={title} readOnly={true} type="text" placeholder="Input title"/>
      </div>
      <div className="actions" onClick={ev=>ev.stopPropagation()}>
        {state!=="TASK_ARCHIVED" && (
          //eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={()=>onPinTask(id)}>
            <span className="icon-star" id={`pinTask-${id}`} aria-label={`pinTask-${id}`}/>
          </a>
        )}
      </div>
    </div>
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