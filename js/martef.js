function Person(name,age) {
  this.name = name;
  this.age = age;
}
var forIndex = 0;
var newPerson = [];

$("#martefButton").click(function(){
    var innerText = $("#textBox").val();
    if (innerText.length > 0) {
    divAlive();
    newPerson[forIndex] = new Person(innerText,18);
    addElement("Added a new person named : " + newPerson[forIndex].name);
    forIndex++;
    $("#textBox").val('');
  }
});

function printAll() {
  for (var variable in newPerson) {
    console.log("name: " + newPerson[variable].name);
    console.log("age: " + newPerson[variable].age);
  }
}

function addElement(text) {
  var newElement = document.createElement('div');
  newElement.className = "popup";
  newElement.id = "popupID";
  newElement.innerHTML = text;
  document.body.appendChild(newElement);
  $("#popupID").click(function() {$("#popupID").remove();});
}

function divAlive() {
  if($(".popup").length > 0) {
    $(".popup").remove();
  }
}

