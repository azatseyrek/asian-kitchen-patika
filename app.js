import { menu } from './data.js';

const divDOM = document.querySelector('.btn-container');

const menuItemFunctions = (item) => {
  const { title, img, price, desc } = item;
  return `
  <div class="menu-items col-lg-6 col-sm-12">
  <img
    src= ${img}
    alt="Dan"
    dan=""
    mian=""
    class="photo"
  />
  <div class="menu-info">
    <div class="menu-title">
      <h3>${title}</h4>
      <h3 class="price">${price}</h3>
    </div>
    <div class="menu-text">
      ${desc}
    </div>
  </div>
  </div>
  `;
};

const createButton = (text) => {
  const btn = document.createElement('button');
  btn.classList = 'btn btn-outline-dark btn-item';
  btn.setAttribute('data-id', text);
  btn.innerHTML = text;
  btn.addEventListener('click', () => {
    const menuDOM = document.querySelector('.section-center');
    menuDOM.innerHTML = '';
    if (text !== 'All') {
      const filteredMenu = menu.filter((item) => item.category === text);
      filteredMenu.forEach((item) => {
        menuDOM.innerHTML += menuItemFunctions(item);
      });
    } else {
      menu.forEach((item) => {
        menuDOM.innerHTML += menuItemFunctions(item);
      });
    }
  });
  return btn;
};

const allBtn = createButton('All');
const koreaBtn = createButton('Korea');
const japanBtn = createButton('Japan');
const chinaBtn = createButton('China');

if (divDOM) {
  divDOM.append(allBtn);
  divDOM.append(koreaBtn);
  divDOM.append(japanBtn);
  divDOM.append(chinaBtn);
  allBtn.click();
} else {
  console.log('divDOM yok');
}
