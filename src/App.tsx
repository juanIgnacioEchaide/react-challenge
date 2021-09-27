import React from 'react';
import { ColumnsGrid } from  "./component/ColumnsGrid";
import { MessageProvider } from "./context/MessageProvider";
import { UseMessages } from "./utils/useMessages";

const App: React.FC<{}> = () => {

  UseMessages();

  return (
    <div>
      <MessageProvider>
        <ColumnsGrid />
      </MessageProvider>
    </div>
  );
}

export default App;
