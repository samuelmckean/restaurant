import { home } from './scripts/home';
import { contact } from './scripts/contact';
import { menu } from './scripts/menu';

const tabSwitch = (function() {
// write tab-switching logic

  const content = document.getElementById('content');

  function _replaceChild(parentNode, newChild) {
    while (parentNode.childElementCount !== 0) {
      parentNode.removeChild(parentNode.lastChild);
    }
    parentNode.append(newChild);
  }

  const _homeClicked = function() {
    _replaceChild(content, home);
  }

  const _contactClicked = function() {
    _replaceChild(content, contact);
  }

  const _menuClicked = function() {
    _replaceChild(content, menu);
  }

  _homeClicked();

  // wire up eventListeners
  document.getElementById('home-nav').addEventListener('click', _homeClicked);
  document.getElementById('contact-nav').addEventListener('click', _contactClicked);
  document.getElementById('menu-nav').addEventListener('click', _menuClicked);
})();