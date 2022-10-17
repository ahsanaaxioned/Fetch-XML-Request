// global variable declaration start here
const fetchList = document.querySelector(".fetch-list"),
    btn = document.querySelector(".btn");
let counter = 10,
    i = 0;
// global variable declaration end here
// fetch function start here
fetchList.innerText = "";
function getData() {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('Get', 'https://jsonplaceholder.typicode.com/posts');
    httpRequest.onload = function () {
        data = JSON.parse(this.response)
        fetchCard(data);
    }
    httpRequest.send();
};
getData();
// fetch function end here
// btn event start here
btn.addEventListener("click", fetchCard);
function fetchCard(data) {
    for (i; i < counter; i++) {
        if (i == 99) {
            btn.classList.add("btn-hide");
        }
        let li = document.createElement("li");
        li.classList.add("fetch-item");
        li.innerHTML = `<span class="heading">${data[i].id}</span>
        <h3 class="title">${data[i].title}</h3>
        <p class="discription">${data[i].body}</p>`
        fetchList.appendChild(li);
    }
    i = counter;
    counter += 10;
};
// btn event start here