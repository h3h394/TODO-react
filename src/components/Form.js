/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Form = ({ inputValue, setInputValue, handleForm }) => (
  <form css={style} onSubmit={handleForm}>
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      type="text"
      placeholder="Add todo..."
    />
    <button type="submit">Add todo</button>
  </form>
);

const style = css`
  height: 36px;
  width: 100%;
  display: flex;
  margin: 84px 0 0 0;
  border: 1px solid #2d5381;
  input,
  button {
    height: 100%;
    border: none;
    outline: none;
  }
  input {
    padding: 0px 14px;
    width: 70%;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    &::placeholder {
      color: #fff;
    }
  }
  button {
    width: 30%;
    color: #102439;
    padding: 0 10px;
    font-weight: 500;
    cursor: pointer;
  }
`;

export default Form;
