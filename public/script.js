console.log('script.js loaded');

document.querySelector('#button-load').addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 400);
    getHwData(randomNum);
    getHwImage(randomNum);
})

async function getHwData(randomNum){
    const response = await fetch('/hwdata');
    const data = await response.json();

    document.querySelector("#hwName").textContent = data[randomNum].model_name;

    console.log(data[randomNum]);
}

async function getHwImage(randomNum){
    const response = await fetch('/hwimage');
    const data = await response.json();

    document.querySelector("#hwImage").src = data[randomNum].photo;
    document.querySelector("#hwImage").alt = data[randomNum].model_name;

    console.log(data[randomNum].photo);
}