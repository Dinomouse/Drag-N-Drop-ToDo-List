function Input({ onChange, addToList, text }) {
  return (
    <div id="form">
      <div id="input">
        <input onChange={onChange} value={text}></input>
      </div>
      <button id="submit-button" onClick={addToList}>
        Add to List
      </button>
    </div>
  );
}

export default Input;
