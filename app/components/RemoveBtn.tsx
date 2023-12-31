import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

function RemoveBtn() {
  return (
    <button className="text-red-400">
      <HiOutlineTrash className="text-2xl" size={24}/>
    </button>
  );
}

export default RemoveBtn;
