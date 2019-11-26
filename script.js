var accordion = document.getElementsByClassName('accordion');
for(var i = 0; i< accordion.length;i++){
    createMenuAC(accordion[i]);
}

function createMenuAC(element){
    //console.log(element);
    tbn = element.childNodes[1];
    mnAC = element.getElementsByTagName('ul');
    tbn.addEventListener('click',function(event){
        event.preventDefault();
        console.log(mnAC);
        if(mnAC[0].style.display == 'none' || mnAC[0].style.display == ''){
            mnAC[0].style.display = 'block';
        } else {mnAC[0].style.display ='none'}
    })
    tbn.addEventListener('blur',function(event){
        mnAC[0].style.display ='none'
    })
}