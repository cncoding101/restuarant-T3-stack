import React, { type ReactNode, useRef, useEffect } from "react";
import Icon from "~/components/atoms/Icon";
import { useMyContext } from "~/contexts/PopupDialog";
import styles from "~/components/organisms/popup-dialog/styles.module.css";

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

  return (
    <>
      {/* Semi-transparent overlay */}
      {state.isOpen && (
        <div className="fixed inset-0 bg-black opacity-50"></div>
      )}

      <div
        ref={ref}
        className={`rounded bg-transparent-black p-8 shadow-md ${
          state.isOpen
            ? styles["transition-open"]
            : `${styles["transition-close"]}`
        }`}
      >
        <button onClick={handleClose} disabled={!state.isOpen} className="absolute right-2 top-2 p-2">
          <Icon icon="close" type="io" size={30} />
        </button>

        {/* Popup content goes here */}
        {children}
      </div>
    </>
  );
};

export default PopupDialog;
