/**
 * RSVP Form Generator — Jagna & Kamil, 24.10.2026
 *
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
      "Jeśli przychodzicie w parze — wystarczy jeden formularz za was oboje."
  );

  form.setConfirmationMessage(
    "Dziękujemy za potwierdzenie! Do zobaczenia 24 października 🤍"
  );

  form.setAllowResponseEdits(true);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(false);

  // ── Strona 1: Ile osób? ──────────────────────────────────────────────

  var howMany = form
    .addMultipleChoiceItem()
    .setTitle("Ile osób zgłaszasz?")
    .setHelpText("Jeśli przychodzisz z osobą towarzyszącą, wybierz 2.")
    .setRequired(true);

  // Tworzymy strony (sekcje) z góry, żeby móc linkować nawigację
  var pageGuest1 = form.addPageBreakItem().setTitle("Twoje dane");

  var pageGuest2 = form.addPageBreakItem().setTitle("Osoba towarzysząca");

  var pageCommon = form.addPageBreakItem().setTitle("Pytania dodatkowe");

  // Ustawiamy nawigację warunkową
  howMany.setChoices([
    howMany.createChoice("1 osoba", pageGuest1),
    howMany.createChoice("2 osoby", pageGuest1),
  ]);

  // ── Strona 2: Osoba 1 ────────────────────────────────────────────────

  form
    .addTextItem()
    .setTitle("Imię i nazwisko")
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Czy potwierdzasz obecność?")
    .setChoiceValues(["Tak, będę!", "Niestety nie dam rady"])
    .setRequired(true);

  form
    .addTextItem()
    .setTitle("Preferencje żywieniowe / alergie")
    .setHelpText("Np. wegetarianka, bezglutenowo, alergia na orzechy… Zostaw puste jeśli nie dotyczy.");

  form
    .addMultipleChoiceItem()
    .setTitle("Czy potrzebujesz noclegu?")
    .setChoiceValues(["Nie", "Tak, od piątku (23.10)", "Tak, od soboty (24.10)"])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Transport Tarnów → miejsce ślubu?")
    .setHelpText("Organizujemy bus z Tarnowa do Krakowa.")
    .setChoiceValues(["Nie, dojadę samodzielnie", "Tak, poproszę"])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Bus powrotny po weselu?")
    .setHelpText("Bus z miejsca wesela z powrotem do Tarnowa.")
    .setChoiceValues(["Nie", "Tak, poproszę"])
    .setRequired(true);

  // Nawigacja: po stronie osoby 1, sprawdzamy ile osób
  // Niestety Google Forms nie pozwala na warunkową nawigację z page break,
  // więc używamy triku: nawigacja z pytania "Ile osób?" kieruje obie opcje
  // na stronę 1, a na końcu strony 1 ustawiamy przejście do strony 2.
  // Musimy użyć pytania warunkowego na stronie 1.

  var goToGuest2 = form
    .addMultipleChoiceItem()
    .setTitle("Czy wypełniasz też za osobę towarzyszącą?")
    .setHelpText("Jeśli na początku wybrałeś/aś '2 osoby', wybierz 'Tak'.")
    .setRequired(true);

  goToGuest2.setChoices([
    goToGuest2.createChoice("Tak", pageGuest2),
    goToGuest2.createChoice("Nie, tylko za siebie", pageCommon),
  ]);

  // ── Strona 3: Osoba 2 ────────────────────────────────────────────────

  form
    .addTextItem()
    .setTitle("Imię i nazwisko (osoba towarzysząca)")
    .setRequired(false);

  form
    .addMultipleChoiceItem()
    .setTitle("Czy ta osoba potwierdza obecność?")
    .setChoiceValues(["Tak, będzie!", "Niestety nie da rady"])
    .setRequired(false);

  form
    .addTextItem()
    .setTitle("Preferencje żywieniowe / alergie (osoba towarzysząca)")
    .setHelpText("Zostaw puste jeśli nie dotyczy.");

  form
    .addMultipleChoiceItem()
    .setTitle("Czy ta osoba potrzebuje noclegu?")
    .setChoiceValues(["Nie", "Tak, od piątku (23.10)", "Tak, od soboty (24.10)"])
    .setRequired(false);

  form
    .addMultipleChoiceItem()
    .setTitle("Transport Tarnów → miejsce ślubu? (osoba towarzysząca)")
    .setChoiceValues(["Nie, dojedzie samodzielnie", "Tak, poproszę"])
    .setRequired(false);

  form
    .addMultipleChoiceItem()
    .setTitle("Bus powrotny po weselu? (osoba towarzysząca)")
    .setChoiceValues(["Nie", "Tak, poproszę"])
    .setRequired(false);

  // Po stronie 3 → idź do strony wspólnej
  pageGuest2.setGoToPage(pageCommon);

  // ── Strona 4: Pytania wspólne ─────────────────────────────────────────

  form
    .addTextItem()
    .setTitle("Dedykacja muzyczna")
    .setHelpText("Jaki utwór musi zagrać na weselu? 🎵");

  form
    .addParagraphTextItem()
    .setTitle("Coś jeszcze?")
    .setHelpText("Dodatkowe uwagi, pytania, życzenia…");

  // ── Logowanie ─────────────────────────────────────────────────────────

  Logger.log("Formularz utworzony!");
  Logger.log("Link do edycji: " + form.getEditUrl());
  Logger.log("Link do wypełniania: " + form.getPublishedUrl());
  Logger.log("Link do odpowiedzi (Sheets): utwórz arkusz z poziomu formularza");
}
