let colorSubmit = document.querySelector('.color-sub')
let flower = document.querySelector('.flower')
function applyBlur() {
    const blurValue = document.getElementById('blur').checked ? 'blur(6px)' : '';
    flower.style.filter = `${blurValue} ${flower.style.filter}`;
}
function applySepia() {
    const sepiaValue = document.getElementById('serpia').checked ? 'sepia(100%)' : '';
    flower.style.filter = `${sepiaValue} ${flower.style.filter}`;
}
function applyInvert() {
    const invertValue = document.getElementById('negatyw').checked ? 'invert(100%)' : '';
    flower.style.filter = `${invertValue} ${flower.style.filter}`;
}
colorSubmit.addEventListener('click',() => {
    applyBlur()
    applySepia()
    applyInvert()
})
let bee = document.querySelector('.bee')

let blackmodebutton = document.getElementById('blackwhite')

blackmodebutton.addEventListener('click',() => {
    bee.style.filter = 'grayscale(100%)';
})
let colored = document.getElementById('colored')
colored.addEventListener('click',() => {
    bee.style.filter = 'grayscale(0%)';
})
let cloud = document.querySelector('.cloud')
let cloudChecker = document.querySelector('.cloudRange').value
let cloudSubmit = document.querySelector('.cloudButton')
console.log(cloudChecker);

cloudSubmit.addEventListener('click',() =>{
    cloudChecker = document.querySelector('.cloudRange').value
    console.log(cloudChecker);
    
    cloud.style.filter = `opacity(${cloudChecker}%)`
})
let dog = document.querySelector('.dog')
let dogChecker = document.querySelector('.dogRange').value
let dogSubmit = document.querySelector('.dogButton')
console.log(cloudChecker);

dogSubmit.addEventListener('click',() =>{
    dogChecker = document.querySelector('.dogRange').value
    console.log(dogChecker);
    
    dog.style.filter = `brightness(${dogChecker}%)`
})

