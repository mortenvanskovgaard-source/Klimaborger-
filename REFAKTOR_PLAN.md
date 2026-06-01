# Refaktor-plan for Regnhjælper

Mål: Gå fra én 33.755-linjers `index.html` med 156 inline-scripts og
~240 inline-styles til en ren, vedligeholdbar struktur uden at miste
funktionalitet.

Status pr. seneste commit: 12 sikre punktrettelser er udført. Denne plan
beskriver det større arbejde, der **ikke** kan gøres som punktrettelser,
fordi det kræver arkitektur-ændringer.

---

## Målstruktur

```
index.html              ← kun markup, ingen inline JS/CSS
css/
  styles.css            ← alle samlede styles (afløser ~240 <style>-blokke)
  leaflet.css           ← 3.-parts kortbibliotek (kun til inspirationssiden)
js/
  data.js               ← HAVE_SOLUTIONS, ABA_DIAGNOSES, PROBLEMS, inspiProjects
  navigation.js         ← ÉN navigate() + updateNav() (afløser 24 wrappers)
  diagnosis.js          ← v61-fundament + v64-rendering (samlet, afløser v61/v64-kæden)
  solutions.js          ← byg2RenderGrid + kort-rendering (afløser 45 wrappers)
  components.js         ← modaler, accordions, faner, dropdowns
  maps.js               ← Leaflet/inspiration
  main.js               ← bootstrap: binder alt sammen ved DOMContentLoaded
images/                 ← allerede i brug
assets/                 ← allerede i brug
```

---

## Hvorfor det ikke kan gøres som punktrettelser

To kernefunktioner er monkey-patchet i lag:

- **`navigate()`**: 24 aktive wrappers. Hver tilføjer en side-effekt
  (data-propagation, DOM-injektion, scroll-guard, nav-styling) via
  `setTimeout`. De kan ikke bare slettes — logikken skal flyttes.
- **`byg2RenderGrid()`**: 45 wrappers, samme mønster. 25 har unik logik.

Mønsteret er problemet, ikke de enkelte wrappers. Løsningen er at
erstatte "wrap-og-genwrap" med et **event-system**: kernefunktionen
udsender events, og hver feature lytter i stedet for at pakke ind.

---

## Faser (prioriteret, hver fase er testbar og committes for sig)

### Fase 0 — Sikkerhedsnet (gør dette FØRST)
- [ ] Tag en baseline-skærmoptagelse/screenshots af alle 8 faner +
      diagnose-flow + alle modaler, så vi har en facit at sammenligne med.
- [ ] Skriv en kort manuel test-tjekliste (se nederst).
- **Hvorfor:** Uden baseline kan vi ikke bevise, at intet gik i stykker.

### Fase 1 — Udtræk CSS (lav risiko)
- [ ] Saml alle `<style>`-blokke i `css/styles.css` i samme rækkefølge
      som i HTML (rækkefølge = specificitet, må ikke ændres).
- [ ] Flyt Leaflet-CSS til `css/leaflet.css`, indlæs kun når
      inspirationssiden åbnes (lazy).
- [ ] Find og fjern reelt døde regler (kræver dækningsanalyse — se Fase 6).
- **Risiko:** Lav. CSS-rækkefølge bevares 1:1.
- **Test:** Visuel sammenligning mod baseline.

### Fase 2 — Udtræk data (lav risiko)
- [ ] Flyt `HAVE_SOLUTIONS`, `ABA_DIAGNOSES`, `PROBLEMS`,
      `PROBLEM_CAUSES`, `inspiProjects`, `SOLUTION_LABELS` til `js/data.js`.
- [ ] Indlæs `data.js` først, så alt andet kan læse fra det.
- **Risiko:** Lav. Rene data-objekter uden side-effekter.

### Fase 3 — Saml navigation (mellem risiko) ⚠️
- [ ] Skriv én `navigate()` i `js/navigation.js` baseret på v93-versionen
      (den toggler `.active`/`hidden`, opdaterer nav, gemmer i sessionStorage).
