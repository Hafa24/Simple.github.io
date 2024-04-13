const personSelector = document.querySelector('.person-selector');
const personOne = document.querySelector('.personOne');
const personTwo= document.querySelector('.personTwo');
const messageHeader = document.querySelector('.message-header');
const sendbtn = document.querySelector('.sendbtn');
const message = document.querySelector('.message');
const input = document.querySelector('.typing-box');
window.onload =()=>{
    message.scrollTop = message.scrollHeight -message.clientHeight
    
   // alert("hf")
}

//const personSelector = document.querySelector('.person-selector');


personSelector.addEventListener('click',function chatername(name){
    if(name.target == personOne){
        personOne.classList.add('active-bg')
        personTwo.classList.remove('active-bg')
    messageHeader.innerText = personOne.innerText +" Chating"
        messageSender = "john"
        
    }else{
        
        personTwo.classList.add('active-bg')
    personOne.classList.remove('active-bg')
      messageHeader.innerText = personTwo.innerText + " Chating"
        messageSender = "melu"
    }
     
})

const newMessage = {
        messageSender:name,
        text:input.value,
    }
input.oninput =()=>{
    timestamp = new Date().toLocaleString('en-us',{hour:'numeric',minute:'numeric',second:'numeric',hour12:true})

   // alert(timestamp)
}


// sending new messages

sendbtn.onclick = ()=>{
    
    if(messageSender== "john"){
    message.innerHTML += `<div class="chats" oncontextmenu="del(this)"><div class="message-body-john"  >`+input.value+`</div>
	 <div class="message-footer-john" >`+timestamp+`</div>`
    }
    else{
        message.innerHTML += `<div class="chats" oncontextmenu="del(this)">`
        +
       ` <div class="message-body-melu"  >`+input.value+`</div>`+
	`<div class="message-footer-melu" >`+timestamp+`</div></div></div>`
   
    }
    message.scrollTop = message.scrollHeight-message.clientHeight
    input.value =""
    savechat()
}
const messageBody = document.querySelector('.message-body-john') 





function del(e){
 row = e;
    row.remove(row)
   // document.querySelector('.message-body-melu') .remove(e)
  //  document.querySelector('.message-footer-melu') .remove(this)
    savechat()
}

getchat()
//saving messages

function savechat(){
    localStorage.setItem('chats',message.innerHTML)
}

function getchat(){
  message.innerHTML =  localStorage.getItem('chats')
}
function getchat(){
  message.innerHTML =  localStorage.getItem('chats')
}
//localStorage.clear()