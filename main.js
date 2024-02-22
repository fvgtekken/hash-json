import { setupUrl } from './src/js/setupUrl';
import './src/css/normalize.css';
import './src/css/app.css';

/*
  Pure Js and html with vite (spa version like zoo)
*/

document.querySelector('#app').innerHTML = `
   <div class="container">
      <div>
       <h1>Welcome to Rotunda Software Hash Url</h1>
      </div>
      <div>
        <button id="bhash" name="hash" class="button">Get Solution!</button></div></div>
      </div>
    <div  id="contentSolution"></div>
`;

const urlFormat = '/:version/api/:collection/:id';
const urlInstance = '/6/api/listings/3?sort=desc&limit=10';
const eleButton = document.querySelector(`#bhash`);
const eleContent = document.querySelector(`#contentSolution`);

const objParams = {
  urlFormat,
  urlInstance,
  eleButton,
  eleContent,
};

setupUrl(objParams);
