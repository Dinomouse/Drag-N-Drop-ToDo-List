import { React, useState } from "react";
import Input from "../Input";
import List from "../List";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [text, setText] = useState("");
  const [listToDo, setlistToDo] = useState([]);
  const [editText, setEditText] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  function handleEdit(event) {
    setEditText(event.target.value);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function addToList() {
    if (text === "") {
      return;
    }
    setlistToDo([
      ...listToDo,
      {
        id: Math.floor(Math.random() * 10000),
        text: text,
        complete: false,
        edit: false,
      },
    ]);
    console.log(listToDo);
    setText("");
  }

  function deleteList(id) {
    setlistToDo([...listToDo].filter((e) => e.id !== id));
  }

  function toggleComplete(id) {
    setlistToDo(
      listToDo.map((e) => {
        if (e.id === id) {
          e.complete = !e.complete;
          return e;
        } else {
          return e;
        }
      })
    );
  }

  function toggleEdit(id) {
    setlistToDo(
      listToDo.map((e) => {
        if (e.id === id) {
          e.edit = !e.edit;
          setEditText(e.text);
          e.text = editText;
          return e;
        } else {
          setIsEdit(!isEdit);
          return e;
        }
      })
    );
  }

  return (
    <div className="App">
      <h1>
        To-Do App<FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
      </h1>

      <Input onChange={handleChange} addToList={addToList} text={text} />
      <List
        text={text}
        listToDo={listToDo}
        deleteList={deleteList}
        toggleComplete={toggleComplete}
        toggleEdit={toggleEdit}
        handleEdit={handleEdit}
        editText={editText}
        isEdit={isEdit}
        setlistToDo={setlistToDo}
      ></List>
    </div>
  );
}

export default App;
