const t = document.getElementById("task");
const submitbtn = document.getElementById("submitbtn");
const input = document.querySelector("input");
loadData();
submitbtn.addEventListener("click", function () {
    if (input.value == "") {
        alert("Enter some task");
    } else {
        const store = document.createElement("p");
        const markasread = document.createElement("button");
        markasread.innerHTML = "<img src='tick.png>";
        markasread.addEventListener("click", function () {
            store.style.opacity = 0.4;
        });
        const deletebtn = document.createElement("button");
        deletebtn.innerHTML = "<img src='bin.png'>";
        deletebtn.addEventListener("click", function () {
            store.parentElement.removeChild(store);
        });
        store.textContent = input.value;
        store.appendChild(markasread);
        store.appendChild(deletebtn);
        t.appendChild(store);
        input.value = "";
        saveData();
        loadData();
    }
});
input.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        submitbtn.click();
    }
});
function saveData() {
    let emptyarr = [];
    const ptags = document.querySelectorAll("#task p");
    ptags.forEach((s) => {
        emptyarr.push({
            name: s.textContent.slice(0, s.textContent.length),
        });
    });
    localStorage.setItem("Soumya To Do List", JSON.stringify(emptyarr));
}
function loadData() {
    t.innerHTML = ''
    const subham = JSON.parse(localStorage.getItem("Soumya To Do List")) || [];
    subham.forEach((p) => {
        const store = document.createElement("p");
        const markasread = document.createElement("button");
        markasread.innerHTML = "<img src='tick.png'>";
        markasread.addEventListener("click", function () {
            store.style.opacity = 0.4;
        });
        const deletebtn = document.createElement("button");
        deletebtn.innerHTML = "<img src='bin.png'>";
        deletebtn.addEventListener("click", function () {
            store.parentElement.removeChild(store);
            saveData();
        });
        store.textContent = p.name;
        store.appendChild(markasread);
        store.appendChild(deletebtn);
        t.appendChild(store);
    });
}
