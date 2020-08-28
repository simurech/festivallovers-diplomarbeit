# Web Frontend Developer Diplomarbeit von Simon Urech

## __Table of contents:__
1. [Basisdispositon](#basisdisposition)
	1. [Projekt](#projekt-festivallovers)
	2. [Technologiewahl](#technologiewahl)
	3. [Zeitplan / Meilensteine](#zeitplan--meilensteine)
	4. [Eidesstattliche Erklärung](#eidesstattliche-erkl%C3%A4rung)
2. [Dokumentation](#dokumentation)
	1. [Setup](#setup)

_____________________________________________________________
## __Basisdisposition__

### __Projekt: FestivalLovers__
Die Eventagentur FestivalLovers bietet eine Webseite mit Informationen rund um Festivals vom Line up bis hin zum Ticketkauf. Es sind dort Festivals aus der ganzen Schweiz zu finden. Die Event Teaser mit den einzelnen Festivals können in einer Listenansicht nach Kategorie, Datum und Ort sortiert werden. Die Webseite ist in deutsch, da der Hauptmarkt der Eventagentur die deutschsprachige Schweiz ist.

#### Umzusetzende Elemente generell
- Startseite mit Musikfilter
- Übersichtsseite mit Festivals und Filterfunktion, Kachel- und Listenansicht
- Detailseite inkl. Ticket-Bestellfunktion
- Bestelllprozess (ohne Login, nur Gast-User)
- ohne Dashboard, ohne funktionerenden Audio/Videoplayer, ohne Social Media Sharing

#### Umzusetzende Elemente Frontend Developer
- Erstellung der HTML/CSS Templates inkl. notwendigem Frontend Javascript
- Daten für Festivals aus lokalem JSON oder aus REST API
- Funktionierende Filter / Sortierung frontend-seitig
- Integration Slider, Google Maps und Countdown in der Detailansicht (ohne Wettervorhersage), Detailseite statisch
- Umsetzung für Smartphone und Desktop (Mobile First)
- Bestellung von n Tickets, Speicherung der Tickets im Local Storage. Es muss nur für 1 Festival Tickets besttellt werden können.
- Lauffähig auf Google Chrome, Firefox und Safari (jeweils latest)

#### Allgemeines
- Code Versionierung (Git)
- Dokumentation als README.md im Repository
- Einsatz von Bundlern, Task Runner (Gulp, etc.)

#### Inhalt der Diplomarbeit
- Web Applikation resp. Prototyp
- Git Repository
- schriftliche Dokumentation (README.md)
- Fachgespräch

#### Bewertungskriterien Frontend Developer
- korrekter Umgang mit CSS Selektoren
- Responsive Umsetzung
- Browserkompatibilität: Chrome, Firefox und Safari
- Umsetzung von CSS Transitions
- W3C valider Code
- Umsetzung entspricht Design-Vorgaben
- Verwendbarkeit als Prototyp
- Verwendbarkeit für Übernahme durch Application Developer

### __Technologiewahl__
#### Frontend
Sämtliche Seiten werden mit folgenden Technologien erstellt:
- HTML
- CSS (SCSS/SASS)
- Javascript

Frameworks oder Libaries sind bis jetzt nicht geplant - es wird also alles manuell gecoded. So entspricht der Code dem im Lehrgang gelernten und bleibt verstänndlich. Falls während der Entwicklung festgestellt werden sollte, dass ein Framework/Libary notwendig ist (z.B. Slider), wird dies in der Dokumentation entsprechend vermerkt.

#### Backend / Server
Als Datenbank wird eine MySQL Datenbank verwendet. Darin sind sämtliche Informationen zu den Festivals vorhanden. Der Ticket-Kauf-Prozess wird nicht umgesetzt, könnte zu einem späteren Zeitpunkt jedoch in der selben Datenbank (noch zu erweitern) ergänzt werden. Falls während der Entwicklung unvorsehbare Verzögerungen eintreten sollten, wird stattdessen ein lokales JSON-File verwendet.

#### Tools
__Editor__: VS Code (Download: https://code.visualstudio.com/) inkl. den Extensions: Auto Close Tag, ESLint, GitLens, IntelliSende for CSS, Path Intellisense, Prettier

__Sonstige Tools__: NPM, Gulp, phpMyAdmin

### __Zeitplan / Meilensteine__
Datum | Inhalt
-------- | --------
03.07.2020 | Basisdisposition und GIT-Repository aufsetzen
05.07.2020 | Gulpfile erstellen und Entwicklungs-Umgebung einrichten
05.07.2020 | File-Struktur erstellen
12.07.2020 | Datenbank erweitern
12.07.2020 | REST-API erstellen
12.07.2020 | Festival Filter Prototyp mit Javascript
19.07.2020 | HTML Seiten erstellen (Layout erst grob umgesetzt)
19.07.2020 | HTML Seiten abschliessen (Layout final gemäss Briefing)
26.07.2020 | Festival-Filter Prototyp in Seiten einbauen
02.08.2020 | Menü mit Javascript erstellen
02.08.2020 | Login mit Javascript erstellen
09.08.2020 | Ticket-Kaufen Prozess erstellen
16.08.2020 | Testing Funktion
16.08.2020 | Testing / Kontrolle Layout gemäss Briefing
29.08.2020 | Abgabe Diplomarbeit

### __Eidesstattliche Erklärung__
Hiermit erkläre ich, dass ich die Diplomarbeit selbständig verfasst / programmiert und keine anderen als die angegebenen Quellen und Hilfsmittel benutzt und die aus fremden Quellen direkt oder indirekt übernommenen Gedanken als solche kenntlich gemacht habe. Die Arbeit habe ich bisher keinem anderen Prüfungsgremium in gleicher oder vergleichbarer Form vorgelegt. Sie wurde bisher auch nicht veröffentlicht.
_____________________________________________________________

## __Dokumentation__
### __Struktur-Erklärung__
Der Ordner SRC enthält sämtliche Dateien der Webseite. Diese dienen nur der Enticklung. Alle für den Betrieb der Seite notwendigen Dateien finden sich nach dem "Build"-Task im Ordner DIST.

### __Entwicklung__
Es wurden mit GULP einige Hilfsfunktionen erstellt. Wenn an der Seite gearbeitet werden soll, wird der Terminal-Befehl "gulp watch" verwendet. Dieser aktualisiert den Browser automatisch bei Änderungen. Anpassungen im Code sind somit direkt sichtbar.

### __Setup__
Um die Seite zu veröffentlichen, kann der Befehl "gulp build" ausgeführt werden. Dieser nimmt diverse Änderungen am Code vor, minifiziert alle CSS & JS Dateien und speichert alles in das Verzeichnis "DIST". Dieses Verzeichnis kann auf einen beliebigen Webserver kopiert werden. Zwei Dinge gibt es jedoch noch zu beachten:
1. Die Datenbank muss noch vorbereitet werden. (Ordner "REST" aus Download auf Server kofpieren + URL & Zugangsdaten vom Datenbank-Server anpassen)
2. Die Bilder & Videos sind nicht im Repository enthalten und müssen noch manuell eingefügt werden. (Siehe nächster Punkt)

### __Dateien__
Sämtliche Bilder & Videos sind nicht im Repository enthalten. Auch der Code für die REST-Schnittstelle sowie die komplette Datenbank als SQL File. Ebenfalls fehlt die .htaccess Datei und das Favicon. Diese Dateien können unter folgendem Link manuell heruntergeladen werden: https://cloud.urech.io/index.php/s/gDsJr6SNpT9Kj22
Nach dem Download müssen alle Dateien/Ordner in das Root-Verzeichnis der Webseite kopiert werden.

### __SQL Datenbank__
Damit die Daten aus der Datenbank gelesen werden können, muss diese noch eingerichtet werden.
1. Dateien herunterladen
2. Ordner "REST" in das selbe Verzeichnis auf dem Webserver speichern
3. SQL Datei bzw. Datenbank importieren und einrichten
4. Zugangsdaten der DB hier anpassen: /rest/classes/DB.php (Zeile 14 - 17)
5. URL der DB anpassen (nur nötig, wenn auf anderem Server) : /js/modules/events.loader.js (Zeile 7)
(Hinweis: das Passwort von meiner Datenbank ist im Code hinterlegt. Da es sich hierbei um kein richtiges Projekt handelt, ist das jedoch nicht tragisch. Damit erhält man nur Zugriff auf diese Datenbank und es wird sonst niergend verwendet.)

### __Öffentliche Seite__
Die Seite wurde hier vöröffentlicht: https://festivallovers.urech.io
Die Festivaldaten können als JSON hier gelesen werden:
- Festivals: https://festivallovers.urech.io/rest/events
- Genres: https://festivallovers.urech.io/rest/genres
- Locations: https://festivallovers.urech.io/rest/locations

### __Persönliche Anmerkungen__
#### Layout
Die Seite wurde sogut wie möglich gemäss den Vorgaben umgesetzt. Leider war der Styleguide teilweise unvollständig. Wenn keine genauen Angaben vorhanden waren, mussten Grössen & Abstände aus dem Sketch Dokument gemessen werden (via Figma). Die gemessenen Angaben wiedersprachen sich jedoch oft von den vorhandenen Spezifikationen. Die Zwischentitle auf der Startseite (Bsp. Magazin oder News) wären korrekterweise H2-Titel und folglich gemäss Spezifikation kleiner als der H1 Titel ganz oben. Im Layout sind diese jedoch alle gleich gross. --> Layout oder Struktur falsch? Dies ist nur ein Beispiel von vielen. Es war oft unklar an welche Angaben sich bei der Entwicklung gehalten werden sollen. Wäre dies ein reales Projekt, wäre dringend ein Meeting oder zumindest eine umfassende Feedback-Runde mit der Designerin notwendig. Im Idealfall hätte man dies natürlich vor Projektstart bereits besprochen/abgeklärt.
Bei der Umsetzung wurden die Viewports Mobile & Desktop gemäss dem Briefing berücksichtigt. Die Tablet-Umsetzung wurde oft ebenfalls umgesetzt, bzw. zumindest die Mediaquerys im .sass File sind immer vorhanden.

#### Rückblick
Der Aufwand für die Projektarbeit war extrem gross und rückblickend auch umfangreicher als am Anfang erwartet. Viele Dinge wurden erst bei der Entwicklung entdeckt, da es teilweise anhand einer statischen Grafik nicht klar verständlich war oder sich die Abweichungen von Mobile/Desktop als Herausforderung entpuppten. Insgesamt wurden ca. 120 - 150h investiert, wovon etwas mehr als die Hälfte in den letzten zwei Wochen vor Abgabe. Meine geplanten Meilensteine konnte ich nicht mal ansatzweise einhalten. Dies hängt auch damit zuzusammen, dass im Betrieb unerwartet wieder viel los war und die nötige Energie Abends fehlte.

Bei dem Projekt habe ich extrem viel gelernt. Mein grösstes Erkenntnis ist; PLANUNG. Bevor auch nur eine Zeile geschrieben wird, würde ich zukünftig sicherlich jede Seite sehr viel genauer prüfen. Obwohl sich viele Elemente auf den Seiten wiederholen, mussten diese nun teilweise leider doppelt gestyled werden. Wäre bereits am Anfang alles genau kontrolliert und abgeglichen worden, hätten bestimmt einige Zeilen Code gespart werden können.
Bevor ich ein nächstes Projekt umsetze, werde ich bestimmt alles zuerst prüfen und dannn auch überlegen wie dies umzusetzen ist. Dies betrifft auch JS-Funktionen oder Anbindungen wie z.B. an einen SQL Server. In diesem Projekt habe ich leider einfach irgendwo angefangen und hatte keinen Fokus auf das Ganze, was im Endeffekt vermutlich einen Mehraufwand bedeutete.

#### Weitere Verwendung
Die Seite wurde nur für die Diplomarbeit erstellt und wird nun nicht weiter verwendet. 

#### Sonstiges
Auf der Seite wurden ein paar Dinge umgesetzt, welche nicht notwendig gewesen wäre. Die wichtigsten möchte ich hier auflisten:
- Tickets-kaufen-Seite: Anzahl Tickets wird via JS unten in Button eingefügt
- Zahlung-Seite: Der berechnete Preis entspricht der vom User getroffenen Ticket-Auswahl
- Festival-Übersicht-Seite: Wenn ein Filter eines Genres mit 0 Festivals aktiviert wird und somit keine Festivals ersichtlich sind, wird unten ein Hinweis für den Nutzer eingeblendet.
Leider gibt es auch negatives. So war es mir leider nicht möglich die minify-Versionen von CSS & JS zu verwenden. Die verwendeten Gulp-Tasks haben Fehler produziert, welche die Darstellung und Funktion einschränkten. Es wurde deshalb bei der veröffentlichten Version die unkomprimierte Version der Dateien genutzt unnd der Builder-Task angepasst.

### __Fazit__
Die Projekt-Arbeit war spannend und eine Herausforderung. Die Übungen während des Lehrgangs haben zwar vieles beinhaltet, es gab jedoch sehr viele Anforderungen oder auch Elemente welche bisher noch nie gestellt wurden. Auch war es schwierig von jeweils ganz kleinen einzelnen Elemente/Funktionen nun plötzlich ein riesiges Konstrukt zu erstellen. Alleine der "Mobile First" Ansatz war etwas komplett neues und benötige viel Aufmerksamkeit, da dies bisher nur angeschnnitten wurde. Gerne hätte ich nun am Ende nochmals einige Dinge überarbeitet, dafür ging mir aufgrund der schlechten Planung jedoch die Zeit aus. Auch wenn es noch einige Optimierungsmöglichkeiten gibt, bin ich trotzdem mit dem Endergebnis zufrieden und stolz dies geschafft zu haben.

Was ich noch loswerden möchte: Während der Umsetzung fühlte ich mich manchmal etwas überfordert, bzw. vom Umfang erschlagen. Da die Ausbildunng berufsbegleitend abbsolviert wird, empfehle ich der Schulleitung für zukünftige Projektarbeiten den Umfang der Arbeit zu reduzieren und gleichzeitig die Qualität des Briefings wie auch gelieferten Daten zu verbessern. Klar lernt man viel, wenn man ins kalte Wasser geschmissen wird. Meiner Meinung nach wurden uns "Anfängern" hier jedoch unnötig Steine in den Weg gelegt, was zu mehreren Frust-Momenten führte und, zumindest aktuell, die Freude am coden nahm.

### __Quellenangaben__
Falls fremder Code kopiert oder importiert wurde, wird die Quelle unten gelistet. Bei der Enticklung lies ich mich oft von den im Lehrgang absolvierten Übungen, sowie folgenden Seiten inspirieren. Diese dienten mir auch oft als Quelle für notwendige Informationen:
- https://developer.mozilla.org/de/
- https://www.w3schools.com/
- https://css-tricks.com/

Fremder Code:
- https://splidejs.com/ (Slider auf Festival-Detail-Seite)