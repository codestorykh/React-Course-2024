import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data.js";
import Swal from "sweetalert2";
import { useState } from "react";

// App component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header component
function Header() {
  const style = { fontSize: "48px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1 style={style}>Welcome to Pizza Menu</h1>
    </header>
  );
}

// Menu component
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  const totalPages = Math.ceil(numPizzas / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedPizzas = pizzas.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <p>Enjoy your meal!</p>

          <ul className="pizzas">
            {selectedPizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>

          <div className="pagination">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="pagination-button"
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#ff6347",
                color: "white",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ff4500";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ff6347";
              }}
            >
              Previous
            </button>
            <span style={{ margin: "0 10px" }}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="pagination-button"
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#ff6347",
                color: "white",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ff4500";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ff6347";
              }}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

// Pizza component
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <div className="pizza-image-container">
        <img
          src={pizzaObj.photoName}
          alt={pizzaObj.name}
          className="pizza-image"
          style={{
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {!pizzaObj.soldOut && <p>Size: {pizzaObj.size}</p>}
        <span>
          {pizzaObj.soldOut ? (
            "SOLD OUT"
          ) : (
            <span className="price-label">Price: ${pizzaObj.price}</span>
          )}
        </span>
      </div>
    </li>
  );
}

// Footer component
function Footer() {
  const hour = new Date().getHours();
  const openHours = 9;
  const closeHours = 22; // 8 PM in 24-hour format

  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHours} openHour={openHours} />
      ) : (
        <p>
          We're happy to welcome you between {openHours}:00 and {closeHours}:00.
        </p>
      )}
    </footer>
  );
}

// Order component
function Order({ closeHour, openHour }) {
  const handleOrderClick = () => {
    Swal.fire({
      title: "Order Form",
      html: `
      <form id="order-form" style="display: flex; flex-direction: column; gap: 10px;">
      <label style="display: flex; flex-direction: column;">
      Name:
      <input type="text" name="name" required style="padding: 8px; border-radius: 4px; border: 1px solid #ccc;" />
      </label>
      <label style="display: flex; flex-direction: column;">
      Address:
      <input type="text" name="address" required style="padding: 8px; border-radius: 4px; border: 1px solid #ccc;" />
      </label>
      <label style="display: flex; flex-direction: column;">
      Phone:
      <input type="text" name="phone" required style="padding: 8px; border-radius: 4px; border: 1px solid #ccc;" />
      </label>
      </form>
      `,
      showCancelButton: true,
      confirmButtonText: "Submit",
      preConfirm: () => {
        const form = Swal.getPopup().querySelector("#order-form");
        const formData = new FormData(form);
        const name = formData.get("name");
        const address = formData.get("address");
        const phone = formData.get("phone");

        if (!name || !address || !phone) {
          Swal.showValidationMessage("Please fill out all fields");
          return false;
        }

        // Additional validation
        const phonePattern = /^[0-9]{9,10}$/;
        if (!phonePattern.test(phone)) {
          Swal.showValidationMessage(
            "Please enter a valid 10-digit phone number"
          );
          return false;
        }

        return { name, address, phone };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { name, address, phone } = result.value;
        Swal.fire({
          title: "Order Submitted!",
          text: `Name: ${name}\nAddress: ${address}\nPhone: ${phone}`,
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    });
  };

  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn" onClick={handleOrderClick}>
        Order
      </button>
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
