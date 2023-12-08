document.addEventListener("DOMContentLoaded", function() {
    const sagListe = document.getElementById("SagListe");
    const loading = document.getElementById("loading");
    const solForm = document.getElementById("solForm");

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then(response => response.json())
        .then(data => {
            loading.style.display = "none";

            data.forEach(todo => {
                const listItem = document.createElement("li");
                listItem.textContent = `${todo.title} - ${todo.completed ? 'Completed ✔️' : 'Not Completed ❌'}`;

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", function() {
                    listItem.remove();
                });

                listItem.appendChild(deleteButton);
                sagListe.appendChild(listItem);
            });
        })
        .catch(error => {
            console.log("Veri alınamadı! Hata: " + error.message);
        });


    solForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const text = document.getElementById("text").value;
        const checkbox = document.getElementById("checkbox").checked;

        const listItem = document.createElement("li");
        listItem.textContent = `${text} - ${checkbox ? 'Completed ✔️' : 'Not Completed ❌'}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        sagListe.appendChild(listItem);

        solForm.reset();
    });
});
