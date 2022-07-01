import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Draggable } from "react-beautiful-dnd";

import {
  faSquareCheck,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";

function ListItem({
  text,
  deleteList,
  toggleComplete,
  listToDo,
  toggleEdit,
  id,
  isEdit,
  index,
}) {
  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided) => (
        <li
          className={[
            listToDo.find((o) => o.id === id).complete ? "done" : "not-done",
            isEdit ? "hidden" : "",
          ].join(" ")}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {text}

          <div id="icons-check">
            <FontAwesomeIcon icon={faSquareXmark} onClick={deleteList}>
              DELETE
            </FontAwesomeIcon>
            <FontAwesomeIcon icon={faPenToSquare} onClick={toggleEdit}>
              EDIT
            </FontAwesomeIcon>
            <FontAwesomeIcon icon={faSquareCheck} onClick={toggleComplete}>
              DONE
            </FontAwesomeIcon>
          </div>
          {provided.placeholder}
        </li>
      )}
    </Draggable>
  );
}

export default ListItem;
