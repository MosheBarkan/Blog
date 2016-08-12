var pressed = false;
var bar1;
var bar2;
var bar3;
var newMenu;

function setup() {
   bar1 = document.getElementById('bar1');
   bar2 = document.getElementById('bar2');
   bar3 = document.getElementById('bar3');
   sidePanel = document.getElementById('panelID');
   newMenu = document.getElementById('newMenu');

}


function newMenuClick() {
    console.log("click");
    setup();
    if (pressed === false) {
        //bar1
        bar1.style.animation = "rotateToDown 0.25s ease-in 1 forwards";
        //bar2
        bar2.style.animation = "flyOut 0.25s ease-in 1 forwards";
        //bar3
        bar3.style.animation = "rotateToUp 0.25s ease-in 1 forwards";
        //panel
        sidePanel.style.animation = "come 0.25s ease-out 1 forwards";
        pressed = true;
    } else {
        //bar1
        bar1.style.animation = "rotateToDownBack 0.25s ease-in 1 forwards reverse";
        //bar2
        bar2.style.animation = "flyOutBack 0.25s ease-in 1 forwards reverse";
        //bar3
        bar3.style.animation = "rotateToUpBack 0.25s ease-in 1 forwards reverse";
        //panel
        sidePanel.style.animation = "comeBack 0.25s ease-out 1 forwards reverse";
        pressed = false;
    }
}
