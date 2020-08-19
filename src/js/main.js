// Test ob JS überhaupt geladen wird.
function testFunktion() {
	console.error('JS wurde erfolgreich geladen');
}
testFunktion();


//! Standardfunktionen
// Link öffnen (selbes Fenster)
function linkOeffnen(link) {
	window.location.href=link;
};



//! Home & Übersicht – Tablet & Desktop: Klick auf "Mehr Genres" bleindet weitere Genres ein.
// Funktion
function zeigMehrGenres() {
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
function zeigGenres() {
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
function filterZuruecksetzen() {
	let genreCheckbox = document.querySelectorAll('.filter__genres-item-checkbox');
	for (i = 0; i < genreCheckbox.length; i++ ){
		genreCheckbox[i].checked = false;
	}
};
// Event Listener
document.querySelector('.zuruecksetzen').addEventListener('click', filterZuruecksetzen);



//! Home: Klick auf "Ergebnis anzeigen" leitet auf Übersichts-Seite mit allen Festivals 
// Funktion
function ergebnisseAnzeigen() {
	const genresStorage = localStorage.getItem('genres');
	if (genresStorage) {
		console.log(genresStorage);
		// Filter aktivieren Code hier einfügen
	}
	let genreCheckbox = document.querySelectorAll('.filter__genres-item-checkbox');
	let genres = []
	for (i = 0; i < genreCheckbox.length; i++ ){
		if (genreCheckbox[i].checked) {
			let genre = genreCheckbox[i].id;
			genres.push(genre);
		};
	localStorage.setItem('genres', genres.values);
	};
	console.log(genres);
	// let link = '/festivals';
	// for (i = 0; i < genres.length; i++ ){
	// 	link = link + '?genre=' + genres[i];
	// 	};
	//linkOeffnen(link);
};
// Event Listener
//? document.querySelector('.ergebnis').addEventListener('click', ergebnisseAnzeigen);



//! Übersicht: Lade alle Festivals (nur ausführen auf Seite "/festivals/")
const restUrl = 'http://192.168.1.10/rest' //! URL ZU SERVER
// Event-Daten laden
function eventsLaden() {
		fetch(restUrl+'/events/')
				.then(response =>{
					return response.json()
				})
				.then(events => {
					const ul = document.querySelector('#events');
					events.forEach(event => {
						const li = document.createElement ('li');
						const locationId = event.location_id;
						const locationName = getLocationNameById(locationId);
						li.setAttribute('class', event.genre_id + ' festivals__item ' + event.id);
						li.innerHTML = '<div>'+
							'<p> ID= '+event.id+'</p>'+
							'<h3>title= '+event.title+'</h3>'+
							'<h4>subtitle= '+event.subtitle+'</h4>'+
							'<p>desc_title= '+event.desc_title+'</p>'+
							'<p>desc_lead= '+event.desc_lead+'</p>'+
							'<p>desc_text= '+event.desc_text+'</p>'+
							'<p>genre_id= '+event.genre_id+'</p>'+
							'<p>location_id= '+event.location_id+'</p>'+
							'<p id="'+event.location_id+'">Locationname= NAME:'+locationName+'</p>'+
							'<p>date_start= '+event.date_start+'</p>'+
							'<p>date_end= '+event.date_end+'</p>'+
							'</div>';
						ul.appendChild(li);
					});
				});
		};
// Funktion sofort ausführen, wenn auf Festival-Übersicht-Seite
function checkUrl (){
	const pageUrl = window.location.pathname;
	if (pageUrl == '/festivals/') {
		eventsLaden();
	}
}
// Aktuelle URL prüfen
checkUrl();

//! LocationID in Name umwandeln - DEFEKT
// Funktion: Location mit spezifischer ID abfragen -> Namen zurückgeben
function getLocationNameById(id){
	fetch(restUrl+'/locations/'+id)
		.then(response =>{
			return response.json();
		})
		.then(json => {
			const title = json.title;
			return title;
		})
		.then(console.log('Fertig?'+this.title));
};
// Location ID in Text umwandeln
function rewriteLocationIdToText(id){
	const requestId = id;
	if (requestId === '1') {
			return 'Bern';
		}else if (requestId === '2'){
			return 'Bülach';
		}else if (requestId === '3'){
			return 'Bülach';
		}else if (requestId === '4'){
			return 'Bülach';
		}else if (requestId === '5'){
			return 'Bülach';
		}else if (requestId === '6'){
			return 'Bülach';
		}else if (requestId === '7'){
			return 'Bülach';
		}else if (requestId === '8'){
			return 'Bülach';
		}else if (requestId === '9'){
			return 'Bülach';
		}else if (requestId === '10'){
			return 'Bülach';
		}else if (requestId === '11'){
			return 'Bülach';
		}else if (requestId === '12'){
			return 'Bülach';
		}else if (requestId === '13'){
			return 'Bülach';
		}else if (requestId === '14'){
			return 'Bülach';
		}else if (requestId === '15'){
			return 'Bülach';
		}else if (requestId === '16'){
			return 'Bülach';
		}else if (requestId === '17'){
			return 'Bülach';
		}else if (requestId === '18'){
			return 'Bülach';
		}else if (requestId === '19'){
			return 'Bülach';
		}else if (requestId === '20'){
			return 'Bülach';
		}else if (requestId === '21'){
			return 'Bülach';
		}else if (requestId === '22'){
			return 'Bülach';
		}else if (requestId === '2'){
			return 'Bülach';
		}else if (requestId === '2'){
			return 'Bülach';
		}
		else {
			return 'Standort wurde nicht gefunden';
	  };
}
// Funktion sofort ausführen
rewriteLocationIdToText()



//! Home - Gewählte Genres in LocalStorage speichern


var h1 = document.querySelector('h1');
      var nameInput = document.querySelector('#name-input');
      var nameBtn = document.querySelector('#name-btn');

      function writeName (name) {
        h1.innerText = 'Hallo ' + name + '!';
      }

      nameBtn.addEventListener('click', function (event) {
        writeName(nameInput.value);
        localStorage.setItem('name', nameInput.value);
      })

      var storedName = localStorage.getItem('name');
      if (storedName) {
        writeName(storedName);
      }