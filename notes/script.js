
const textArea = document.querySelector('textarea')
const save = document.querySelector('.save');
const trash = document.querySelector('.trash')
const add = document.querySelector('.add')

save.addEventListener('click',storetext);
trash.addEventListener('click',destroy);
add.addEventListener('click',createNote);

function storetext(){
    textArea.disabled ? textArea.disabled = false : textArea.disabled = true; //toggle disabled attribute

}

function destroy(){
    this.parentElement.parentElement.remove()

}

function createNote(){
    const note = document.querySelector('.note')
    const noteCopy = note.cloneNode(true)
    noteCopy.style.display = 'inline'

    if(noteCopy.querySelector('textarea').disabled == true){    //clears disabled when a copy is made
        noteCopy.querySelector('textarea').disabled = false
    }

    if(noteCopy.querySelector('textarea').value.length > 0){    //clears text when a copy is made
        noteCopy.querySelector('textarea').value = ''
    }
    
    const textArea = noteCopy.querySelector('textarea')
    const save = noteCopy.querySelector('.save');
    const trash = noteCopy.querySelector('.trash')

    save.addEventListener('click',()=>{
        textArea.disabled ? textArea.disabled = false : textArea.disabled = true;

    });
    trash.addEventListener('click',destroy);
    add.addEventListener('click',createNote);
    
    document.body.prepend(noteCopy)

}