/**
 * UWAGA!!! Niesttety trzeba recznie poparawiac sekcje, jakos skrypt sie gubi. Naprawic - czyli zmienic recznie gdzie po ktorej sekcji isc do nastepnej sekcji albo konczyc form
 *
 * 22:24:26	Info	Link do edycji: https://docs.google.com/forms/d/1BL58YAS21ejfryhxPgtkFuY3UwtnvgwqB8w5NOVyYnU/edit
 * 22:24:26	Info	Link do wypełniania: https://docs.google.com/forms/d/e/1FAIpQLScmCaaKXRrgzD1_QU7SJTUOnNQd4LPDifbA8YBzAl0ptKvlsw/viewform
 * RSVP Form Generator — Jagna & Kamil, 24.10.2026
 *
 * Dynamiczny formularz obsługujący 1–4 osoby.
 * Pierwsze pytanie "Ilu gości potwierdzasz?" kieruje do odpowiedniego
 * łańcucha stron (page breaks z nawigacją warunkową).
 * Jak użyć:
 * 1. Wejdź na https://script.google.com
 * 2. Utwórz nowy projekt
 * 3. Wklej ten kod
 * 4. Uruchom funkcję createRsvpForm()
 * 5. Sprawdź logi (Ctrl+Enter) — znajdziesz tam link do formularza
 */

function createRsvpForm() {
  var form = FormApp.create("RSVP — Jagna & Kamil | 24.10.2026");

  form.setDescription(
    "Prosimy o potwierdzenie obecności na naszym ślubie i weselu.\n" +
      "Termin: 24 października 2026\n" +
      "Prosimy o wypełnienie formularza do 24 września 2026.\n\n" +
      "Pomyłka w formularzu? Nic nie szkodzi! Po prostu wyślij formularz jeszcze raz z poprawnymi danymi — uwzględnimy tylko najnowszą odpowiedź."
  );

  form.setConfirmationMessage(
    "Dziękujemy za potwierdzenie! Do zobaczenia 24 października 🤍"
  );

  form.setAllowResponseEdits(true);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(false);

  // ── Strategia (BEZ moveItem!) ─────────────────────────────────────────
  // 1. Dodaj pytanie "Ilu gości?" BEZ nawigacji (na razie)
  // 2. Buduj wszystkie łańcuchy SEKWENCYJNIE
  //    (addPageBreakItem + pytania lądują na końcu w dobrej kolejności)
  // 3. Na końcu: re-fetch itemy, ustaw nawigację na "Ilu gości?" i PBs

  // ── 1. Pytanie wstępne (nawigację ustawimy na końcu) ─────────────────

  var howMany = form
    .addMultipleChoiceItem()
    .setTitle("Ilu gości łącznie z Tobą potwierdzasz?")
    .setRequired(true);

  var howManyId = howMany.getId();

  // Tymczasowo ustawiamy choices bez nawigacji
  howMany.setChoiceValues(["Jednego gościa", "Dwoje gości", "Troje gości", "Czworo gości"]);

  // ── 2. Buduj łańcuchy SEKWENCYJNIE ───────────────────────────────────
  // Każdy element dodawany przez addXxxItem() ląduje na końcu formularza.
  // Dzięki temu page breaks i pytania są w naturalnej kolejności.

  var chains = [1, 2, 3, 4];
  var firstPageIds = {};   // firstPageIds[chainLen] = id pierwszego PB w łańcuchu
  var allPageIds = {};     // allPageIds[chainLen] = [id_os1, id_os2, ...]

  for (var c = 0; c < chains.length; c++) {
    var chainLen = chains[c];
    allPageIds[chainLen] = [];

    // Strony z pytaniami o gości
    for (var personIdx = 1; personIdx <= chainLen; personIdx++) {
      var pb = form.addPageBreakItem().setTitle("Gość nr. " + personIdx + "/" + chainLen);
      var pbId = pb.getId();
      allPageIds[chainLen].push(pbId);
      if (personIdx === 1) {
        firstPageIds[chainLen] = pbId;
      }
      addPersonQuestions(form, " (Gość nr. " + personIdx + ")");
    }
  }

  // ── 3. Ustawienie nawigacji ───────────────────────────────────────────
  // Re-fetch wszystkie itemy i zbuduj mapę ID → item

  var pbMap = {};
  var howManyItem = null;
  var allItems = form.getItems();

  for (var i = 0; i < allItems.length; i++) {
    var item = allItems[i];
    if (item.getType() === FormApp.ItemType.PAGE_BREAK) {
      pbMap[item.getId()] = item.asPageBreakItem();
    }
    if (item.getId() === howManyId) {
      howManyItem = item.asMultipleChoiceItem();
    }
  }

  // 3a. Nawigacja z pytania "Ilu gości?"
  howManyItem.setChoices([
    howManyItem.createChoice("Jednego gościa", pbMap[firstPageIds[1]]),
    howManyItem.createChoice("Dwoje gości", pbMap[firstPageIds[2]]),
    howManyItem.createChoice("Troje gości", pbMap[firstPageIds[3]]),
    howManyItem.createChoice("Czworo gości", pbMap[firstPageIds[4]]),
  ]);

  // 3b. Nawigacja między stronami w łańcuchach
  for (var c = 0; c < chains.length; c++) {
    var chainLen = chains[c];
    for (var i = 0; i < chainLen; i++) {
      var currentPb = pbMap[allPageIds[chainLen][i]];
      if (i < chainLen - 1) {
        currentPb.setGoToPage(pbMap[allPageIds[chainLen][i + 1]]);
      } else {
        // Ostatnia osoba → SUBMIT
        currentPb.setGoToPage(FormApp.PageNavigationType.SUBMIT);
      }
    }
  }

  // ── Logowanie ──────────────────────────────────────────────────────────

  Logger.log("Formularz utworzony!");
  Logger.log("Link do edycji: " + form.getEditUrl());
  Logger.log("Link do wypełniania: " + form.getPublishedUrl());
}

