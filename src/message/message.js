import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./message.css";

function Message({ id, message }) {
  return (
    <Card key={id}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
