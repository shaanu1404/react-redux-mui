import {
  Paper,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { useState, forwardRef } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../store/todoSlice";

type CreateFormProps = {
  onCancel: () => void;
};

const CreateForm: React.ForwardRefRenderFunction<any, CreateFormProps> = (
  { onCancel },
  ref
) => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  const handleCreate = () => {
    if (!title.trim()) return;
    const id = crypto.randomUUID(),
      done = false;
    dispatch(createTodo({ id, title, done }));
    onCancel();
  };

  return (
    <Box sx={{ maxWidth: 600, padding: "1.2rem", margin: "0 auto" }} ref={ref}>
      <Paper sx={{ padding: "1.2rem" }}>
        <header>
          <Typography variant="h5">Create New Todo</Typography>
        </header>
        <Divider />
        <Box sx={{ paddingY: "1.2rem" }}>
          <TextField
            id="title"
            name="title"
            label="Todo"
            variant="outlined"
            fullWidth
            size="medium"
            placeholder="Enter todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Box sx={{ textAlign: "end", marginTop: "1rem" }}>
            <Button
              variant="text"
              size="medium"
              color="error"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button variant="text" size="medium" onClick={handleCreate}>
              Add new todo
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

const CreateTodoForm = forwardRef(CreateForm);
export default CreateTodoForm;
