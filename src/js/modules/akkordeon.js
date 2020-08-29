// Stellt Akkordeon-Funktion für die Festival-Detail-Seite bereit.
// Das Skript muss aktuell nur auf dieser Seite eingebunden werden.

// Funktion
function clickElementChecker () {
	if (event.target.nodeName == 'DIV') {
		let accordeonContent = document.querySelector('#' + event.target.id + '-content');
		showHideAccordeon(accordeonContent)
	}
	if (event.target.nodeName == 'H3') {
		let accordeonContent = document.querySelector('#' + event.target.parentNode.id + '-content');
		showHideAccordeon(accordeonContent)
	}
	if (event.target.nodeName == 'P') {
		let accordeonContent = document.querySelector('#' + event.target.parentNode.id + '-content');
		showHideAccordeon(accordeonContent)
	}
};

function showHideAccordeon(klickElement) {
	if (klickElement.className.indexOf("akkordeon-show") == -1) {
	  klickElement.className += " akkordeon-show";
	  console.log('klickElement.id + -toggle', (klickElement.id + '-toggle'));
	  let accordeonToggl = document.querySelector('#' + klickElement.id + '-toggle')
	  accordeonToggl.innerHTML = 'Weniger';
	} else {
	  klickElement.className = klickElement.className.replace(" akkordeon-show", "");
	  let accordeonToggl = document.querySelector('#' + klickElement.id + '-toggle')
	  accordeonToggl.innerHTML = 'Mehr';
	}
  };

// Event Listener
let accordeonItems = document.querySelectorAll('.detail-wissenswertes__akkordeon-title');
accordeonItems.forEach(accordeonItem => {
accordeonItem.addEventListener('click', clickElementChecker);
});