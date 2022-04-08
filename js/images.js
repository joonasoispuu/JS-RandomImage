const myBox = document.querySelector('.box')
const pictureArray = new Array("Biscuit.jpg", "Burger.jpg", "Cheese.jpg","Nugget.jpg","dropped soap.jpg");

myBox.addEventListener("click",choosePic);

let rndPrevVal;

function UpdateRndPrevVal(rnd) {
    rndPrevVal = rnd;
}
function choosePic() {
    let rnd = Math.floor(Math.random()* pictureArray.length);
    
    if (rnd === rndPrevVal) {
        console.log(rnd);
        choosePic();

    }
    else {
        document.getElementById("starting").src = `img/${pictureArray[rnd]}`;
        UpdateRndPrevVal(rnd);
    }
}