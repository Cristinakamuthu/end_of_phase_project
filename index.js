let base_url = "https://end-of-phase-project-server.vercel.app/composers";

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const input = document.getElementById("input");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", function () {
        let newName = input.value.trim();
        if (newName !== "") {
            title.textContent = `${newName}'s little musical world!`;
        } else {
            alert("Please enter a name!");
        }
    });
});

function displayDetails(composers) {
    const classicalMusic = document.getElementById("classicalbar");
    classicalMusic.innerHTML = "";

    composers.forEach(composer => {
        let html = `
        <section id="classicaldays" class="classicalmoments">
            <section>
                <p class="name"> ${composer.name} </p>
                <img src="${composer.image}" alt="${composer.name}">
                <div class="content"></div>
            </section>
            <section>
                <p class="about"> ${composer.about}</p>
            </section>
            <section class="search">
                <h2>Search & Play Music</h2>
                <div class="container">
                    <label for="searchBar"> 🎵</label>
                    <input type="text" id="searchBar" placeholder="Search for a song!...">
                    <button id="searchBtn">Submit</button>
                    <div id="songsList"></div>
                </div>
                <audio id="audioPlayer" controls>
                    <source id="audioSource" src="" type="audio/mp3">
                </audio>
            </section>
        </section>`;
        classicalMusic.innerHTML += html;
    });
}


fetch(base_url)
    .then(res => res.json())
    .then(data => displayDetails(data))
    .catch(err => console.log(err));

const songsList = document.getElementById("songsList");

function addSongs(composers) {
    songsList.innerHTML = "";
    composers.forEach((composer) => {
        const songDiv = document.createElement("div");
        songDiv.className = "songs";

        const songInput = document.createElement("input");
        songInput.type = "file";
        songInput.className = "file";

        songInput.addEventListener("submit", () => {
            songsPlay(composer.id, songInput.files);
        });

        const songName = document.createElement("span");
        songName.textContent = composer.title;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

        deleteButton.addEventListener("click", () => deleteSongTitle(composer.id));

        songDiv.appendChild(songInput);
        songDiv.appendChild(songName);
        songDiv.appendChild(deleteButton);
        songsList.appendChild(songDiv);
    });
}

function addNewSongs(songTitle,songLink) {
    fetch(base_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: songTitle,
            link: songLink,
        }),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then(() => fetch(base_url).then(res => res.json())
        .then(data => displayDetails(data)))
        .catch(err => console.log("Error", err));
}

async function addSongsandLink(id, link) {
    try {
        const response = await fetch(`${base_url}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                link: link,
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        fetch(base_url).then(res => res.json())
        ``.then(data => displayDetails(data));
    } catch (error) {
        alert(error);
    }
}

async function deleteSongTitle(id) {
    try {
        const response = await 
        fetch(`${base_url}/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        fetch(base_url).then(res => res.json())
        .then(data => displayDetails(data));
    } catch (error) {
        alert(error);
    }
}

    
    
    
    
    
    
    
    
    
    







   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
      