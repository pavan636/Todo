const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const generateTemplate = (todo) => {
  const html = `     
   <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`;
  list.innerHTML += html;
};
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  console.log(todo);
  if (todo.length) {
    generateTemplate(todo);
    //resets all input fields
    addForm.reset();
  }
});

//delete todo
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//filter

const filteredTodo = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.tolowerCase().includes(term))
    .forEach((todo) =>
      //filtered class is added to li which doesnt have the word
      todo.classList.add("filtered")
    );
  Array.from(list.children)
    .filter((todo) => todo.textContent.tolowerCase().includes(term))
    .forEach((todo) =>
      //filtered class is removed to li which doesnt have the word
      todo.classList.remove("filtered")
    );
};
// search
search.addEventListener("keyup", () => {
  const terms = search.value.trim().tolowerCase();
  filteredTodo(terms);
});
