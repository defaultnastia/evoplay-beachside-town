(() => {
  const modal = document.getElementById('myModal');
  const openMenu = document.getElementById('open');
  const closeMenu = document.getElementById('close');
  const linkItem = document.getElementsByClassName('mobileMenuLink');

  openMenu.onclick = function () {
    modal.style.display = 'block';
  };

  closeMenu.onclick = function () {
    modal.style.display = 'none';
  };

  Array.from(linkItem).forEach(element => {
    element.onclick = function () {
      modal.style.display = 'none';
    };
  });

  window.onclick = function (event) {
    if (
      !modal.contains(event.target) &&
      event.target !== modal &&
      event.target !== openMenu &&
      !openMenu.contains(event.target)
    ) {
      modal.style.display = 'none';
    }
  };
})();
