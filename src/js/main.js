// In folgendem Code werden diverse Grundlegende Funktionen definiert.
// Dieses JS muss auf allen Seiten geladen werden!


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

// Eventlistener für KLICK auf Array legen
function funktionBeiKlick (selektorklasse, funktion) {
	let selektorarray = document.querySelectorAll('.'+selektorklasse);
	for (i=0; i < selektorarray.length; i++) {
		selektorarray[i].addEventListener('click', funktion);
	};
};
// Beispiel: funktionBeiKlick(klassennname, auszufuehrendeFunktionn);

// Eventlistener für EINGABE auf Array legen
function funktionBeiEingabe (selektorklasse, funktion) {
	let selektorarray = document.querySelectorAll('.'+selektorklasse);
	for (i=0; i < selektorarray.length; i++) {
		selektorarray[i].onkeydown = funktion;
	};
};


//! Erzeuge einen Alert bei noch nicht umgesetzten Elementen
// Funktion
function functionNotDefined() {
	alert('Funktion in diesem Prototyp nicht umgesetzt');
};
// Funktion auf alle Elemente mit Klasse "useless" bei Klick ausführen
funktionBeiKlick('useless', functionNotDefined);


//! Overlay Header-Menü
// Funktion: Overlay-Menü einblenden
function openNavi() {
	let canvas = document.querySelector('#filter-canvas');
	if (canvas.style.width == '100%') { // Wenn Filter sichtbar
		return
	} else { // Wenn Filter nicht sichtbar
		let overlay = document.querySelector('#navigation');
		overlay.style.height = '100%';
	};
};
// Funktion: Overlay-Menü ausblenden
function closeNavi() {
	let overlay = document.querySelector('#navigation');
	overlay.style.height = '0%';
};
// Event Listener auf Menü Button in Header zum einblenden
document.querySelector('#showmenu').addEventListener('click', openNavi);
// Event Listener auf Menü Button in Overlay zum ausblenden
document.querySelector('#hidemenu').addEventListener('click', closeNavi);
// Bei Klick auf Men-Link das Overlay auch ausblenden
let closeBtns = document.querySelectorAll('.menulink');
closeBtns.forEach(element => {
	element.addEventListener('click', closeNavi);
});


//! Overlay Login-Maske
// Funktion: Overlay-Menü einblenden
function openLogin() {
	let overlay = document.querySelector('#overlay-login');
	overlay.style.height = '441px';
	overlay.style.top = '80px';
	startEventListenerLoginOverlay();
};
// Funktion: Overlay-Menü ausblenden
function closeLogin() {
	let overlay = document.querySelector('#overlay-login');
	overlay.style.height = '0';
	overlay.style.top = '0';
};
// Event Listener auf Menü Button in Header zum einblenden
document.querySelector('#showlogin').addEventListener('click', openLogin);
// Event Listener auf Dokument starten, wenn Login-Maske eingeblendet wird. Overlay ausblenden, wenn Klick ausserhalb
function startEventListenerLoginOverlay (){
	document.addEventListener('click', (event) => {
		const overlayLogin = document.querySelector('#overlay-login');
		const headerButton = document.querySelector('#showlogin');
		let targetElement = event.target; // geklicktes element
		do {
			if (targetElement == overlayLogin || targetElement == headerButton) {
				// Klick innerhalb Overlay -> nur returnen
				return;
			}
			// Gehe zu Parent
			targetElement = targetElement.parentNode;
		} while (targetElement);
		closeLogin();
	});
};