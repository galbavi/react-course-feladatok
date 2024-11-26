import { createContext, useCallback, useContext, useState } from "react";
import LoginModal from "../modals/LoginModal";
import RegModal from "../modals/RegModal";
import ConfirmModal from "../modals/ConfirmModal";

const ModalContext = createContext();
ModalContext.displayName = "ModalContext";

export const MODALS = {
  NONE: "NONE",
  CONFIRM_DELETE: "CONFIRM_DELETE",
  LOGIN: "LOGIN",
  REG: "REG",
};

export function Modals() {
  return (
    <ModalContext.Consumer>
      {(context) => {
        const onClose = () => {
          context.showModal(MODALS.NONE);
        };
        switch (context.currentModal) {
          case MODALS.LOGIN:
            return <LoginModal onClose={onClose}/>;
          case MODALS.REG:
            return <RegModal onClose={onClose}/>;
          case MODALS.CONFIRM_DELETE:
            return <ConfirmModal onClose={onClose}/>;
          case MODALS.NONE:
          default:
            return null;
        }
      }}
    </ModalContext.Consumer>
  );
}

export function ModalContextProvider({ children }) {
  const [currentModal, setCurrentModal] = useState(false);

  const showModal = useCallback(
    (newModal) => {
      setCurrentModal(newModal);
    },
    [setCurrentModal]
  );

  return (
    <ModalContext.Provider value={{ currentModal, showModal }}>
      {children}
      <Modals />
    </ModalContext.Provider>
  );
}

export function useModals() {
  return useContext(ModalContext);
}
