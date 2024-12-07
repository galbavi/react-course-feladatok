import { createContext, useCallback, useContext, useState } from "react";
import LoginModal from "../modals/LoginModal";
import RegModal from "../modals/RegModal";
import ConfirmModal from "../modals/ConfirmModal";
import ErrorModal from "../modals/ErrorModal";

const ModalContext = createContext();
ModalContext.displayName = "ModalContext";

export const MODALS = {
  NONE: "NONE",
  CONFIRM_DELETE: "CONFIRM_DELETE",
  LOGIN: "LOGIN",
  REG: "REG",
  ERROR: "ERROR",
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
            return <LoginModal onClose={onClose} {...context.modalProps}/>;
          case MODALS.REG:
            return <RegModal onClose={onClose} {...context.modalProps}/>;
          case MODALS.CONFIRM_DELETE:
            return <ConfirmModal onClose={onClose} {...context.modalProps}/>;
          case MODALS.ERROR:
            return <ErrorModal onClose={onClose} {...context.modalProps}/>;
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
  const [modalProps, setModalProps] = useState({});

  const showModal = useCallback(
    (newModal, newModalProps = {}) => {
      setCurrentModal(newModal);
      setModalProps(newModalProps);
    },
    [setCurrentModal,setModalProps]
  );

  return (
    <ModalContext.Provider value={{ currentModal, showModal, modalProps }}>
      {children}
      <Modals />
    </ModalContext.Provider>
  );
}

export function useModals() {
  return useContext(ModalContext);
}
