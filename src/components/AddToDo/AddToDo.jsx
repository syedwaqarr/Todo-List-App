import { Input, Button, HStack, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useState } from "react";

const AddToDo = ({ addTodo }) => {
  const [content, setContent] = useState("");
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();

    if (!content) {
      toast({
        title: "No Content",
        description: "Please write something",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      task: content,
    };

    addTodo(todo);
    setContent("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <HStack mt="8">
          <Input
            variant="filled"
            placeholder="Write..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <Button type="submit" px="8" colorScheme="blue" textColor="white">
            Add
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default AddToDo;
