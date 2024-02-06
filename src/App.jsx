// Components Import
import ToDoList from "./components/ToDoList/ToDoList";
import AddToDo from "./components/AddToDo/AddToDo";

// Chakra UI Imports
import { VStack, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

// React Hooks Imports
import { useEffect, useState } from "react";

const App = () => {
  // Toggle for light and dark mode
  const { colorMode, toggleColorMode } = useColorMode();

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to delete todo
  function deleteTodo(id) {
    const newTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodo);
  }

  // Function to add a todo
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <>
      <VStack p="4" h="100vh">
        <IconButton
          icon={colorMode === "light" ? <MdSunny /> : <IoMdMoon />}
          isRound="true"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />

        <Heading
          size="3xl"
          fontWeight="extrabold"
          bgGradient="linear-gradient(to right, #0093E9, #80D0C7)"
          mb="8"
          bgClip="text"
        >
          To-do List App
        </Heading>

        <ToDoList todos={todos} deleteTodo={deleteTodo} />
        <AddToDo addTodo={addTodo} />
      </VStack>
    </>
  );
};

export default App;
