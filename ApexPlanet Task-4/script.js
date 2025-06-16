document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".project-btn");
    const details = document.getElementById("project-details");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const project = button.dataset.project;
  
        if (project === "portfolio") {
          details.innerHTML = `
            <h3>Portfolio Website</h3>
            <p>A sleek responsive portfolio with HTML, CSS, and JavaScript.</p>
          `;
        }
  
        if (project === "product") {
            details.innerHTML = `
              <h3>Product Listing</h3>
              <div class="product-grid">
                <div class="product-card" onclick="toggleSelect(this)">
                  <img src="product-1.jpg" alt="Product 1">
                  <h4>Product 1</h4>
                  <p>₹90000</p>
                </div>
                <div class="product-card" onclick="toggleSelect(this)">
                  <img src="product-2.jpg" alt="Product 2">
                  <h4>Product 2</h4>
                  <p>₹25000</p>
                </div>
                <div class="product-card" onclick="toggleSelect(this)">
                  <img src="product-3.jpg" alt="Product 3">
                  <h4>Product 3</h4>
                  <p>₹20000</p>
                </div>
              </div>
              <button class="submit-btn" onclick="submitProducts()">Submit</button>
            `;
          }
          
          
  
        if (project === "todo") {
          details.innerHTML = `
            <h3>To-Do App</h3>
            <div class="todo-container">
              <input type="text" id="todo-input" placeholder="Enter a task..." />
              <button onclick="addTodo()">Add Task</button>
              <ul id="todo-list"></ul>
            </div>
          `;
          loadTodos(); // initialize tasks if any
        }
      });
    });
  });
  
  // Global todo list array
  let todos = [];
  
  function addTodo() {
    const input = document.getElementById("todo-input");
    const value = input.value.trim();
    if (value !== "") {
      todos.push(value);
      input.value = "";
      renderTodos();
    }
  }
  
  function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
  }
  
  function renderTodos() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";
    todos.forEach((todo, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${todo}
        <button onclick="deleteTodo(${i})">Delete</button>
      `;
      list.appendChild(li);
    });
  }
  
  function loadTodos() {
    renderTodos(); // render empty or pre-filled
  }
  function toggleSelect(card) {
    card.classList.toggle("selected");
  }
  function submitProducts() {
    const selected = document.querySelectorAll('.product-card.selected');
    if (selected.length === 0) {
      alert("Please select at least one product before submitting.");
    } else {
      // Show success popup
      const popup = document.createElement("div");
      popup.className = "success-popup";
      popup.textContent = "✅ Successfully Completed!";
      document.body.appendChild(popup);
  
      setTimeout(() => {
        popup.remove(); // remove popup after 2 seconds
      }, 2000);
    }
  }
  