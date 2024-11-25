import { useState } from "react";
import CustomInput from "./customInput";
import "./form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, description, quantity);
  }


  return (
    <div className="form container">
      <form>
        <CustomInput label="Name" setValue={setName} />
        <CustomInput label="Description" setValue={setDescription} />
        <CustomInput label="Quantity" setValue={setQuantity} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
export default Form; // default export
// export { Form }; // named export or module export
