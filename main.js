import { setupUrl } from './src/js/setupUrl';
import { setupUrl2 } from './src/js/setupUrl2';
import './src/css/normalize.css';
import './src/css/app.css';

/*

 <img src="${logoMain2}" alt="logoInte" />
*/

document.querySelector('#app').innerHTML = `
    
   <div class="containerLogo">
    <div>
    <h1>Welcome to Rotunda Software Hash Url</h1>
    </div>
    </div>
`;

const urlFormat = '/:version/api/:collection/:id';
const urlInstance = '/6/api/listings/3?sort=desc&limit=10';
setupUrl(urlFormat, urlInstance);
setupUrl2();
