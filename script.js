class Monster {

    constructor(size,color,element,personality){
        this.size = size;
        this.color = color;
        this.element = element;
        this.personality = personality;
    }

    showSize (){
        console.log(this.size)
    }
    showColor (){
        console.log(this.color)
    }
    showElement (){
        console.log(this.element)
    }
    showPersonality (){
        console.log(this.personality)
    }

}



let monster1 = new
Monster("tiny","black","shadow","shy");

let monster2 = new
Monster("large","snow","ice","aggressive");

let monster3 = new
Monster("medium","bright orange","fire","friendly");


//size buttons
document.getElementById("size1").addEventListener("click", function() {   
monster1.showSize();
});

document.getElementById("size2").addEventListener("click", function() {   
monster2.showSize();
});

document.getElementById("size3").addEventListener("click", function() {   
monster3.showSize();
});

//color buttons
document.getElementById("color1").addEventListener("click", function() {   
monster1.showColor();
});
document.getElementById("color2").addEventListener("click", function() {   
monster2.showColor();
});
document.getElementById("color3").addEventListener("click", function() {   
monster3.showColor();
});

//Element buttons
document.getElementById("element1").addEventListener("click", function() {   
    monster1.showElement();
    });
document.getElementById("element2").addEventListener("click", function() {   
    monster2.showElement();
    });
document.getElementById("element3").addEventListener("click", function() {   
    monster3.showElement();
    });

//Personality Buttons
document.getElementById("personality1").addEventListener("click", function() {   
    monster1.showPersonality();
    });
document.getElementById("personality2").addEventListener("click", function() {   
    monster2.showPersonality();
    });
document.getElementById("personality3").addEventListener("click", function() {   
    monster3.showPersonality();
    });        