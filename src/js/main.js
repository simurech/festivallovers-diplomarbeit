// Test ob JS überhaupt geladen wird.
function testFunktion () {
	console.warn('JS wurde erfolgreich geladen');
}
testFunktion();


//! Standardfunktionen
// Link öffnen (selbes Fenster)
function linkOeffnen (link) {
	window.location.href=link;
};



//! Home – Tablet & Desktop: Klick auf "Mehr Genres" bleindet weitere Genres ein.
// Funktion
function zeigMehrGenres () {
	let genreLabels = document.querySelectorAll('.filter__genres-item-label');
	for (i = 0; i < genreLabels.length; i++ ){
		genreLabels[i].classList.remove('notvisible');
		genreLabels[i].classList.add('visible');
	}
	let showMoreBtn = document.querySelector('.filter__genres-more');
	showMoreBtn.style.display = 'none';
};
// Event Listener
document.querySelector('.filter__genres-more').addEventListener('click', zeigMehrGenres);



//! Home – Mobile: Klick auf "Filter anzeigen" bleindet Genres ein.
// Funktion
function zeigGenres () {
	let genreList = document.querySelectorAll('.filter__genres-list');
	genreList[0].style.display = 'flex';
	let genreAction = document.querySelectorAll('.filter__action');
	genreAction[0].style.display = 'flex';
	let showFilterBtn = document.querySelector('.filter__toggle');
	showFilterBtn.style.display = 'none';
};
// Event Listener
document.querySelector('.filter__toggle').addEventListener('click', zeigGenres);



//! Home: Klick auf "Filter zurücksetzen" unchecked die Genre-Filter
// Funktion
function filterZuruecksetzen () {
	let genreCheckbox = document.querySelectorAll('.filter__genres-item-checkbox');
	for (i = 0; i < genreCheckbox.length; i++ ){
		genreCheckbox[i].checked = false;
	}
};
// Event Listener
document.querySelector('.zuruecksetzen').addEventListener('click', filterZuruecksetzen);



//! Home: Klick auf "Ergebnis anzeigen" leitet auf Übersichts-Seite mit allen Festivals 
// Funktion
function ergebnisseAnzeigen () {
	let genreCheckbox = document.querySelectorAll('.filter__genres-item-checkbox');
	let genres = []
	for (i = 0; i < genreCheckbox.length; i++ ){
		if (genreCheckbox[i].checked) {
			let genre = genreCheckbox[i].id;
			genres.push(genre);
		};
	};
	console.log(genres);
	let link = '/festival-uebersicht/';
	for (i = 0; i < genres.length; i++ ){
		link = link + '?genre=' + genres[i];
		};
	linkOeffnen (link);
};
// Event Listener
document.querySelector('.ergebnis').addEventListener('click', ergebnisseAnzeigen);