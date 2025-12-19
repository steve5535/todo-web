const input = document.getElementById("todo-list");
const button = document.getElementById("add-btn");
const list = document.querySelector("ul");

// 저장된 데이터 불러오기
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 화면에 그리기
function reder() {
    list.innerHTML = "";

    todos.forEach(function (todo, index) {
        const li = document.createElement("li");
        li.textContent = todo.text;

        if (todo.done) {
            li.style.textDecoration = "line-through";
            li.style.color = "gray";
        }

        // 클릭하면 체크 상태 토글
        li.addEventListener("click", function () {
            todos[index].done = !todos[index].done;
            localStorage.setItem("todos", JSON.stringify(todos));
            reder();
        });

        list.appendChild(li);
    });
}

// 버튼 클릭 시
button.addEventListener("click", function () {
    const text = input.value;

    if (text === "") return;

    todos.push({
        text: text,
        done: false
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    reder();
})

// 처음 페이지 열릴 때 실행
reder();