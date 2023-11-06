
/*----------------------- Codigo Javascript formulario----------------------->*/
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    let valid = true;

    // Validar el nombre (solo letras y espacios)
    if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
      valid = false;
      alert("Por favor, ingrese un nombre válido sin números.");
      nameInput.focus();
    }

    // Validar el correo electrónico (formato de correo electrónico válido)
    if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
      valid = false;
      alert("Por favor, ingrese una dirección de correo electrónico válida.");
      emailInput.focus();
    }


    // Validar el número de teléfono (solo dígitos)
    if (!/^\d+$/.test(phoneInput.value)) {
      valid = false;
      alert("Por favor, ingrese un número de teléfono válido.");
      phoneInput.focus();
    }

    // Validar campos requeridos
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '') {
      valid = false;
      alert("Todos los campos son requeridos.");
    }

    if (!valid) {
      event.preventDefault(); // Evitar el envío del formulario si hay errores
    }
  });
});


/* Barra navegación*/
document.addEventListener("DOMContentLoaded", function () {
  const abrirNavlist = document.getElementById("abrir-nav-links");
  const cerrarMenu = document.querySelector(".cerrar-menu");
  const navlist = document.querySelector(".nav-links");

  // Agregar evento clic al botón para abrir el menú
  abrirNavlist.addEventListener("click", function () {
    navlist.style.display = "flex"; // Muestra el navlist cuando se hace clic
  });

  // Agregar evento clic al botón para cerrar el menú
  cerrarMenu.addEventListener("click", function () {
    navlist.style.display = "none"; // Oculta el navlist cuando se hace clic
  });
});

/*Seccion Mangas*/
/*Dragon Ball*/
const botonAnt = document.getElementById("mangas__bonton-ant");
const botonSig = document.getElementById("mangas__bonton-sig");
const track = document.getElementById("track");
const cajaLista = document.getElementById("mangas__caja-lista");
const caja = document.querySelectorAll(".mangas__caja");
if (botonAnt && botonSig && track && cajaLista && caja) {
  const cajaAncho = caja[0].offsetWidth;

  botonAnt.onclick = () => Mover(1);
  botonSig.onclick = () => Mover(2);

  function Mover(value) {
    const trackAncho = track.offsetWidth;
    const listaAncho = cajaLista.offsetWidth;

    track.style.left == ""
      ? (leftPosition = track.style.left = 0)
      : (leftPosition = parseFloat(track.style.left.slice(0, -2) * -1));
    if (leftPosition < trackAncho - listaAncho && value == 2) {
      track.style.left = `${-1 * (leftPosition + cajaAncho)}px`;
    } else if (leftPosition > 0 && value == 1) {
      track.style.left = `${-1 * (leftPosition - cajaAncho)}px`;
    }
  }
}

/*Dragon Ball Z*/
const botonAntz = document.getElementById("mangas__bonton-antz");
const botonSigz = document.getElementById("mangas__bonton-sigz");
const trackz = document.getElementById("trackz");
const cajaListaz = document.getElementById("mangas__caja-listaz");
const cajaz = document.querySelectorAll(".mangas__cajaz");
if (botonAntz && botonSigz && trackz && cajaListaz && cajaz) {
  const cajaAnchoz = caja[0].offsetWidth;

  botonAntz.onclick = () => Moverz(1);
  botonSigz.onclick = () => Moverz(2);

  function Moverz(value) {
    const trackAnchoz = trackz.offsetWidth;
    const listaAnchoz = cajaListaz.offsetWidth;

    trackz.style.left == ""
      ? (leftPosition = trackz.style.left = 0)
      : (leftPosition = parseFloat(trackz.style.left.slice(0, -2) * -1));
    if (leftPosition < trackAnchoz - listaAnchoz && value == 2) {
      trackz.style.left = `${-1 * (leftPosition + cajaAnchoz)}px`;
    } else if (leftPosition > 0 && value == 1) {
      trackz.style.left = `${-1 * (leftPosition - cajaAnchoz)}px`;
    }
  }
}

/*Dragon Ball Super*/
const botonAntSuper = document.getElementById("mangas__bonton-ant-super");
const botonSigSuper = document.getElementById("mangas__bonton-sig-super");
const trackSuper = document.getElementById("track-super");
const cajaListaSuper = document.getElementById("mangas__caja-lista-super");
const cajaSuper = document.querySelectorAll(".mangas__caja-super");
if (
  botonAntSuper &&
  botonSigSuper &&
  trackSuper &&
  cajaListaSuper &&
  cajaSuper
) {
  const cajaAnchoSuper = caja[0].offsetWidth;

  botonAntSuper.onclick = () => MoverSuper(1);
  botonSigSuper.onclick = () => MoverSuper(2);

  function MoverSuper(value) {
    const trackAnchoSuper = trackSuper.offsetWidth;
    const listaAnchoSuper = cajaListaSuper.offsetWidth;

    trackSuper.style.left == ""
      ? (leftPosition = trackSuper.style.left = 0)
      : (leftPosition = parseFloat(trackSuper.style.left.slice(0, -2) * -1));
    if (leftPosition < trackAnchoSuper - listaAnchoSuper && value == 2) {
      trackSuper.style.left = `${-1 * (leftPosition + cajaAnchoSuper)}px`;
    } else if (leftPosition > 0 && value == 1) {
      trackSuper.style.left = `${-1 * (leftPosition - cajaAnchoSuper)}px`;
    }
  }
}

