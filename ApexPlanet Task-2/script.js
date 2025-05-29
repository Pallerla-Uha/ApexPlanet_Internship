// Booking form submission
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("passengerName").value.trim();
    const email = document.getElementById("email").value.trim();
    const details = document.getElementById("details").value.trim();

    if (!name || !email || !details) {
      alert("Please fill in all the fields.");
      return;
    }

    alert(`✅ Form Submitted Successfully!\n\nName: ${name}\nEmail: ${email}\nDetails: ${details}`);
    this.reset();
  });
});

// To-do / Booking Summary list
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (!task) {
    alert("Please enter a note.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  li.addEventListener("click", () => {
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
