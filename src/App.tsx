import React, { useState } from "react";
import { ColumnsGrid } from  "./component/ColumnsGrid";
import { ButtonsGrid } from  "./component/ButtonsGrid";
import { MessageProvider } from "./context/MessageProvider";

const App: React.FC = ({children}) => {

  const[stop, setStop] = useState<boolean>(false);

  return (
    <div>
      <MessageProvider>
        <ButtonsGrid setStop={setStop}/>
        <ColumnsGrid stop={stop}/>
      </MessageProvider>
    </div>
  );
}

export default App;
