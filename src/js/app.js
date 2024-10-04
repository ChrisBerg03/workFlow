const counter = document.getElementById("counter");
const counterBtn = document.getElementById("counterBtn");

let count = 0;
counterBtn.addEventListener("click", () => {
    if (count <= 10) {
        count++;
        counter.innerText = `${count}`;
    } else {
        counter.innerHTML = "";
        counter.innerHTML = `<img id="something" src="/public/scaryThing.png"/>`;
    }
});
// test
