// main.js — Car Directory App

// Array of car objects
const cars = [
  {
    name: "Porsche Panamera",
    image: "https://raw.githubusercontent.com/Dharanya1414/car-directory-react/main/porsche-panamera.jpg",
    description: "A luxury sports sedan combining performance and comfort."
  },
  {
    name: "Tesla Model S",
    image: "https://raw.githubusercontent.com/Dharanya1414/car-directory-react/main/download.jpg",
    description: "An all-electric sedan with cutting-edge technology."
  }
  // Add more cars here if you want
];

// Select DOM elements
const container = document.getElementById("cards-container");
const createCarBtn = document.getElementById("create-card-btn");

// Function to create and display a car card
function createCarCard(car) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = car.image;
  img.alt = car.name;
  img.style.width = "100%";
  img.style.height = "200px";
  img.style.objectFit = "cover";

  const name = document.createElement("h2");
  name.textContent = car.name;

  const desc = document.createElement("p");
  desc.textContent = car.description;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => card.remove();

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(desc);
  card.appendChild(deleteBtn);

  container.appendChild(card);
}

// Display all cars initially
cars.forEach(createCarCard);

// Add event listener to "Create Card" button
createCarBtn.addEventListener("click", () => {
  const carName = prompt("Enter Car Name:");
  const carImage = prompt("Enter Car Image URL:");
  const carDesc = prompt("Enter Car Description:");
  if (carName && carImage && carDesc) {
    const newCar = { name: carName, image: carImage, description: carDesc };
    createCarCard(newCar);
  }
});

