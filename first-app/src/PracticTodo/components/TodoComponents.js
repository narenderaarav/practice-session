import React from "react";

const TodoComponents = (props) => {
  const { desc, state, id, handleDone, handleReOpen, handleEdit, mode, handleSave } = props;

  const renderAction = () => {
    if (state === "active") {
      return (
        <>
          <button id={id} onClick={handleDone}>
            done
          </button>
          <button id={id} onClick={handleEdit}>
            Edit
          </button>
        </>
      );
    }
    if (state === "inactive") {
      return (
        <>
          <button id={id} onClick={handleReOpen}>
            Re -open
          </button>
          <button id={id} onClick={handleEdit}>
            Edit
          </button>
        </>
      );
    }
    return null;
  };

  const renderMode = () => {
    if (mode === "block") {
      return (
        <>
          {desc}
          {renderAction()}
        </>
      );
    }else if(mode === "edit"){
        return(
            <>
            <input type="text" defaultValue={desc} id={`${id}-text`}/>
            <button id={id} onClick={handleSave}>save</button>
            </>
        )
    }
  };

  return (
    <>
      <li>{renderMode()}</li>
    </>
  );
};

export default TodoComponents;
