    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');
    const images = document.querySelectorAll('.image-grid-item img');
    let currentIndex = 0;

    // Menu mobile
    hamburger.addEventListener('click', () => {
      sidebar.classList.add('active');
      overlay.classList.add('active');
    });

    function closeMenu() {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    }

    overlay.addEventListener('click', closeMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Lightbox - ouvrir
    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      });
    });

    // Lightbox - navigation
    function showImage(index) {
      if (index < 0) index = images.length - 1;
      if (index >= images.length) index = 0;
      currentIndex = index;
      lightboxImg.src = images[currentIndex].src;
    }

    prevArrow.addEventListener('click', () => showImage(currentIndex - 1));
    nextArrow.addEventListener('click', () => showImage(currentIndex + 1));

    // Navigation clavier
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      if (e.key === 'ArrowRight') showImage(currentIndex + 1);
      if (e.key === 'Escape') lightbox.classList.remove('active');
    });

    // Lightbox - fermer
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });

     const projects = [
      "hellmann.html",
      "talentueux.html",
      "femmesphotos.html",
      "nefza.html",
      "fenty.html",
      "DMW.html",
      "VCF.html",
      "laika.html",
      "Easylove.html",
      "martine.html",
      "linkee.html"
      ];


    const currentUrl = window.location.pathname.split("/").pop();
    const currentIndexProject = projects.indexOf(currentUrl);
    const nextProjectLink = document.getElementById('nextProjectLink');

    if (currentIndexProject !== -1) {
      const nextIndex = (currentIndexProject + 1) % projects.length;
      nextProjectLink.href = projects[nextIndex];
    } else {
      nextProjectLink.href = projects[0];
    }
