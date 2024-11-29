import { useState } from "react";
import CustomInput from "../../components/customInput";

enum DISCOUNT_TYPE {
  RATE = "rate",
  AMOUNT = "amount",
}

export default function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountType, setDiscountType] = useState<DISCOUNT_TYPE>(DISCOUNT_TYPE.AMOUNT);
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addItem();
  };

  const addItem = async () => {
    try {
      const response = await fetch("http://localhost:8000/items", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        //   "Authorization": `Bearer ${TOKEN}`
        // },
        body: JSON.stringify({
          name,
          description,
          quantity,
          price,
          discount,
        }),
      });
      console.log({ response });
      if (response.status === 201) {
        const data = await response.json();
        console.log({ data });
      }
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div className="form container">
      <h1>Add Products</h1>
      <form style={{ gap: 16 }} onSubmit={handleSubmit}>
        <CustomInput label="Name" setValue={setName} />
        <CustomInput label="Description" setValue={setDescription} />
        <CustomInput type="number" label="Quantity" setValue={setQuantity} />
        <CustomInput type="number" label="Price" setValue={setPrice} />
        <CustomInput type="number" label="Discount" setValue={setDiscount} />
        <div>
          <p>Discount</p>
          <div style={{ display: "flex", gap: "16px" }}>
            <div className="radio-input">
              <CustomInput
                type="radio"
                label="Rate"
                setValue={() => setDiscountType(DISCOUNT_TYPE.RATE)}
                checked={DISCOUNT_TYPE.RATE === discountType}
              />
              <CustomInput
                type="radio"
                label="Amount"
                setValue={() => setDiscountType(DISCOUNT_TYPE.AMOUNT)}
                checked={DISCOUNT_TYPE.AMOUNT === discountType}
              />
            </div>
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
