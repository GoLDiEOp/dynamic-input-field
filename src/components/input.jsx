import React, { useState } from "react";
export default function Input({
  objValue,
  onChange,
  index,
  deleteField,
  handleChangeSelect,
}) {
  const { label, type, value } = objValue;
  const [options, setOptions] = useState([]);
  const addOption = (e, index) => {
    {
      const newOption = prompt("Enter new option");

      setOptions([...options, newOption]);

      handleChangeSelect(options, index);
    }
  };
  return type === "select" ? (
    <div className="input-group">
      <label htmlFor={label}>{label}</label>
      <div className="input">
        <select>
          {options.map((option) => (
            <option
              key={option}
              value={value || ""}
              onChange={(e) => onChange(e, index)}
              placeholder="Add the options"
            >
              {option}
            </option>
          ))}
        </select>
        <div
          className="add"
          onClick={(e) => {
            addOption(e, index);
          }}
        >
          Add{" "}
        </div>
        <div onClick={(e) => deleteField(e, index)}>X</div>
      </div>
    </div>
  ) : (
    <div className="input-group">
      <label htmlFor={label}>{label}</label>
      <div className="input">
        <input
          type={type || "text"}
          id={label}
          value={value || ""}
          onChange={(e) => onChange(e, index)}
        />
        <div onClick={(e) => deleteField(e, index)}>X</div>
      </div>
    </div>
  );
}
