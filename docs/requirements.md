# Wedding Website Requirements — Jagna Golemo & Kamil Kozioł

**Wedding date:** 24 October 2026
**Language:** Polish (UI text), English (code)
**Style:** Minimalist

---

## 1. General

- Single-page website with smooth scroll navigation
- Responsive (mobile-first)
- Minimalist, elegant design
- Polish text throughout; code identifiers/comments in English

---

## 2. Navigation

Fixed/sticky top navigation with links to all sections:
- Informacje (Info)
- Harmonogram (Schedule)
- Dojazd (Directions/Maps)
- Noclegi (Accommodation)
- Transport
- Prezenty (Gifts)
- FAQ
- Kontakt (Contact)
- RSVP (call-to-action button)

Mobile: hamburger menu.

---

## 3. Hero Section

- **Background image:** `images/Screenshot 2026-05-09 at 11.29.26.png` (aerial photo of Kopiec Kościuszki venue)
- **Names:** "Jagna & Kamil" (bride first)
- **Date:** "24 października 2026"
- **Subtitle text:** "Nie możemy się doczekać, aż będziemy świętować ten dzień razem z Wami."
- **Countdown timer** — live countdown to the wedding date (days, hours, minutes, seconds)
- **CTA button:** "Potwierdź przybycie" — scrolls/redirects to RSVP section

---

## 4. Key Info Section ("Najważniejsze informacje")

Two cards side by side:

### Ceremony
- **Venue:** Kościół św. Augustyna i św. Jana Chrzciciela w Zwierzyńcu
- **Address:** ul. Tadeusza Kościuszki, 30-114 Kraków
- **Time:** 14:00
- **Google Maps link:** https://maps.app.goo.gl/5XtRXpFQew7G3wWR9?g_st=ac
- Button: "Pokaż na mapie"

### Reception
- **Venue:** Sala weselna przy Kopcu Kościuszki
- **Address:** al. Jerzego Waszyngtona 1, 30-204 Kraków
- **Time:** 16:00
- **Google Maps link:** https://maps.app.goo.gl/58YDzKN9GNxoGxis7
- Button: "Pokaż na mapie"

---

## 5. Schedule Section ("Harmonogram dnia")

Timeline-style layout:

| Time  | Event                 | Description                                       |
|-------|-----------------------|---------------------------------------------------|
| 15:00 | Ceremonia             | Ślub w kościele w Zwierzyńcu                      |
| 16:30 | Przyjazd na salę      | Powitanie gości w sali przy Kopcu Kościuszki       |
| 17:00 | Obiad                 | Uroczysta kolacja weselna                          |
| 18:00 | Wyjście na Kopiec     | Wspólne wyjście na Kopiec Kościuszki               |

---

## 6. Directions & Maps Section ("Jak dojechać")

Two sub-blocks (Church + Venue), each containing:

### For each location:
- Name, address
- **Written driving directions** (placeholder text for now — to be refined later)
- **Parking info** with marked locations
- **Static map image** from `images/`:
  - Church: `images/mapa-kosciol.png`
  - Venue: `images/mapa-kopiec.png`
- **Embedded Google Map** (iframe)

### Important warning for venue:
> **Google Maps prowadzi błędnie!** Dojeżdżając do Kopca Kościuszki al. Waszyngtona, na rozwidleniu przy kopcu należy **skręcić w lewo**, a nie w prawo (jak sugeruje nawigacja). Prawy zjazd prowadzi na parking widokowy — sala weselna jest po lewej stronie, w zabudowaniach fortu.

---

## 7. Accommodation Section ("Noclegi")

- **Status:** "Wkrótce więcej informacji" (Stay Tuned)
- Placeholder text explaining that hotel details (address, prices) will be added later
- Mention that the RSVP form asks about accommodation needs (Friday or Saturday night)

---

## 8. Transport Section

- **Status:** "Wkrótce więcej informacji" (Stay Tuned)
- Planned bus route: **Tarnów → Kraków** (before ceremony)
- Planned return buses after reception
- Departure times: placeholder (TBD)
- Pickup point & parking: placeholder (TBD)
- Mention that RSVP form asks about transport needs

---

## 9. Gifts Section ("Prezenty")

