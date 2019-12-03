function startJS(){
var accordion = document.getElementsByClassName('accordion');
for(var i = 0; i< accordion.length;i++){
    createMenuAC(accordion[i]);
};
function createMenuAC(element){
    var menuAc = element.childNodes[3];
    var accordionElement = element;
    menuAc.addEventListener('click',(event) =>{
        event.stopPropagation();
    });
    window.addEventListener('click',function(event){
        if(accordionElement == event.target.parentElement){
            event.preventDefault();
            if( menuAc.style.height == '0px'||menuAc.style.height == ''){
                menuAc.style.height = '120px';
                }
             else { menuAc.style.height = '0px';}
        }
          else {menuAc.style.height = '0px';}
    }); 
    
};
}
window.addEventListener('load',function(){
    startJS();
});

