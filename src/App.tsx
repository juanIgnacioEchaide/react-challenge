import React, { useState } from 'react';
import { useEffect } from 'react';
import generateMessage, { Message } from './Api';
import { ColumnsGrid } from  "./component/ColumnsGrid";
import { MessageProvider } from "./context/MessageProvider";

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages(oldMessages => [...oldMessages, message]);
    });
    return cleanUp;
  }, [setMessages]);

  return (
    <div>
      <MessageProvider>
        <ColumnsGrid />
      </MessageProvider>
    </div>
  );
}

export default App;
