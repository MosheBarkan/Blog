function Person(name,age) {
  this.name = name;
  this.age = age;
}
var forIndex = 0;
var newPerson = [];

$("#martefButton").click(function(){
    var innerText = $("#textBox").val();
    if (innerText.length > 0 && !AlreadyIn(newPerson,innerText)) {
       
       dieAlive("class","popup");
       newPerson[forIndex] = new Person(innerText,18);
       addElement("Added a new person named : " + newPerson[forIndex].name);
       forIndex++;
       $("#textBox").val('');
    }
    else {
        if(AlreadyIn(newPerson,innerText)) {
        console.log(("This value is already inside the database"));
        dieAlive("class","popup");
        addElement("Taken Already");
        $(".popup").css("background-color" , "red"); 
      }
    }
  }
);

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
  $("#popupID").click(function() {fadeAway("#popupID",200);});
}

function dieAlive(classOrID,nameOfClassOrID) {
  switch(classOrID.toLowerCase()) {
    case "class":
      let toRemove1 = "." + nameOfClassOrID;
      if($(toRemove1).length > 0) {
       $(toRemove1).remove();
      }
      break;

    case "id":
      let toRemove2 = "#" + nameOfClassOrID;
      if($(toRemove2).length > 0) {
       $(toRemove2).remove();
      }
      break;
  }
}

$("#textBox").keypress(function(event) {
 if(event.key === "Enter") {
  $("#martefButton").click();
 }
});


class Box {
  constructor(height,width) {
    this.height = height;
    this.width = width;
  }

  get heykef() {
    return(this.height*2 + this.width*2);
  }

  get shetah() {
    return(this.height * this.width);
  }
};

var ourBox = {};
$(".newButton").click(function() {
  var BoxWidth = $("#widthBox").val();
  var BoxHeight = $("#heightBox").val();
  if(BoxWidth.length > 0 && BoxHeight.length > 0 ){
    console.log(BoxHeight + " " + " " + BoxWidth);
    ourBox = new Box(BoxHeight,BoxWidth);
    console.log(ourBox);
    dieAlive("ID","boxInfo");
    createAnyElement('div',"Height: " + BoxHeight + " Width: " + BoxWidth,'boxInfo');
  }
});


function createAnyElement(elementName,TextWithingTheElement,elementID) {
  var createAnyElementVar = document.createElement(elementName);
  createAnyElementVar.innerHTML = TextWithingTheElement;
  createAnyElementVar.id = elementID;
  document.body.appendChild(createAnyElementVar);
  createAnyElementVar.addEventListener("click",newElementClick);
}

function newElementClick(e) {
  fadeAway(this,200);
}

function fadeAway(inJquery,durationInMS) {
  $(inJquery).animate( {
    opacity: 0
  },durationInMS,function() {
    $(inJquery).remove();
  });
}
