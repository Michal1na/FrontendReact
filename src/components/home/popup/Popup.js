import React from "react";
import './Popup.css';
import CloseIcon from '@mui/icons-material/Close'

const Popup = (props) => {
    return (
        <div className={'popup'}>
            <div className="box">
                <button className="button-close" onClick={props.handleClose}>
                    <CloseIcon/>
                </button>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Popup
