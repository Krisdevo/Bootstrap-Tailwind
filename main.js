



function init(){

    const btn = document.getElementById('jules');
    const modal = document.getElementById('pierre');

    
btn.addEventListener('click', () =>{

    if( modal.classList.contains('jules')){
        modal.classList.remove('jules')
    }
    stopPropagation()


});

}

init()







