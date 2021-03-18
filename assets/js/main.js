document.querySelector(".card-lists").innerHTML = "loading...";
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(function(todos){
        var html;
        var cardLists = document.querySelector(".card-lists");
        todos.map(function(todo){
            html += `
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${todo.title}</h5>
                            <p class="card-text">Status : ${todo.status ? "Selesai" : "Belum Selesai"}</p>
                        </div>
                    </div>
                </div>
            `
            cardLists.innerHTML = html;
        })
        // cardLists.innerHTML = JSON.stringify(todos);
});