- [ ] Tilføj et event: `navigate()` udsender `rh:navigated` med `{page}`.
- [ ] Gennemgå de 24 gamle wrappers én ad gangen. For hver:
      flyt side-effekten til en lytter på `rh:navigated` i den relevante
      feature-fil, og slet wrapperen.
- [ ] Behold byg/have-aliaset (allerede rettet i punktfase).
- **Risiko:** Mellem. Hver wrapper skal verificeres enkeltvis.
- **Test:** Naviger til hver fane frem og tilbage; tjek at nav lyser op,
      scroll-position, og at side-specifik UI stadig injiceres.

### Fase 4 — Saml løsnings-rendering (høj risiko) ⚠️⚠️
- [ ] Saml den autoritative renderer (v64 + base-renderer fra
      `rh-diagnosis-summary-cleanup`) i `js/solutions.js`.
- [ ] Lad `byg2RenderGrid()` udsende `rh:solutions-rendered` efter render.
- [ ] Konvertér de 25 nødvendige wrappers til lyttere på det event:
      - 3-sektions-layout, "Vælg"/"Fjern"-knapper, live liter-sync,
        data-rh-calculable-annotering, modal-binding, CTA-konsistens,
        kategori-filter-genlayout, klik-robusthed (pointer-events-fix).
- [ ] Bevar v61-fundamentet (modal + saveDiagnosis) — flyt til
      `js/diagnosis.js`, men rør ikke logikken.
- [ ] Slet de døde full-replacement renderers (v23, vfix, tidlige samlet).
- **Risiko:** Høj. Dette er kernen i "Vælg løsninger"-siden.
- **Test:** Hele diagnose→løsning-flowet: vælg problem, se kort,
      vælg/fravælg, juster slidere, åbn detalje-modal, skift kategori.

### Fase 5 — Saml komponenter (mellem risiko)
- [ ] Flyt modaler, accordions, faner (`gangTab`), dropdowns til
      `js/components.js`.
- [ ] Find dubletter (fx to PDF-loadere: pdf-lib vs jsPDF — vælg én).
- [ ] Saml de mange små `init()`/`boot()`-IIFE'er.
- **Risiko:** Mellem.

### Fase 6 — Død-kode-jagt (kræver værktøj)
- [ ] Kør dækningsanalyse i browseren (DevTools Coverage) på tværs af
      alle faner og interaktioner.
- [ ] Fjern CSS-regler og JS-grene, der aldrig rammes.
- **Risiko:** Mellem — kør kun efter Fase 0-baseline findes.

### Fase 7 — Oprydning
- [ ] Fjern ubrugte 3.-parts assets.
- [ ] Saml de versionerede kommentarer (v23/v61/v64/v91...) væk.
- [ ] Minificér til produktion (valgfrit).

---

## Manuel test-tjekliste (kør efter HVER fase)

1. Forside: nedbørswidget skifter mellem dag/uge.
2. "Din grund": adressesøgning (DAWA) + BBR-opslag virker.
3. Diagnose: vælg et problem → modal åbner → vælg årsag → gem.
4. "Vælg løsninger": kort vises i v64-format, sorteret efter anbefaling.
5. Vælg/fravælg kort; tæller og progress-bar opdaterer.
6. Juster slider på et kort; liter-tal opdaterer.
7. Åbn LAR-detalje-modal ("Læs mere"); luk igen.
8. Skift kategori-pille; 3-sektions-layout bevares.
9. "Ansøg & regler": faner (`gangTab`) skifter stabilt.
10. Inspiration: Leaflet-kort loader; markører + filtre virker.
11. Nav-bar: hver fane lyser korrekt op; ingen fane ligger bag en anden.
12. Mobil (<760px): layout bryder ikke sammen; menu åbner/lukker.

---

## Anbefalet rækkefølge at starte

Fase 0 → 1 → 2 er lav risiko og giver hurtig gevinst (filen bliver
læsbar). Fase 3 og 4 er hjertet — afsæt god tid og test grundigt.
Hver fase committes separat, så vi altid kan rulle tilbage.
