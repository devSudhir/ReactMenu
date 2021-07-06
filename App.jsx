import "./components/utility.module.css"
import './App.css';
import {JoinUs} from "./components/JoinUs"
import { Settings } from "./components/Settings"
import { Login } from "./components/Login"
import { ContactUs} from "./components/ContactUs"
import { Search } from "./components/Search"
import { Help } from "./components/Help"
import { Home } from "./components/Home"
import { Download } from "./components/Download"

import { SendButtons} from "./components/All"

function App() {
  const arr = ["JOIN US","SETTINGS","LOGIN","CONTACT US","SEARCH","HELP","HOME","DOWNLOAD"]
  return (
    <div className="centerDiv displayTwoItemGrid">
      <JoinUs />
      <Settings />
      <Login />
      <ContactUs />
      <Search />
      <Help />
      <Home />
      <Download />
      <span></span>
      <span></span>
      {
        arr.map((ele) => {
          return <SendButtons text={ele}/>
        })
      }
    </div>
  );
}

export default App;
