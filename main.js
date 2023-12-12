const fetchPromise = fetch("http://localhost:8080/api/books");
const list_div = document.getElementsByClassName("list");

fetchPromise
  .then((response) => response.json())
  .then((data) => appendChild(data))
  .catch((err) => console.error(err));

function appendChild(data) {
  const len = data.length;
  for (let i = 0; i < len; i++) {
    const list_row = document.createElement("div");
    list_row.classList.add("list_child");

    const title = document.createElement("p");
    title.textContent = `${data[i].title}`;
    list_row.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `${data[i].author}`;
    list_row.appendChild(author);

    const year_published = document.createElement("p");
    year_published.textContent = `${data[i].year_published}`;
    list_row.appendChild(year_published);

    const ISBN = document.createElement("p");
    ISBN.textContent = `${data[i].ISBN}`;
    list_row.appendChild(ISBN);

    //update button
    const update_button = document.createElement("button");
    update_button.classList.add("update_btn");
    update_button.textContent = "Update";
    list_row.appendChild(update_button);

    //delete button
    const delete_button = document.createElement("button");
    delete_button.classList.add("delete_btn");
    delete_button.textContent = "Delete";
    list_row.appendChild(delete_button);

    list_div[0].appendChild(list_row);
  }
}
