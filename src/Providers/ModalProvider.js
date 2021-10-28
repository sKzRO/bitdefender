import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = (props) => {

    const [modal, setModal] = useState(true);

    return (
        <ModalContext.Provider value={[modal, setModal]}>{props.children}</ModalContext.Provider>
    );
}

export default ModalProvider;