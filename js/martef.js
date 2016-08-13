function Person(name,age) {
  this.name = name;
  this.age = age;
}
var forIndex = 0;
var newPerson = [];

$("#martefButton").click(function(){
    var innerText = $("#textBox").val();
    if (innerText.length > 0) {
    newPerson[forIndex] = new Person(innerText,18);
    forIndex++;
  }
});

function testing() {
  for (var variable in newPerson) {
    console.log(newPerson[variable].name);
  }
}
