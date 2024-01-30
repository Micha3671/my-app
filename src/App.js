import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/header/Header";
import Navbar from "./components/layout/navbar/Navbar";
import Body from "./components/layout/navbar/Body";
import Footer from "./components/layout/navbar/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Footer />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
