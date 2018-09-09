var removeSVG='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/></svg>'
var checkSVG='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>'
document.getElementById('newTodo').addEventListener("keypress", function(event) {
    //event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("add").click();
    }
});
document.getElementById('add').addEventListener('click',(event)=>{
    
    var value=document.getElementById('newTodo').value;
    if(value)
    {
        addItem(value);
        document.getElementById('newTodo').value='';
    }
})

function addItem(text)
{
    var list=document.getElementById('todo').querySelector('ul');
var item=document.createElement('li');
item.innerText=text;
var Div=document.createElement('div')
Div.classList.add('buttons')
var remove=document.createElement('button')
remove.innerHTML=removeSVG;
remove.addEventListener('click',removeFunction);
var check=document.createElement('button')
check.innerHTML=checkSVG;
check.addEventListener('click',checkFunction);
Div.appendChild(remove);
Div.appendChild(check);
item.appendChild(Div)
    list.insertBefore(item, list.childNodes[0]);

}
function removeFunction(){
    var item_=this.parentNode.parentNode;
    var parent=item_.parentNode;
    parent.removeChild(item_);
}
function checkFunction()
{
    var text=this.parentNode.parentNode.innerText;
    var list=document.getElementById('completed').querySelector('ul');
    var item=document.createElement('li');
    item.innerText=text;
    var Div=document.createElement('div')
    Div.classList.add('buttons')
    var remove=document.createElement('button')
    remove.innerHTML=removeSVG;
    var check=document.createElement('button')
    check.innerHTML=checkSVG;
    Div.appendChild(remove);
    Div.appendChild(check);
    item.appendChild(Div)
        list.insertBefore(item, list.childNodes[0]);
        //delete Todo
        var item_=this.parentNode.parentNode;
        var parent=item_.parentNode;
        parent.removeChild(item_);
}