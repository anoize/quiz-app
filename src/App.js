import {createContext, useState } from "react";
import Menu from "./component/menu";
import Quiz from "./component/quiz";
import Score from "./component/score";

import './App.css'

export const DataContext = createContext()

function App() {
  const [appState, setAppState] = useState("menu")
  return (
    <DataContext.Provider value={{appState,setAppState}}>
       <div className="App">
    <h1>Web Development Quiz</h1>
    {appState === "menu" && <Menu/>}
    {appState === "menu" && <Quiz/>}
    {appState === "menu" && <Score/>}
   </div>
    </DataContext.Provider>
  );
}

export default App;
