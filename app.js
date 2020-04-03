const submitBtn = document.querySelector('.submit');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const imgContainer = document.querySelector('.imgContainer');
const imageURL = document.querySelector('.imageURL input');

function generateMeme(e) {
    e.preventDefault();
    // make sure imageURL input has a value, else, throw an alert
    if(imageURL.value.length > 0) {
        // create div which contains single image
        let imgDiv = document.createElement('div');
        imgDiv.classList = "imageBox";
        // append imgDiv to imgContainer
        imgContainer.append(imgDiv);

        // create paragraphs which contain captions
        let topCaption = document.createElement('p');
        let bottomCaption = document.createElement('p');
        topCaption.classList = "caption capTop";
        bottomCaption.classList = "caption capBottom";
        // create new img
        let newImg = document.createElement('img');
        let URLValue = imageURL.value;
        newImg.src = URLValue;
        newImg.height = "400";
        newImg.width = "400"; 
        // append topTextDiv, newImg, and bottomTextDiv to imgDiv
        imgDiv.append(topCaption);
        imgDiv.append(newImg);
        imgDiv.append(bottomCaption);
        // add eventListener to remove meme
        imgDiv.addEventListener('click', remove);
        // add text to caption
        topCaption.innerText = topText.value;
        bottomCaption.innerText = bottomText.value;
        // remove all values from input fields
        imageURL.value = null;
        topText.value = null;
        bottomText.value = null;
    } else {
        alert("image URL requires an input!");
    }
}

function remove(e) {
    e.preventDefault();
    e.target.parentElement.remove();
}

submitBtn.addEventListener('click', generateMeme);