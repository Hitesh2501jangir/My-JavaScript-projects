const addButton = document.getElementById('add-button');
const container = document.querySelector('#container');


const saveNotes = ()=>{
    const notes = document.querySelectorAll(".notes textarea")
    const data = Array.from(notes).map(note=>note.value);

    if(data.length===0){
        localStorage.removeItem('notes');
    }else{
        localStorage.setItem('notes',JSON.stringify(data));
    }
}

const addNotes = ()=>{
    const newNote = document.createElement('div');
    newNote.classList.add('notes');
    newNote.innerHTML = `
        <div class="tool">
            <img src="./images/save_10311634.png" alt="" class="save">
            <img src="./images/delete-button_6301976.png" alt="" class="trash">
        </div>
        <textarea></textarea>
    `;

    const save = newNote.querySelector('.save');
    const trash = newNote.querySelector('.trash');
    const textarea = newNote.querySelector('textarea');

    save.addEventListener('click',saveNotes);
    textarea.addEventListener('input',saveNotes);
    trash.addEventListener('click',()=>{
        newNote.remove();
        saveNotes();
    })

    container.appendChild(newNote);
}
addButton.addEventListener('click',addNotes);
const loadNotes = ()=>{
    const localNotes = JSON.parse(localStorage.getItem('notes'))

    if(localNotes!==null){
        localNotes.forEach(val=>{
            addNotes();
            const notes = document.querySelectorAll(".notes textarea")
            const lastnote = notes[notes.length-1];
            lastnote.value = val;
        })
    }
    else{
        addNotes();
    }
}
loadNotes();