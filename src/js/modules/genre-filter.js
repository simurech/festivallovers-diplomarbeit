// In folgendem Code werden sämtliche Funktionen der Genre-Filter bereitgestellt.
// Das Skript muss überall eingebunden sein, wo die Genre-Filter ersichtlich sind.
// Aktuell betrifft dies die Startseite und die Festival-Übersichtseite.

// Test ob JS überhaupt geladen wird.
function testFunktion() {
	console.warn('genre-filter.js wurde erfolgreich geladen');
}
testFunktion();


//! Tablet & Desktop: Klick auf "Mehr Genres" bleindet weitere Genres ein.
// Funktion
function zeigMehrGenres() {
	let genreLabels = document.querySelectorAll('.filter__genres-item-label');
	for (i = 0; i < genreLabels.length; i++ ){
		genreLabels[i].classList.remove('notvisible-bigscreen');
	}
	let showMoreBtn = document.querySelector('#filter__genres-more');
	showMoreBtn.style.display = 'none';
};
// Event Listener
document.querySelector('#filter__genres-more').addEventListener('click', zeigMehrGenres);


//!  Mobile: Klick auf "Filter anzeigen" blendet Genres-Filter ein.
// Funktion zum öffnen des Canvas
function openGenresCanvas() {
	// Selektiere Canvas
	let filterCanvasBtn = document.querySelector('#filter-canvas');
	// Setzte Breite auf 100%
	filterCanvasBtn.style.width = '100%';
	// Selektiere Link in Header
	let menuLink = document.querySelector('#showmenu'); // enthält Bild + Span
	// Ändere ID
	menuLink.id = 'filterback';
	// Ändere Icon
	menuLink.childNodes[1].src = '/images/icons/black/navigation_zurueck.svg';
	// Ändere Text
	menuLink.childNodes[3].innerHTML = 'zurück';
	addEventListenerToBackBtn();
};
// Event Listener
document.querySelector('.filter__toggle').addEventListener('click', openGenresCanvas);
// Hilfsfunktion legt EventListener auf den Zurück-Buttonn
function addEventListenerToBackBtn() {
	document.querySelector('#filterback').addEventListener('click', closeGenresCanvas);
};
// Funktion zum schliessen des Canvas
function closeGenresCanvas() {
	closeNavi();
	// Selektiere Canvas
	let filterCanvasBtn = document.querySelector('#filter-canvas');
	// Setzte Breite auf 0%
	filterCanvasBtn.style.width = '0';
  	// Selektiere Link in Header
	let menuLink = document.querySelector('#filterback'); // enthält Bild + Span
	// Ändere ID
	menuLink.id = 'showmenu';
	// Ändere Icon
	menuLink.childNodes[1].src = '/images/icons/black/navigation_menu.svg';
	// Ändere Text
	menuLink.childNodes[3].innerHTML = 'Menu';
};


//! Gewählte Filter aus Storage anwenden
// Funktion
function setGenresFilter(){
	let genresStorage = JSON.parse(localStorage.getItem('genres'));
	for (i = 0; i < genresStorage.length; i++ ){
		let activGenreCheckbox = document.querySelector('#'+genresStorage[i]);
		activGenreCheckbox.checked = true;
	};
	setTimeout(eventsFiltern, 1000);
};


//! Aktuelle Auswahl immer in LocalStorage übertragen
// Funktion
function genresFilterToStorage(){
	let genreCheckbox = document.querySelectorAll('.filter__genres-item-checkbox');
	let genresArray = [];
	for (i = 0; i < genreCheckbox.length; i++ ){
		if (genreCheckbox[i].checked) {
			let genreId = genreCheckbox[i].id;
			genresArray.push(genreId);
		};
	};
	let genresJson = JSON.stringify(genresArray);
	localStorage.setItem('genres', genresJson);
	eventsFiltern();
};
// Event Listener auf Genre-Filter-Buttons
function addEventListenersToGenreFilter (){
	let genreFilterBtns = document.querySelectorAll('.filter__genres-item-checkbox');
	for (i = 0; i < genreFilterBtns.length; i++ ){
		genreFilterBtns[i].addEventListener('click', genresFilterToStorage);
	};
};
// Event Listener via Funktion
addEventListenersToGenreFilter();


//! "Filter zurücksetzen" unchecked die Genre-Filter und leert LocalStorage
// Funktion
function filterZuruecksetzen() {
	let genreCheckbox = document.querySelectorAll('.filter__genres-item-checkbox');
	for (i = 0; i < genreCheckbox.length; i++ ){
		genreCheckbox[i].checked = false;
	};
	localStorage.setItem('genres', [""]);
	eventsFiltern();
};
// Event Listener auf Button "Filter zurücksetzen"
document.querySelector('.zuruecksetzen').addEventListener('click', filterZuruecksetzen);


//! LocalStorage auslesen
// Funktion
function getLocalStorage(){
	if (localStorage.genres && localStorage.genres !== [""]) {
		setGenresFilter();
	};
};
//Funktion sofort ausführen
getLocalStorage();


//! Events anhand Filter ein-/ausblenden
// Funktion
function eventsFiltern(){
	let events = document.querySelectorAll('.festivals__item'); // Alle Festival-Einträge
	let genreCheckbox = document.querySelectorAll('.filter__genres-item-checkbox');	// Alle Festival-Filter
	// Wenn Genres in LocalStorage gespeichert, folgenden Code ausführen:
	if (localStorage.getItem('genres') && JSON.parse(localStorage.getItem('genres')).length != 0) {
		for (i = 0; i < events.length; i++){
			// Zuerst alle Events ausblenden
			events[i].classList.add('notvisible');
		};
		// Funktion um gecheckde Genres wieder einzublenden
		function eventsClassHandler (element){
			if (element.checked) {
				let genreItems = document.querySelectorAll('.'+element.id);
				genreItems.forEach(element => {
					element.classList.remove('notvisible');
				});
			};
		}
		genreCheckbox.forEach(element => {
			eventsClassHandler(element);
		});
		checkIfNoFestivals();
	} else { // Wenn Localstorage leer ist, folgenden Code ausführen:
		for (i = 0; i < events.length; i++){
			// alle Events einblenden, da nichts gespeichert
			events[i].classList.remove('notvisible');
		};
		checkIfNoFestivals();
	};
};

// Prüfe ob keine Festivals gelistet und Seite deshalb leer. Wenn ja -> zeige Hinweis
function checkIfNoFestivals () {
	// Selektiere Liste mit allen Events
	let eventList = document.querySelector('#events');
	let eventListArray = [];
	for (i=0; i < eventList.childNodes.length; i++) {
		let item = eventList.childNodes[i];
		if (item.classList[2] == 'notvisible'){
			eventListArray.push(item);
		};
	};
	if (eventListArray.length >= 20){
		let keineFestivalsHinweis = document.querySelector('#nofestivals');
		keineFestivalsHinweis.style.display = 'block';
	};
	if (eventListArray.length < 20){
		let keineFestivalsHinweis = document.querySelector('#nofestivals');
		keineFestivalsHinweis.style.display = 'none';
	};
};