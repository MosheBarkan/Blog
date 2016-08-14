function Person(name,age) {
  this.name = name;
  this.age = age;
}
var forIndex = 0;
var newPerson = [];

$("#martefButton").click(function(){
    var innerText = $("#textBox").val();
    if (innerText.length > 0) {
       if(!AlreadyIn(newPerson,innerText)) {
       dieAlive();
       newPerson[forIndex] = new Person(innerText,18);
       addElement("Added a new person named : " + newPerson[forIndex].name);
       forIndex++;
       $("#textBox").val('');
      }
      else {
        console.log(("This value is already inside the database"));
        dieAlive();
        addElement("Taken Already");
        $(".popup").css("background-color" , "red");

      }
  }
});

function printAll() {
  if(isObjectEmpty(newPerson)) {
    console.log("nothing in here")
  }
  else {
    for (var variable in newPerson) {
      console.log("name: " + newPerson[variable].name);
      console.log("age: " + newPerson[variable].age);
    }
  }
}

function AlreadyIn(someObject,valueToCompare) {
  var newArray = Object.values(someObject);
  for(var i=0;i<newArray.length;i++) {
    var secondArray = Object.values(newArray[i]);
    for(let shit in secondArray) {
      if(secondArray[shit] === valueToCompare) {
        return true;
      }
     }
  }
  return false;
}
//Check if any object is empty
function isObjectEmpty(Object) {
  if(Object.length === 0 ) {
    return true;
  }
  else {
    return false;
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

function dieAlive() {
  if($(".popup").length > 0) {
    $(".popup").remove();
  }
}

$("#textBox").keypress(function(event) {
 if(event.key === "Enter") {
  $("#martefButton").click();
 }
});