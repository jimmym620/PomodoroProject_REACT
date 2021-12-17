import React, { useEffect } from "react";

const Message = ({ type, msg, displayTime, removeMessage, seconds }) => {
    const timer = displayTime * 1000;
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeMessage();
        }, timer);
        return () => {
            clearTimeout(timeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds]);

    return <h3>{msg}</h3>;
};

export default Message;
