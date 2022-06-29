import ListItem from "../ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";

function List({
  listToDo,
  deleteList,
  toggleComplete,
  toggleEdit,
  handleEdit,
  editText,
  isEdit,
}) {
  return (
    <ul>
      {listToDo.map((item) => {
        return !item.edit ? (
          <ListItem
            key={item.id}
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
  );
}

export default List;
