(() => {
  const modal = document.getElementById('myModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const openMenu = document.getElementById('open');
  const closeMenu = document.getElementById('close');
  const linkItem = document.getElementsByClassName('mobileMenuLink');

  const displayMobileMenu = isDisplayed => {
    if (isDisplayed) {
      modal.style.display = 'flex';
      modalBackdrop.style.display = 'block';
    } else {
      modal.style.display = 'none';
      modalBackdrop.style.display = 'none';
    }
  };

  openMenu.onclick = function () {
    displayMobileMenu(true);
  };

  closeMenu.onclick = function () {
    displayMobileMenu(false);
  };

  Array.from(linkItem).forEach(element => {
    element.onclick = function () {
      displayMobileMenu(false);
    };
  });

  window.onclick = function (event) {
    if (!modal.contains(event.target) && !openMenu.contains(event.target)) {
      displayMobileMenu(false);
    }
  };
})();
