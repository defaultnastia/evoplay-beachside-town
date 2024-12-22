(() => {
  const modal = document.getElementById('myModal');
  const openMenu = document.getElementById('open');
  const closeMenu = document.getElementsById('close');
  const linkMenu = document.getElementById('link');

  openMenu.onclick = function () {
    modal.classList.remove('hidden');
  };

  const closeModal = () => {
    modal.classList.add('hidden');
  };

  closeMenu.onclick = closeModal;
  linkMenu.onclick = closeModal;

  window.onclick = function (event) {
    if (event.current.target !== openMenu) closeModal;
  };
})();
