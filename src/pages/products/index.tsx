import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  const filterByName = (name: string) => {
    // filter Data by name
    const filteredData = productData.filter(
      ({ item }: any) => item.name.toLowerCase() == name.toLowerCase()
    );
    setFilteredData(filteredData);
    return filteredData;
  };

  const fetchMockData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/items"
      );
      console.log({ response });
      if (response.status === 200) {
        const data = await response.json();
        console.log({ data });
        setProductData(data);
      }
    } catch (error) {
      console.error({ error });
    }
  };

  // filter data by name on search text change
  useEffect(() => {
    fetchMockData();
    if (searchText !== "") {
      filterByName(searchText);
    } else {
      setFilteredData(productData);
    }
  }, [searchText]);

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1>Products</h1>
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input
          placeholder="type name..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          style={{ marginLeft: 16, padding: "4px 16px", width: "30%" }}
          onClick={() => navigate("/products/add")}
        >
          + Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map(({item}: any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
              <td>
                <p>Edit</p>
                <p>Delete</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredData.length === 0 && (
        <p style={{ width: "100%", textAlign: "center" }}>
          This product is not available!!
        </p>
      )}
    </div>
  );
};

export default Products;
