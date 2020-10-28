const contact = (function() {
  // creates a div and all the content, appends content to div, and returns div
  const div = document.createElement('div');
  div.id = 'contact';
  
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Contact';
  
  const address = document.createElement('p');
  address.id = 'address';
  address.innerHTML = 'Address: 1000 Restaurant Way, New York, NY';
  
  const email = document.createElement('p');
  email.id = 'email';
  email.innerHTML = 'Email: contact@restaurant.com';
  
  const phone = document.createElement('p');
  phone.id = 'phone';
  phone.innerHTML = 'Phone: (001)234-7589';
  
  div.append(h1, address, email, phone);

  return div;
})();

export { contact };