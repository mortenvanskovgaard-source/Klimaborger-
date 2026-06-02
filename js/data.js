/* Regnhjælper – statiske data (Fase 2)
   Udtrukket fra index.html. Ren data uden afhængigheder.
   SKAL indlæses før de scripts der bruger HAVE_SOLUTIONS / inspiProjects.
*/

// ── Inspirationsprojekter (kort på inspirationssiden) ──
const inspiProjects = [
  // Offentlige LAR-anlæg – rigtige inspirationscases fra byrum, parker og vådområder
  { id:1, navn:'Enghaveparken', by:'København V', lat:55.6669, lon:12.5413, kat:'forsinkelse', icon:'water_drop', desc:'Skybrudssikret park med kapacitet til store regnhændelser. Viser hvordan regnvand kan blive en del af leg, ophold og bynatur.', stat1:'26.000 m³', lbl1:'Kapacitet', stat2:'100-årsregn', lbl2:'Sikringsniveau', år:2023, budget:'høj', rekreativitet:'høj', biodiversitet:'høj', ejer:'offentlig', img:'assets/billede-03.webp' },
  { id:2, navn:'Bryggervangen', by:'København Ø', lat:55.7050, lon:12.5850, kat:'nedsivning', icon:'park', desc:'LAR-kvarter med regnbede, grønne gader og permeable belægninger, der holder vandet lokalt og gør gaden grønnere.', stat1:'19 ha', lbl1:'Projektareal', stat2:'60%', lbl2:'Afstrømning reduceret', år:2014, budget:'høj', rekreativitet:'høj', biodiversitet:'mellem', ejer:'offentlig', img:'assets/billede-04.webp' },
  { id:3, navn:'Langelands Plads', by:'Frederiksberg', lat:55.6777, lon:12.5235, kat:'forsinkelse', icon:'waves', desc:'Byrum med integreret skybrudssikring og midlertidigt bassin ved kraftig regn. God inspiration til lavninger og multifunktionelle flader.', stat1:'3.000 m³', lbl1:'Forsinkelsesvolumen', stat2:'10-årsregn', lbl2:'Sikringsniveau', år:2019, budget:'mellem', rekreativitet:'mellem', biodiversitet:'lav', ejer:'offentlig', img:'assets/billede-05.webp' },
  { id:4, navn:'Risvangen LAR', by:'Aarhus', lat:56.1775, lon:10.1905, kat:'nedsivning', icon:'grass', desc:'Klimatilpasning med regnbede, grønne rabatter og nedsivning tæt på hverdagslivet. Relevant inspiration til villaveje og boligområder.', stat1:'2.400 m²', lbl1:'Regnbede', stat2:'85%', lbl2:'Opsamler vand lokalt', år:2020, budget:'mellem', rekreativitet:'mellem', biodiversitet:'mellem', ejer:'offentlig', img:'assets/billede-06.webp' },
  { id:5, navn:'Sønæs Vådområde', by:'Viborg', lat:56.4525, lon:9.4020, kat:'nedsivning', icon:'eco', desc:'Vådområde der renser og forsinker regnvand fra byen og samtidig giver plads til fugle, planter og rekreative stier.', stat1:'12 ha', lbl1:'Vådområde', stat2:'+40 arter', lbl2:'Fugle registreret', år:2018, budget:'høj', rekreativitet:'høj', biodiversitet:'høj', ejer:'offentlig' },
  { id:6, navn:'Glisholm Sø', by:'Odense', lat:55.3860, lon:10.4300, kat:'opsamling', icon:'water', desc:'Regnvandssø der forebygger oversvømmelser og samtidig bliver et grønt landskabselement med naturværdi.', stat1:'80.000 m³', lbl1:'Søvolumen', stat2:'50 ha', lbl2:'Opland', år:2016, budget:'høj', rekreativitet:'høj', biodiversitet:'høj', ejer:'offentlig', img:'assets/billede-07.webp' },

  // Private LAR-inspirationer – tænkte, realistiske eksempler til almindelige grunde
  { id:7, navn:'Forhave med regnbed', by:'Roskilde', lat:55.6415, lon:12.0803, kat:'nedsivning', icon:'local_florist', desc:'Et lavt regnbed i forhaven tager vand fra tagrenden og giver blomster til bier og sommerfugle.', stat1:'8 m²', lbl1:'Regnbed', stat2:'Tagvand', lbl2:'Fra carport og hus', år:2024, budget:'lav', rekreativitet:'mellem', biodiversitet:'høj', ejer:'privat' },
  { id:8, navn:'Grøn indkørsel', by:'Horsens', lat:55.8607, lon:9.8503, kat:'forsinkelse', icon:'grid_view', desc:'Permeabel belægning i en privat indkørsel, så vandet kan trænge langsomt ned i stedet for at løbe mod kloakken.', stat1:'45 m²', lbl1:'Belægning', stat2:'Mellem', lbl2:'Budget', år:2022, budget:'mellem', rekreativitet:'lav', biodiversitet:'lav', ejer:'privat' },
  { id:9, navn:'Regntønder ved drivhus', by:'Silkeborg', lat:56.1697, lon:9.5451, kat:'opsamling', icon:'water_full', desc:'To regntønder opsamler vand fra drivhus og skur, så vandet kan bruges til krukker, køkkenhave og tørre perioder.', stat1:'600 L', lbl1:'Opsamling', stat2:'Lavt', lbl2:'Budget', år:2024, budget:'lav', rekreativitet:'mellem', biodiversitet:'mellem', ejer:'privat' },
  { id:10, navn:'Lille havedam', by:'Næstved', lat:55.2299, lon:11.7609, kat:'opsamling', icon:'waves', desc:'En lav havedam modtager overløb fra regnbedet og giver vand til fugle, guldsmede og insekter.', stat1:'3 m²', lbl1:'Vandspejl', stat2:'Høj', lbl2:'Biodiversitet', år:2023, budget:'mellem', rekreativitet:'høj', biodiversitet:'høj', ejer:'privat' },
  { id:11, navn:'Grønt skurtag', by:'Aalborg', lat:57.0488, lon:9.9217, kat:'forsinkelse', icon:'filter_hdr', desc:'Sedumtag på skur og cykeloverdækning forsinker hverdagsregn og gør gårdrummet grønnere.', stat1:'18 m²', lbl1:'Grønt tag', stat2:'Forsinker', lbl2:'Hverdagsregn', år:2023, budget:'mellem', rekreativitet:'mellem', biodiversitet:'mellem', ejer:'privat' },
  { id:12, navn:'Faskine under græs', by:'Køge', lat:55.4580, lon:12.1821, kat:'nedsivning', icon:'inventory_2', desc:'En skjult faskine under plænen håndterer tagvand uden at ændre havens udtryk. God løsning hvor jorden kan nedsive.', stat1:'4.000 L', lbl1:'Volumen', stat2:'Skjult', lbl2:'Løsning', år:2022, budget:'mellem', rekreativitet:'lav', biodiversitet:'lav', ejer:'privat' },
  { id:13, navn:'Vild regnkant', by:'Hillerød', lat:55.9300, lon:12.3000, kat:'nedsivning', icon:'eco', desc:'En smal regnkant langs terrassen leder vand til stauder og hjemmehørende planter i stedet for afløb.', stat1:'12 m', lbl1:'Regnkant', stat2:'Høj', lbl2:'Biodiversitet', år:2024, budget:'lav', rekreativitet:'høj', biodiversitet:'høj', ejer:'privat' },
  { id:14, navn:'Lavning i baghaven', by:'Esbjerg', lat:55.4765, lon:8.4594, kat:'forsinkelse', icon:'landscape', desc:'En blød lavning i græsset holder kortvarigt på vand ved skybrud og kan stadig bruges som legeplads, når det er tørt.', stat1:'25 m²', lbl1:'Lavning', stat2:'Lavt', lbl2:'Budget', år:2021, budget:'lav', rekreativitet:'høj', biodiversitet:'mellem', ejer:'privat' },
  { id:15, navn:'Terrasse med grusfuger', by:'Odder', lat:55.9757, lon:10.1490, kat:'forsinkelse', icon:'texture', desc:'Eksisterende fliseterrasse er lagt om med brede grusfuger, så mere regn bliver på grunden.', stat1:'32 m²', lbl1:'Terrasse', stat2:'Mellem', lbl2:'Budget', år:2023, budget:'mellem', rekreativitet:'mellem', biodiversitet:'lav', ejer:'privat' },
  { id:16, navn:'Nabofælles regnbede', by:'Fredericia', lat:55.5657, lon:9.7526, kat:'nedsivning', icon:'groups', desc:'Tre naboer har samlet tagvand i fælles regnbede langs skellet. Giver mindre vand på vejen og en grønnere fælles kant.', stat1:'30 m²', lbl1:'Regnbede', stat2:'Fælles', lbl2:'Løsning', år:2024, budget:'mellem', rekreativitet:'høj', biodiversitet:'høj', ejer:'privat' }
];

