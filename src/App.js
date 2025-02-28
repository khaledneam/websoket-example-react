import { useEffect, useState } from "react";
import echo from "./lib/echo";

function App() {

// eslint-disable-next-line
  const [messages, setMessages] = useState([]);

    //const token = "564a4861-4ec3-49b8-b344-57391e74d926"; // local Host
    const token = '42bb00de-7f26-4a8c-bc9b-60d92f12abae'

  
    
    useEffect(() => {
      const channel = echo.channel(`players.${token}`); // Public channel
      channel.listen("GameEvent", (data) => {
          console.log("New event:", data);
          setMessages((prevMessages) => [...prevMessages, data]);
      });

      return () => {
          echo.leave(`players.${token}`);
      };
  }, []);


  return (
    <div className="App">
      <h1>khaled</h1>
      {messages.map((message, index) => (
       <div key={index}>
        <p>{index}</p>
       <div>{message.msg}</div>
       <h2>{message.token}</h2>
     </div>
      ))}
    </div>
  );
}

export default App;
