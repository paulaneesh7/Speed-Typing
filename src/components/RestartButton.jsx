import { useRef } from "react";
import { MdRestartAlt } from "react-icons/md";

const RestartButton = ({ onRestart, className }) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    onRestart();
  };
  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
    >
      <MdRestartAlt className="w-6 h-6" />
    </button>
  );
};

export default RestartButton;
