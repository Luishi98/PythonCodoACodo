/*Seccion Mangas*/
/*Dragon Ball*/
const botonAnt = document.getElementById('mangas__bonton-ant');
const botonSig = document.getElementById('mangas__bonton-sig');
const track = document.getElementById('track');
const cajaLista = document.getElementById('mangas__caja-lista');
const caja = document.querySelectorAll('.mangas__caja');

const cajaAncho = caja[0].offsetWidth;

botonAnt.onclick = () => Mover(1);
botonSig.onclick = () => Mover(2);

function Mover(value) {
    const trackAncho = track.offsetWidth;
    const listaAncho = cajaLista.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    if (leftPosition < (trackAncho - listaAncho) && value == 2) {
        track.style.left = `${-1 * (leftPosition + cajaAncho)}px`;
    } else if (leftPosition > 0 && value == 1) {
        track.style.left = `${-1 * (leftPosition - cajaAncho)}px`;
    }
}

/*Seccion Mangas*/
/*Dragon Ball Z*/
const botonAntz = document.getElementById('mangas__bonton-antz');
const botonSigz = document.getElementById('mangas__bonton-sigz');
const trackz = document.getElementById('trackz');
const cajaListaz = document.getElementById('mangas__caja-listaz');
const cajaz = document.querySelectorAll('.mangas__cajaz');

const cajaAnchoz = caja[0].offsetWidth;

botonAntz.onclick = () => Moverz(1);
botonSigz.onclick = () => Moverz(2);

function Moverz(value) {
    const trackAnchoz = trackz.offsetWidth;
    const listaAnchoz = cajaListaz.offsetWidth;

    trackz.style.left == "" ? leftPosition = trackz.style.left = 0 : leftPosition = parseFloat(trackz.style.left.slice(0, -2) * -1);
    if (leftPosition < (trackAnchoz - listaAnchoz) && value == 2) {
        trackz.style.left = `${-1 * (leftPosition + cajaAnchoz)}px`;
    } else if (leftPosition > 0 && value == 1) {
        trackz.style.left = `${-1 * (leftPosition - cajaAnchoz)}px`;
    }
}