import {
  VStack,
  HStack,
  StackDivider,
  Text,
  IconButton,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const ToDoList = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="3" borderRadius="lg">
        No To-do's, Hooray!
      </Badge>
    );
  }

  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.300"
        borderWidth="3px"
        p="4"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", md: "80vw", lg: "50vw", xl: "40vw" }}
        alignItems="stretch"
      >
        {todos.map((todo) => {
          return (
            <HStack key={todo.id}>
              <Text>{todo.task}</Text>
              <Spacer />
              <IconButton
                icon={<FaTrash />}
                isRound="true"
                onClick={() => deleteTodo(todo.id)}
              />
            </HStack>
          );
        })}
      </VStack>
    </>
  );
};

export default ToDoList;