/* Overlay Mangas */
const galleryImages = document.querySelectorAll(".img-manga");
const overlay = document.getElementById("overlay");
const overlayImage = document.getElementById("overlayImage");

function mostrarImagenEnOverlay(index) {
  overlayImage.src = galleryImages[index].src;
}

galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentImageIndex = index;
    mostrarImagenEnOverlay(currentImageIndex);
    overlay.classList.add("active");
  });
});
if (overlay && overlayImage) {
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.classList.remove("active");
    }
  });
}

/* Seccion Personajes */

/* Menu desplegable de sagas en la seccion Personajes */
const selectElement = document.getElementById("menuSelect");

selectElement.addEventListener("change", function () {
  var selectedValue = selectElement.value;
  window.location.hash = selectedValue;
});

/* Hover de imagenes de personajes */
function hoverPersonajes(tanda) {
  let personajesCont;
  personajesCont = document.getElementById(`tanda${tanda}`);

  if (
    tanda !== 6 &&
    tanda !== 8 &&
    tanda !== 9 &&
    tanda !== 12 &&
    tanda !== 13
  ) {
    //Secciones con 9 imagenes
    const boxes = personajesCont.querySelectorAll(".personajes__cont-box");
    const anchoPantalla = window.innerWidth;

    boxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        if (anchoPantalla <= 768) {
          personajesCont.style.gridTemplateColumns =
            "1fr 1fr 1fr 1fr";
            personajesCont.style.gridTemplateRows =
            "500px 500px";

          let boxNumber = Array.from(boxes).indexOf(box) + 1;
          if (boxNumber > 4) {
            boxNumber -= 4;
          }
          
          const columns = Array(4).fill("1fr");
          columns[boxNumber - 1] = "3fr";
          //console.log(columns);

          personajesCont.style.gridTemplateColumns = columns.join(" ");
        } else {
          personajesCont.style.gridTemplateColumns =
            "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";

          let boxNumber = Array.from(boxes).indexOf(box) + 1;

          const columns = Array(8).fill("1fr");
          columns[boxNumber - 1] = "3fr";

          personajesCont.style.gridTemplateColumns = columns.join(" ");
        }
      });
    });
  } else if (tanda === 9) {
    //Secciones con 5 imagenes
    const boxes = personajesCont.querySelectorAll(".personajes__cont-box");

    boxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        personajesCont.style.gridTemplateColumns =
          "1.5fr 1.5fr 1.5fr 1.5fr 1.5fr";

        let boxNumber = Array.from(boxes).indexOf(box) + 1;

        const columns = Array(5).fill("1fr");
        columns[boxNumber - 1] = "3fr";

        personajesCont.style.gridTemplateColumns = columns.join(" ");
      });
    });
  } else {
    //Secciones con 8 imagenes
    const boxes = personajesCont.querySelectorAll(".personajes__cont-box");
    const anchoPantalla = window.innerWidth;

    boxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        if (anchoPantalla <= 768) {
          personajesCont.style.gridTemplateColumns = "1fr 1fr 1fr";
          personajesCont.style.gridTemplateRows = "500px 500px 500px";

          let boxNumber = Array.from(boxes).indexOf(box) + 1;
          if (boxNumber > 6) {
            boxNumber -= 6;
          } else if (boxNumber > 3) {
            boxNumber -= 3;
          }

          const columns = Array(3).fill("1fr");
          columns[boxNumber - 1] = "3fr";

          personajesCont.style.gridTemplateColumns = columns.join(" ");
        } else {
          personajesCont.style.gridTemplateColumns =
            "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";

          let boxNumber = Array.from(boxes).indexOf(box) + 1;

          const columns = Array(9).fill("1fr");
          columns[boxNumber - 1] = "3fr";

          personajesCont.style.gridTemplateColumns = columns.join(" ");
        }
      });
    });
  }
}

/* Restaurar dimensiones del grid de personajes */
function restaurarPersonajes(tanda) {
  let personajesContenedor;
  personajesContenedor = document.getElementById(`tanda${tanda}`);
  let anchoPantalla = window.innerWidth;
  if (
    tanda !== 6 &&
    tanda !== 8 &&
    tanda !== 9 &&
    tanda !== 12 &&
    tanda !== 13
  ) {
    if (anchoPantalla <= 768) {
      personajesContenedor.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
      personajesContenedor.style.gridTemplateRows = "500px 500px";
    } else {
      personajesContenedor.style.gridTemplateColumns =
        "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    }
  } else if (tanda === 9) {
    personajesContenedor.style.gridTemplateColumns =
      "1.5fr 1.5fr 1.5fr 1.5fr 1.5fr";
  } else {
    if (anchoPantalla <= 768) {
      personajesContenedor.style.gridTemplateColumns = "1fr 1fr 1fr";
      personajesContenedor.style.gridTemplateRows = "500px 500px 500px";
    } else {
      personajesContenedor.style.gridTemplateColumns =
        "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    }
  }
}


