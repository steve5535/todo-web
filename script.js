const input = document.getElementById("todo-list");
const button = document.getElementById("add-btn");
const list = document.querySelector("ul");

// 저장된 데이터 불러오기
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 화면에 그리는 함수
function reder() {
    list.innerHTML = "";

    todos.forEach(function (todo) {
        const li = document.createElement("li");
        li.textContent = todo;
        list.appendChild(li);
    });
}

// 버튼 클릭 시
button.addEventListener("click", function () {
    const text = input.value;

    if (text === "") return;

    todos.push(text);
    localStorage.setItem("todos", JSON.stringify(todos));

    input.value = "";
    reder();
})

// 처음 페이지 열릴 때 실행
reder();