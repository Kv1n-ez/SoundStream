function showSidebar(albumIndex) {
    var cover = document.getElementById('sidebarCover');
    var title = document.getElementById('sidebarTitle');
    var songs = document.getElementById('sidebarSongs');
    var albumImage = document.querySelector('.container .card:nth-child(' + albumIndex + ') img');
    var sidebar = document.getElementById('sidebar');
  
    // Cambiar la información de la barra lateral según el álbum seleccionado
    switch (albumIndex) {
      case 1:
        title.textContent = 'Reginaldo Cucul';
        songs.innerHTML = '<li>Canción 1 del Álbum 1</li><li>Canción 2 del Álbum 1</li><li>Canción 3 del Álbum 1</li>';
        break;
      case 2:
        title.textContent = 'Farruko Pop';
        songs.innerHTML = '<li>Canción 1 del Álbum 2</li><li>Canción 2 del Álbum 2</li><li>Canción 3 del Álbum 2</li>';
        break;
      case 3:
        title.textContent = 'Rancherito Calibre 58';
        songs.innerHTML = '<li>Canción 1 del Álbum 3</li><li>Canción 2 del Álbum 3</li><li>Canción 3 del Álbum 3</li>';
        break;
    }
  
    // Mostrar la barra lateral con transición
    sidebar.classList.add('open');
  
    // Mostrar la imagen del álbum en la barra lateral
    cover.src = albumImage.src;
  }
  
  function hideSidebar() {
    var sidebar = document.getElementById('sidebar');
    
    // Ocultar la barra lateral con transición
    sidebar.classList.remove('open');
  }
  