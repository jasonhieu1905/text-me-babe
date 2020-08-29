import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import db from './../firebase';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginTop: 'auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function FormMessage() {
  const classes = useStyles();

  const [message, setMessage] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    
    db.collection('messages').add({
      message,
      author: 'hieu doan',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    
    setMessage('');
  }

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <InsertEmoticon />
      </IconButton>
      <InputBase
        className={classes.input}
        value={message}
        onChange={event => setMessage(event.target.value)}
        placeholder="What are you saying ..."
        inputProps={{ 'aria-label': 'What are you saying ...' }}
      />
      <IconButton onClick={sendMessage} type="submit" className={classes.iconButton} aria-label="send">
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
