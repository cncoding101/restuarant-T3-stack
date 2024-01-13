import React, { type ReactNode, useRef, useEffect } from "react";
import { useMyContext } from "~/contexts/PopupDialog";
import { IoMdClose } from "react-icons/io";

interface IProps {
  children: ReactNode;
}

const PopupDialog: React.FC<IProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { state, dispatch } = useMyContext();

  const handleClose = () => {
    dispatch({ type: "CLOSE" });
  };

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (
        state.isOpen &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      )
        dispatch({ type: "CLOSE" });
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, dispatch, state.isOpen]);

  console.log("what is state", state);

  return (
    <div className="bottom-0 left-0 right-0 top-0 flex items-center justify-center">
      {/* Semi-transparent overlay */}
      {state.isOpen && (
        <div className="fixed inset-0 bg-black opacity-50"></div>
      )}

      <div
        ref={ref}
        className={`transform rounded bg-transparent-black p-8 shadow-md transition-transform ${
          state.isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <button onClick={handleClose} className="absolute right-2 top-2 p-2">
          <IoMdClose color="#8a5129" className="text-2xl" />
        </button>

        {/* Popup content goes here */}
        {children}
      </div>
    </div>
  );
};

export default PopupDialog;
