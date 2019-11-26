var accordion = document.getElementsByClassName('accordion');
for(var i = 0; i< accordion.length;i++){
    createMenuAC(accordion[i]);
}

function createMenuAC(element){
    //console.log(element);
    tbn = element.childNodes[1];
    mnAC = element.childNodes[3];
    tbn.addEventListener('click',function(event){
        event.preventDefault();
        console.log(mnAC);
        if(mnAC.style.display == 'none' || mnAC.style.display == ''){
            mnAC.style.display = 'block';
        } else {mnAC.style.display ='none'}
    })
    tbn.addEventListener('blur',function(event){
        mnAC.style.display ='none'
    })
}