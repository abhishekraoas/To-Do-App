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

  let deleteButton = document.querySelectorAll(".delete");

  ul.addEventListener("click", (event)=>{
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
  })

}

//   for (delBtn of deleteButton) {
//     delBtn.addEventListener("click", () => {
//       let parent = this.parentElement; 
//     //   console.log("Element Deleted");
//       parent.remove(); 
//     });
//   }
};

btn.addEventListener("click", addTask);
