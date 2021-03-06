// Die Nutzerinteraktion manipuliert die Seite für den Nutzer und speichert Tickets im Local Storage.
// Das Skript muss überall eingebunden sein, wo Ticket-Infos für die Bestellung gespeichert werden müssen.
// Aktuell betrifft dies nnur die "Tickets kaufen"-Seite.
//! Anzahl Tickets anhand Auswahl anpassen
// Funktion

function ticketVerfuegbarkeitText(event) {
  // Textstelle mit verfügbaren Tickets selektieren
  let verfuegbarTextSelektor = document.querySelector('#' + event.target.parentNode.previousElementSibling.childNodes[1].childNodes[3].firstChild.id); // Zahl aktuell verfügbare Tickets selektieren

  let verfuegbarZahl = parseInt(event.target.parentNode.previousElementSibling.childNodes[1].childNodes[3].firstChild.firstChild.data); // Textstelle der gewünschten Tickets selektieren

  let gewuenschtTextSelektor = document.querySelector('#' + event.target.parentNode.childNodes[3].firstChild.id); // Zahl der gewünschten Tickets selektieren

  let gewuenschtZahl = parseInt(event.target.parentNode.childNodes[3].firstChild.textContent); // Bei Klick auf Minus

  if (event.target.textContent === '-') {
    // gewuenschtZahl - 1 rechnen
    let neuegewuenschtZahl = gewuenschtZahl - 1;

    if (neuegewuenschtZahl > 0) {
      gewuenschtTextSelektor.innerHTML = neuegewuenschtZahl;
    } else {
      gewuenschtTextSelektor.innerHTML = 0;
    }

    let neueverfuegbarZahl = verfuegbarZahl + 1;

    if (gewuenschtZahl > 0) {
      verfuegbarTextSelektor.innerHTML = neueverfuegbarZahl;
    }
  }

  if (event.target.textContent === '+') {
    // gewuenschtZahl + 1 rechnen
    let neuegewuenschtZahl = gewuenschtZahl + 1;

    if (verfuegbarZahl > 0) {
      gewuenschtTextSelektor.innerHTML = neuegewuenschtZahl;
    } else {
      alert('Keine Tickets mehr vorhanden!');
    }

    let neueverfuegbarZahl = verfuegbarZahl - 1;

    if (neueverfuegbarZahl > 0) {
      verfuegbarTextSelektor.innerHTML = neueverfuegbarZahl;
    } else {
      verfuegbarTextSelektor.innerHTML = 0;
    }
  }

  addTicketToCart();
} // Bei Klick auf +/- Buttons Funktion ausführen


funktionBeiKlick('ticket-add-remove-btn', ticketVerfuegbarkeitText); //! Tickets addieren und in LocalStorage speichern
// Funktion

function addTicketToCart() {
  // Alle verfügbaren Ticket-Zählen selektieren
  let ticketCouterElementArray = document.querySelectorAll('.ticket-counter'); // Ticket Anzahl in Array speichern

  let ticketCounterArray = [];

  for (var i = 0; i < ticketCouterElementArray.length; i++) {
    ticketCounterArray.push(Number(ticketCouterElementArray[i].textContent));
  }

  let summe = 0;

  for (y = 0; y < ticketCounterArray.length; y++) {
    summe += ticketCounterArray[y];
  }

  let warenkorbbutton = document.querySelector('#warenkorb-zaehler');
  warenkorbbutton.innerHTML = summe; // Anzahl der gewünnschten Tickets in Variablen speichern

  let ticket1 = ticketCounterArray[0];
  //let ticket2 = ticketCounterArray[1]; // deaktiviert, da bereits ausverkauft!
  let ticket3 = ticketCounterArray[1];
  let ticket4 = ticketCounterArray[2];
  let ticket5 = ticketCounterArray[3];
  let ticket6 = ticketCounterArray[4];
  localStorage.setItem('ticket1', ticket1);
  //localStorage.setItem('ticket2', ticket2); // deaktiviert, da bereits ausverkauft!
  localStorage.setItem('ticket3', ticket3);
  localStorage.setItem('ticket4', ticket4);
  localStorage.setItem('ticket5', ticket5);
  localStorage.setItem('ticket6', ticket6);
}
