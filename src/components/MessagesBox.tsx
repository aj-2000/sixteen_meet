import React from "react";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const MessagesBox = () => {
  return (
    <div className="flex items-end flex-col h-full p-2 overflow-scroll rounded-t-md">
      <SentMessage />
      <ReceivedMessage />
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
      <SentMessage />
      <ReceivedMessage />
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
      <SentMessage />
      <ReceivedMessage />
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
      <SentMessage />
      <ReceivedMessage />
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
    </div>
  );
};

export default MessagesBox;
