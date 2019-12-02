function startJS(){
var accordion = document.getElementsByClassName('accordion');
for(var i = 0; i< accordion.length;i++){
    createMenuAC(accordion[i]);
};

function clikSub(element){
    for(var j =1; j < element.childNodes.length; j = j+2 ){
        element.childNodes[j].addEventListener('click',(event) =>{
            event.stopPropagation();
        });
    }
}

function createMenuAC(element){
    var mnAC = element.childNodes[3];
    clikSub(mnAC);
    element.addEventListener('click',function(event){
        event.preventDefault();
        if( mnAC.style.height == '0px'||mnAC.style.height == ''){
            mnAC.style.height = '120px';
            }
         else { mnAC.style.height = '0px';}   
    }); 
    element.addEventListener('blur',(event)=>{
        console.log('ham blur');
        mnAC.style.height = '0px';
    });
    
};
}
window.addEventListener('load',function(){
    startJS();
});

