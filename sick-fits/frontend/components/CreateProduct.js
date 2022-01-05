import useForm from "../lib/useForm";

export default function CreateProduct() {
  // This custom hook instance is returns and object and we a destructuring the object.
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: "Nice Shoes",
    price: 4234,
    description: "These are the best shoes",
  });

  return (
    <form>
      <label htmlFor={"name"}>
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor={"price"}>
        Name
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <button type={"button"} onClick={clearForm}>
        Clear Form
      </button>
      <button type={"button"} onClick={resetForm}>
        Reset Form
      </button>
    </form>
  );
}
