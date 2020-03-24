const addMovieModel = document.getElementById('add-model');
// const addMovieModel = document.querySelector('#add-model');
// const addMovieModel = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
// console.log(startAddMovieButton);
const cancelAddMovieButton = addMovieModel.querySelector('.btn--passive');

const backdrop = document.getElementById('backdrop');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModel.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const movies =[];


const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';
    }
};

const renderNewMovieElement = (title,imageUrl,rating) => {

    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    console.log("Image url", imageUrl);
    newMovieElement.innerHTML = ` 
    <div class="movie-element_image">
        <img src="${ imageUrl }" alt="${title}">
    </div>
    <div>
    <div class="movie-element_info">
        <h2> ${title} </h2>
        <p> ${rating}/5 stars </p>
    </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);

}

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};


const toggleMovieModel = () => {
    addMovieModel.classList.toggle('visible'); 
    toggleBackdrop();
};

const clearMovieInput = () => {
    for(const userInput of userInputs) {
        userInput.value='';
    }
}

const cancelAddMovie = () => {
    toggleMovieModel();
    clearMovieInput();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    console.log(imageUrlValue);
    const ratingValue = userInputs[2].value;

    if(titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5){
        alert('Please enter valid valid values rating between 1 and 5');
        return;
    }
    const newMovie ={
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    
    movies.push(newMovie);

    console.log(movies);
    clearMovieInput();
    toggleMovieModel();
    renderNewMovieElement(newMovie.title,newMovie.image,newMovie.rating); // ekhan thek
    updateUI();
};

startAddMovieButton.addEventListener('click',toggleMovieModel);
// console.log(addMovieModel);
backdrop.addEventListener('click',toggleMovieModel);
cancelAddMovieButton.addEventListener('click',cancelAddMovie);
confirmAddMovieButton.addEventListener('click',addMovieHandler);
