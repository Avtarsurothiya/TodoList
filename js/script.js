//Calling all required elements
const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

  //Function to call for add/delete
  function allTasks() {
    let tasks = document.querySelectorAll(".pending");
  
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
  
    let allLists = document.querySelectorAll(".list");
    if (allLists.length > 0) {
      todoLists.style.marginTop = "20px";
      clearButton.style.pointerEvents = "auto";
      return;
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
  }

  //Adding task with Enter Key

inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim(); //trim fuction removes space of front and back of the inputed value
  
    //if enter button is clicked and inputed value length is greated than 0.
    if (e.key === "Enter" && inputVal.length > 0) {
      let liTag = ` <li class="list pending" onclick="handleStatus(this)">
            <input type="checkbox" />
            <span class="task">${inputVal}</span>
            <i class="uil uil-trash" onclick="deleteTask(this)"></i>
          </li>`;
  
      todoLists.insertAdjacentHTML("beforeend", liTag); //inserting li tag inside the todolist div
      inputField.value = ""; //removing value from input field
      allTasks();
    }
  });
  
  //Task completion Check box
  function handleStatus(e) {
    const checkbox = e.querySelector("input"); //getting checkbox
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
  }

  //Implementing delete task with delete button
function deleteTask(e) {
    e.parentElement.remove(); //getting parent element and remove it
    allTasks();
  }