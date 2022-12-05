import Greeting from "./Greeting";
import GenerateListItems from "./GenerateListItems";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const [itemList, setItemList] = useState([]);
  const userInput = useRef();

  const navigate = useNavigate();

  function addItems() {
    const acceptUserInput = userInput.current.value;

    setItemList((prevState) => {
      return [
        ...prevState,
        {
          name: acceptUserInput,
        },
      ];
    });

    userInput.current.value = null;
  }

  function sendData(event) {
    event.preventDefault();
    console.log("button clicked");

    axios
      .post("/saveData", itemList)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <Greeting name="Caleb" />
      <h4>List</h4>
      <label>Add item:</label>
      <input type="text" ref={userInput} />
      <button onClick={addItems}>Add</button>
      <GenerateListItems listOfItems={itemList} />
      <button onClick={sendData}>Save</button>
      <br />
      <button onClick={() => navigate("/items")}>View Data</button>
    </div>
  );
}

export default App;
