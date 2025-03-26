let base_url = "http://localhost:3000/composers"

document.addEventListener("DOMContentLoaded", () => {
const title = document.getElementById("title") 
const input = document.getElementById("input") 
const btn = document.getElementById("btn")

btn.addEventListener("click", function () {
    let newName = input.value.trim();
if (newName !== "") {
        title.textContent = `${newName}'s little musical world!  `;
    } else {
        alert("Please enter a name!");
    }
});
})

function displayDetails(composers) {
    const classicalMusic = document.getElementById("classicalbar");
      composers.forEach(composer => {
        let html = `
        <section id="classicaldays" class="classicalmoments">
        <p> ${composer.name} </p>
        <img src ="${composer.image}"
        alt="${composer.name}">
        <div class="content">
        </div>
        </section>
        `;
        classicalMusic.innerHTML += html;
    });
}

fetch(base_url)
    .then(res => res.json())
    .then(data => displayDetails(data))
    .catch(err => console.log(err));