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
        <ul id="songList"></ul> 
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

    
    document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('.form')
    form.addEventListener('submit',SubmitSong)
function SubmitSong(event){
    event.preventDefault()
        let song_title = document.getElementById("title").value
        let song_link = document.getElementById('link').value
        let song_composer = document.getElementById('name').value

        let song_object = {
            title: song_title,
            link : song_link,
            composer: song_composer
        }

        postSong(song_object)
}

    function postSong(song_object){
        fetch(base_url,{
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(song_object)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    })

    // const deleteButton = document.createElement('button');
	// 	deleteButton.className = 'delete-button';
	// 	deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

	// 	deleteButton.addEventListener('click', () => deleteTodo(todo.id));


        // function renderTodos(todos) {
        //     tasksList.innerHTML = '';
        //     todos.forEach((todo) => {
        //         const todoElement = document.createElement('div');
        
        //         todoElement.className = 'task';
        
        //         const checkbox = document.createElement('input');
        //         checkbox.type = 'checkbox';
        //         checkbox.className = 'checkbox';
        //         checkbox.checked = todo.completed;
        
        //         checkbox.addEventListener('change', () =>
        //             toggleTodoCompletionStatus(todo.id, todo.completed)
        //         );
        
        //         const todoText = document.createElement('span');
        //         todoText.textContent = todo.title;
        
        //         const deleteButton = document.createElement('button');
        //         deleteButton.className = 'delete-button';
        //         deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        
        //         deleteButton.addEventListener('click', () => deleteTodo(todo.id));
        
        //         if (todo.completed) {
        //             todoText.style.textDecoration = 'line-through';
        //             todoElement.style.opacity = '0.3';
        //         }
        
        //         todoElement.appendChild(checkbox);
        //         todoElement.appendChild(todoText);
        //         todoElement.appendChild(deleteButton);
        
        //         tasksList.appendChild(todoElement);
        //     });
        // }






   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
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






