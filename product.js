
const edditButton = document.getElementsByClassName('edditbuttonforclintAdmin')[0];
const nameContainer = document.getElementById('name');
const desc = document.getElementById('desc');
const price = document.getElementById('price');
const id = edditButton.id
console.log(id)


 edditButton.addEventListener('click', edditEnaple);



function edditEnaple(){
    nameContainer.setAttribute('contenteditable', true)
    desc.setAttribute('contenteditable', true)
    price.setAttribute('contenteditable', true)
   
    edditButton.innerHTML = 'Save'
    edditButton.removeEventListener('click', edditEnaple);
    edditButton.addEventListener('click', edditSave);
}

function edditSave(){

    nameContainer.setAttribute('contenteditable', false)
    desc.setAttribute('contenteditable', false)
    price.setAttribute('contenteditable', false)
   
    edditButton.innerHTML = 'Eddit'
    edditButton.removeEventListener('click', edditSave);
    edditButton.addEventListener('click', edditEnaple);


    console.log(update)
    fetch('/product/update/'+id,{
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(update)
    })
    .then(respond =>{
        console.log(respond)
        if(respond.status === 200){
            window.location.reload()
        }
    }
    )
    .catch(error =>{
        console.log(error)
    }
    )
}