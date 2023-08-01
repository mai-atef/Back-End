function selectAllButtons (){
    document.querySelectorAll('.removebuttonforclint').forEach(button =>{
    button.addEventListener('click', (e) =>{
        var card = e.target.parentElement.parentElement.parentElement
        var id = card.id
    
        serverDelete(id)
        .then(respond =>{
            console.log(respond)
            window.location.href = '/'
        })
    
    
    
    })
    })
    }
    
    function serverDelete(id){
        console.log(id)
        return new Promise((resolve,reject) =>{
            fetch('/product/delete/'+id,{
                method : 'DELETE'
            })
            .then(respond =>{
                resolve(respond)
            })
        }
        )
    }

    selectAllButtons()