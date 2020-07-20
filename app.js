function addtodo(){
    var todoItem=document.getElementById("todo-item")
    var li = document.createElement("li")
    li.setAttribute('class','li')
    var litext=document.createTextNode(todoItem.value)
    // created li tag with text node

    //  delete button create
    var delBtn=document.createElement("button")
    var deltxt = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn btn-outline-danger")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(deltxt)

    // edit button
    var editbtn = document.createElement("button")
    var edittxt = document.createTextNode("EDIT")
    editbtn.appendChild(edittxt)
    editbtn.setAttribute('onclick','edititem(this)')
    editbtn.setAttribute('class','btn btn-outline-info')
    editbtn.setAttribute('id','eb')
  
    li.appendChild(litext)
    li.appendChild(delBtn)
    li.appendChild(editbtn)
    list.appendChild(li)
    todoItem.value=" "
    console.log(li)
    // we use append child instead of innerHTML;

}

var list = document.getElementById("list")

function deleteItem(w){
    w.parentNode.remove()
}

function deleteAll(){
    list.innerHTML=""
}
function edititem(e){
    var r =prompt("enter value to be change")
    e.parentNode.firstChild.nodeValue=r
    console.log()
}

// enter key working !!!!!
var input = document.getElementById("todo-item");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});