// Das Skript enthält alle Manipulationen für die Festivals. (Layout ändern, sortieren)
// Es muss nur auf der Festival-Übersichtsseite vorhanden sein.



//! Darstellung zwischen Kacheln & Liste bei Klick ändern
// Funktion
function festivalLayoutSwitch (){
	// Wrapper mit allen Festivals als Variable speichern
	let kachelWrapper = document.querySelector('.festivals__list-kacheln');
	let listWrapper = document.querySelector('.festivals__list-liste');
	// Wenn Kacheln vorhanden -> zu Liste ändern
	if (kachelWrapper){
		kachelWrapper.className = 'festivals__list-liste';
		document.querySelector('#darstellung__kacheln-toggle').style.opacity = '0.5'
		document.querySelector('#darstellung__liste-toggle').style.opacity = '1'
	}
	// Wenn Liste vorhanden -> zu Kacheln ändern
	if (listWrapper){
		listWrapper.className = 'festivals__list-kacheln';
		document.querySelector('#darstellung__kacheln-toggle').style.opacity = '1'
		document.querySelector('#darstellung__liste-toggle').style.opacity = '0.5'
	};
};
// EventListener
document.querySelector('#darstellung__kacheln-toggle').addEventListener('click', festivalLayoutSwitch);
document.querySelector('#darstellung__liste-toggle').addEventListener('click', festivalLayoutSwitch);






//! Festivals nach Kanton filtern
// Funktion
function festivalKantonFilter (){
	console.log('Festivals nach Kanton filtern (wurde noch nicht umgesetzt.)');
};
// EventListener



//! Festivals nach Datum sortieren
// Funktion
function festivalDateSortierunng (){
	console.log('Festivals nach Datum ordnen (wurde noch nicht umgesetzt.)');
};
// EventListener


