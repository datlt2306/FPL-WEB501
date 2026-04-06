import './style.css';
import { api } from './productServices';

api.getProducts().then(data => {
  document.querySelector('#app').innerHTML = `
    <ul>
      ${data.map(product => `<li>${product.name}</li>`).join('')}
    </ul>
  `
})
