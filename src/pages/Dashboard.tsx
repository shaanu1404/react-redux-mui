import NavBar from "../components/NavBar";
import { Container, Typography, Box, Button, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  Todo,
  clearAll,
  removeCompleted,
  toggleDone,
  filterTodosSelector,
} from "../store/todoSlice";
import CreateForm from "../components/CreateForm";
import { useState } from "react";
import TodoList from "../components/TodoList";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  // const todos = useSelector(todoSelectors.selectAll);
  const searchedTodos = useSelector(filterTodosSelector(search));

  const handleChange = (todo: Todo) => {
    dispatch(toggleDone(todo));
  };

  const handleRemoveAll = () => dispatch(clearAll());

  const handleDeleteCompleted = () => {
    const completedTodoIds = searchedTodos.reduce((acc: string[], todo) => {
      if (todo.done) acc.push(todo.id);
      return acc;
    }, []);
    dispatch(removeCompleted(completedTodoIds));
  };

  return (
    <>
      <NavBar title="Todos" />
      <Container
        sx={{
          paddingY: "1.2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" component="h4">
            Todo list
          </Typography>
          <Button
            variant="outlined"
            color="success"
            size="small"
            onClick={() => setOpen(true)}
          >
            Create Todo
          </Button>
        </Box>
        <SearchBar search={search} onChange={(value) => setSearch(value)} />
        <TodoList todos={searchedTodos} handleChange={handleChange} />
        <Box>
          <Button
            size="small"
            variant="text"
            color="error"
            onClick={handleRemoveAll}
            disabled={searchedTodos.length === 0}
          >
            Clear All
          </Button>
          <Button
            size="small"
            variant="text"
            color="warning"
            onClick={handleDeleteCompleted}
            disabled={searchedTodos.length === 0}
          >
            Delete completed
          </Button>
        </Box>
      </Container>
      <Modal open={open} onClose={() => setOpen(false)}>
        <CreateForm onCancel={() => setOpen(false)} />
      </Modal>
    </>
  );
}

export default Dashboard;
