import logo from './logo.svg';
import './App.scss';
import Navigation from "./Navigation";
import {BrowserRouter, /*HashRouter, */Routes, Route} from "react-router-dom";
import Log from "./Log";
import Transactions from "./Transactions";
import Statistics from "./Statistics";
import Settings from "./Settings";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        */}
        <Navigation />
        <Routes>
          <Route path="/CashflowTracker/" element={<Log />} />
          <Route path="/CashflowTracker/transactions" element={<Transactions />} />
          <Route path="/CashflowTracker/stats" element={<Statistics />} />
          <Route path="/CashflowTracker/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}