//This is a copy of dog.js used for testing/experimenting.


const URL = "https://dog.ceo/api/breeds/image/random";

const dogs = document.querySelector(".doggos");

function addNewDoggo(){
const promise = fetch(URL);

promise.then(function(response){
    const processingPromise = response.json();
    return processingPromise;
})
.then(function(processedPromise){
    const img = document.createElement("img");
    img.src = processedPromise.message;
    console.log(img.src);
    img.alt = "cute dog";
    dogs.appendChild(img);
});
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);