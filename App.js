document.addEventListener("DOMContentLoaded", ()=>{
    //our code will go insede here
})

let addInput = document.getElementById("add__input")
let addButton = document.getElementById("add__button");

let removeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"/></svg>`

let completeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>`


addButton.addEventListener("click", ()=>{
    let newInput = addInput.value;

    if(newInput){
        addnewTodo(newInput)
        addInput.value = "";
    }
})

function addnewTodo(text){
    //ul 
    let ulList = document.getElementById("todo")

    //create li items
    let liItem = document.createElement("li")

    liItem.innerHTML = text;

    let buttons = document.createElement("div")
    buttons.classList.add("buttons")

/////Remove

    let remove =document.createElement("button")
    remove.classList.add("remove")
    
    remove.innerHTML = removeSVG;
    remove.addEventListener("click", removeItem)

/////Complete

    let complete = document.createElement("button")
    complete.classList.add("complete")

    
    complete.innerHTML = completeSVG;
    complete.addEventListener('click', completeItem)

    buttons.appendChild(remove)
    buttons.appendChild(complete)

    liItem.appendChild(buttons)

    ulList.insertBefore(liItem, ulList.childNodes[0])
}

function completeItem() {
    // grab the `li` by targeting the parent of the parent of the button (button -> div -> li)
    let skip = this.parentNode.parentNode
    // grab the `ul` (li -> ul)
    let parent = skip.parentNode
    // grab the parent id
    let id = parent.id
    // check if the item should go in the completed or if it should be re-added to todo by using a ternary operator
    let target =
      id === 'todo'
        ? document.getElementById('completed')
        : document.getElementById('todo')
    // remove the item to its current `ul`
    parent.removeChild(skip)
    // add the item to the new `ul`
    target.insertBefore(skip, target.childNodes[0])
  }

  function removeItem() {
    // grab the `li` by targeting the parent of the parent of the button (button -> div -> li)
    let del = this.parentNode.parentNode
    // grab the `ul` (li -> ul)
    let parent = del.parentNode
    // remove `li` from `ul`
    parent.removeChild(del)
  }