import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then(res => res.json())
      .then(data => setItems(data));
  }, [])

  function renderItems() {
    return items.map((item: any) => {
      return <div>
        <h3>{item.name}</h3>
        <p>Price: {item.price}</p>
      </div>
    })
  }

  return (
    <div className="App">
      {renderItems()}
    </div>
  );
}

export default App;
