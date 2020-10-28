const menu = (function() {
  const div = document.createElement('div');
  div.id = 'menu';

  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = 'Menu';

  const appetizersTitle = document.createElement('h2');
  appetizersTitle.innerHTML = 'Appetizers';
  const appetizersPara = document.createElement('p');
  appetizersPara.id = 'appetizers';
  appetizersPara.innerHTML = 
  `Mozzarella Sticks
  Fried Jalapeno Poppers
  Cheesy Fries`;

  const entreesTitle = document.createElement('h2');
  entreesTitle.innerHTML = 'Entrees';
  const entreesPara = document.createElement('p');
  entreesPara.id = 'entrees';
  entreesPara.innerHTML = 
  `Filet Mignon
  Pizza
  Chicken Tenders`;

  const dessertsTitle = document.createElement('h2');
  dessertsTitle.innerHTML = 'Desserts';
  const dessertsPara = document.createElement('p');
  dessertsPara.id = 'desserts';
  dessertsPara.innerHTML = 
  `Cheesecake
  Chocolate Cake
  Creme Brulee`;

  div.append(
    title, 
    appetizersTitle, 
    appetizersPara, 
    entreesTitle, 
    entreesPara, 
    dessertsTitle, 
    dessertsPara
    );

    return div;
})();

export { menu };