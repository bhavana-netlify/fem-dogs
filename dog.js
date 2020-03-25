const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const DOG_BREED = "https://dog.ceo/api/breed/akita/images/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
}

function addBreed(){
    const promise = fetch(DOG_BREED);
    promise
    .then(function(response){
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function(processedResponse){
        const img2 = document.createElement("img");
        img2.src = processedResponse.message;
        doggos.appendChild(img2);
    });
}



    function addNewSelect(event){
        const dogBreedOption = document.querySelector(".result");
        let str ='';
        const str1 = 'https://dog.ceo/api/breed/';
        const str2 = event.target.value;
        console.log(str2);
        const str3 = '/images/random';
        str = str1+str2+str3;
        console.log(str);

        dogBreedOption.innerHTML = `You  chose ${str2}`;
        const promise = fetch(str);
    promise
    .then(function(response){
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function(processedResponse){
        const img2 = document.createElement("img");
        img2.src = processedResponse.message;
        doggos.appendChild(img2);
    });
    };


    

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
document.querySelector(".add-breed").addEventListener("click", addBreed);


document.querySelector(".pet-select").addEventListener("change", addNewSelect);