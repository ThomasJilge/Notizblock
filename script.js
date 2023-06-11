let titles = [];
let notes = []; 
load(); 


function render() {
  let content = document.getElementById('content');
  content.innerHTML = '';

  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    const note = notes[i];

    content.innerHTML += /*html*/`
        
            <div class="newNote">
                <b> Titel: </b> <b>${title}</b> <br>
                <b> Notiz: </b> <b>${note}</b> <br>

                <a onclick="deleteNote(${i})" href=""><img class="trashIMG" src="img/muelleimer.png"></a>
            </div>   
        `;
  }

}


function addNewNote() {
    let title = document.getElementById('title');
    let note = document.getElementById('note');

    titles.push(title.value);
    notes.push(note.value);

    render();
    save();
}


function deleteNote(i) {
    titles.splice(i, 1);
    notes.splice(i, 1);
    render();
    save();
}


function save() {
    let titlesAsText = JSON.stringify(titles);
    let notesAsText = JSON.stringify(notes);

    localStorage.setItem('titles', titlesAsText);
    localStorage.setItem('notes', notesAsText);
}


function load() {
    let titlesAsText = localStorage.getItem('titles');
    let notesAsText = localStorage.getItem('notes');

    if (titlesAsText && notesAsText) {
        titles = JSON.parse(titlesAsText);
        notes = JSON.parse(notesAsText);
    }    
}

