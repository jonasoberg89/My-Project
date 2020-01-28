import React from 'react';
import './notis.css';

const Notis = (props) => {
    const {
        header, message, secondMessage
    } = props;
    return (
        <div className="notis-container">
            <h4 className="notis-header">{header}</h4>
            <p className="notis-message">{message}</p>
            <p className="notis-secondMessage">{secondMessage}</p>
        </div>
    )
}

export default Notis;