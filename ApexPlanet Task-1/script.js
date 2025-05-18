function searchTrains() {
  const source = document.getElementById("source").value.trim();
  const destination = document.getElementById("destination").value.trim();

  if (source === "" || destination === "") {
    alert("Please enter both source and destination stations.");
    return;
  }

  const trains = [
    { name: "Express 101", time: "08:00 AM" },
    { name: "SuperFast 202", time: "12:45 PM" },
    { name: "Intercity 303", time: "05:30 PM" }
  ];

  let listHTML = "<h3>Select a Train:</h3>";
  trains.forEach((train, index) => {
    listHTML += `<div class="train-option" onclick="selectTrain(${index})" id="train${index}">
                   🚆 ${train.name} — ${train.time}
                 </div>`;
  });

  document.getElementById("trainList").innerHTML = listHTML;
  document.getElementById("trainList").classList.remove("hidden");
  document.getElementById("bookSection").classList.add("hidden");
  selectedTrain = null;
}

let selectedTrain = null;

function selectTrain(index) {
  // Remove previous selection
  document.querySelectorAll(".train-option").forEach(elem => elem.classList.remove("selected"));

  // Highlight selected train
  const selected = document.getElementById(`train${index}`);
  selected.classList.add("selected");

  selectedTrain = index;
  document.getElementById("bookSection").classList.remove("hidden");
}

function bookTrain() {
  if (selectedTrain !== null) {
    alert("✅ Booking successful for selected train!");
  } else {
    alert("❗ Please select a train first.");
  }
}
