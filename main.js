import { setupUrl } from './src/js/setupUrl';
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

setupUrl();
