/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Output = ({ todos, removeTodo, completedTodo }) => (
  <div css={styles} className="outputContainer">
    <div className="output">
      {todos.map((todo) => (
        <div
          onClick={() => completedTodo(todo.id)}
          key={todo.id}
          className="todoItem"
        >
          <p style={{ textDecoration: todo.completed ? "line-through" : "" }}>
            {todo.todoText}
          </p>
          <i
            onClick={(e) => removeTodo(todo.id, e)}
            className="fas fa-times"
          ></i>
        </div>
      ))}
    </div>
  </div>
);

const styles = css`
  width: 100%;
  height: 210px;
  padding: 56px 0 0 0;
  .output {
    padding: 0 40px;
    height: 210px;
    max-height: 210px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  .todoItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.3);
    padding: 13px;
    border-radius: 4px;
    margin: 6px 0;
    cursor: pointer;
    color: #fff;
    p{
        text-decoration-color: #000;
    }
  }
`;

export default Output;
