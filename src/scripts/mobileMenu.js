(() => {
  const modal = document.getElementById('myModal');
  const openMenu = document.getElementById('open');
  const closeMenu = document.getElementById('close');
  const linkMenu = document.getElementById('link');

  openMenu.onclick = function () {
    modal.style.display = 'block';
  };

  closeMenu.onclick = function () {
    modal.style.display = 'none';
  };

  linkMenu.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.current.target == modal) {
      modal.style.display = 'none';
    }
  };
})();
