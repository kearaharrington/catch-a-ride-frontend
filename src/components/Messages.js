import React, { useState, useEffect } from 'react';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;


function Messages(props) { 
    console.log(props.arr)


    const messageBoard = props.arr.map((m, idx) => {

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
            
            {messageBoard}
        </div>
        
    ) 
}


export default Messages;