Text: "Zamiast kwiatów będziemy wdzięczni za:"

Four items with icons:
1. Wino (Wine)
2. Kawa (Coffee)
3. Książki (Books)
4. Karma dla zwierząt (Pet food)

---

## 10. FAQ Section

Accordion/collapsible list:

| Question | Answer |
|----------|--------|
| Czy mogę przyjechać z dziećmi? | Brak infrastruktury dla dzieci na sali. Prosimy o wieczór bez dzieci. |
| Czy jest parking? | Tak, zarówno przy kościele, jak i przy sali. Szczegóły w sekcji Dojazd. |
| Czy będzie nocleg? | Pracujemy nad tym. Szczegóły wkrótce. Zaznacz w RSVP. |
| Do której trwa wesele? | Do białego rana (~4:00–5:00). |
| Czy można robić zdjęcia w kościele? | Prosimy o niefotografowanie podczas ceremonii. Fotograf się tym zajmie. Po ceremonii będzie czas na zdjęcia. |
| Kiedy wręczamy prezenty? | W dowolnym momencie wesela. Przy wejściu na salę będzie wyznaczone miejsce. Można też przekazać rodzicom/świadkom. |

---

## 11. RSVP Section

- Deadline text: "Prosimy o potwierdzenie obecności do **24 września 2026**."
- Description of what the form asks (so guests can think before clicking):
  - Czy zabierasz osobę towarzyszącą (+1)?
  - Imię i nazwisko
  - Preferencje żywieniowe (wegetariańskie, alergie, nietolerancje)
  - Czy potrzebujesz noclegu? (od piątku / od soboty)
  - Czy potrzebujesz transportu? (Tarnów → Kraków / bus powrotny)
  - Dedykacja muzyczna — jaki utwór musi koniecznie zagrać?
- **CTA button:** "Wypełnij formularz RSVP" → links to Google Forms (URL placeholder for now)
- Note: "Link do formularza zostanie uzupełniony wkrótce"

### Google Form fields (for form creation):
1. Imię i nazwisko (text)
2. Czy potwierdzasz przybycie? (yes/no)
3. Czy zabierasz +1? (yes/no) → if yes: imię i nazwisko +1
4. Preferencje żywieniowe (checkboxes: standard / wegetariańskie / wegańskie / inne — pole tekstowe)
5. Alergie / nietolerancje pokarmowe (text, optional)
6. Nocleg (radio: nie potrzebuję / od piątku / od soboty)
7. Transport Tarnów → Kraków (yes/no)
8. Transport powrotny — bus (yes/no)
9. Dedykacja muzyczna — utwór, który musi zagrać (text, optional)

---

## 12. Contact Section ("Kontakt")

Grid of contact cards (phone numbers are **placeholders** — replace with real ones):

| Role                    | Name (placeholder)    | Phone (placeholder)   |
|-------------------------|-----------------------|-----------------------|
| Świadkowa               | Anna Kowalska         | +48 512 345 678       |
| Świadek                 | Piotr Nowak           | +48 523 456 789       |
| Mama Panny Młodej       | Małgorzata Golemo     | +48 534 567 890       |
| Tata Panny Młodej       | Krzysztof Golemo      | +48 545 678 901       |
| Mama Pana Młodego       | Ewa Kozioł            | +48 556 789 012       |
| Tata Pana Młodego       | Tomasz Kozioł         | +48 567 890 123       |

---

## 13. Footer

Simple: "Jagna & Kamil · 24.10.2026"

---

## 14. Assets

| File | Description |
|------|-------------|
| `images/Screenshot 2026-05-09 at 11.29.26.png` | Hero background — aerial photo of Kopiec Kościuszki venue |
| `images/mapa-kosciol.png` | Map screenshot — church location with parking |
| `images/mapa-kopiec.png` | Map screenshot — venue location with parking |

---

## 15. Technical Notes

- All placeholder content (directions text, contact names/phones, Google Forms link, accommodation/transport details) is marked for later replacement
- Countdown timer targets: **24 October 2026, 14:00 CEST**
- Google Maps iframes should be embedded for both locations
- Website should be deployable as static files (HTML/CSS/JS)
