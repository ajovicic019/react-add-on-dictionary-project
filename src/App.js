import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} alt="Dictionary logo" className="img-fluid" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        <a
          href="https://github.com/ajovicic019/react-add-on-dictionary-project"
          target="_blank"
          rel="noreferrer"
          title="Git hub"
        >
          Open sourced project
        </a>{" "}
        coded by Andrea Jovicic
      </footer>
    </div>
  );
}

export default App;
