// Teilnehmer-Array zum Speichern der Daten ---------------------------------------------------------------------------
let teilnehmerListe = [];

// Elemente aus dem DOM holen -----------------------------------------------------------------------------------------
const eventForm = document.querySelector("#eventForm");

const eventTitleInput = document.querySelector("#eventTitle");
const eventDateInput = document.querySelector("#eventDate");
const eventTimeInput = document.querySelector("#eventTime");
const eventLocationInput = document.querySelector("#eventLocation");
const eventDescriptionInput = document.querySelector("#eventDescription");

const vornameInput = document.querySelector("#teilnehmerFirstName");
const nachnameInput = document.querySelector("#teilnehmerLastName");
const emailInput = document.querySelector("#teilnehmerEmail");
const teilnehmerBtn = document.querySelector("#teilnehmerBtn");
const teilnehmerList = document.querySelector("#teilnehmerList");


// Teilnehmer aktuallisiseren (hinzufügen + Entfernen) ----------------------------------------------------------------
teilnehmerBtn.addEventListener("click", () => {
    const vorname = vornameInput.value;
    const nachname = nachnameInput.value;
    const email = emailInput.value;    

    // Validierung der Eingaben
    if (!vorname || !nachname || !email || email === null || email === undefined) {
        alert("Bitte alle Felder ausfüllen!");
        return;
    }

    // E-Mail-Validierung (Prüfung auf Korrektheit)
    if (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)) {
        alert("Bitte eine gültige E-Mail-Adresse eingeben!");
        return;
    }

    // Teilnehmer ins Array speichern
    teilnehmerListe.push({ vorname, nachname, email });

    // Teilnehmerliste in der UI aktualisieren
    teilnehmerList.innerHTML = ""; // Liste leeren

    teilnehmerListe.forEach((teilnehmer, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${teilnehmer.vorname} ${teilnehmer.nachname} - ${teilnehmer.email} `;

        // Entfernen-Button erstellen
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.classList.add("remove-btn"); // Klasse hinzufügen

        // Klick-Event für den Entfernen-Button
        removeBtn.addEventListener("click", () => {
            teilnehmerListe.splice(index, 1); // Teilnehmer aus dem Array entfernen
            listItem.remove(); // Element aus der UI entfernen
        });

        // Button dem Listeneintrag hinzufügen
        listItem.appendChild(removeBtn);
        teilnehmerList.appendChild(listItem);
    });

    // Eingabefelder leeren
    vornameInput.value = "";
    nachnameInput.value = "";
    emailInput.value = "";
});


// Formularvalidierung (Titel, Datum, Uhrzeit, Ort, Beschreibung und Teilnehmer) --------------------------------------
eventForm.addEventListener("submit", (evt) => {
    evt.preventDefault(); // Standard-Formularabsendung verhindern

    // Überprüfen, ob alle Veranstaltungsfelder ausgefüllt sind
    const title = eventTitleInput.value;
    const date = eventDateInput.value;
    const time = eventTimeInput.value;
    const location = eventLocationInput.value;
    const description = eventDescriptionInput.value;

    if (!title || !date || !time || !location || !description) {
        alert("Bitte alle Veranstaltungsfelder ausfüllen!");
        return; // Stoppt das Absenden des Formulars, wenn Felder leer sind
    }

    // Überprüfen, ob mindestens ein Teilnehmer hinzugefügt wurde
    if (teilnehmerListe.length === 0) {
        alert("Bitte mindestens einen Teilnehmer hinzufügen!");
        return; // Stoppt das Absenden des Formulars, wenn keine Teilnehmer vorhanden sind
    }

    // Wenn alle Prüfungen bestanden wurden, Erfolgsmeldung
    alert("Veranstaltung erfolgreich gespeichert und Einladungen versendet!");
});


// Datum und Dauer bis zum Veranstaltungstermin -----------------------------------------------------------------------

// Element für die Anzeige der Zeit bis zur Veranstaltung
const countdownAnzeige = document.createElement("p");
eventForm.appendChild(countdownAnzeige);

// Funktion zur Berechnung der verbleibenden Zeit
function updateCountdown() {
    const aktuellesDatum = new Date();
    const veranstaltungsDatum = new Date(eventDateInput.value + "T" + eventTimeInput.value);

    if (isNaN(veranstaltungsDatum)) {
        countdownAnzeige.textContent = "Bitte ein gültiges Datum und eine Uhrzeit eingeben.";
        return;
    }

    const differenz = veranstaltungsDatum - aktuellesDatum;

    if (differenz < 0) {
        countdownAnzeige.textContent = "Die Veranstaltung ist bereits vorbei.";
        return;
    }

    const tage = Math.floor(differenz / (1000 * 60 * 60 * 24));
    const stunden = Math.floor((differenz % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuten = Math.floor((differenz % (1000 * 60 * 60)) / (1000 * 60));

    countdownAnzeige.textContent = `Verbleibende Zeit: ${tage} Tage - ${stunden} Stunden - ${minuten} Minuten`;
}

// Event-Listener, um den Countdown zu aktualisieren, wenn das Datum oder die Uhrzeit geändert wird
eventDateInput.addEventListener("change", updateCountdown);
eventTimeInput.addEventListener("change", updateCountdown);
