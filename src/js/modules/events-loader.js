// Das Skript muss überall eingebunden sein, wo Festival-Inhalte geladen werden.
// Aktuell betrifft dies nur die Festival-Übersichtseite.
//! Übersicht: Lade alle Festivals

const restUrl = '/rest'; //! URL ZU SERVER
// Event-Daten laden

function eventsLaden() {
  fetch(restUrl + '/events/').then(response => {
    return response.json();
  }).then(events => {
    const ul = document.querySelector('#events');
    events.forEach(event => {
      let newLi = document.createElement('li');
      let eventId = event.id;
      let eventTitle = event.title;
      let eventSubtitle = event.subtitle;
      let eventDescTitle = event.desc_title;
      let eventDescLead = event.desc_lead;
      let eventDescText = event.desc_text;
      let eventGenreId = event.genre_id;
      let eventLocationId = event.location_id;
      let eventDateStart = event.date_start;
      let eventDateEnd = event.date_end;
      let eventGenreIdAsText = rewriteGenreIdToText(eventGenreId);
      let eventGenreIdAsSlug = rewriteGenreIdToSlug(eventGenreId);
      let eventLocationIdAsText = rewriteLocationIdToText(eventLocationId);
      newLi.setAttribute('class', eventGenreIdAsSlug + ' festivals__item');
      newLi.innerHTML = '<div>' + '<p class="festivals__item-id">ID= ' + eventId + '</p>' + '<h3 class="festivals__item-title">title= ' + eventTitle + '</h3>' + '<h4 class="festivals__item-subtitle">subtitle= ' + eventSubtitle + '</h4>' + '<p class="festivals__item-desc_title">desc_title= ' + eventDescTitle + '</p>' + '<p class="festivals__item-desc_lead">desc_lead= ' + eventDescLead + '</p>' + '<p class="festivals__item-desc_text">desc_text= ' + eventDescText + '</p>' + '<p class="festivals__item-genre_id">genre_id= ' + eventGenreId + '</p>' + '<p class="festivals__item-genre_id_as_text">genre_id_as_text= ' + eventGenreIdAsText + '</p>' + '<p class="festivals__item-location_id">location_id= ' + eventLocationId + '</p>' + '<p class="festivals__item-location_id_as_text">location_id_as_text= ' + eventLocationIdAsText + '</p>' + '<p class="festivals__item-date_start">date_start= ' + eventDateStart + '</p>' + '<p class="festivals__item-date_end">date_end= ' + eventDateEnd + '</p>' + '<a href="/festivals/sur-le-lac/"><button>Zum Festival</button></a>' + '</div>';
      ul.appendChild(newLi);
    });
  });
}

eventsLaden(); //! Location ID in Text umwandeln
// Location ID in Text umwandeln - statisch

function rewriteLocationIdToText(id) {
  const requestId = id;

  if (requestId === '1') {
    return 'Bern';
  } else if (requestId === '2') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '3') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '4') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '5') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '6') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '7') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '8') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '9') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '10') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '11') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '12') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '13') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '14') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '15') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '16') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '17') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '18') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '19') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '20') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '21') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '22') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '23') {
    return 'TBD-TBD-TBD';
  } else if (requestId === '24') {
    return 'TBD-TBD-TBD';
  } else {
    return 'Standort wurde nicht gefunden';
  }
} // Funktion sofort ausführen
// Location ID in Text umwandeln - statisch


