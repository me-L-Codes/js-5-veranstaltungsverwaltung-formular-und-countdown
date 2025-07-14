# Teilprüfung 5 – Veranstaltungsverwaltung mit Validierung und Countdown

Dies ist eine Prüfungsaufgabe aus meiner Weiterbildung zur Webentwicklerin.  
Ziel war es, ein komplexeres Formular mit JavaScript zu validieren, dynamische DOM-Manipulationen umzusetzen und mit Datum/Zeit zu arbeiten. Dabei wurde insbesondere das Arbeiten mit Arrays, EventListenern, regulären Ausdrücken zur Eingabeprüfung sowie das Berechnen und Anzeigen von Zeitdifferenzen geübt.



## Aufgabenstellung

Entwickle eine Webanwendung zur Verwaltung von Veranstaltungseinladungen. Die Anwendung soll es einem Benutzer ermöglichen, Veranstaltungsdetails einzugeben, Teilnehmer hinzuzufügen oder zu entfernen und die Einladungen per E-Mail zu versenden. Die Anwendung soll auch überprüfen, ob alle erforderlichen Informationen vorhanden sind, bevor die Einladungen versendet werden.  

- **a)** Erstelle ein HTML-Formular mit Feldern für die Veranstaltungsdetails: Titel, Datum, Uhrzeit, Ort und eine Beschreibung. Füge auch eine dynamische Liste von Teilnehmern hinzu, die Vorname, Nachname und E-Mail-Adresse enthält.  

- **b)** Implementiere JavaScript-Logik, um Teilnehmer zur Liste hinzuzufügen. Jeder Teilnehmer soll in einem Array gespeichert werden. Überprüfe, ob die E-Mail-Adresse im richtigen Format vorliegt und nicht null oder undefined ist.  

- **c)** Implementiere eine Funktion, die prüft, ob alle Formularfelder (Titel, Datum, Uhrzeit, Ort, Beschreibung) ausgefüllt sind und mindestens ein Teilnehmer hinzugefügt wurde. Wenn ein Feld leer ist oder keine Teilnehmer vorhanden sind, soll eine entsprechende Fehlermeldung angezeigt werden.  

- **d)** Füge Event-Listener hinzu, die auf das "Submit"-Event des Formulars reagieren. Verhindere das Standardverhalten des Formularabsendens und führe stattdessen die Überprüfung der Eingaben durch. Wenn alle Überprüfungen erfolgreich sind, zeige eine Bestätigungsmeldung an, dass die Einladungen versendet wurden (das tatsächliche Versenden der E-Mails wird simuliert). 

- **e)** Implementiere eine Funktion, die das aktuelle Datum und die Dauer bis zum Veranstaltungsdatum berechnet und diese Informationen auf der Webseite anzeigt.




## Dateien

- `veranstaltungen.html`
- `veranstaltungen.js`



## Ergebnis der Prüfung

- ✅ 100 %
