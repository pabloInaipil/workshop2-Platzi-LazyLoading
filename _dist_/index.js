import {registerImage} from "./lazy.js";

const createImageNode = ()=>{
    //crear número aleatorio entre 1 y 120
    const random = () => Math.floor(Math.random() * (122 - 1)) + 1;
    const url = "https://randomfox.ca/images/";

    const container = document.createElement('div');
    container.className = "p-4";

    const imagen = document.createElement('img');
    imagen.className = "mx-auto rounded-md bg-gray-300";
    imagen.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
    imagen.dataset.url_imagen = url + random() + ".jpg";
    imagen.width = 320;

    container.append(imagen);
    return [container, imagen];
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images');
const addButton = document.getElementById('submit');
const clsButton = document.getElementById('reset');

const addImage = () => {
    const [node, newImage] = createImageNode();
    mountNode.append(node);
    registerImage(newImage);
};

const clearImages = () =>{
    //eliminar todos los nodos de img
    const container = document.querySelector('#images');
    container.innerHTML = "";
};

addButton.addEventListener('click', addImage);
clsButton.addEventListener('click', clearImages);