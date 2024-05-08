
const input = document.getElementById('input-box');
const addButton = document.getElementById('add-button');
const listContainer = document.getElementById('list-container');

const displayTask = ()=>{
    listContainer.innerHTML = localStorage.getItem('data')
}
displayTask();

const addTask = ()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}

addButton.addEventListener('click',()=>{
    if(input.value === "")alert("Enter some data");
    else{
        let listTag = document.createElement('li');
        listTag.innerText = input.value;
        listContainer.appendChild(listTag);

        
        input.value = "";
        addTask();
    } 
})

listContainer.addEventListener('click',(event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        const span = document.createElement('span');
        span.innerHTML = "\u00d7";
        event.target.appendChild(span);
        addTask();
    }
    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
        addTask();
    }
})