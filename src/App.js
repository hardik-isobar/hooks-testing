import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [showModal, setModalDisplay] = useState(false);

  const toggleModal = () => {
    showModal ? setModalDisplay(false) : setModalDisplay(true);
  };

  return (
    <div className="App">
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
      <div className="modal-container">
        <button onClick={toggleModal}>Open Modal</button>
        {showModal && <Modal closeModal={toggleModal} />}
      </div>
    </div>
  );
}

export default App;
