'use client'

import { FaEye, FaEyeSlash } from "react-icons/fa";


function PasswordInput  ({ onClick, isShow }: {
  onClick: () => void,
  isShow: boolean
}) {

  return (
    <div className="relative">


      {/* Göz ikonu */}
      <button
        type="button"
        onClick={onClick}
        className="absolute right-2 bottom-2 text-gray-500 z-50"
      >
        {isShow ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
