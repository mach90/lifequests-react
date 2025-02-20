/* ////////////////////////////////////////////////////////////////////////////////////////////////////
MODAL.JSX
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { HiXMark } from "react-icons/hi2";

const modalStyle = "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-main1 rounded-lg shadow-lg transition-all duration-500";
const modalOverlayStyle = "fixed top-0 left-0 w-full h-screen bg-main1/25 backdrop-blur-xs backdrop-brightness-75 z-[1000] transition-all duration-500";
const modalButtonStyle = "bg-transparent border-none p-1 rounded-sm translate-x-2 transition-all duration-200 absolute top-3 right-5 hover:bg-gray-100 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:text-gray-500 cursor-pointer";

/* 1. CREATE NEW CONTEXT */
const ModalContext = createContext();

/* 2. CREATE THE MODAL PARENT COMPONENT */
function Modal({children}) {
    const [openName, setOpenName] = useState("");

    const close = () => setOpenName("");
    const open = setOpenName;

    return <ModalContext.Provider value={{openName, close, open}}>{children}</ModalContext.Provider>
}

/* 3. CREATE CHILD COMPONENTS */
function Open({children, opens: openWindowName}) {
    const {open} = useContext(ModalContext);
  
    //Cloning children and passing it the onClick props
    return cloneElement(children, {onClick: () => open(openWindowName)});
  };

function Window({children, name}) {
    const {openName, close} = useContext(ModalContext);
    const ref = useOutsideClick(close, true);

    if(name !== openName) return null;

    return createPortal(
        <div className={modalOverlayStyle}>
            <div className={modalStyle} ref={ref}>
                <button className={modalButtonStyle} onClick={close}><HiXMark/></button>
                <div>{cloneElement(children, {onCloseModal: close})}</div>
            </div>
        </div>,
        document.body //DOM node parent where it will be rendered
    )
}

/* 4. ADD CHILD COMPONENT TO PARENT COMPONENT AS PROPERTIES */
Modal.Open = Open;
Modal.Window = Window;

export default Modal;