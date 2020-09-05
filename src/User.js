import React, { useState, useEffect } from "react";
import { TextField, Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function User() {
  const history = useHistory();
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const loggedAuthor = localStorage.getItem('author');
    if (loggedAuthor) {
      history.push('/chatbox');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setAuthorName = () => {
    localStorage.setItem('author', author);
    history.push('/chatbox');
  };

  return (
    <Box display="flex" justifyContent="center">
      <TextField
        id="standard-helperText"
        label="Enter username"
        defaultValue={author}
        onChange={event => setAuthor(event.target.value)}
      />
      <Button
        color="primary"
        onClick={() => setAuthorName()}
        disabled={author === "" ? true : false}
      >
        Ok
      </Button>
    </Box>
  );
}

export default User;
