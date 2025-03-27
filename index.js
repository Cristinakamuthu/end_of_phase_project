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
        <section>
        <p class="name"> ${composer.name} </p>
        <img src ="${composer.image}"
        alt="${composer.name}">
        <div class="content">
        </div>
        </section>
        <section>
        <p class="about"> ${composer.about}</p>
        </section>
        <section class="search">
        <h2>Search & Play Music</h2>
         <div class="container">
    <label for="input"> 🎵</label>
        <input type="text" id="searchBar" placeholder="Search for a song!...">
        <button id="btn">submit</button>
        <div class="songsList></div>
    </div>

    <audio id="audioPlayer" controls>
        <source id="audioSource" src="" type="audio/mp3">
    </audio>
    <section>
     </section>   `
        classicalMusic.innerHTML += html;
    })
}

fetch(base_url)
    .then(res => res.json())
    .then(data => displayDetails(data))
    .catch(err => console.log(err));

    const songsList = document.querySelector('#songsList')
    function addSongs(composers) {
        songsList.innerHTML='';
        composers.forEach((composer) =>{
           const songsAdd = document.createElement("div") 
           songsAdd.className ='songs';

           const songElement = document.createElement('input')
           songElement.type = 'file'
           songElement.className ="file"
           songElement.value = "composer.link"

           songElement.addEventListener("submit",() =>
        songsPlay(composer.id,composer.link))

           const somgName =document.createElement('span')
           somgName.textContent = composer.title

           const deleteButton = document.createElement('button');
		deleteButton.className = 'delete-button';
		deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

        deleteButton.addEventListener('click', () => deleteSongTitle(composer.title));

        songsAdd.appendChild(songElement);
		songsAdd.appendChild(somgName);
		songsAdd.appendChild(deleteButton);
        songsList.appendChild(songsAdd);
       })

    }


function addNewSongs(SongsFromInput) {
	fetch(base_url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title: SongsFromInput,
			link: deleteButton,
		}),
	})
		.then((res) => {
			if (!response.ok) {
				alert(response.status);
			}
		})
		.then(displayDetails);
}

async function addSongsandLink (id, completed) {
	try {
		const response = await fetch(`${base_url}/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: link,
			}),
		});

		if (!response.ok) {
			throw new Error(response);
		}

		displayDetails();
	} catch (error) {
		alert(error);
	}
}



async function deleteSongTitle(title) {
	try {
		const response = await fetch(`${base_url}/${id}`, {
			method: 'DELETE',
		});

		if (!response.ok) {
			throw new Error(response);
		}

		displayDetails();
	} catch (error) {
		alert(error);
	}
}
    
    
    
    
    
    
    
    
    
    
    







   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
        // document.addEventListener("DOMContentLoaded",function () {
//     const searchBar = document.getElementById("searchBar")
//     const songList = document.getElementById("songList")
//     const audioPlayer = document.getElementById("audioPLayer")
//     const audioSource = document.getElementById ("audioSource")

//     fetch("base_url")
//                 .then(response => response.json())
//                 .then(data => {
//                     let songs = data.composers

//                     function displaySongs(filter = "") {
//                         songList.innerHTML = ""; 
//                         songs.filter(song => song.title.toLowerCase().includes(filter.toLowerCase()))
//                             .forEach(song => {
//                                 const li = document.createElement("li");
//                                 li.textContent = composer.music.title;
//                                 li.dataset.src = composer.music.link;
//                                 li.onclick = function () {
//                                     audioSource.src = this.dataset.src;
//                                     audioPlayer.load();
//                                     audioPlayer.play();
//                                 };
//                                 songList.appendChild(li);
//                             });
//                     }

//                      searchBar.addEventListener("", function () {
//                         displaySongs(searchBar.value);
//                     });

//                     displaySongs()
//                 })
//                 .catch(error => console.error("songs are not able to be fetched:", error));
//         });






