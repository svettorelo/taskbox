import {configureStore,createSlice} from "@reduxjs/toolkit";

/**Initial state of the store when the app loads. */
const defaultTasks = [
  {id:"1", title:"Something", state:"TASK_INBOX"},
  {id:"2", title:"Something more", state:"TASK_INBOX"},
  {id:"3", title:"Something else", state:"TASK_INBOX"},
  {id:"4", title:"Something again", state:"TASK_INBOX"},
];

/**Creation of the store. */
const TasksSlice = createSlice({
  name:"tasks",
  initialState: defaultTasks,
  reducers: {
    updateTaskState: (state,action)=>{
      const {id,newTaskState} = action.payload;
      const task = state.findIndex(t => t.id===id);
      if (task >= 0){
        state[task].state = newTaskState;
      }
    }
  }
});

/**The actions contained in the slice are exported for usage in our components */
export const {updateTaskState} = TasksSlice.actions;

//**Store configuration */
const store = configureStore({
  reducer: {
    tasks: TasksSlice.reducer,
  }
});

export default store;