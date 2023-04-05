import React, { useState } from 'react'
import classes from './modal.module.css'
import Button from '../Button/Button'
import Input from "../Imput/Input";

const Modal = ({ handleShow,addText }) => {
    const [text, setText ] = useState();
    const handleChangeText = (textInput) => {
        setText(textInput)
        console.log(text,'text');
    }
    return (
        <React.Fragment>
            <div className={classes.modalWrapper} ></div>
            <div className={classes.modalContent}>
                <Button handleClick={handleShow}>Закрыть модалку</Button>
                <Input
                    name='add'
                    onChangeFunc={addText}
                    />
                <Button>Добавить таск</Button>
            </div>
        </React.Fragment>
    )
}

export default Modal
