import ListItem from "../ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState } from "react";

function List({
  listToDo,
  deleteList,
  toggleComplete,
  toggleEdit,
  handleEdit,
  editText,
  isEdit,
  setlistToDo,
}) {
  function handleOnDragEnd(result) {
    const items = Array.from(listToDo);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);
    setlistToDo(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {listToDo.map((item, index) => {
              return !item.edit ? (
                <ListItem
                  index={index}
                  id={item.id}
                  text={item.text}
                  deleteList={() => deleteList(item.id)}
                  toggleComplete={() => toggleComplete(item.id)}
                  toggleEdit={() => toggleEdit(item.id)}
                  listToDo={listToDo}
                  isEdit={isEdit}
                ></ListItem>
              ) : (
                <div key={item.id}>
                  <input
                    type="text"
                    id="edit-input"
                    onChange={handleEdit}
                    defaultValue={editText}
                  ></input>

                  <FontAwesomeIcon
                    icon={faFloppyDisk}
                    id="edit-button"
                    onClick={() => {
                      toggleEdit(item.id);
                    }}
                  ></FontAwesomeIcon>
                </div>
              );
            })}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default List;
