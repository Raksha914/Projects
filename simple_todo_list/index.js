const input = document.getElementById("input");
const listItems = document.getElementById("listItems");
const newBtn = document.getElementById("newBtn");

newBtn.addEventListener("click", addListItemc);

function addListItemc() {
  const task = input.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
      listItems.removeChild(li);
    });

    li.appendChild(removeBtn);
    listItems.appendChild(li);
    input.value = "";
  } else {
    alert("Please enter a task");
  }
}