// ── MINE LØSNINGER — løsningsvælger (LAR-løsninger) ──
const HAVE_SOLUTIONS = [

  // NEDSIVNING

  {

    id:'regnbed', navn:'Regnbed', kat:'nedsivning', katNavn:'Opsamler vand', katCol:'#006573', icon:'rainy',

    tagline:'Den naturlige LAR-løsning til næsten alle haver',

    hvad:'Et regnbed er en let nedsænket beplantning der midlertidigt opsamler regnvand fra tag, belægning eller veje — og langsomt lader det sive ned i jordbunden eller fordampe via planterne.',

    fordele:['Billig at anlægge — fra 2.500 kr.','Flot i haven hele året','Øger biodiversitet med insekter og fugle','Reducerer belastning på kloakken','Virker selv ved tung lerjord hvis designet rigtigt'],

    ulemper:['Kræver passende plantevalg','Bør ikke placeres tæt på fundament','Virker ikke ved meget højt grundvand'],

    hvornaar:'Passer til dig hvis du har overfladevand fra tag eller belægning som løber hen over haven, og du ønsker en grøn og naturlig løsning.',

    pris:'2.500 – 20.000 kr.',

    tid:'1–3 dage',

    svaerhed:'Let til middel',

    vedligehold:'Lav — klip og vand som normal have',

    fakta:['Kan rumme 200–2.000 L afhængig af størrelse','Rørcenter anbefaler 40 cm sandblandet muld i bunden','Beplantning skal tåle vekslen mellem tørt og vådt'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><ellipse cx="140" cy="88" rx="120" ry="25" fill="#3aaa55" opacity="0.08"/><path d="M20 72 Q140 62 260 72" stroke="#006573" stroke-width="1.5" fill="none"/><path d="M20 72 L20 95 Q140 105 260 95 L260 72Z" fill="#006573" opacity="0.06"/><path d="M30 72 L30 50 Q35 42 45 40 Q55 38 60 72" stroke="#006573" stroke-width="1.5" fill="none" opacity="0.4"/><line x1="50" y1="72" x2="50" y2="38" stroke="#006573" stroke-width="1.5" stroke-linecap="round"/><ellipse cx="50" cy="34" rx="9" ry="7" fill="none" stroke="#006573" stroke-width="1.5"/><line x1="140" y1="72" x2="140" y2="28" stroke="#006573" stroke-width="1.5" stroke-linecap="round"/><ellipse cx="140" cy="24" rx="8" ry="6" fill="none" stroke="#3aaa55" stroke-width="1.5"/><path d="M134 30 Q128 38 135 40" fill="none" stroke="#3aaa55" stroke-width="1.2"/><line x1="220" y1="72" x2="220" y2="42" stroke="#006573" stroke-width="1.5" stroke-linecap="round"/><path d="M214 46 Q220 40 226 46" fill="none" stroke="#3aaa55" stroke-width="1.5"/><rect x="40" y="80" width="200" height="18" rx="2" fill="#3aaa55" opacity="0.12"/><rect x="50" y="88" width="180" height="10" rx="1" fill="#006573" opacity="0.08"/></svg>`

  },

  {

    id:'faskine', navn:'Faskine', kat:'nedsivning', katNavn:'Opsamler vand', katCol:'#006573', icon:'water_drop',

    tagline:'Usynlig nedsivning under jordoverfladen',

    hvad:'En faskine er en underjordisk kasse eller rør fyldt med grus eller plastkassetter. Regnvand ledes hertil via nedløbsrør, og nedsiver gradvist til grundvandet.',

    fordele:['Helt usynlig — ingen ændring af haveudseende','Høj kapacitet (500–5.000 L)','Lang levetid (30+ år)','Passer til de fleste grunde med god nedsivning'],

    ulemper:['Kræver korrekt dimensionering og inspektion','Dyr installation (gravearbejde)','Virker ikke ved tung moræneler eller højt grundvand','Kræver 5 m afstand fra fundament'],

    hvornaar:'Ideel når du vil håndtere tagvand diskret, har begrænset overfladeareal eller bor i tætbebygget område.',

    pris:'5.000 – 25.000 kr.',

    tid:'1–2 dage',

    svaerhed:'Kræver fagmand',

    vedligehold:'Meget lav — tjek hvert 5–10 år',

    fakta:['Rørcenter krav: min. 5 m fra bolig','90–95% hulrum i kassetter','Kræver sandfang (filterbrønd) foran'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><line x1="0" y1="55" x2="280" y2="55" stroke="#006573" stroke-width="1.5" opacity="0.2"/><rect x="40" y="60" width="200" height="55" rx="4" fill="white" stroke="#006573" stroke-width="1.5" stroke-dasharray="6,3"/><line x1="80" y1="60" x2="80" y2="115" stroke="#006573" stroke-width="0.8" opacity="0.35"/><line x1="120" y1="60" x2="120" y2="115" stroke="#006573" stroke-width="0.8" opacity="0.35"/><line x1="160" y1="60" x2="160" y2="115" stroke="#006573" stroke-width="0.8" opacity="0.35"/><line x1="200" y1="60" x2="200" y2="115" stroke="#006573" stroke-width="0.8" opacity="0.35"/><line x1="40" y1="85" x2="240" y2="85" stroke="#006573" stroke-width="0.8" opacity="0.35"/><line x1="140" y1="15" x2="140" y2="60" stroke="#006573" stroke-width="2.5" stroke-linecap="round"/><rect x="110" y="8" width="60" height="14" rx="3" fill="none" stroke="#006573" stroke-width="1.5"/><circle cx="130" cy="60" r="6" fill="none" stroke="#006573" stroke-width="1.5"/><text x="140" y="40" text-anchor="middle" font-size="9" fill="#006573" opacity="0.6" font-family="sans-serif">Tagvand ind</text></svg>`

  },

  {

    id:'permeabel', navn:'Permeabel belægning', kat:'nedsivning', katNavn:'Opsamler vand', katCol:'#006573', icon:'grid_view',

    tagline:'Regnvandet siver ned der, hvor det falder',

    hvad:'Permeabel belægning er fliser, grus, græsarmeringssten eller asfalt med huller/sprækker der lader regnvand sive direkte ned i en drænende underliggende bund.',

    fordele:['Dobbeltfunktion — befæstelse og nedsivning','Ingen ekstra plads nødvendig','Reducerer afstrømning markant','Mange æstetiske muligheder'],

    ulemper:['Kræver dræn-egnet jordbund nedenunder','Kan tilstoppe med blade og snavs','Kræver rengøring 1–2 gange om året'],

    hvornaar:'Oplagt ved indkørsler, terrasser, stier og P-pladser hvor du i forvejen skal befæste. Erstatter impermeable fliser.',

    pris:'400 – 900 kr./m²',

    tid:'Varierer med størrelse',

    svaerhed:'Middel',

    vedligehold:'Lav — fejning 1–2 gange om året',

    fakta:['Reducerer afstrømning med 50–100%','Kræver 20–40 cm drænasfalt/grus underneath','Kan kombineres med faskine nedenunder'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><rect x="10" y="35" width="260" height="30" rx="2" fill="none" stroke="#006573" stroke-width="1.5" opacity="0.5"/><rect x="14" y="37" width="30" height="24" rx="1" fill="none" stroke="#006573" stroke-width="1.2"/><rect x="50" y="37" width="30" height="24" rx="1" fill="none" stroke="#006573" stroke-width="1.2"/><rect x="86" y="37" width="30" height="24" rx="1" fill="none" stroke="#006573" stroke-width="1.2"/><rect x="122" y="37" width="30" height="24" rx="1" fill="none" stroke="#006573" stroke-width="1.2"/><rect x="158" y="37" width="30" height="24" rx="1" fill="none" stroke="#006573" stroke-width="1.2"/><rect x="194" y="37" width="30" height="24" rx="1" fill="none" stroke="#006573" stroke-width="1.2"/><rect x="230" y="37" width="36" height="24" rx="1" fill="none" stroke="#006573" stroke-width="1.2"/><rect x="10" y="65" width="260" height="20" rx="1" fill="#3aaa55" opacity="0.12" stroke="#3aaa55" stroke-width="1" stroke-dasharray="4,2"/><line x1="40" y1="35" x2="40" y2="22" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/><polygon points="36,25 44,25 40,35" fill="#006573" opacity="0.5"/><line x1="120" y1="35" x2="120" y2="22" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/><polygon points="116,25 124,25 120,35" fill="#006573" opacity="0.5"/><line x1="200" y1="35" x2="200" y2="22" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/><polygon points="196,25 204,25 200,35" fill="#006573" opacity="0.5"/><line x1="30" y1="14" x2="28" y2="22" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/><line x1="120" y1="10" x2="118" y2="18" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/><line x1="210" y1="12" x2="208" y2="20" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/></svg>`

  },

  // MAGASINERING

  {

    id:'vaadbassin', navn:'Vådbassin', kat:'magasinering', katNavn:'Forsinker vand', katCol:'#1a4a3a', icon:'pool',

    tagline:'Et permanent vandspejl der rummer meget',

    hvad:'Et vådbassin er en kunstig sø med permanent vandflade. Det opsamler store mængder regnvand og frigiver det langsomt til omgivelserne via nedsivning og fordampning.',

    fordele:['Stor kapacitet — 5.000–50.000 L','Smukt naturligt element i haven','Gavner biodiversitet markant','Kræver meget lidt energi at drive'],

    ulemper:['Kræver stor plads (min. 20–50 m²)','Dyr anlæggelse','Kræver vedligehold af vandplanter','Kan tiltrække myg'],

    hvornaar:'Egnet til store grunde, landsbyer og erhvervsejendomme. Fantastisk til regnvandshåndtering i samarbejde med naboer.',

    pris:'20.000 – 150.000 kr.',

    tid:'1–2 uger',

    svaerhed:'Kræver anlægsgartner',

    vedligehold:'Middel — pleje af planter og vandkvalitet',

    fakta:['Permanent vandflade hele året','Dimensioneres til 5–20 årsregn','Beplantning renser vandet naturligt'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><ellipse cx="140" cy="80" rx="120" ry="30" fill="#006573" opacity="0.07"/><path d="M20 70 Q80 60 140 70 Q200 80 260 70" stroke="#006573" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M20 70 Q80 60 140 70 Q200 80 260 70 L260 95 Q140 105 20 95Z" fill="#006573" opacity="0.07"/><line x1="25" y1="70" x2="25" y2="48" stroke="#3aaa55" stroke-width="2" stroke-linecap="round"/><path d="M18 52 Q25 44 32 52" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="255" y1="70" x2="255" y2="46" stroke="#3aaa55" stroke-width="2" stroke-linecap="round"/><path d="M248 50 Q255 42 262 50" fill="none" stroke="#3aaa55" stroke-width="1.5"/><ellipse cx="140" cy="71" rx="18" ry="6" fill="none" stroke="#3aaa55" stroke-width="1.2"/><circle cx="140" cy="70" r="4" fill="none" stroke="#e84070" stroke-width="1.2" opacity="0.7"/><line x1="100" y1="70" x2="100" y2="55" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><path d="M94 58 Q100 52 106 58" fill="none" stroke="#3aaa55" stroke-width="1.2"/><path d="M20 70 Q80 60 140 70" stroke="#006573" stroke-width="1" fill="none" opacity="0.3" stroke-dasharray="4,3"/></svg>`

  },

  {

    id:'toerbassin', navn:'Tørbassin', kat:'magasinering', katNavn:'Forsinker vand', katCol:'#1a4a3a', icon:'landscape',

    tagline:'Tørt til daglig — fyldes ved kraftig regn',

    hvad:'Et tørbassin er en nedsænket lavning der normalt er tørt og bruges til leg eller ophold. Ved kraftig regn fyldes det op og fungerer som midlertidigt magasin.',

    fordele:['Dobbeltfunktion som legearea/opholdszone','Kan bruges som park eller grønt rum','Billigere end vådbassin','Kræver ikke vandplanter'],

    ulemper:['Vand kan stå i 24–48 timer efter kraftig regn','Kræver let hældning for at tømme','Ikke egnet til moræneler'],

    hvornaar:'Ideel i parker, skoler, boligforeninger og store private grunde. God til at forsinke vand og aflaste kloakken.',

    pris:'5.000 – 40.000 kr.',

    tid:'3–7 dage',

    svaerhed:'Kræver anlægsgartner',

    vedligehold:'Lav — klip græs',

    fakta:['Dimensioneres til 10–20 årsregn','Bund beplantes med robust græs','Vandstanden må max. stå 48 timer'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><path d="M10 55 L60 55 Q75 55 90 75 L190 75 Q205 55 220 55 L270 55" stroke="#006573" stroke-width="1.5" fill="none"/><path d="M90 75 L190 75" stroke="#006573" stroke-width="2" opacity="0.5"/><path d="M90 75 L190 75 L188 85 Q140 92 92 85Z" fill="#006573" opacity="0.07"/><line x1="90" y1="67" x2="190" y2="67" stroke="#006573" stroke-width="1" stroke-dasharray="5,3" opacity="0.4"/><line x1="110" y1="75" x2="110" y2="64" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><line x1="130" y1="75" x2="130" y2="62" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><line x1="150" y1="75" x2="150" y2="63" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><line x1="170" y1="75" x2="170" y2="65" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><line x1="30" y1="30" x2="28" y2="45" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/><line x1="140" y1="28" x2="138" y2="38" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/><line x1="250" y1="30" x2="248" y2="40" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/><text x="140" y="110" text-anchor="middle" font-size="9" fill="#006573" opacity="0.5" font-family="sans-serif">Tørt til daglig · fyldes ved regn</text></svg>`

  },

  {

    id:'regnvbeh', navn:'Regnvandsbeholder', kat:'magasinering', katNavn:'Forsinker vand', katCol:'#1a4a3a', icon:'water_full',

    tagline:'Gem tagvandet og brug det i haven',

    hvad:'En regnvandsbeholder (tønde eller cisterne) opsamler tagvand fra nedløbsrøret og gemmer det til havevanding, toiletskyl eller vask.',

    fordele:['Sparer vandregning','Simpel installation — kan gøres selv','Fra 500 kr. for en enkel tønde','Kan kobles til automatisk havevanding'],

    ulemper:['Begrænset volumen (50–5.000 L)','Fylder hurtigt op ved kraftig regn','Kræver tømning inden frost'],

    hvornaar:'Passer til alle haver. Særlig god kombination med grønt tag eller stor tagflade.',

    pris:'500 – 15.000 kr.',

    tid:'1–4 timer (tønde) / 1–2 dage (cisterne)',

    svaerhed:'Let',

    vedligehold:'Lav — tøm om vinteren',

    fakta:['Gennemsnitsforbrug til havevanding: 30 L/m²/uge','En 1.000 L beholder fyldes på ca. 25 mm regn fra 40 m² tag','Tilbagebetalingstid 3–8 år'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><rect x="55" y="15" width="65" height="42" rx="2" fill="none" stroke="#006573" stroke-width="1.5"/><polygon points="44,17 131,17 87,4" fill="none" stroke="#006573" stroke-width="1.5" stroke-linejoin="round"/><line x1="55" y1="57" x2="55" y2="75" stroke="#006573" stroke-width="2" stroke-linecap="round"/><line x1="55" y1="62" x2="38" y2="62" stroke="#006573" stroke-width="1.5" stroke-linecap="round"/><rect x="22" y="50" width="24" height="35" rx="6" fill="white" stroke="#006573" stroke-width="1.5"/><rect x="23" y="65" width="22" height="19" rx="5" fill="#006573" opacity="0.10"/><line x1="23" y1="66" x2="45" y2="66" stroke="#006573" stroke-width="0.8" opacity="0.4"/><line x1="22" y1="74" x2="18" y2="74" stroke="#006573" stroke-width="1.5" stroke-linecap="round"/><line x1="18" y1="74" x2="18" y2="80" stroke="#006573" stroke-width="1.5" stroke-linecap="round"/><line x1="46" y1="54" x2="55" y2="54" stroke="#006573" stroke-width="1" stroke-dasharray="3,2" opacity="0.4"/><line x1="120" y1="65" x2="185" y2="65" stroke="#3aaa55" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/><polygon points="180,62 188,65 180,68" fill="#3aaa55" opacity="0.5"/><rect x="188" y="52" width="28" height="34" rx="4" fill="none" stroke="#3aaa55" stroke-width="1.5"/><path d="M216 62 Q228 58 234 66" stroke="#3aaa55" stroke-width="1.5" fill="none"/></svg>`

  },

  {

    id:'underjord', navn:'Underjordisk bassin', kat:'magasinering', katNavn:'Forsinker vand', katCol:'#1a4a3a', icon:'expand_more',

    tagline:'Stort skjult magasin under terræn',

    hvad:'Et underjordisk bassin er en stor vandtæt beholder nedgravet under terræn. Det opsamler store vandmængder og frigiver dem langsomt eller bruges til toiletskyl og vanding.',

    fordele:['Meget stor kapacitet (1.000–50.000 L)','Ingen ændring af overfladeareal','Kan bruges til genbrug af vand','Lang levetid (50+ år)'],

    ulemper:['Dyr installation','Kræver pumpe til brug','Kræver jord med plads til gravning'],

    hvornaar:'Egnet til erhverv, boligforeninger eller store parcelhuse. God til at udnytte tagvand til toilet og vask.',

    pris:'15.000 – 100.000 kr.',

    tid:'2–5 dage',

    svaerhed:'Kræver fagmand',

    vedligehold:'Lav — tjek filter årligt',

    fakta:['Plastkassetter: 95% hulrum','Kan kombineres med pumpe og styresystem','EU-krav om 0,5 m fristand til grundvand'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><line x1="0" y1="45" x2="280" y2="45" stroke="#006573" stroke-width="1.5" opacity="0.2"/><rect x="30" y="52" width="140" height="60" rx="4" fill="white" stroke="#006573" stroke-width="1.5" stroke-dasharray="6,3"/><line x1="60" y1="52" x2="60" y2="112" stroke="#006573" stroke-width="0.8" opacity="0.3"/><line x1="90" y1="52" x2="90" y2="112" stroke="#006573" stroke-width="0.8" opacity="0.3"/><line x1="120" y1="52" x2="120" y2="112" stroke="#006573" stroke-width="0.8" opacity="0.3"/><line x1="150" y1="52" x2="150" y2="112" stroke="#006573" stroke-width="0.8" opacity="0.3"/><line x1="30" y1="80" x2="170" y2="80" stroke="#006573" stroke-width="0.8" opacity="0.3"/><line x1="100" y1="52" x2="100" y2="45" stroke="#006573" stroke-width="2" stroke-linecap="round"/><line x1="100" y1="45" x2="100" y2="15" stroke="#006573" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.5"/><circle cx="190" cy="82" r="16" fill="none" stroke="#1a4a3a" stroke-width="1.5"/><line x1="190" y1="66" x2="190" y2="45" stroke="#1a4a3a" stroke-width="1.5" stroke-linecap="round"/><text x="190" y="86" text-anchor="middle" font-size="11" fill="#1a4a3a" font-family="sans-serif">↑</text><text x="190" y="95" text-anchor="middle" font-size="8" fill="#1a4a3a" opacity="0.6" font-family="sans-serif">Pumpe</text></svg>`

  },

  // FORDAMPNING

  {

    id:'grontag', navn:'Grønt tag', kat:'fordampning', katNavn:'Gør noget for naturen', katCol:'#3aaa55', icon:'filter_hdr',

    tagline:'Hele taget arbejder for dig',

    hvad:'Et grønt tag er et levende plantedække på taget — fra enkle sedumtage til egentlige have- eller engstage. Det tilbageholder regnvand, isolerer og forlænger tagkonstruktionens levetid.',

    fordele:['Tilbageholder 40–80% af nedbøren','Isolerer mod varme og kulde','Forlænger tagmembranens levetid markant','Øger biodiversitet i byer','Reducerer støj indefra'],

    ulemper:['Kræver bærende tagkonstruktion','Dyrere end standard tag','Hældning max. 30°','Kræver godkendelse ved nyanlæg'],

    hvornaar:'Ideel på flade eller svagt skrånende tage: garager, carporte, skure, udhuse og enfamiliehuse.',

    pris:'400 – 800 kr./m²',

    tid:'1–3 dage pr. 50 m²',

    svaerhed:'Kræver tækker eller anlægsgartner',

    vedligehold:'Meget lav for sedum — gødn 1 gang om året',

    fakta:['Sedumtag vejer ca. 50 kg/m²','Tilbageholder 40–80% af nedbøren','Rørcenter: resterende 50% ledes til nedsivningsanlæg'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><rect x="50" y="68" width="180" height="45" rx="2" fill="white" stroke="#006573" stroke-width="1.5"/><polygon points="38,70 242,70 140,28" fill="none" stroke="#006573" stroke-width="1.5" stroke-linejoin="round"/><path d="M40 68 Q140 62 240 68" stroke="#3aaa55" stroke-width="4" opacity="0.4" stroke-linecap="round"/><line x1="80" y1="67" x2="80" y2="50" stroke="#006573" stroke-width="1.5" stroke-linecap="round"/><path d="M74 53 Q80 46 86 53" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="110" y1="67" x2="110" y2="44" stroke="#006573" stroke-width="1.5" stroke-linecap="round"/><path d="M104 47 Q110 40 116 47" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="140" y1="67" x2="140" y2="41" stroke="#006573" stroke-width="1.5" stroke-linecap="round"/><path d="M134 44 Q140 37 146 44" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="170" y1="67" x2="170" y2="46" stroke="#006573" stroke-width="1.5" stroke-linecap="round"/><path d="M164 49 Q170 42 176 49" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="200" y1="67" x2="200" y2="53" stroke="#006573" stroke-width="1.5" stroke-linecap="round"/><path d="M194 56 Q200 49 206 56" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="90" y1="50" x2="90" y2="40" stroke="#006573" stroke-width="1" opacity="0.35"/><polygon points="87,42 93,42 90,38" fill="#006573" opacity="0.35"/><line x1="160" y1="44" x2="160" y2="34" stroke="#006573" stroke-width="1" opacity="0.35"/><polygon points="157,36 163,36 160,32" fill="#006573" opacity="0.35"/></svg>`

  },

  {

    id:'traeer', navn:'Løv- og nåletræer', kat:'fordampning', katNavn:'Gør noget for naturen', katCol:'#3aaa55', icon:'park',

    tagline:'Naturen som regnvandshåndtering',

    hvad:'Træer er kraftfulde LAR-elementer. De opfanger regn i bladverket, optager vand gennem rødderne og fordamper det igen — op til 200 L pr. dag om sommeren for et modent løvtræ.',

    fordele:['Fordamper enorme vandmængder','Skaber skygge og mikroklima','Øger biodiversitet og naturværdi','Lang levetid (100+ år)','Øger ejendomsværdi'],

    ulemper:['Kræver plads (rødder og kroneDiameter)','Virker primært maj–oktober','Kræver vanding det første år'],

    hvornaar:'Alle haver kan bruge træer som del af en LAR-løsning. Særlig effektive på store grunde eller ved siden af regnbed.',

    pris:'500 – 3.000 kr./stk.',

    tid:'Halvanden dag',

    svaerhed:'Let',

    vedligehold:'Lav — vand de første 2 år',

    fakta:['Et modent løvtræ: 100–200 L/dag om sommeren','Nåletræer virker hele året','Rødder kan nå 5–10 m ud'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><line x1="70" y1="115" x2="70" y2="70" stroke="#8a6a35" stroke-width="4" stroke-linecap="round"/><ellipse cx="70" cy="55" rx="28" ry="24" fill="none" stroke="#3aaa55" stroke-width="1.5"/><ellipse cx="50" cy="62" rx="18" ry="15" fill="none" stroke="#3aaa55" stroke-width="1.2" opacity="0.6"/><ellipse cx="90" cy="62" rx="16" ry="14" fill="none" stroke="#3aaa55" stroke-width="1.2" opacity="0.6"/><path d="M70 115 Q52 108 38 115" stroke="#8a6a35" stroke-width="1.5" fill="none" opacity="0.4"/><path d="M70 115 Q88 108 104 115" stroke="#8a6a35" stroke-width="1.5" fill="none" opacity="0.4"/><line x1="200" y1="115" x2="200" y2="65" stroke="#8a6a35" stroke-width="3" stroke-linecap="round"/><polygon points="200,58 180,95 220,95" fill="none" stroke="#1a4a3a" stroke-width="1.5" stroke-linejoin="round"/><polygon points="200,72 183,100 217,100" fill="none" stroke="#1a4a3a" stroke-width="1.5" stroke-linejoin="round" opacity="0.7"/><line x1="40" y1="30" x2="38" y2="40" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/><line x1="100" y1="25" x2="98" y2="35" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/><line x1="140" y1="30" x2="140" y2="50" stroke="#006573" stroke-width="1" opacity="0.35"/><polygon points="137,46 143,46 140,52" fill="#006573" opacity="0.4"/></svg>`

  },

  {

    id:'gronvaeg', navn:'Klimavæg / grøn væg', kat:'fordampning', katNavn:'Gør noget for naturen', katCol:'#3aaa55', icon:'view_agenda',

    tagline:'Levende vægge der køler og absorberer',

    hvad:'En klimavæg er en lodret beplantning på facade eller mur — fra enkle klatreplanter til modulære plantevæg-systemer. Den fordamper vand, isolerer og reducerer varmeø-effekten.',

    fordele:['Fordamper vand og køler bygningen','Isolerer mod varme og kulde','Æstetisk og markant arkitektur','Øger biodiversitet i byer'],

    ulemper:['Kræver vanding (evt. automatisk)','Dyrere end traditionelle klatreplanter','Tunge systemer kræver forankring'],

    hvornaar:'God til sydvendte vægge, garager, mure og hegn. Særlig effektiv i byer med mange befæstede overflader.',

    pris:'300 – 1.200 kr./m²',

    tid:'1–3 dage',

    svaerhed:'Middel',

    vedligehold:'Middel — klip og vand regelmæssigt',

    fakta:['Fordamper 1–3 L/m²/dag','Kan reducere facadetemperatur med 10–15°C','Klatreplanter er billigste version fra 300 kr./m²'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><rect x="80" y="20" width="80" height="90" rx="2" fill="white" stroke="#006573" stroke-width="1.5"/><polygon points="68,22 172,22 120,6" fill="none" stroke="#006573" stroke-width="1.5" stroke-linejoin="round"/><rect x="56" y="20" width="22" height="90" rx="2" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="67" y1="100" x2="67" y2="85" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><path d="M60 88 Q67 82 74 88" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="67" y1="80" x2="67" y2="65" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><path d="M60 68 Q67 62 74 68" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="67" y1="60" x2="67" y2="45" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><path d="M60 48 Q67 42 74 48" fill="none" stroke="#3aaa55" stroke-width="1.5"/><rect x="202" y="20" width="22" height="90" rx="2" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="213" y1="100" x2="213" y2="85" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><path d="M206 88 Q213 82 220 88" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="213" y1="78" x2="213" y2="63" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><path d="M206 66 Q213 60 220 66" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="67" y1="18" x2="67" y2="8" stroke="#006573" stroke-width="1" opacity="0.35"/><polygon points="64,10 70,10 67,5" fill="#006573" opacity="0.35"/></svg>`

  },

  // BESKYTTELSE

  {

    id:'hvlukke', navn:'Højvandslukke', kat:'beskyttelse', katNavn:'Beskytter huset', katCol:'#1a5a7a', icon:'lock',

    tagline:'Stop kloakvand inden det når din kælder',

    hvad:'Et højvandslukke er en automatisk ventil monteret i kloakrøret. Når kloakken overbelastes og vand presses baglæns, lukker ventilen og forhindrer vand i at komme op gennem afløb.',

    fordele:['Effektiv beskyttelse mod kloakvand','Automatisk — kræver ingen handling','Relativt billig løsning','Monteres af kloakmester på 2–4 timer'],

    ulemper:['Kan ikke bruges mens det regner (ingen afledning)','Beskytter kun mod kloakoverbelastning — ikke grundvand','Kræver jævnlig eftersyn og rengøring'],

    hvornaar:'Afgørende hvis du har oplevet vand op fra gulvafløb ved kraftig regn. Første forsvarslinje mod kloakoverbelastning.',

    pris:'1.500 – 5.000 kr.',

    tid:'2–4 timer',

    svaerhed:'Kræver kloakmester',

    vedligehold:'Lav — tjek og rens 1 gang om året',

    fakta:['Virker kun mod kloakbagtryk — ikke mod grundvand','Monteres i eksisterende rør','Kræver tilladelse fra forsyningsselskab'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><rect x="70" y="25" width="140" height="55" rx="2" fill="white" stroke="#006573" stroke-width="1.5"/><polygon points="58,27 212,27 140,8" fill="none" stroke="#006573" stroke-width="1.5" stroke-linejoin="round"/><rect x="60" y="60" width="160" height="5" rx="1" fill="none" stroke="#006573" stroke-width="0.8" stroke-dasharray="3,2" opacity="0.4"/><line x1="0" y1="92" x2="280" y2="92" stroke="#006573" stroke-width="2" opacity="0.15"/><line x1="140" y1="80" x2="140" y2="92" stroke="#006573" stroke-width="2.5" stroke-linecap="round"/><circle cx="140" cy="92" r="8" fill="white" stroke="#1a5a7a" stroke-width="2"/><line x1="136" y1="88" x2="144" y2="96" stroke="#1a5a7a" stroke-width="2" stroke-linecap="round"/><line x1="185" y1="92" x2="150" y2="92" stroke="#c04030" stroke-width="2" stroke-linecap="round" opacity="0.65"/><polygon points="153,89 148,92 153,95" fill="#c04030" opacity="0.65"/><line x1="95" y1="92" x2="130" y2="92" stroke="#3aaa55" stroke-width="1.5" stroke-dasharray="3,2" stroke-linecap="round" opacity="0.5"/></svg>`

  },

  {

    id:'omfdrn', navn:'Omfangsdræn', kat:'beskyttelse', katNavn:'Beskytter huset', katCol:'#1a5a7a', icon:'home_repair_service',

    tagline:'Leder grundvand væk fra fundamentet',

    hvad:'Omfangsdræn er et perforeret drænrør lagt i grus rundt om bygningens fundament. Det opfanger og leder grundvand og overfladevand væk fra kælderen.',

    fordele:['Permanent løsning mod grundvand','Beskytter fundament og kælder','Lang levetid (30–50 år)','Kan kombineres med pumpe'],

    ulemper:['Dyr og omfangsrig installation (kræver udgravning)','Kræver tilledning til recipient (kloak, sø, grøft)','Kan ikke løse skybrudsproblem alene'],

    hvornaar:'Nødvendigt ved gentagne problemer med grundvand eller sivende vand i kælder. Særlig relevant ved høj grundvandstand.',

    pris:'15.000 – 50.000 kr.',

    tid:'3–7 dage',

    svaerhed:'Kræver fagmand',

    vedligehold:'Lav — tjek hvert 10. år',

    fakta:['Rør lægges under fundament-underkant','Kræver fald til udløb (min. 1:200)','Grus/skærver rundt om rør for dræning'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><rect x="75" y="22" width="130" height="62" rx="2" fill="white" stroke="#006573" stroke-width="1.5"/><polygon points="62,24 218,24 140,6" fill="none" stroke="#006573" stroke-width="1.5" stroke-linejoin="round"/><rect x="70" y="82" width="140" height="12" rx="2" fill="none" stroke="#006573" stroke-width="1" opacity="0.4"/><circle cx="70" cy="88" r="7" fill="none" stroke="#1a5a7a" stroke-width="2"/><line x1="67" y1="85" x2="73" y2="91" stroke="#1a5a7a" stroke-width="1.5" stroke-linecap="round"/><circle cx="210" cy="88" r="7" fill="none" stroke="#1a5a7a" stroke-width="2"/><path d="M70 95 Q140 104 210 95" stroke="#1a5a7a" stroke-width="1.5" fill="none"/><line x1="30" y1="60" x2="30" y2="72" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/><polygon points="27,69 33,69 30,75" fill="#006573" opacity="0.4"/><line x1="250" y1="58" x2="250" y2="70" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/><polygon points="247,67 253,67 250,73" fill="#006573" opacity="0.4"/><path d="M70 95 Q50 100 35 115" stroke="#1a5a7a" stroke-width="1.5" stroke-dasharray="4,2" fill="none" opacity="0.5"/></svg>`

  },

  {
    id:'vaern', navn:'Værn', kat:'beskyttelse', katNavn:'Beskytter huset', katCol:'#1a5a7a', icon:'flood',
    tagline:'Flytbart værn til midlertidig beskyttelse mod skybrud, overfladevand og oversvømmelser omkring bygninger, indkørsler og udsatte områder.',
    hvad:'Et værn er en midlertidig flodbarriere, som opstilles foran bygninger, porte, kældernedgange eller andre udsatte områder for at holde vandet tilbage ved kraftig regn eller oversvømmelse. Værnet udnytter vandets eget tryk til at øge stabiliteten mod underlaget og kan hurtigt opstilles efter behov. Det er særligt relevant ved skybrud, hvor vandet strømmer hen over terrænet og truer bygninger eller adgangsveje.',
    fordele:['Beskyttelse af hus og bygninger ved skybrud','Midlertidig sikring af kældernedgange','Beskyttelse af indkørsler og garageporte','Områder med risiko for overfladevand','Hurtig indsats ved varslet kraftig regn'],
    ulemper:['Kræver fast og jævnt underlag','Er en midlertidig løsning og erstatter ikke permanent klimatilpasning','Skal opstilles korrekt før vandet når området','Virker bedst på asfalt, beton eller faste belægninger'],
    hvornaar:'God til udsatte åbninger, porte, kældernedgange, indkørsler og områder, hvor overfladevand midlertidigt skal holdes tilbage under skybrud eller oversvømmelse.',
    pris:'Afhænger af længde og type',
    tid:'Få minutter',
    svaerhed:'Let',
    vedligehold:'Lav — rengør og opbevar tørt efter brug',
    fakta:['Højde ca. 52 cm','Kan sammenkobles til længere barrierer','Kan opstilles på få minutter','Genanvendelig løsning','Lav vægt og nem transport','Udnytter vandtryk til øget stabilitet','Kan anvendes ved både skybrud og oversvømmelser','Velegnet ved højt grundvand, fordi løsningen fungerer på terræn og ikke er afhængig af nedsivning','Kan kombineres med regnbed, faskine, grøft, rende, omfangsdræn og højvandslukke'],
    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><rect x="48" y="28" width="92" height="56" rx="2" fill="white" stroke="#006573" stroke-width="1.4"/><polygon points="38,30 150,30 94,10" fill="none" stroke="#006573" stroke-width="1.4" stroke-linejoin="round"/><rect x="82" y="52" width="24" height="32" rx="2" fill="#f7fbfa" stroke="#006573" stroke-width="1"/><path d="M34 92 C70 84 108 88 140 92 C176 98 218 96 254 88" stroke="#006573" stroke-width="2" opacity="0.35" fill="none"/><path d="M28 98 C70 92 112 96 144 100 C184 106 226 103 262 94" stroke="#006573" stroke-width="1.2" opacity="0.22" fill="none"/><path d="M122 86 L214 86 L224 96 L112 96 Z" fill="#d84a2b" opacity="0.9"/><path d="M122 86 L214 86 L224 96 L112 96 Z" stroke="#9f351f" stroke-width="1.4" stroke-linejoin="round"/><path d="M140 84 L132 98 M166 84 L158 98 M192 84 L184 98" stroke="#fff4e6" stroke-width="1" opacity="0.8"/><path d="M226 95 C238 92 248 88 258 82" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.45"/><polygon points="255,78 264,78 259,86" fill="#006573" opacity="0.45"/><path d="M166 34 C169 28 174 28 177 34 C180 28 186 28 189 34" stroke="#006573" stroke-width="1" opacity="0.35"/><line x1="190" y1="24" x2="188" y2="34" stroke="#006573" stroke-width="1.3" stroke-linecap="round" opacity="0.35"/><line x1="214" y1="28" x2="212" y2="39" stroke="#006573" stroke-width="1.3" stroke-linecap="round" opacity="0.35"/><line x1="236" y1="22" x2="234" y2="33" stroke="#006573" stroke-width="1.3" stroke-linecap="round" opacity="0.35"/><path d="M54 86 C58 80 64 80 68 86" stroke="#3aaa55" stroke-width="1.3" fill="none"/><line x1="61" y1="86" x2="61" y2="73" stroke="#3aaa55" stroke-width="1.3" stroke-linecap="round"/></svg>`
  },

  {

    id:'pumpe', navn:'Pumpe', kat:'beskyttelse', katNavn:'Beskytter huset', katCol:'#1a5a7a', icon:'speed',

    tagline:'Aktiv bortpumpning af vand',

    hvad:'En pumpe pumper aktivt grundvand eller overfladevand bort fra grunden. Bruges som supplement til andre løsninger eller som nødforanstaltning.',

    fordele:['Hurtigt resultat','Fleksibel placering','God nødløsning'],

    ulemper:['Kræver strøm','Løser ikke den underliggende årsag','Kræver recipient (kloak, grøft, å)','Støjende i drift'],

    hvornaar:'Supplement til omfangsdræn eller bassin. God ved pludseligt højt grundvand eller ved akut oversvømmelse.',

    pris:'3.000 – 12.000 kr.',

    tid:'1 dag',

    svaerhed:'Middel',

    vedligehold:'Middel — tjek og vedligehold pumpe årligt',

    fakta:['Dykkerpumpe er mest driftsikker','Kapacitet: 100–5.000 L/time','Kræver godkendelse for udledning'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><rect x="60" y="60" width="100" height="55" rx="3" fill="none" stroke="#006573" stroke-width="1.5" stroke-dasharray="5,3"/><rect x="65" y="75" width="90" height="35" rx="2" fill="#006573" opacity="0.07"/><line x1="65" y1="77" x2="155" y2="77" stroke="#006573" stroke-width="0.8" opacity="0.3"/><circle cx="110" cy="72" r="16" fill="white" stroke="#1a5a7a" stroke-width="2"/><line x1="110" y1="56" x2="110" y2="32" stroke="#1a5a7a" stroke-width="2.5" stroke-linecap="round"/><line x1="110" y1="32" x2="195" y2="32" stroke="#1a5a7a" stroke-width="2.5" stroke-linecap="round"/><line x1="195" y1="32" x2="195" y2="50" stroke="#1a5a7a" stroke-width="2.5" stroke-linecap="round"/><polygon points="187,42 195,32 203,42" fill="#1a5a7a"/><text x="110" y="76" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1a5a7a" font-weight="bold">⚡</text><line x1="30" y1="30" x2="28" y2="42" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/><line x1="55" y1="28" x2="53" y2="40" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/></svg>`

  },

  {

    id:'dige', navn:'Dige / jordvold', kat:'transport', katNavn:'Leder vand væk', katCol:'#c8952a', icon:'terrain',

    tagline:'Blokér vand med terrænet',

    hvad:'En jordvold eller et dige er en ophøjet jordafspærring der forhindrer overfladevand fra veje, naboer eller havvand i at nå bygningen.',

    fordele:['Naturlig og billig løsning','Kan beplantes og se godt ud','Ingen vedligehold af tekniske dele','Lang levetid'],

    ulemper:['Kræver plads','Virker kun mod overfladevand — ikke grundvand','Kan se kunstig ud uden beplantning'],

    hvornaar:'Egnet ved skrånende terræn, ved veje der leder vand ind, eller som beskyttelse mod stormflod.',

    pris:'2.000 – 15.000 kr.',

    tid:'1–3 dage',

    svaerhed:'Let til middel',

    vedligehold:'Lav — klip beplantning',

    fakta:['Højde typisk 0,3–1,0 m','Bred basis for stabilitet (2:1 hældning)','Beplantes med robuste buske eller græs'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><line x1="0" y1="78" x2="280" y2="78" stroke="#006573" stroke-width="1.5" opacity="0.2"/><rect x="20" y="38" width="80" height="40" rx="2" fill="white" stroke="#006573" stroke-width="1.5"/><polygon points="12,40 108,40 60,20" fill="none" stroke="#006573" stroke-width="1.5" stroke-linejoin="round"/><path d="M130 78 Q155 45 180 78" fill="none" stroke="#1a4a3a" stroke-width="3" stroke-linecap="round"/><path d="M126 78 Q155 42 184 78" fill="#3aaa55" opacity="0.15"/><line x1="152" y1="57" x2="152" y2="46" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><path d="M146 49 Q152 43 158 49" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="168" y1="62" x2="168" y2="52" stroke="#3aaa55" stroke-width="1.2" stroke-linecap="round"/><line x1="215" y1="72" x2="184" y2="72" stroke="#006573" stroke-width="2" stroke-linecap="round" opacity="0.45"/><polygon points="187,69 182,72 187,75" fill="#006573" opacity="0.45"/><line x1="250" y1="68" x2="218" y2="68" stroke="#c04030" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3,2" opacity="0.5"/></svg>`

  },

  // TRANSPORT

  {

    id:'groeft', navn:'Grøft', kat:'transport', katNavn:'Leder vand væk & afledning', katCol:'#c8952a', icon:'linear_scale',

    tagline:'Åben rende der leder og nedsiver vand',

    hvad:'En grøft er en åben jordkanal der transporterer overfladevand væk og delvist lader det sive ned undervejs. Kan beplantes til et smukt naturligt element.',

    fordele:['Billig at anlægge','Kan beplantes og ser naturlig ud','Nedsiver undervejs','Let at vedligeholde visuelt'],

    ulemper:['Kræver plads langs grundens kant','Skal have tilstrækkeligt fald','Kan oversvømmes ved ekstremregn'],

    hvornaar:'God til at lede vand fra vej, P-plads eller store befæstede flader hen til regnbed, bassin eller recipient.',

    pris:'1.000 – 8.000 kr.',

    tid:'1–2 dage',

    svaerhed:'Let',

    vedligehold:'Lav — rens 1–2 gange om året',

    fakta:['Bredde typisk 30–60 cm','Beplant med tagrør, iris eller vortebirk','Kan kombineres med faskine i bunden'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><path d="M10 60 L60 60 Q72 60 78 76 L202 76 Q208 60 220 60 L270 60" stroke="#006573" stroke-width="1.5" fill="none"/><path d="M78 76 L202 76" stroke="#006573" stroke-width="2" opacity="0.5"/><path d="M78 76 L202 76 L200 85 Q140 92 80 85Z" fill="#006573" opacity="0.07"/><line x1="66" y1="60" x2="66" y2="44" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><path d="M60 47 Q66 41 72 47" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="222" y1="60" x2="222" y2="43" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><path d="M216 46 Q222 40 228 46" fill="none" stroke="#3aaa55" stroke-width="1.5"/><line x1="100" y1="76" x2="175" y2="76" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/><polygon points="170,73 178,76 170,79" fill="#006573" opacity="0.5"/><line x1="28" y1="46" x2="26" y2="56" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/></svg>`

  },

  {

    id:'rende', navn:'Rende', kat:'transport', katNavn:'Leder vand væk & afledning', katCol:'#c8952a', icon:'remove',

    tagline:'Leder tagvand direkte til nedsivning',

    hvad:'En rende er en åben rendesten eller kanal der leder regnvand fra nedløbsrøret hen til et regnbed, faskine eller grøft.',

    fordele:['Simpel og billig løsning','Synlig og dekorativ','Let at installere selv','Kan anlægges i græs eller belægning'],

    ulemper:['Kræver fald (min. 1:100)','Kan tilstoppe med blade','Begrænset kapacitet'],

    hvornaar:'Første skridt i enhver LAR-løsning — forbinder tagnedløbet med nedsivningsanlægget.',

    pris:'500 – 3.000 kr.',

    tid:'2–4 timer',

    svaerhed:'Let — kan laves selv',

    vedligehold:'Lav — rens om efteråret',

    fakta:['Minimum 1:100 fald','Bredde 10–20 cm afhængig af tagflade','Kan integreres diskret i belægning'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><rect x="20" y="28" width="65" height="44" rx="2" fill="none" stroke="#006573" stroke-width="1.5"/><polygon points="12,30 92,30 52,12" fill="none" stroke="#006573" stroke-width="1.5" stroke-linejoin="round"/><line x1="85" y1="72" x2="85" y2="82" stroke="#006573" stroke-width="2.5" stroke-linecap="round"/><line x1="0" y1="82" x2="280" y2="82" stroke="#006573" stroke-width="1.5" opacity="0.18"/><path d="M85 82 L230 82 L230 88 L85 88Z" stroke="#006573" stroke-width="1.5" fill="none"/><rect x="86" y="83" width="144" height="4" rx="0.5" fill="#006573" opacity="0.07"/><line x1="110" y1="82" x2="110" y2="88" stroke="#006573" stroke-width="0.8" opacity="0.4"/><line x1="135" y1="82" x2="135" y2="88" stroke="#006573" stroke-width="0.8" opacity="0.4"/><line x1="160" y1="82" x2="160" y2="88" stroke="#006573" stroke-width="0.8" opacity="0.4"/><line x1="185" y1="82" x2="185" y2="88" stroke="#006573" stroke-width="0.8" opacity="0.4"/><line x1="210" y1="82" x2="210" y2="88" stroke="#006573" stroke-width="0.8" opacity="0.4"/><line x1="100" y1="85" x2="225" y2="85" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.45"/><polygon points="219,82 227,85 219,88" fill="#006573" opacity="0.45"/><circle cx="244" cy="95" r="10" fill="none" stroke="#3aaa55" stroke-width="1.5"/></svg>`

  },

  {

    id:'graeslavn', navn:'Græslavning', kat:'transport', katNavn:'Leder vand væk & afledning', katCol:'#c8952a', icon:'grass',

    tagline:'Det sænkede græsareal der arbejder hårdt',

    hvad:'En græslavning er et lavere liggende græsareal der opsamler og nedsiver overfladevand. Det ligner et normalt graset areal men er designet til midlertidigt at stå under vand.',

    fordele:['Ligner et normalt haveanlæg','Billig løsning','Kan kombineres med leg/ophold','Nedsiver og transporterer'],

    ulemper:['Begrænset kapacitet','Kræver robust græs der tåler våd jord','Kan stå vådt i 24–48 timer'],

    hvornaar:'God til at opsamle vand fra indkørsel, terrasse eller belægning og forsinke det til kloakken.',

    pris:'1.000 – 5.000 kr.',

    tid:'1–2 dage',

    svaerhed:'Let',

    vedligehold:'Lav — klip og gødn som normalt',

    fakta:['Typisk 10–30 cm nedsænket','Robust plænegræs eller urtemarksblanding','Kombineres ofte med overløb til grøft'],

    svg:`<svg viewBox="0 0 280 120" fill="none" width="280" height="120"><path d="M10 60 L55 60 Q68 60 78 74 Q88 85 140 87 Q192 85 202 74 Q212 60 225 60 L270 60" stroke="#006573" stroke-width="1.5" fill="none"/><path d="M78 74 Q140 86 202 74 Q192 82 140 84 Q88 82 78 74Z" fill="#006573" opacity="0.07"/><line x1="78" y1="76" x2="202" y2="76" stroke="#006573" stroke-width="1" fill="none" opacity="0.3" stroke-dasharray="5,3"/><line x1="92" y1="74" x2="92" y2="64" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><line x1="110" y1="80" x2="110" y2="69" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><line x1="128" y1="84" x2="128" y2="73" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><line x1="140" y1="86" x2="140" y2="74" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><line x1="152" y1="85" x2="152" y2="74" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><line x1="170" y1="80" x2="170" y2="69" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><line x1="188" y1="74" x2="188" y2="64" stroke="#3aaa55" stroke-width="1.5" stroke-linecap="round"/><line x1="30" y1="45" x2="28" y2="56" stroke="#006573" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/><line x1="140" y1="40" x2="140" y2="52" stroke="#006573" stroke-width="1" opacity="0.3" stroke-dasharray="2,2"/></svg>`

  },

];
