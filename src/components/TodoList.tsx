import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormControlLabel,
  ListItemButton,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { Todo, removeTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";

type TodoListProps = {
  todos: Todo[];
  handleChange: (todo: Todo) => void;
};

const TodoList = ({ todos, handleChange }: TodoListProps) => {
  const dispatch = useDispatch();
  const handleRemove = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
    <List>
      {todos &&
        todos.map((todo) => {
          return (
            <ListItem key={todo.id} divider>
              <FormControlLabel
                label={
                  <ListItemText sx={{ textDecoration: "strike-through" }}>
                    {todo.title}
                  </ListItemText>
                }
                control={
                  <Checkbox
                    name="item"
                    checked={todo.done}
                    size="small"
                    color="success"
                    onChange={() => handleChange(todo)}
                  />
                }
                sx={{ flexGrow: 1 }}
              />
              <ListItemButton
                sx={{ flexGrow: "unset" }}
                onClick={() => handleRemove(todo.id)}
              >
                <CloseRounded fontSize="small" color="error" />
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
};

export default TodoList;
