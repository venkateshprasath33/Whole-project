function fun(){
    let b;
    let a=prompt("What is your name?");
    if(a==""){
        
        alert("Please enter")
    }
    else{
       b=a
    }
    document.getElementById("div0").innerHTML=b;
    
}

function allowDrop(ev) {
  ev.preventDefault();
  }

  function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop1(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  alert("one todo is pending !");
  var col=document.getElementById("div0");
  col.style.color = "white";
  col.style.backgroundColor= "red";
  col.style.border="1px solid black";
  col.style.height="35px";
  col.style.width="85%";
  col.style.padding="10px";
  }

  function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  alert("one todo completed sucessfully !");
  var col2=document.getElementById("div0");
  col2.style.color = "white";
  col2.style.backgroundColor= "green";
  col2.style.border="1px solid black";
  col2.style.height="35px";
  col2.style.width="85%";
  col2.style.padding="10px";
  }
  function d(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    // alert("to do is deleted ");
    var del=document.getElementById("div0");
    del.style.color="Black";
    del.style.display="none";
    let popup= document.getElementById('popup');
    popup.classList.add("open-popup");
    }
    function closepopup(){
        let popup= document.getElementById('popup');
        popup.classList.remove("open-popup");
    }
    function col(ev){
        let popup= document.getElementById('cswitch');
        popup.classList.add("open-popup");
        popup.style.visibility="visible";
    }
    function col1(){
        let popup= document.getElementById('cswitch');
        popup.classList.remove("open-popup");
        popup.style.visibility="hidden";
    }
// dashboard function

    

        function z(){
            var che1=document.getElementById('side');
            var sche1=document.getElementById('f-top')
            che1.style.background="plum";
            sche1.style.background="plum";
            }
        function y(){
            var che2=document.getElementById('side');
            var sche2=document.getElementById('f-top')
            che2.style.background="darkolivegreen";
            sche2.style.background="darkolivegreen";
            }
        function x(){
            var che3=document.getElementById('side');
            var sche3=document.getElementById('f-top')
            che3.style.background="grey";
            sche3.style.background="grey";
            }
        function w(){
            var che4=document.getElementById('side');
            var sche4=document.getElementById('f-top')
            che4.style.background="indianred";
            sche4.style.background="indianred";
            }
        function v(){
            var che5=document.getElementById('side');
            var sche5=document.getElementById('f-top')
            che5.style.background="indigo";
            sche5.style.background="indigo";
            }
        function u(){
            var che6=document.getElementById('side');
            var sche6=document.getElementById('f-top')
            che6.style.background="aquamarine";
           sche6.style.background="aquamarine";
            }
        function t(){
            var che7=document.getElementById('side');
            var sche7=document.getElementById('f-top')
            che7.style.background="yellowgreen";
            sche7.style.background="yellowgreen";
            }
        function s(){
            var che=document.getElementById('side');
            var sche=document.getElementById('f-top')
            che.style.background="cornflowerblue";
            sche.style.background="cornflowerblue";
            }

    function bot(event){
        let popup= document.getElementById('sub-menu');
        popup.classList.add("open-popup");
        popup.style.visibility="visible"; 
    }    
    function bot1(event){
        let popup= document.getElementById('sub-menu');
        popup.classList.add("open-popup");
        popup.style.visibility="hidden"; 
    }      


    // colorpicker function

    //  below customfields js

    function displayResult()
{
var table=document.getElementById("myTable");
var row=table.insertRow(0);
var cell1=row.insertCell(0);
var cell2=row.insertCell(1);
var cell3=row.insertCell(2);
var cell4=row.insertCell(3);
    cell1.innerHTML=document.getElementById('fname').value;;
    cell2.innerHTML=document.getElementById('lname').value;
    cell3.innerHTML=document.getElementById('desg').value;
    cell4.innerHTML='<button  id="h" onclick="editData(this)">Edit</button>';
}
function deleteRow()
{
document.getElementById("myTable").deleteRow(0);
}
function editData(button){

    let row = button.parentNode.parentNode;

    let fname = row.cells[0]; 
	let lname = row.cells[1]; 
	let designation = row.cells[2]; 
	 
    let f1 = prompt("Enter the First name:", fname.innerHTML);
    let f2 = prompt("Enter the Last name:", lname.innerHTML);
    let f3 = prompt("Enter the Designation:", designation.innerHTML);

    fname.innerHTML = f1;
    lname.innerHTML = f2;
    designation.innerHTML = f3;
}


// above code customfields js


// insertrow function


        // let lists = document.getElementsByClassName("list");
        // let rightbox=document.getElementById("right");
        // let leftbox=document.getElementById("left");

        // for(list of lists){
        //     list.addEventListener("dragstart", function(){
        //         let selected = e.target;

        //         rightbox.addEventListener("dragover",  function(){
        //           e.preventDefault();
        //         });
        //         rightbox.addEventListener("drop",  function(){
        //           rightbox.appendChild(selected);
        //           selected = null;
        //           alert("To Do list is Completed...");
        //         });

        //         leftbox.addEventListener("dragover",  function(){
        //           e.preventDefault();
        //         });
        //         leftbox.addEventListener("drop",  function() {
        //           leftbox.appendChild(selected);
        //           selected = null;
        //           alert("To Do list is Pending...");
        //         });
        //       })    
        // }

// dragElement(document.getElementById("mydiv"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }