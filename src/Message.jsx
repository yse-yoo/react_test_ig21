import React from 'react'

function Message(props) {
    var user = props.user;
    console.log(user);
    return (
        <>
            <h2>Message</h2>
            <h3>User Name</h3>
            <p>Yohei Yoshikawa</p>
            <h3>Age</h3>
            <p>48</p>
            <h3>Country</h3>
            <p>Japn</p>
        </>
    )
}

export default Message