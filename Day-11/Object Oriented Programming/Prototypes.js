let myHeroes = ["thor" , "spiderman"];

let heroPower = {
    thor : "Hammer",
    spiderman : "sliky"
};

Object.prototype.yash = function(){
    console.log(`yash is present in all objects`);
};

Array.prototype.heyYash = function(){
    console.log('yash says hello');
}

// heroPower.yash();
// myHeroes.yash();


String.prototype.trueLength = function(){
    console.log(`True Length is : ${this.trim().length}`);
}

const anotherUserName = 'ChaiAurCode        ';
anotherUserName.trueLength();
"yash".trueLength();

