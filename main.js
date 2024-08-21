const input_value = document.getElementById("input");

function Add() {
    if (input_value || input_value.tim()) return;

  // create li
  const task = document.createElement("li");
  task.className = "checked";
  task.id = "first";

  const checkbox_text = document.createElement("div");
  checkbox_text.className = "field";
  //create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  //create text
  const textNode = document.createTextNode(input_value.value);
  //append the input and text
  checkbox_text.appendChild(checkbox);
  checkbox_text.appendChild(textNode);
  //create delete button

  const deleteB = document.createElement("button");
  deleteB.textContent = "X";
  deleteB.className = "delete";
  task.appendChild(checkbox_text);
  task.appendChild(deleteB);
  deleteB.addEventListener("click", () => {
    task.remove();
  });
  document.getElementById("container").appendChild(task);
  input_value.value = "";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkbox_text.style.textDecoration = "line-through";
    } else {
      checkbox_text.style.textDecoration = "";
    }
  });
}
