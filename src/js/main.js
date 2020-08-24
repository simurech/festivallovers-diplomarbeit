// Test ob JS überhaupt geladen wird.
function testFunktion() {
	console.warn('JS main.js wurde erfolgreich geladen');
}
testFunktion();


//! Standardfunktionen
// Link öffnen (selbes Fenster)
function linkOeffnen(link) {
	window.location.href=link;
};
// Beispiel: linkOeffnen('/location/');

// Funktion nur auf spezifischer Seite ausführen
function checkUrlStartFunktion (url, funktion){
	const pageUrl = window.location.pathname;
	if (pageUrl == url) {
		funktion();
	}
};
// Beispiel: checkUrlStartFunktion('/festivals/', eventsLaden);

// Eventlistener auf Array legen
function funktionBeiKlick (selektorklasse, funktion) {
	let selektorarray = document.querySelectorAll('.'+selektorklasse);
	for (i=0; i < selektorarray.length; i++) {
		selektorarray[i].addEventListener('click', funktion);
	};
};
// Beispiel: funktionBeiKlick(klassennname, auszufuehrendeFunktionn);


//! Header-Menü
// Funktion: Overlay-Menü einblenden
function openNavi() {
	console.log('Navigation einblenden!');
	let overlay = document.querySelector('#navigation');
	overlay.style.height = '100%';
};
// Funktion: Overlay-Menü ausblenden
function closeNavi() {
	console.log('Navigation ausblenden!');
	let overlay = document.querySelector('#navigation');
	overlay.style.height = '0%';
};
// Event Listener auf Menü Button in Header zum einblenden
document.querySelector('#showmenu').addEventListener('click', openNavi);
// Event Listener auf Menü Button in Overlay zum ausblenden
document.querySelector('#hidemenu').addEventListener('click', closeNavi);
let closeBtns = document.querySelectorAll('.menulink');
closeBtns.forEach(element => {
	element.addEventListener('click', closeNavi);
});