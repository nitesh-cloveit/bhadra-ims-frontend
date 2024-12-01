import { useState } from "react";
import CustomInput from "../../components/customInput";
import { data } from "react-router";
import axios from "axios";

enum DISCOUNT_TYPE {
  RATE = "rate",
  AMOUNT = "amount",
}

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZV9pZCI6MSwib3JnYW5pemF0aW9uX2lkIjoxLCJuYW1lIjoiTml0ZXNoIiwiZW1haWwiOiJuaXRlc2hzaW5naDEzNTdAZ21haWwuY29tIiwibW9iaWxlIjoiOTg0MjU4MDEzNCIsInBhc3N3b3JkIjoiJDJiJDEwJG1mSnEyWjJnZW1QSUtpRU9xZWZYeGVzYWJGWDV0MjFILnpJenBwUWV0OXFsTnRlQ2IxRTJXIiwiY3JlYXRlZF9hdCI6IjIwMjQtMTItMDFUMDc6MDc6NTkuMjU5WiIsInVwZGF0ZWRfYXQiOiIyMDI0LTEyLTAxVDA3OjA3OjU5LjI1OVoiLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiY3VzdG9tZXIifSwiaWF0IjoxNzMzMDM2OTgxLCJleHAiOjE3MzM2NDE3ODF9.KIxXgG8Aiss1ng-o41kgNak6Ao_e7pA6sWfsyTB6Y-A";

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
    console.log()
    try {
      const response = await axios({
        method: "POST",
        url: "/items",
        data: {
          name,
          description,
          quantity: parseInt(quantity),
          price: parseFloat(price),
          discount: parseFloat(discount),
        },
      });
      console.log({ response });
      if (response.status === 201) {
        console.log({ response });
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
