import React, { useEffect, useState } from "react";
import "./App.css";
import {Box, Container} from "@material-ui/core";
import FormMessage from "./form-message/form-message";
import Message from "./message/message";
import db from './firebase';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot => {
      const messageList = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          message: data.message,
          id: data.id,
        }
      });
      setMessages(messageList);
    });
  }, [])

  return (
    <Container maxWidth="md">
      <Box display="flex" className="container" flexDirection="column">
        <div class="messages__container">
          {messages.map(message => <Message key={message.id} message={message.message} />)}
        </div>
        <div class="footer">
          <FormMessage />
        </div>
      </Box>
    </Container>
  );
}

export default App;
