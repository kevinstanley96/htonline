// Placeholder product data
const products = [
  { id: 1, name: "Amazon Gift Card", price: 25, image: "amazon.png" },
  { id: 2, name: "Netflix Gift Card", price: 50, image: "netflix.png" },
  { id: 3, name: "Spotify Gift Card", price: 15, image: "spotify.png" }
];

const productList = document.getElementById("product-list");

function renderProducts() {
  productList.innerHTML = products.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");
}

function addToCart(id) {
  alert(`Added product ${id} to cart (placeholder logic).`);
}

renderProducts();
