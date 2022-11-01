import logo from "./logo.svg";
import "./App.css";
import Toggle from "./Toggle";
import Clock from "./Clock";
import LoginControl from "./LoginControl";
import { Mailbox } from "./LoginControl";
import Page from "./Page";

const messages = [1, 1, 2, 4];

function App() {
  return (
    <div className='Toggle'>
      <Page />
    </div>
  );
}

export default App;
