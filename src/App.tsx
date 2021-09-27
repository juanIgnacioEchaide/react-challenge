import React from 'react';
import { ColumnsGrid } from  "./component/ColumnsGrid";
import { MessageProvider } from "./context/MessageProvider";

const App: React.FC<{}> = () => {

  return (
    <div>
      <MessageProvider>
        <ColumnsGrid />
      </MessageProvider>
    </div>
  );
}

export default App;
