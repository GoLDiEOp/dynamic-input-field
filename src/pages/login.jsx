import React, { useState, useRef } from "react";
import Input from "../components/input";
import styled from "styled-components";
export default function Login() {
  const [formValues, setFormValues] = useState([
    {
      label: "Name",
      type: "text",
      value: "",
    },
    {
      label: "Email",
      type: "email",
      value: "" || [],
    },
  ]);
  const [toggle, setToggle] = useState(false);

  const inputRef = useRef();
  const selectRef = useRef();

  const handleChangeSelect = (options, index) => {
    const values = [...formValues];
    values[index].value = options;
    setFormValues(values);
  };
  const handleChange = (e, index) => {
    console.log(e.target.value, index);
    const values = [...formValues];
    values[index].value = e.target.value;
    setFormValues(values);
  };

  const handleAddField = (e) => {
    e.preventDefault();
    const values = [...formValues];
    values.push({
      label: inputRef.current.value || "label",
      type: selectRef.current.value || "text",
      value: "",
    });
    setFormValues(values);
    setToggle(false);
  };

  const handleDeleteField = (e, index) => {
    const values = [...formValues];
    values.splice(index, 1);
    setFormValues(values);
  };
  const addBtnClick = (e) => {
    e.preventDefault();
    setToggle(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {formValues.map((obj, index) => (
          <Input
            key={index}
            objValue={obj}
            onChange={handleChange}
            handleChangeSelect={handleChangeSelect}
            index={index}
            deleteField={handleDeleteField}
          />
        ))}
        {!toggle ? (
          <div className="center">
            <button className="add-btn" onClick={addBtnClick}>
              Add new
            </button>
          </div>
        ) : (
          <div className="dialog-box">
            <input type="text" placeholder="label" ref={inputRef} />
            <select ref={selectRef}>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="select">Select</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
            </select>
            <button className="add-btn" onClick={handleAddField}>
              Add
            </button>
          </div>
        )}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #9dd4f5;
  form {
    background-color: white;
    margin: 3rem auto;
    width: 500px;
    max-width: 80%;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  form > div {
    display: flex;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }
  .input-group > label {
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  .input {
    width: 100%;
    display: flex;
  }
  .select {
    width: 100%;
    display: flex;
  }
  .input > input {
    padding: 0.3rem 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
  }
  .input > select {
    padding: 0.3rem 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
  }
  .input > input:focus {
    outline: none;
  }
  .input > div {
    padding: 0.5rem 1rem;
    background: #e34728;
    margin-left: 0.5rem;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
  .input > div.add {
    padding: 0.5rem 1rem;
    background: #0c56c4;
    margin-left: 0.5rem;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
  .add-btn {
    padding: 0.5rem 1rem;
    background: #0c56c4;
    border: none;
    font-size: 0.9rem;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .submit-btn {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid #e34728;
    background: #fff;
    margin: 1.2rem 0;
    color: #e34728;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
  }
  .dialog-box {
    margin: 0.5rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
    grid-gap: 1rem;
  }
  .dialog-box > input,
  .dialog-box > select {
    padding: 0.5rem 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .dialog-box > input:focus,
  .dialog-box > select:focus {
    outline: none;
  }
  .hide {
    display: none;
  }
`;
