const home = (function() {
  const div = document.createElement('div');
  div.id = 'homepage-content';

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Fine Outdoor Dining Experience';
  
  const img = document.createElement('img');
  img.src = "../src/assets/restaurant.jpg"; 
  
  const p = document.createElement('p');
  p.innerHTML = 'Please come to our amazing restaurant!';

  div.append(h1, img, p);

  return div; 
})();

export { home };