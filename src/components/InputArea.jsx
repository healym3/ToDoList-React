import React from "react";

function InputArea(props) {
  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.addToDo(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
