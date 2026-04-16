import { useState } from "react";
import { createOrder } from "../services/api";

const PRICE_LIST = {
  Shirt: 50,
  Pants: 80,
  Saree: 100,
};

export default function OrderForm({ refreshOrders }) {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [items, setItems] = useState([{ type: "Shirt", quantity: 1 }]);

  // Add item
  const addItem = () => {
    setItems([...items, { type: "Shirt", quantity: 1 }]);
  };

  // Remove item
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // Handle change
  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = field === "quantity" ? Number(value) : value;
    setItems(updated);
  };

  // Calculate total
  const total = items.reduce(
    (sum, item) => sum + PRICE_LIST[item.type] * item.quantity,
    0
  );

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      customerName,
      phone,
      items: items.map((i) => ({
        ...i,
        price: PRICE_LIST[i.type],
      })),
    };

    try {
      await createOrder(data);
      refreshOrders(); // 🔥 refresh list
      alert("Order Created Successfully");

      // Reset form
      setCustomerName("");
      setPhone("");
      setItems([{ type: "Shirt", quantity: 1 }]);
    } catch (err) {
      console.error(err);
      alert("Error creating order");
    }
  };

  return (
    <div className="card">
      <h2>Create Order</h2>

      <form onSubmit={handleSubmit}>
        {/* Customer */}
        <input
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />

        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <h3>Garments</h3>

        {/* Items */}
        {items.map((item, index) => (
          <div key={index} className="row">
            <select
              value={item.type}
              onChange={(e) =>
                handleChange(index, "type", e.target.value)
              }
            >
              {Object.keys(PRICE_LIST).map((type) => (
                <option key={type} value={type}>
                  {type} (₹{PRICE_LIST[type]})
                </option>
              ))}
            </select>

            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                handleChange(index, "quantity", e.target.value)
              }
            />

            <button type="button" onClick={() => removeItem(index)}>
              ❌
            </button>
          </div>
        ))}

        <button type="button" onClick={addItem}>
          ➕ Add Item
        </button>

        <h3>Total: ₹{total}</h3>

        <button type="submit">Create Order</button>
      </form>
    </div>
  );
}