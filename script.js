document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.box');
  const cartItemsList = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  let cart = [];
 
  boxes.forEach(box => {
  const colorSelect = box.querySelector('.color-select');
  const sizeSelect = box.querySelector('.size-select');
  const addToCartButton = box.querySelector('.add-to-cart');
 
  // Populate color options
  populateDropdown(colorSelect, ['Red', 'Green', 'Blue', 'Yellow']);
 
  // Populate size options
  populateDropdown(sizeSelect, ['Small', 'Medium', 'Large']);
 
  box.addEventListener('click', function() {
  this.classList.toggle('expanded');
  });
 
  addToCartButton.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent box toggle
 
  const color = colorSelect.value;
  const size = sizeSelect.value;
 
  if (!color || !size) {
  alert('Please select a color and size.');
  return;
  }
 
  const itemName = box.querySelector('h3').textContent;
  const itemPrice = parseFloat(box.dataset.price);
 
  const cartItem = {
  name: itemName,
  color: color,
  size: size,
  price: itemPrice
  };
 
  cart.push(cartItem);
  updateCartDisplay();
  });
  });
 
  function populateDropdown(selectElement, options) {
  options.forEach(option => {
  const optionElement = document.createElement('option');
  optionElement.value = option;
  optionElement.textContent = option;
  selectElement.appendChild(optionElement);
  });
  }
 
  function updateCartDisplay() {
  cartItemsList.innerHTML = ''; // Clear existing items
  let total = 0;
 
  cart.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = `${item.name} - Color: ${item.color}, Size: ${item.size} - $${item.price.toFixed(2)}`;
  cartItemsList.appendChild(listItem);
  total += item.price;
  });
 
  totalElement.textContent = total.toFixed(2);
  }
 });
 