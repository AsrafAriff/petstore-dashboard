import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";
import "../../App.css";

function Purchase() {
  const [price, setPrice] = useState("");
  const [pet, setPet] = useState("");
  const [petsList, setPetsList] = useState([]);

  useEffect(() => {
    // Function to fetch the list of pets from the API
    const fetchPets = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        const petNames = data.map((item) => item.title);
        setPetsList(petNames);
        sessionStorage.setItem("petList", petNames);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the selected pet in session storage

    console.log("Price:", price);
    console.log("Selected Pet:", pet);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="pet">Pet:</label>
            <select
              id="pet"
              value={pet}
              onChange={(e) => setPet(e.target.value)}
            >
              <option value="">Select a pet</option>
              {petsList.map((petName) => (
                <option key={petName} value={petName}>
                  {petName}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Make Purchase</button>
        </form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Undek
        </a>
      </header>
    </div>
  );
}

export default Purchase;
