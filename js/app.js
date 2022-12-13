'use strict'

//****GLOBALS******

let productArray = [];
let votingRounds =25;

//****DOM WINDOWS****

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultsBtn = document.getElementById('show-results-btn');
let resultslist = document.getElementById('results-container');


//****CONSTRUCTOR FUNCTION****

function Product(name, imgExtension = 'jpg'){
  this.name = name;
  this.img = `img/${name}.${imgExtension}`;
  this.votes = 0;
  this.views = 0;
} 


//****HELPER FUNCTIONS / UTILITIES**** 

function randomIndex(){
  return Math.floor(Math.random()* productArray.length);
}

function renderImg(){
  //TODO: 2 unique images and populate the images
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();
  let imgThreeIndex = randomIndex();

 //**Validation to make sure the numbers are unique**
  while(imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex) {
    imgTwoIndex = randomIndex();
    imgOneIndex = randomIndex();
    imgThreeIndex = randomIndex();
  }
  
  imgOne.src = productArray[imgOneIndex].img;
  imgTwo.src = productArray[imgTwoIndex].img;
  imgThree.src = productArray[imgThreeIndex].img;
  imgOne.title = productArray[imgOneIndex].name;
  imgTwo.title = productArray[imgTwoIndex].name;
  imgThree.title = productArray[imgThreeIndex].name;
  imgOne.alt = `this is an image of ${productArray[imgOneIndex].name}`;
  imgTwo.alt = `this is an image of ${productArray[imgTwoIndex].name}`;
  imgThree.alt = `this is an image of ${productArray[imgThreeIndex].name}`;

  //TODO: increase the number of views on the images that have been rendered

  productArray[imgOneIndex].views++;
  productArray[imgTwoIndex].views++;
  productArray[imgThreeIndex].views++;
}

//*****TO DO***** 

//*****EVENT HANDLERS*****

function handleClick(event){
  //TODO: Identify what image was clicked on

  let imgClicked = event.target.title;

  console.log(imgClicked);

  //TODO: If I can identify the img clicked, I need to increase the number of votes to that specific image

  for (let i = 0; i < productArray.length; i++) {
    if(imgClicked === productArray[i].name){
      productArray[i].votes++;
    }
  }

  //TODO: Rerender 2 new images

  renderImg();

  //TODO: decrement voting rounds

  votingRounds--;

  //TODO: once voting rounds have ended - not allow more clicks
  if(votingRounds === 0) {
    imgContainer.removeEventListener('click', handleClick);
  }
}

function handleShowResults(){
  //TODO: Display results once there are no more votes
  if(votingRounds === 0){
    for(let i = 0; i < productArray.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${productArray[i].name} - views: ${productArray[i].views} & votes: ${productArray[i].votes}`;
      resultslist.appendChild(liElem);
    }
    resultsBtn.removeEventListener('click', handleShowResults);
  }


}

//*****EXECUTABLE CODE**** 

let sweepProduct = new Product('sweep', 'png');
let bagProduct = new Product('bag');
let bananaProduct = new Product('banana');
let bathroomProduct = new Product('bathroom');
let bootsProduct = new Product('boots');
let breakfastProduct = new Product('breakfast');
let bubbleGumProduct = new Product('bubblegum');
let chairProduct = new Product('chair');
let cthulhuProduct = new Product('cthulhu');
let dogDuckProduct = new Product('dog-duck');
let dragonProduct = new Product('dragon');
let penProduct = new Product('pen');
let petSweepProduct = new Product('pet-sweep');
let scissorsProduct = new Product('scissors');
let sharkProduct = new Product('shark');
let tauntaunProduct = new Product('tauntaun');
let unicornProduct = new Product('unicorn');
let waterCanProduct = new Product('water-can');
let wineGlassProduct = new Product('wine-glass');

productArray.push(bagProduct, bananaProduct, bathroomProduct, bootsProduct, breakfastProduct, bubbleGumProduct, chairProduct, cthulhuProduct, dogDuckProduct, dragonProduct, penProduct, petSweepProduct, scissorsProduct, sharkProduct, sweepProduct, tauntaunProduct, unicornProduct, waterCanProduct, wineGlassProduct);


renderImg();
randomIndex();

imgContainer.addEventListener('click',handleClick);
resultsBtn.addEventListener('click', handleShowResults);


//console.log(productArray);

//test 1