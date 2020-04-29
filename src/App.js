/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import MainBg from "./mainBg.gif";
import Form from "./components/Form";
import Output from "./components/Output";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        {
          todoText: inputValue,
          id: uuidv4(),
          completed: false,
        },
      ]);
    }
    setInputValue("");
  };

  const removeTodo = (id, e) => {
    e.stopPropagation();
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedTodo = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  return (
    <section css={styles} className="main">
      <div className="container">
        <Output
          removeTodo={removeTodo}
          todos={todos}
          setTodos={setTodos}
          completedTodo={completedTodo}
        />
        <Form
          handleForm={handleForm}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  background: url('${MainBg}') no-repeat center/cover;
  display: flex;
  .container{
    width: 100%;
    max-width: 450px;
    margin: auto;
    filter: drop-shadow(20px 80px 3.75rem crimson);
  }
`;

export default App;
