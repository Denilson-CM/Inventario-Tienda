import React from 'react'
interface Props{
    message : string;
    eventClick : () => void;
}
export const ToastMessage = (props : Props) => {
    const {message, eventClick} = props;
    return (
        <div className="alert alert-primary d-flex justify-content-between align-items-center" role="alert">
            {message}
            <button onClick={eventClick}>×</button>
        </div>
    )
}
