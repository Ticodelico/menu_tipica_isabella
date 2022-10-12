import React from "react";
import './App.css';
import Logo from "./components/Logo";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import { Provider } from "./Context";
import Food from "./data";

function App() {
  document.title = 'Tipica Isabella'

  return (
    <Provider>
      <div className="menu flex">
        <div class="header">
          <Logo />
        </div>
        <div  className="flex">
          <aside className="flex-child">
            <Mains type="Menú" meals={Food.general} />
          </aside>
          <aside className="flex-child">
            <Mains type="Casados" meals={Food.casados} />
            <Mains type="Sandwiches" meals={Food.sandwiches} />        
            <Mains type="Desayunos" meals={Food.desayunos} />
            <Mains type="" meals={Food.gallos} />
            <Extras type="Bebidas" items={Food.drinks} />
            </aside>
        </div> 
      </div>
    </Provider>
  );
}

export default App;
