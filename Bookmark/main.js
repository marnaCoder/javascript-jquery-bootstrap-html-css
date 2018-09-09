    document.getElementsByClassName('input')[0].addEventListener('keypress',(event)=>{
        if(event.keyCode===13)
        {
            document.getElementsByClassName('input')[1].focus();
        }
    })
    document.getElementsByClassName('input')[1].addEventListener('keypress',(event)=>{
        if(event.keyCode===13)
        {
            document.getElementById('submit').click();
        }
    })
    //adding a Local storage element
var local=localStorage.getItem('array')
if(local!=null)
{
var array=local.split(',');
for(var i=0;i<array.length-1;i++)
{
addName(array[i])
}
}  
    document.getElementById('submit').addEventListener('click',()=>{
        var name=document.getElementsByClassName('input')[0].value
        var url=document.getElementsByClassName('input')[1].value;
        document.getElementsByClassName('input')[0].value='';
        document.getElementsByClassName('input')[1].value='';
        var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if(name=='')
        {
            alert('Please enter a name for site');
        }
        //checking valid url
        else if(!pattern.test(url))
        {
            alert('Please enter a valid url')
        }
        else{
            var local=localStorage.getItem('array')
        local=local+name+',';
        local=local.replace('null','')
        localStorage.setItem('array',local)
        localStorage.setItem(name,url);

        addName(name);
        openUrl(url);
    }
    })
    function addName(text){
        var item=document.createElement('li')
        var div=document.createElement('div')
        var buttonVisit=document.createElement('button');
        buttonVisit.classList.add('buttons')
        buttonVisit.innerText='Delete'
        buttonVisit.addEventListener('click',deleteFunction);
        var buttonDelete=document.createElement('button');
        buttonDelete.classList.add('buttons')
        buttonDelete.innerText='Visit'
        buttonDelete.addEventListener('click',visitFunction);
        div.innerText=text;
        div.appendChild(buttonDelete);
        div.appendChild(buttonVisit)
        item.appendChild(div);
        var list=document.querySelector('ul');
        list.insertBefore(item,list.childNodes[0])
    }
    function openUrl(url){
        window.open(url,'_self')
    }
    function deleteFunction(){
        var item=this.parentNode.parentNode;
        var val=this.parentNode.textContent.replace('VisitDelete','');
        //to delete array Storage
        var local=localStorage.getItem('array');
        local=local.replace(val+',','')
        localStorage.setItem('array',local)
        localStorage.removeItem(val)
        var list=item.parentNode;
        list.removeChild(item);
    }
    function visitFunction(){
        var val=this.parentNode.textContent.replace('VisitDelete','');
        var goTo=localStorage.getItem(val)
       window.open(goTo,'_self')
    }
