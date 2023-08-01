
const deleteButton2 = document.getElementsByClassName('removebuttonforclint')[0];
const edditButton2 = document.getElementsByClassName('edditbuttonforclintAdmin')[0];
const id2 = edditButton.id

deleteButton2.addEventListener('click', deleteProduct);


function deleteProduct(){
    serverDelete(id2)
    .then(respond =>{
        console.log(respond)
        window.location.href = '/'
    }
    )
}
    
    function serverDelete(id2){
        console.log(id2)
        return new Promise((resolve,reject) =>{
            fetch('/product/delete/'+id2,{
                method : 'DELETE'
            })
            .then(respond =>{
                resolve(respond)
            })
        }
        )
    }





    
    selectAllButtons()