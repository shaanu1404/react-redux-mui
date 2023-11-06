import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from ".";

export type Todo = {
  id: string;
  title: string;
  done: boolean;
};

const todoAdapter = createEntityAdapter<Todo>({
  selectId: (todo) => todo.id,
});

const prefilledValues: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: "Sample for you",
    done: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Add Redux Tookit",
    done: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Add MUI library",
    done: true,
  },
];
const initialState = todoAdapter.getInitialState();
const prefilledInitialState = todoAdapter.upsertMany(
  initialState,
  prefilledValues
);

const todoSlice = createSlice({
  name: "todos",
  initialState: prefilledInitialState,
  reducers: {
    createTodo: todoAdapter.addOne,
    toggleDone(state, action: PayloadAction<Todo>) {
      const { id, done } = action.payload;
      todoAdapter.updateOne(state, { id, changes: { done: !done } });
    },
    clearAll: todoAdapter.removeAll,
    removeCompleted: todoAdapter.removeMany,
    removeTodo: todoAdapter.removeOne,
  },
});

export const { createTodo, toggleDone, clearAll, removeCompleted, removeTodo } =
  todoSlice.actions;
export const todoSelectors = todoAdapter.getSelectors(
  (state: RootState) => state.todos
);

export const filterTodosSelector = (search: string) => {
  return (state: RootState) => {
    if (!search.trim()) return todoSelectors.selectAll(state);
    return todoSelectors.selectAll(state).filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
  }
}

export default todoSlice.reducer;
