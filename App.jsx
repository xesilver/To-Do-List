import ToDoList from "./Components/ToDoList/ToDoList";
import OnlineWatch from "./Components/OnlineClock/OnlineClock";
import StopWatch from "./Components/StopWatch/StopWatch";
import './index.css';

function App(){
  
  return(
    <>
      <ToDoList/>
      <OnlineWatch/>
      <StopWatch/>
    </>
  );
}

export default App