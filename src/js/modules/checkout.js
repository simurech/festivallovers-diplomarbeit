// Der Preis der gewünschten Tickets wird aus dem Local Storage ausgelesen und ausgerechnet.
// Das Skript muss überall eingebunden sein, wo Ticket-Preise für die Bestellung geladen werden müssen.
// Aktuell betrifft dies nur die Zahlung-Seite.
//! Anzahl Tickets aus LocalStorage lesen, Kosten berechnen und in Kaufen-Button abfüllen
// Funktion

function getTicketValue() {
  let ticket1Anzahl = localStorage.getItem('ticket1');
  let ticket2Anzahl = localStorage.getItem('ticket2');
  let ticket3Anzahl = localStorage.getItem('ticket3');
  let ticket4Anzahl = localStorage.getItem('ticket4');
  let ticket5Anzahl = localStorage.getItem('ticket5');
  let ticket6Anzahl = localStorage.getItem('ticket6');
  let ticket1Preis = 75;
  let ticket2Preis = 375;
  let ticket3Preis = 225;
  let ticket4Preis = 420;
  let ticket5Preis = 25;
  let ticket6Preis = 375;
  let ticket1Kosten = ticket1Anzahl * ticket1Preis;
  let ticket2Kosten = ticket2Anzahl * ticket2Preis;
  let ticket3Kosten = ticket3Anzahl * ticket3Preis;
  let ticket4Kosten = ticket4Anzahl * ticket4Preis;
  let ticket5Kosten = ticket5Anzahl * ticket5Preis;
  let ticket6Kosten = ticket6Anzahl * ticket6Preis;
  let summe = ticket1Kosten + ticket2Kosten + ticket3Kosten + ticket4Kosten + ticket5Kosten + ticket6Kosten;
  let gesamtkostenSpan = document.querySelector('#gesamtkosten');
  gesamtkostenSpan.innerHTML = summe;
  localStorage.setItem('gesamtkosten', summe);
} // Funktion sofort ausführen


getTicketValue(); //! Handling für Formular
// Prüfen ob Formular ausgefüllt

function validateForm() {
  let creditcard = document.forms["zahlungForm"]["creditcard"].value;
  let validuntil = document.forms["zahlungForm"]["validuntil"].value;
  let cvc = document.forms["zahlungForm"]["cvc"].value;
  let name = document.forms["zahlungForm"]["name"].value;

  if (creditcard == "" || validuntil == "" || cvc == "" || name == "") {
    alert("Bitte alle Angaben vervollständigen");
    return false;
  } // Wenn vollständig -> transactionSuccessful ausführen


  transactionSuccessful();
}

document.querySelector('#bestellenBtn').addEventListener('click', validateForm); // Gesamtkosten aus LocalStorage auslesen und Button ändern, nach 2s auf Bestellbestätigung weiterleiten

function transactionSuccessful() {
  let gesamtkosten = localStorage.getItem('gesamtkosten');
  let bestellenBtn = document.querySelector('#bestellenBtn');
  bestellenBtn.innerHTML = '<img width="16px" height="16px" src="/images/icons/white/steuerung_checkmark.svg" class="svg-weiss"><span id="gesamtkosten">' + gesamtkosten + '</span>.- bezahlt';
  bestellenBtn.style.backgroundColor = '#00d79f';
  bestellenBtn.style.borderColor = '#00d79f';
  setTimeout(goToBestellbestaetigung, 2000); // nach 2s weiterleiten
}

function goToBestellbestaetigung() {
  window.location.href = '/checkout/bestellbestaetigung/';
}

function getPaymentMethod() {
  let paymentMethod = document.forms["zahlungForm"]["paymentMethod"].value;
  let formField = document.forms["zahlungForm"]["creditcard"];
  let label = document.querySelector('.' + paymentMethod + '-label');
  clearLabels();

  if (paymentMethod == 'visa') {
    formField.style.backgroundImage = "url('/images/payment/visa.svg')";
    label.style.borderColor = 'black';
  }

  if (paymentMethod == 'mastercard') {
    formField.style.backgroundImage = "url('/images/payment/mastercard.svg')";
    label.style.borderColor = 'black';
  }

  if (paymentMethod == 'paypal') {
    formField.style.backgroundImage = "url('/images/payment/paypal.svg')";
    label.style.borderColor = 'black';
  }
}

funktionBeiKlick('paymentradio', getPaymentMethod); // Rahmen von Label zurücksetzen (Wird in Funktion getPaymentMethod aufgerufen)

function clearLabels() {
  let allLabels = document.querySelectorAll('.paymentlabel');

  for (var i = 0; i < allLabels.length; i++) {
    allLabels[i].style.borderColor = '';
  }
}

function showFormLabels() {
  setTimeout(waitAndShowFormLabels, 100);
}

function waitAndShowFormLabels() {
  let creditcard = document.forms["zahlungForm"]["creditcard"];
  let validuntil = document.forms["zahlungForm"]["validuntil"];
  let cvc = document.forms["zahlungForm"]["cvc"];
  let name = document.forms["zahlungForm"]["name"];

  if (creditcard.value != "") {
    let label = document.querySelector('#creditcard-label');
    label.style.visibility = 'visible';
  }

  if (validuntil.value != "") {
    let label = document.querySelector('#validuntil-label');
    label.style.visibility = 'visible';
  }

  if (cvc.value != "") {
    let label = document.querySelector('#cvc-label');
    label.style.visibility = 'visible';
  }

  if (name.value != "") {
    let label = document.querySelector('#name-label');
    label.style.visibility = 'visible';
  }
} // Event Listener auf Formular-Felder. Löst bei Eingabe eine Funktion aus.


funktionBeiEingabe('transactionforminput', showFormLabels);
