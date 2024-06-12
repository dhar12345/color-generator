let colorGenarator = document.querySelector (".colorGenarator")
let newColor = document.querySelector (".newColor")

newColor.addEventListener("click", function(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);

    console.log(red);
    colorGenarator .style .backgroundColor = `rgb( ${red} ,${green},${blue})`;
});