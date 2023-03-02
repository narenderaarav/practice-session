import React, { useState } from "react";
import TodoComponents from "../components/TodoComponents";
import data from "../data/Data";
const TodoComponentsContainer = () => {
  const [stateData, fnToChangeStateData] = useState(data);

  const handleDone = (e) => {
    const {
      target: { id },
    } = e;
    const newState = stateData.map((item) => {
      if (item.id.toString() === id.toString()) {
        return { ...item, state: "inactive" };
      }
      return item;
    });
    fnToChangeStateData(newState);
  };

  const handleReOpen = (e) => {
    const {
      target: { id },
    } = e;
    const newState = stateData.map((item) => {
      if (item.id.toString() === id.toString()) {
        return { ...item, state: "active" };
      }
      return item;
    });
    fnToChangeStateData(newState);
  };

  const handleEdit = (e) =>{
    const {target:{id}} = e;
    const newStatEdit = stateData.map((item) =>{
        if(item.id.toString() === id.toString()){
            return {...item, mode:'edit'};
        }
        return item;
    });
    fnToChangeStateData(newStatEdit);
  }

  const handleSave = (e) =>{
    const {target:{id}} = e;
    const textInputElement = document.getElementById(`${id}-text`);
    const desc = textInputElement.value;
    const newHandleData = stateData.map((item) =>{
        if(item.id.toString() === id.toString()){
            return {...item, mode:'block', desc}
        }
        return item;
    })
    fnToChangeStateData(newHandleData);

  };

  return (
    <>
      <ul>
        {stateData.map((item) => {
          return (
            <TodoComponents
              key={item.id}
              {...item}
              handleDone={handleDone}
              handleReOpen={handleReOpen}
              handleEdit={handleEdit}
              handleSave={handleSave}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoComponentsContainer;
