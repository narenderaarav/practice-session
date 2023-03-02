import React from "react";
import "./styles.css";
import TotoListContainerComponents from "./TotoListContainerComponents";
import { data as listItem } from "../data";
const TodoItemComponents = () => {
  return (
    <div className="todoBox">
      <div className="todoList">
        <ul>
          {listItem.map((list) => {
            return <TotoListContainerComponents key={list.id} {...list} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoItemComponents;
