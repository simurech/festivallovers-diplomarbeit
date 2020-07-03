# Web Frontend Developer Diplomarbeit von Simon Urech

## __Table of contents:__
1. [Basisdispositon](#__Basisdisposition__)
	1. Projekt
	2. Technologiewahl
	3. Zeitplan / Meilensteine
	4. Eidesstattliche Erklärung
2. [Dokumentation](#__Dokumentation__)
	1. Setup

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
### __Setup__
TBD