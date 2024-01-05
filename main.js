const fetchPromise = fetch("https://library-server-3i6d.onrender.com/8080/api/books");
const list_div = document.getElementsByClassName("list");

//dialog return value
const delete_dialog = document.getElementById("delete_dialog");

//no button on delete dialog button
const no_delete_dialog = delete_dialog.querySelector("#no_delete_dialog");
no_delete_dialog.addEventListener("click", () => delete_dialog.close());

//yes button on delete dialog button
const yes_delete_dialog = delete_dialog.querySelector("#yes_delete_dialog");
yes_delete_dialog.addEventListener("click", () => delete_dialog.close("Yes"));

//update dialog
const create_update_dialog = document.getElementById("create_update_dialog");
create_update_dialog
  .querySelector("#yes_create_update_dialog")
  .addEventListener("click", () => create_update_dialog.close("Yes"));
create_update_dialog
  .querySelector("#no_create_update_dialog")
  .addEventListener("click", () => create_update_dialog.close());

const title_input = create_update_dialog.querySelector("#update_title_holder");
const author_input = create_update_dialog.querySelector("#update_author_holder");
const year_published_input = create_update_dialog.querySelector("#update_year_holder");
const ISBN_input = create_update_dialog.querySelector("#update_ISBN_holder");

//handle new book creation
const create_button = document.getElementById("create_button");
create_button.addEventListener("click", () => {
  create_update_dialog.showModal();

  const dialog_close_handler = () => {
    if (create_update_dialog.returnValue === "Yes") {
      const new_book = {
        title: title_input.value,
        author: author_input.value,
        year_published: year_published_input.value,
        ISBN: ISBN_input.value,
      };
      handle_create_book(new_book);
      create_update_dialog.removeEventListener("close", dialog_close_handler);
    }
  };

  create_update_dialog.addEventListener("close", dialog_close_handler);
});

fetchPromise
  .then((response) => response.json())
  .then((data) => appendChild(data))
  .catch((err) => {
    // alert("Thanks for coming this far but database hosting is costly!!");
    console.error(err);
  });

function appendChild(data) {
  const len = data.length;
  for (let i = 0; i < len; i++) {
    const list_cild = document.createElement("div");
    list_cild.classList.add("list_child");
    if (i % 2 == 0) {
      list_cild.style.backgroundColor = "grey";
      list_cild.style.color = "white";
    }

    const serial_no = document.createElement("p");
    serial_no.style.width = "5%";
    serial_no.textContent = `${i + 1}.`;
    list_cild.appendChild(serial_no);

    const title = document.createElement("p");
    title.textContent = `${data[i].title}`;
    list_cild.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `${data[i].author}`;
    list_cild.appendChild(author);

    const year_published = document.createElement("p");
    year_published.textContent = `${data[i].year_published}`;
    list_cild.appendChild(year_published);

    const ISBN = document.createElement("p");
    ISBN.textContent = `${data[i].ISBN}`;
    list_cild.appendChild(ISBN);

    //update button
    const update_button = document.createElement("button");
    update_button.classList.add("update_btn");
    update_button.textContent = "Update";
    list_cild.appendChild(update_button);

    //listen for update events
    update_button.addEventListener("click", () => {
      create_update_dialog.showModal();

      //fill book details in dialog box.
      title_input.value = data[i].title;
      author_input.value = data[i].author;
      year_published_input.value = data[i].year_published;
      ISBN_input.value = data[i].ISBN;

      const dialog_close_handler = () => {
        if (create_update_dialog.returnValue === "Yes") {
          const new_book = {
            id: data[i].id,
            title: title_input.value,
            author: author_input.value,
            year_published: year_published_input.value,
            ISBN: ISBN_input.value,
          };
          handle_update_book(new_book);
          create_update_dialog.removeEventListener("close", dialog_close_handler);
        }
      };
      //handle close and get data from dialog box
      create_update_dialog.addEventListener("close", dialog_close_handler);
    });

    //delete button
    const delete_button = document.createElement("button");
    delete_button.classList.add("delete_btn");
    delete_button.textContent = "Delete";
    list_cild.appendChild(delete_button);

    //listen for delete events.
    delete_button.addEventListener("click", () => {
      delete_dialog.showModal();

      const dialog_close_handler = async () => {
        if (delete_dialog.returnValue === "Yes") {
          await handle_delete_book(data[i].id);
          delete_dialog.removeEventListener("close", dialog_close_handler);
        }
      };

      //get the returnvalue.
      delete_dialog.addEventListener("close", dialog_close_handler);
    });

    list_div[0].appendChild(list_cild);
  }
}

const handle_delete_book = async (id) => {
  try {
    const response = await fetch(`https://library-server-3i6d.onrender.com/8080/api/books?id=${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error deleting the book");
    }
    console.log("Book deleted successfully", await response.json());
  } catch (err) {
    // alert("Database hosting is costly");
    console.error(err);
  }
};

const handle_update_book = async ({ id, title, author, year_published, ISBN }) => {
  const new_book = {
    title: title,
    author: author,
    year_published: parseInt(year_published),
    ISBN: ISBN,
  };
  try {
    const response = await fetch(`https://library-server-3i6d.onrender.com/8080/api/books?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(new_book),
    });
    if (!response.ok) {
      throw new Error("Error updating the book");
    }
    console.log("Book updated successfully", await response.json());
  } catch (err) {
    // alert("Database hosting is costly");
    console.error(err);
  }
};

const handle_create_book = async ({ title, author, year_published, ISBN }) => {
  const new_book = {
    title: title,
    author: author,
    year_published: parseInt(year_published),
    ISBN: ISBN,
  };
  try {
    const response = await fetch(`https://library-server-3i6d.onrender.com/8080/api/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(new_book),
    });
    const result = await response.json();
    console.log("Book created successfully", result);
    if (!response.ok) {
      throw new Error("Error creating book", result);
    }
  } catch (err) {
    // alert("Database hosting is costly");
    console.error(err);
  }
};
