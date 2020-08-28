// Funktion alle 1s ausführen
let interval = setInterval(function() {
	// Textfeld speichern
	let texfield = document.querySelector('#countdown-days');
	// Event Zeit speichern
	let eventDate = new Date("Aug 13, 2021 12:00:00").getTime();
	// Aktuelle Zeit speichern
	let currentDate = new Date().getTime();
	// Differenz von Event und Heute speichern
	let differenz = eventDate - currentDate;
	// Rechne Unterschied für Tage, Stunden, Minuten und Sekunden
	let tage = Math.floor(differenz / (1000 * 60 * 60 * 24));
	// Anzahl Tage in HTML einfügen
	texfield.innerHTML = tage;
	// Kontrolle ob Countdown auf 0
	if (differenz < 0) {
		clearInterval(interval);
		texfield.innerHTML = "-";
	};
}, 1000);