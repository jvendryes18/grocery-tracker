import './App.css'
import {useState} from "react";

interface GroceryItem {
  name : string;
  quantity : number;
  quantityType : string;
  purchaseDate : string;
  expirationDate : string;
}

function App() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quantityType, setQuantityType] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const [items, setItems] = useState<GroceryItem[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function addItem() {
      if (!name.trim()) return;
      const newItem = {
          name,
          quantity: Number(quantity),
          quantityType,
          purchaseDate,
          expirationDate
      };

      setItems([...items, newItem]);
      setName("");
      setIsModalOpen(false);
  }

  const deleteItem = (indexToRemove: number) => {
      setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
      <div>
        Grocery Tracker App

        <br/>

        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <p>{name}</p>

        <button onClick={() => setIsModalOpen(true)}>
          Add Item
        </button>

        <button onClick={addItem} >Add</button>

          {isModalOpen && (
              <div>
                  <h2>Add Grocery Item</h2>

                  <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

                  <input placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

                  <input placeholder="Type" value={quantityType} onChange={(e) => setQuantityType(e.target.value)} />

                  <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />

                  <input type="date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />

                  <button onClick={addItem}>
                      Add Item
                  </button>

                  <button onClick={() => setIsModalOpen(false)}>
                      Cancel
                  </button>
              </div>
          )}

          <center>
              <table>
                  <thead>
                  <tr>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Type</th>
                      <th>Purchase Date</th>
                      <th>Expiration Date</th>
                  </tr>
                  </thead>


                      <tbody>
                      {items.map((item, index) => (
                          <tr key={index}>
                              <td>{item.name}</td>
                              <td>{item.quantity}</td>
                              <td>{item.quantityType}</td>
                              <td>{item.purchaseDate}</td>
                              <td>{item.expirationDate}</td>
                              <td>
                                  <button onClick={() => deleteItem(index)}>
                                      🗑️
                                  </button>
                              </td>
                          </tr>
                      ))}
                      </tbody>
              </table>
          </center>

      </div>
  )
}

export default App
