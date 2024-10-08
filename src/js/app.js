const counter = document.getElementById("counter");
const counterBtn = document.getElementById("counterBtn");

let count = 0;
counterBtn.addEventListener("click", () => {
    if (count <= 10) {
        count++;
        counter.innerText = `${count}`;
    } else {
        alert("Wow, You did it!!! *Praise*");
    }
});
