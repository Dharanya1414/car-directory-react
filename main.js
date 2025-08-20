const { useState } = React;

function CarCard({ brand, model, image, onDelete }) {
  return (
    <div style={{
      border: "1px solid black",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px",
      width: "220px",
      textAlign: "center"
    }}>
      <img src={image} alt={brand} style={{ width: "100%", borderRadius: "5px" }} />
      <h3>{brand}</h3>
      <p>Model: {model}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

function CarDirectory() {
  const [cars, setCars] = useState([
    {
      brand: "Porsche",
      model: "Panamera",
      image: "https://www.carwale.com/porsche-cars/panamera/images/panamera-front-view-164358.jpg"
    },
    {
      brand: "Tesla",
      model: "Model S",
      image: "" // Add Tesla image URL here later
    },
    {
      brand: "BMW",
      model: "X5",
      image: "" // Add BMW image URL here later
    }
  ]);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [image, setImage] = useState("");

  const addCar = () => {
    if (brand && model && image) {
      setCars([...cars, { brand, model, image }]);
      setBrand("");
      setModel("");
      setImage("");
    }
  };

  const deleteCar = (index) => {
    const newCars = [...cars];
    newCars.splice(index, 1);
    setCars(newCars);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Car Directory</h1>
      <p>Total Cars: {cars.length}</p>

      <input
        type="text"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        style={{ margin: "5px" }}
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        style={{ margin: "5px" }}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={{ margin: "5px" }}
      />
      <button onClick={addCar}>Add Car</button>

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {cars.map((c, i) => (
          <CarCard
            key={i}
            brand={c.brand}
            model={c.model}
            image={c.image}
            onDelete={() => deleteCar(i)}
          />
        ))}
      </div>
    </div>
  );
}

// Render the App
ReactDOM.createRoot(document.getElementById("root")).render(<CarDirectory />);

