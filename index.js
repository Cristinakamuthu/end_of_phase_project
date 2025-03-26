let base_url = "http://localhost:3000/composers"

document.addEventListener("DOMContentLoaded", () =>{
const title = document.getElementById("title") 
const input = document.getElementById("input") 
const btn = document.getElementById("btn")

btn.addEventListener("click", function () {
    let newName = input.value.trim();
if (newName !== "") {
        title.textContent = `${newName}'s little musical world!`;
    } else {
        alert("Please enter a name!");
    }
});
})



