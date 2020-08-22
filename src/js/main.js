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


//! Header-Menü
// 