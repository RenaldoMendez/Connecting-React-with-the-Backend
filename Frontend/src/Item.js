import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Item() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/getData")
      .then((res) => {
        console.log(res);
        setItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Items are displayed here</h1>
      {items ? (
        <>
          {items.map((item) => {
            return (
              <div key={item.name}>
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}

      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
}
