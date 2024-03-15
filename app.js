let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

const addTask = () => {
  if (input.value === "") {
    alert("Please enter a task");
  } else {
    let item = document.createElement("li");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete");
    item.innerText = input.value;
    ul.appendChild(item);
    item.appendChild(deleteBtn);
    input.value = "";
  }

  let deleteButton = document.querySelectorAll(".delete");

  for (delBtn of deleteButton) {
    delBtn.addEventListener("click", () => {
      console.log("Element Deleted");
    });
  }
};

btn.addEventListener("click", addTask);
