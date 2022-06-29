import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

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
}) {
  return (
    <li
      className={[
        listToDo.find((o) => o.id === id).complete ? "done" : "not-done",
        isEdit ? "hidden" : "",
      ].join(" ")}
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
    </li>
  );
}

export default ListItem;
