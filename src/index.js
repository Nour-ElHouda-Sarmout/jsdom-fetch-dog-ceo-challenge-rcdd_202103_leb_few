console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){

  fetchesDogs();
  fetchesDogBreeds();

  const selectElement = document.querySelector('#breed-dropdown');

  selectElement.addEventListener('change', (event) => {
  //const result = document.querySelector('.result');
//  result.textContent = `You like ${event.target.value}`;
  filterDogBreedsByAlphabet(event.target.value);
});
});

function fetchesDogs(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((json) =>renderImgUrl(json));
}

function renderImgUrl(json) {
  //console.log(json);
  const div = document.getElementById("dog-image-container");
  for (let i in json.message) {
    //json.data[i].images.original.url;
    const img = document.createElement("img");
    img.style.width= "300px";
    img.style.height= "200px";
    img.src = json.message[i];
    div.appendChild(img);
  }
}

  function fetchesDogBreeds(){
        const breedUrl = 'https://dog.ceo/api/breeds/list/all';
        fetch(breedUrl)
          .then((resp) => resp.json())
          .then((json) =>renderBreedUrl(json));
  }

let DogBreed = [];
  function renderBreedUrl(json) {
    console.log(json);
    const ulDog = document.querySelector("ul");
    for (let i in json.message) {

      if(i !== ' '){
        let breed =  json.message[i];

        for (let b in breed){

          if(b !== ' '){
            let li = document.createElement("li");
            DogBreed.push(breed[b]);
            li.innerHTML = breed[b];
            li.addEventListener("click", function(){
              this.style.color = "blue";
            });
            ulDog.appendChild(li);
          }
        }
      }
    }
  }


  function filterDogBreedsByAlphabet(value){
    let selectedValue = value;
    let DogFilter = [];
    const ulDog = document.querySelector("ul");
    ulDog.innerHTML = "";

    for (let breed in DogBreed){
      if(selectedValue === 'a'){
        if(DogBreed[breed].charAt(0) === 'a'){
          DogFilter.push(DogBreed[breed]);
        }
      }
      if(selectedValue === 'b'){
        if(DogBreed[breed].charAt(0) === 'b'){
          DogFilter.push(DogBreed[breed]);
        }
      }
      if(selectedValue === 'c'){
        if(DogBreed[breed].charAt(0) === 'c'){
          DogFilter.push(DogBreed[breed]);
        }
      }
      if(selectedValue === 'd'){
        if(DogBreed[breed].charAt(0) === 'd'){
          DogFilter.push(DogBreed[breed]);
        }
      }
    }

    for (let filter in DogFilter){
      let li = document.createElement("li");
      li.innerHTML = DogFilter[filter];
      li.addEventListener("click", function(){
        this.style.color = "blue";
      });
      ulDog.appendChild(li);
    }
  }
