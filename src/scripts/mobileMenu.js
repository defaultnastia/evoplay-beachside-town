(() => {
  const modal = document.getElementById('myModal');
  const openMenu = document.getElementById('open');
  const closeMenu = document.getElementById('close');
  const linkMenu = document.getElementById('link');

  openMenu.onclick = function () {
    modal.style.display = 'block';
  };

  const closeModal = () => {
    modal.style.display = 'none';
  };

  closeMenu.onclick = closeModal;
  linkMenu.onclick = closeModal;

  window.onclick = function (event) {
    if (event.current.target !== openMenu) closeModal;
  };
})();
