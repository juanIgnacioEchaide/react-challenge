import React from 'react';
import { ColumnsGrid } from  "./component/ColumnsGrid";
import { ButtonsGrid } from  "./component/ButtonsGrid";
import { MessageProvider } from "./context/MessageProvider";

const App: React.FC = ({children}) => {

  return (
    <div>
      <MessageProvider>
        <ButtonsGrid/>
        <ColumnsGrid />
      </MessageProvider>
    </div>
  );
}

export default App;
