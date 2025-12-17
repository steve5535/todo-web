const input = document.getElementById("todo-list");
const button = document.getElementById("add-btn");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
    const text = input.value;

    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    list.appendChild(li);
    input.value = "";
})