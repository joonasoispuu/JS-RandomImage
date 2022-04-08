const myButton = document.querySelector('button');
const myBox = document.querySelector('.box')
const colors = ['red', 'green','blue','yellow']
var count;
myButton.addEventListener('click', changeColor)

function changeColor(){
    let rnd = Math.floor(Math.random()* colors.length)
    let rnd2 = Math.floor(Math.random()* colors.length)
    if (count != rnd) 
    {
        myBox.style.backgroundColor = colors[rnd];
        count = rnd
    }
    else 
    {
        if (rnd2 == count) {
            if (rnd > 1 || rnd < 2) {
                myBox.style.backgroundColor = colors[rnd2+1];
            }
            else {
                myBox.style.backgroundColor = colors[rnd2-1];
            }
        } 
        else {
            myBox.style.backgroundColor = colors[rnd2];
            count = rnd2   
        }
    }
}