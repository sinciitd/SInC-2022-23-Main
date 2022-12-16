import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Comment.css";

const initialList = [];

const Comment = () => {
  const [list, setList] = useState(initialList);
  const [comm, setcomm] = useState("");

  const handleChange = (event) => {
    setcomm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  const handleAdd = () => {
    const newList = list.concat({ comm, id: uuidv4() });
    setList(newList);
    setcomm("");
  };

  return (
    <div>
      <AddItem
        comm={comm}
        onChange={handleChange}
        onAdd={handleAdd}
        handleKeyDown={handleKeyDown}
      />
      <List list={list} />
    </div>
  );
};

const AddItem = ({ onChange, comm, onAdd, handleKeyDown }) => {
  return (
    <div>
      <div className="comments">
        <input
          type="text"
          value={comm}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder="Comment"
        />
        <button type="button" onClick={onAdd}>
          Post
        </button>
      </div>
    </div>
  );
};

const List = ({ list }) => {
  return (
    <form style={{ listStyle: "none", marginTop: "10px" }}>
      {list.map((item) => {
        return <li key={item.id}>{item.comm}</li>;
      })}
    </form>
  );
};

export default Comment;
