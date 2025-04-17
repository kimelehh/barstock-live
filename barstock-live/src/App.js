import { useState } from "react";

const initialDrinks = [
  { name: "Draft Beer", min: 0.5, max: 2, price: 1.0 },
  { name: "Joss Shot", min: 0.5, max: 3, price: 1.0 },
  { name: "Tequila Shot", min: 0.5, max: 3.5, price: 1.0 },
  { name: "Vodka Mixer", min: 1, max: 3, price: 2.0 },
  { name: "Rum Mixer", min: 1, max: 3, price: 2.0 },
  { name: "Gin Mixer", min: 1, max: 3, price: 2.0 },
  { name: "Whiskey Mixer", min: 1, max: 3, price: 2.0 },
  { name: "Sex on 4k", min: 1.5, max: 5, price: 2.5 },
  { name: "Long Island", min: 1.5, max: 5, price: 2.5 },
  { name: "Tequila Sunrise", min: 1.5, max: 5, price: 2.5 },
  { name: "Espresso Martini", min: 1.5, max: 5, price: 2.5 },
  { name: "Premium Mixer", min: 2, max: 6, price: 3.5 },
  { name: "Khmer Whiskey Shot", min: 0.25, max: 2, price: 1.0 },
  { name: "Nest Bomb", min: 1.5, max: 6, price: 3.0 },
  { name: "Jagger Shot", min: 1, max: 4, price: 2.0 },
];

function clampPrice(price, min, max) {
  return Math.max(min, Math.min(max, price));
}

export default function App() {
  const [drinks, setDrinks] = useState(initialDrinks);

  const sellDrink = (index) => {
    setDrinks((prev) =>
      prev.map((drink, i) =>
        i === index
          ? { ...drink, price: clampPrice(drink.price + 0.2, drink.min, drink.max) }
          : { ...drink, price: clampPrice(drink.price - 0.05, drink.min, drink.max) }
      )
    );
  };

  return (
    <div style={{ padding: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
      {drinks.map((drink, index) => (
        <div key={drink.name} style={{ border: '1px solid #ccc', padding: 16, textAlign: 'center', borderRadius: 8 }}>
          <h2>{drink.name}</h2>
          <p style={{ fontSize: 24 }}>${drink.price.toFixed(2)}</p>
          <button onClick={() => sellDrink(index)}>Sell</button>
        </div>
      ))}
    </div>
  );
}