function rewriteGenreIdToText(id) {
  const requestId = id;

  if (requestId === '1') {
    return 'Jazz';
  } else if (requestId === '2') {
    return 'Hiphop';
  } else if (requestId === '3') {
    return 'Indie';
  } else if (requestId === '4') {
    return 'Pop & Rock';
  } else if (requestId === '5') {
    return 'Electronic';
  } else if (requestId === '6') {
    return 'Baroque Pop';
  } else if (requestId === '7') {
    return 'Bebop';
  } else if (requestId === '8') {
    return 'Bhangra';
  } else if (requestId === '9') {
    return 'Big Band';
  } else if (requestId === '10') {
    return 'Black Metal';
  } else if (requestId === '11') {
    return 'Blue-Eyed Soul';
  } else if (requestId === '12') {
    return 'Bluegrass';
  } else if (requestId === '13') {
    return 'C-Pop';
  } else if (requestId === '14') {
    return 'Cajun';
  } else if (requestId === '15') {
    return 'Calypso';
  } else if (requestId === '16') {
    return 'Celtic';
  } else if (requestId === '17') {
    return 'Alternative Rock';
  } else if (requestId === '18') {
    return 'Anarcho-Punk';
  } else if (requestId === '19') {
    return 'Arabic Pop';
  } else if (requestId === '20') {
    return 'Blues';
  } else if (requestId === '21') {
    return 'Blues Rock';
  } else if (requestId === '22') {
    return 'Boogie Woogie';
  } else if (requestId === '23') {
    return 'British Blues';
  } else if (requestId === '24') {
    return 'Britpop';
  } else if (requestId === '25') {
    return 'Country Blues';
  } else if (requestId === '26') {
    return 'Country';
  } else if (requestId === '27') {
    return 'Country Rock';
  } else {
    return 'Genre wurde nicht gefunden';
  }
} // Funktion sofort ausführen
// Location ID in slug umwandeln - statisch


function rewriteGenreIdToSlug(id) {
  const requestId = id;

  if (requestId === '1') {
    return 'jazz';
  } else if (requestId === '2') {
    return 'hiphop';
  } else if (requestId === '3') {
    return 'indie';
  } else if (requestId === '4') {
    return 'pop-und-rock';
  } else if (requestId === '5') {
    return 'electronic';
  } else if (requestId === '6') {
    return 'baroque-pop';
  } else if (requestId === '7') {
    return 'bebop';
  } else if (requestId === '8') {
    return 'bhangra';
  } else if (requestId === '9') {
    return 'big-band';
  } else if (requestId === '10') {
    return 'black-metal';
  } else if (requestId === '11') {
    return 'blue-eyed-soul';
  } else if (requestId === '12') {
    return 'bluegrass';
  } else if (requestId === '13') {
    return 'c-pop';
  } else if (requestId === '14') {
    return 'cajun';
  } else if (requestId === '15') {
    return 'calypso';
  } else if (requestId === '16') {
    return 'celtic';
  } else if (requestId === '17') {
    return 'alternative-rock';
  } else if (requestId === '18') {
    return 'anarcho-punk';
  } else if (requestId === '19') {
    return 'arabic-pop';
  } else if (requestId === '20') {
    return 'blues';
  } else if (requestId === '21') {
    return 'blues-rock';
  } else if (requestId === '22') {
    return 'boogie-woogie';
  } else if (requestId === '23') {
    return 'british-blues';
  } else if (requestId === '24') {
    return 'britpop';
  } else if (requestId === '25') {
    return 'country-blues';
  } else if (requestId === '26') {
    return 'country';
  } else if (requestId === '27') {
    return 'country-rock';
  } else {
    return 'unbekannt';
  }
} // Funktion sofort ausführen
// // Genre ID in Text umwandeln - abfrage aus DB mit spezifischer ID -> Namen zurückgeben
// function getGenreNameById(id){
// 	console.log('getGenreNameById gestartet');
// 	fetch(restUrl+'/genres/'+id)
// 	.then((response) => {
// 		if (!response.ok) {
// 		  throw new Error("HTTP error, status = " + response.status); // löst den Catch aus
// 		}
// 		return response.json();
// 	})
// 	.then(genresJson => {
// 		console.log('Events aus FetchFunktion= ', genresJson);
// 		let genreNameAsJson = genresJson.title;
// 	})
// 	.then(genreNameAsJson => {
// 		let 
// 	})
// 	.catch(error => {
// 	   console.error('Error:', error);
// 	});
// };
// function genreTest(id){
// 	let test777= getGenreNameById(id);
// 	console.log('Test777 = ', test777);
// };
// genreTest(1);
//! LocationID in Name umwandeln -- DEFEKT
// Location ID in Text umwandeln - abfrage aus DB mit spezifischer ID -> Namen zurückgeben
// function getLocationNameById(id){
// 	fetch(restUrl+'/locations/'+id)
// 		.then(response =>{
// 			return response.json();
// 		})
// 		.then(json => {
// 			const title = json.title;
// 			return title;
// 		});
// };
