import React, { useState, useEffect } from 'react';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;



function Messages(props) { 
    console.log(props.arr)


    const messageBoard = props.arr.map((m, idx) => {

function Messages() { 
    const [msg, setMsg] = useState(null);
    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/messages/user/635a1047f55e172dca4dc386`)
        .then(msgs => {
            if (msgs.data.lenght) {
                setMsg(msgs.data);
            }else {
                setMsg('error');
            }
            
        })
    }, [])

    const messageBoard = msg.map((m, idx) => {
        return (
            <div id={idx}>
                <h2>
                    {m.title}
                </h2>
                <p>
                    {m.content}
                </p>
            </div>
        )
    })

    console.log('BEFORE', messageBoard);

    if (messageBoard.length < 1) messageBoard.push('No Messages...')

    console.log('AFTER', messageBoard);
  
    return (
        
        <div>
            <h3>Messages:</h3>
            
    return (
        <div>

            {messageBoard}
        </div>
        
    ) 
}


export default Messages;