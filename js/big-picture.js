import './rendering-previews.js';
import { picturesArray } from './rendering-previews.js';

const miniPictures = document.querySelectorAll('.product__image');

const showBigPicture = document.querySelector('.big-picture');


//console.log(miniPictures);


const gallery = function (miniPicture, photo) {
  miniPicture.addEventListener('click', function() {
    console.log('Клик!');
    showBigPicture.classList.remove('hidden');

    });
};

let result = picturesArray.map(({url})  => url);
console.log(result);




for (let i=0; i < picturesArray.length; i++) {
  gallery(miniPictures[i], result[i]);
}
