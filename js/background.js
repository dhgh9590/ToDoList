
function back(){
    let section = document.querySelector("#section");
    const images = [
        "4.jpg",
        "5.jpg",
        "6.png",
        "7.jpg",
        "8.jpg"
    ];
    
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    
    const image = document.createElement("img");
    
    image.src = `img/${chosenImage}`;
    
    
    section.appendChild(image);
    
}

setInterval(back,10000);

back();
