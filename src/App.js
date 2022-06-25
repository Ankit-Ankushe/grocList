import "./styles.css";
import React from "react";

const InputGroc = ({ handleAdd }) => {
  const [input, Addinput] = React.useState("");
  console.log("input", { input });
  return (
    <>
      <input
        placeholder="enter items"
        value={input}
        onChange={(event) => Addinput(event.target.value)}
      ></input>
      <button onClick={() => handleAdd(input)}>Add</button>
    </>
  );
};
const ListGroc = ({ item }) => {
  console.log("list in groc", { item });
  return (
    <>
      {item.map((event) => (
        <div>
          <h2>{event.title}</h2>
        </div>
      ))}
    </>
  );
};
const Groc = () => {
  const [item, AddItem] = React.useState([]);
  const handleAdd = (title) => {
    const NewItem = {
      title
    };
    AddItem([...item, NewItem]);
  };
  console.log("list", item);
  return (
    <div>
      <InputGroc handleAdd={handleAdd} />
      <ListGroc item={item} />
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <h1>Grocery</h1>
      <Groc />
    </div>
  );
}
