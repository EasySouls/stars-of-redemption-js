import logo from "./logo.svg";
import "./App.css";
import Toggle from "./Toggle";
import Clock from "./Clock";
import LoginControl from "./LoginControl";

function App() {
  return (
    <div className='Toggle'>
      <Toggle />
      <Clock />
      <LoginControl />
    </div>
  );
}

export default App;
