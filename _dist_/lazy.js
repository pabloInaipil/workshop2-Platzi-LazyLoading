
let totalImages = 0;
let loadedImages = 0;
// Instanciar Intersection Observer
const observer = new IntersectionObserver((entries) => { 
    //esto es lo que va a ejecutar el observer por cada elemento que observa
    entries.filter(isIntersecting).forEach(loadImage);

});

const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;

const loadImage = (intersectionEntry) => { 
    const imgNode = intersectionEntry.target; // container (DIV)
    imgNode.src = imgNode.dataset.url_imagen;
    //incrementa la cantidad de la variable loadedImages
    imgNode.onload = () => { 
        loadedImages += 1;
        logState();
    };
    // des registra la imagen (unlisten)
     observer.unobserve(imgNode); 
};

export const registerImage = (imagen) => {
    observer.observe(imagen);
    totalImages += 1;
    logState();
};

function logState() { 
    console.log(`✳ Total Imágenes: ${totalImages}`);
    console.log(`✅ Imágenes cargadas: ${loadedImages}`);
    console.log("-----------------------------------");
}