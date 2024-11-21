import Data from "../../data.json";

const Table = () => {
  console.log(Data);
  const headerKeys = Object.keys(Data[0]);
  console.log(headerKeys);
  return (
    <table style={{ width: "50%", margin: "auto" }}>
      <thead>
        <tr>
          {headerKeys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.discount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
