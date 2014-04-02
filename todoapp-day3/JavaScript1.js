
var counter = 0;
function buttonClick(){
    "use strict";
    


    var fakeItemsArray = ["Real fake", " Fake fake", "artifially fake", "born fake"]
    document.getElementById("sel").innerHTML = " Please the fake item you want to purchase"; 
    

    var selecteditem1 = document.getElementById("todoInput").value;
    document.getElementById("listeditems").innerHTML += '<li id="selecteditem' + counter + '" onclick="strikeselected(\'selecteditem'+counter+'\');">' + selecteditem1 + '</li>';
    counter++;
  document.getElementById("todoInput");
       
}

function strikeselected(listID) {

    var ele = document.getElementById(listID);
    ele.style.setProperty("text-decoration", "line-through");
}