import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Inbox = (props) => {
  const [journeys, setJourneys] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchJourneys = async () => {
      setAuthToken(localStorage.getItem('jwtToken'));
      const result = await axios.get(`${REACT_APP_SERVER_URL}/messages/inbox`);
      console.log(result.data);
      setJourneys(result.data);
    };
    fetchJourneys();
  }, []);

  console.log(journeys);

  // const allMessages = journeys.map((journey) => {
  //   // let array = journey.messages;
  //   // array.map((message) => {
  //   //   console.log(message);
  //   //   return (
  //   //     <h2>{message.content}</h2>
  //   //   )
  //   // })
  //   return journey.messages.map((message) => {
  //     <p>{message.content}</p>
  //   })
  // })

  if (journeys) {
    return (
      <div>
      {journeys.map((journey, index) => {
        return (
          <div key={index}>
            <h2>From: {journey.origin} To: {journey.destination}</h2>

            {journey.messages.map((message, index) => {
              return (
                <div key={index}>
                  <p>Message: {message.content}</p>
                  <p>From: {message.user.firstName}</p>
                </div>
              );
            })}

            <hr />
          </div>
        );
      })}
    </div>
    )
  }
}

export default Inbox;