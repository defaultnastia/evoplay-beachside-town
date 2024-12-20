(() => {
  const modal = document.getElementById('myModal');
  const openMenu = document.getElementById('open');
  const closeMenu = document.getElementById('close');

  openMenu.onclick = function () {
    modal.style.display = 'block';
  };

  closeMenu.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal menu, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
})();
