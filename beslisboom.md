# Beslisboom PBM – Logica

Dit document beschrijft de beslislogica van de PBM-beslisboom in leesbare vorm.
De feitelijke bron van waarheid is [`decision-tree.yaml`](./decision-tree.yaml).
Pas altijd **dat** bestand aan, niet dit document direct.

---

## Standaard verplicht bij betreden laboratorium (NF)

Ongeacht het scenario zijn altijd verplicht:
- Labjas
- Gesloten schoenen
- Haren vast (bij schouderlengtes)
- Bedekkende kleding

---

## Stap 0 – Voorbereiding (scenario-selectie)

**Vraag:** Voor welk scenario wordt een PBM gezocht?

| Antwoord | Ga naar |
|---|---|
| Gevaarlijke stoffen (chemicaliën / nevenproducten) | Stap 1 |
| Biologische agentia | Conclusie: Biologische agentia |
| Geluid | Stap 4 |
| Elektrostatische ontlading (ESD) | Stap 5 |
| Externe lichtbron (UV, infrarood, zichtbaar licht) | Stap 6 |
| Scherpe objecten | Stap 7 |

---

## Stap 1 – SDS-controle (verplicht bij gevaarlijke stoffen)

### Vraag 1
**Is er een actueel Veiligheidsinformatieblad (SDS) beschikbaar van de stof waarmee je gaat werken?**

| Antwoord | Resultaat |
|---|---|
| **Nee** | ⛔ Conclusie: Werkzaamheden niet starten – SDS ontbreekt |
| **Ja** | Ga naar Vraag 2 |

> Een SDS bevat in rubriek 8 het specifieke PBM-advies voor de stof.

### Vraag 2
**Heb je sectie 2 (Gevarenidentificatie) én sectie 8 (Maatregelen ter beheersing van blootstelling/PBM) van het SDS gelezen?**

| Antwoord | Resultaat |
|---|---|
| **Nee** | ⛔ Conclusie: Eerst het SDS lezen vóór je start |
| **Ja** | Ga naar Stap 2 |

---

## Stap 2 – Bepaal type blootstelling

### Vraag 3
**Is er risico op huidcontact, blootstelling aan de luchtwegen, of oraal contact?**

| Antwoord | Resultaat |
|---|---|
| **Nee** | ✅ Conclusie: Geen aanvullende PBM's noodzakelijk |
| **Ja** | 📋 Conclusie: Raadpleeg SDS rubriek 8 voor PBM-advies |

---

## Stap 3 – Biologische agentia

*Geen vragen – direct naar conclusie bij keuze "Biologische agentia" in Stap 0.*

**Conclusie:** Maatregelen voor biologische agentia vereist
- Afdekkende kleding (labjas, handschoenen, oogbescherming)
- Vaccinatie indien van toepassing
- Raadpleeg KAM-preventiemedewerker voor specifiek advies

---

## Stap 4 – Geluid

### Vraag 4
**Is de geluidsbron hoger dan 80 dB?**

| Antwoord | Resultaat |
|---|---|
| **Nee** | ✅ Conclusie: Geen aanvullende PBM's noodzakelijk |
| **Ja** | Ga naar Vraag 5 |

### Vraag 5
**Is de geluidsbron hoger dan 85 dB én duurt de blootstelling langer dan 1 uur?**

| Antwoord | Resultaat |
|---|---|
| **Nee** | 🔊 Conclusie: Gebruik oordoppen of oorkappen |
| **Ja** | 📋 Conclusie: Vraag advies bij KAM centraal of preventiemedewerker |

---

## Stap 5 – Elektrostatische ontlading (ESD)

### Vraag 6
**Zijn alle volgende voorwaarden aanwezig: een ESD werkmat, een geaard werkstation én een luchtvochtigheid hoger dan 30%?**

| Antwoord | Resultaat |
|---|---|
| **Nee** | ⛔ Conclusie: Stop met werken – niet aan de ESD-voorwaarden voldaan |
| **Ja** | Ga naar Vraag 6b |

### Vraag 6b
**Welke taak wordt uitgevoerd?**

| Antwoord | Resultaat |
|---|---|
| **Standaard ESD-werk** | 🛡️ ESD polsband + antistatische handschoenen + antistatisch gereedschap |
| **Verplaatsen van componenten** | 🛡️ ESD handschoenen |
| **Cleanroom elektronica** | 🛡️ ESD kleding + ESD schoenen |

---

## Stap 6 – Externe lichtbron

### Vraag 7
**Werk je met UV-straling, infrarood of zichtbaar licht als externe lichtbron?**

| Antwoord | Resultaat |
|---|---|
| **Nee** | ✅ Conclusie: Geen aanvullende PBM's noodzakelijk |
| **Ja** | 📋 Conclusie: Aanvullende PBM's vereist – raadpleeg interne richtlijn lichtbronnen |

---

## Stap 7 – Scherpe objecten

### Vraag 8
**Wordt er gewerkt met scherpe objecten, zoals scalpelmesjes of naalden?**

| Antwoord | Resultaat |
|---|---|
| **Nee** | ✅ Conclusie: Geen aanvullende PBM's noodzakelijk |
| **Ja** | 🛡️ Conclusie: Gebruik snijvaste handschoenen |

---

## Eindcontrole (geldt bij alle PBM-gebruik)

**Vraag 9** *(remindervraag, opgenomen in alle PBM-conclusies)*:
Zijn de PBM's gecontroleerd op beschadigingen vóór gebruik?

- Controleer altijd de PBM's op slijtage, scheuren of vervuiling vóór gebruik.
- Vervang beschadigde PBM's direct.

---

## Overzicht conclusies

| ID | Conclusie |
|---|---|
| `geen_pbm` | ✅ Geen aanvullende PBM's noodzakelijk |
| `sds_ontbreekt` | ⛔ Werkzaamheden niet starten – SDS ontbreekt |
| `sds_niet_gelezen` | ⛔ Eerst het SDS lezen vóór je start |
| `sds_rubriek8` | 📋 Raadpleeg SDS rubriek 8 voor PBM-advies |
| `bio` | 🧫 Maatregelen voor biologische agentia vereist |
| `geluid_advies` | 🔊 Gebruik oordoppen of oorkappen |
| `geluid_kam` | 📋 Vraag advies bij KAM centraal of preventiemedewerker |
| `esd_stop` | ⛔ Stop met werken – niet aan de ESD-voorwaarden voldaan |
| `esd_standaard` | 🛡️ ESD PBM voor standaard ESD-werk |
| `esd_verplaatsen` | 🛡️ ESD PBM voor verplaatsen van componenten |
| `esd_cleanroom` | 🛡️ ESD PBM voor cleanroom elektronica |
| `lichtbron_pbm` | 💡 Aanvullende PBM's vereist voor externe lichtbron |
| `scherp_pbm` | 🛡️ Gebruik snijvaste handschoenen |

---

## De beslisboom aanpassen

1. Open [`decision-tree.yaml`](./decision-tree.yaml) in een teksteditor.
2. Vragen staan onder de `questions:`-sleutel, conclusies onder `conclusions:`.
3. Elke vraag heeft:
   - `questionId` – unieke identifier
   - `question` – de vraagstekst
   - `explanation` – toelichting (optioneel)
   - `answers` – lijst van antwoorden met `nextQuestionId` of `nextConclusionId`
4. Voer na het aanpassen de converter uit:
   ```bash
   node scripts/yaml-to-json.mjs
   ```
5. Commit beide bestanden en push naar `main`.
