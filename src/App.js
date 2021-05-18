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
      <img src={logo} className="App-logo" alt="logo" />
      <div className="modal-container">
        <button onClick={toggleModal}>Open Modal</button>
        {showModal && <Modal closeModal={toggleModal} />}
      </div>
    </div>
  );
}

export default App;
