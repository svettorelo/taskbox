import React from "react";
import {Task} from "./Task";
import PropTypes from "prop-types";
import {useDispatch,useSelector} from "react-redux";
import {updateTaskState} from "../lib/store";

export function PureTaskList({loading,tasks,onPinTask,onArchiveTask}){
  const events = {
    onPinTask,
    onArchiveTask
  };
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) return (
    <div className="list-items">
      {LoadingRow}
      {LoadingRow}
      {LoadingRow}
    </div>
  );
  if(tasks.length===0) return (
    <div className="list-items">
      <div className="wrapper-message">
        <span className="icon-check" />
        <div className="title-message">You have no tasks</div>
        <div className="subtitle-message">Sit back and relax</div>
      </div>
    </div>
  );
  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];
  return (
    <div className="list-items">
      {tasksInOrder.map(t => <Task task={t} key={t.id} {...events}/>)}
    </div>
  );
};
PureTaskList.propTypes = {
  /**To show if the TaskList is loading */
  loading: PropTypes.bool,
  /**List of tasks */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /**Event to pin the task */
  onPinTask: PropTypes.func,
  /**Event to archive the task */
  onArchiveTask: PropTypes.func
};
PureTaskList.defaultProps = {
  loading: false
};

export function TaskList(){
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const pinTask = (val) => {
    // We dispatch the Pinned event back to our store
    dispatch(updateTaskState({id:val, newTaskState:"TASK_PINNED"}));
  };
  const archiveTask = (val) => {
    dispatch(updateTaskState({id:val, newTaskState:"TASK_ARCHIVED"}));
  }
  const filteredTasks = tasks.filter(t => t.state==="TASK_INBOX" || t.state==="TASK_PINNED");
  return (
    <PureTaskList tasks={filteredTasks} loading={false}
                  onPinTask={t=>pinTask(t)} onArchiveTask={t=>archiveTask(t)}/>
  );
}
