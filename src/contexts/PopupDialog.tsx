// MyContext.tsx
import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";

// Define types
interface State {
  isOpen: boolean;
}

interface Action {
  type: string;
  payload?: unknown;
}

interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

// Initial state
const initialState: State = {
  isOpen: false,
};

// Define the context
const MyContext = createContext<ContextProps | undefined>(undefined);

// Define the context provider
interface IProps {
  children: ReactNode;
}

const MyProvider: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(myReducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom reducer function
const myReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

// Custom hook to use the context
const useMyContext = (): ContextProps => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { MyProvider, useMyContext };