/**
 * Dodaje 8 pytań o jedną osobę (z sufiksem do identyfikacji).
 */
function addPersonQuestions(form, suffix) {
  form
    .addTextItem()
    .setTitle("Imię" + suffix)
    .setRequired(true);

  form
    .addTextItem()
    .setTitle("Nazwisko" + suffix)
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Czy potwierdzasz obecność?" + suffix)
    .setChoiceValues(["Tak", "Nie"])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Opcja wegetariańska?" + suffix)
    .setChoiceValues(["Nie", "Tak"])
    .setRequired(true);

  form
    .addTextItem()
    .setTitle("Inna dieta / alergie?" + suffix)
    .setHelpText("Np. bezglutenowo, alergia na orzechy… Zostaw puste jeśli nie dotyczy.");

  form
    .addMultipleChoiceItem()
    .setTitle("Czy potrzebujesz noclegu?" + suffix)
    .setChoiceValues(["Nie", "Tak, od piątku (23.10)", "Tak, od soboty (24.10)"])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Transport z Dąbrowy Tarnowskiej lub Tarnowa?" + suffix)
    .setHelpText("Organizujemy bus z Dąbrowy Tarnowskiej i Tarnowa.")
    .setChoiceValues(["Nie, dojadę samodzielnie", "Tak, z Dąbrowy Tarnowskiej", "Tak, z Tarnowa"])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Bus powrotny po weselu?" + suffix)
    .setHelpText("Bus z miejsca wesela z powrotem do Tarnowa i Dąbrowy Tarnowskiej.")
    .setChoiceValues(["Nie", "Tak"])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle("Coś jeszcze?" + suffix)
    .setHelpText("Uwagi, pytania, życzenia… a może dedykacja muzyczna? 🎵");
}
