# Website Kalis Cosmetics

Einfache Website aus HTML-Dateien, ohne Baukasten und ohne Installation.

## Was liegt wo?

| Datei | Wofür |
|---|---|
| `data.js` | **Preise, Aktuelles/Specials, Team, Galerie, Planity-Schlüssel.** Hier wird fast alles geändert. |
| `index.html` | Seitengerüst, Über uns, Kontakt, Impressum, Datenschutz |
| `agb.html` | Allgemeine Geschäftsbedingungen |
| `style.css` | Farben, Schrift, Abstände |
| `script.js` | Baut Kacheln, Preisliste, Buchungsfenster und Galerie auf (normalerweise nicht anfassen) |
| `img/` | Alle Fotos und das Logo |
| `fonts/` | Schriftarten (lokal, damit nichts von Google geladen wird) |
| `kathrinbrill.html`, `lisaarnold.html`, `sonjafaupel.html`, `impressum.html` | Leiten alte Adressen auf die neue Seite weiter |
| `404.html` | Unbekannte Adressen führen zur Startseite |

## Häufige Änderungen (alles in `data.js`)

- **Preis ändern:** Bei der Leistung den Wert hinter `"preis"` ändern.
- **Aktionspreis:** Bei einem Preis `"aktion": "299 €"` und `"aktionBis": "2026-12-31"` ergänzen. Nach dem Datum erscheint automatisch wieder der normale Preis.
- **Aktuelles/Specials:** Eintrag in `AKTUELLES` hinzufügen. Mit `"bis"` verschwindet er nach dem Datum von selbst.
- **Galerie:** Foto in `img/` legen und den Pfad in `GALERIE` eintragen. Die ersten 9 werden direkt gezeigt.
- **Team:** In `TEAM` Name, Rolle, Foto und Text ändern.

Fotos vorher verkleinern (ca. 1400 Pixel lange Seite), sonst lädt die Seite langsam.

## Noch offen

- Gemeinsame Telefonnummer (aktuell steht überall Lisas Nummer)
- USt-ID im Impressum, falls vorhanden (Platzhalter als Kommentar in `index.html`)
- Datenschutztext von einer Fachperson prüfen lassen

## Online stellen (GitHub Pages)

1. Im Repository `kalis-website`: „Add file → Upload files“, den **Inhalt** dieses Ordners hineinziehen, „Commit changes“.
2. Settings → Pages → „Deploy from a branch“ → Branch `main`, Ordner `/ (root)` → Save.
3. Nach ca. 1 Minute ist die Seite unter `https://kathrinbrill98-arch.github.io/kalis-website/` erreichbar. Alles prüfen, besonders beide Buchungskalender.

## Domain kaliscosmetics.de umstellen (erst wenn alles geprüft ist)

1. Vorher Screenshots aller DNS-Einträge bei Onepage und IONOS machen (besonders MX und TXT für die E-Mails).
2. Bei IONOS: Nameserver wieder auf IONOS-Standard stellen. MX/TXT-Einträge für E-Mail prüfen bzw. neu anlegen.
3. Alte A/AAAA-Einträge für `@` und `www` löschen. Neu: vier A-Einträge für `@` (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) und CNAME `www` → `kathrinbrill98-arch.github.io`.
4. Bei GitHub: Settings → Pages → Custom domain `kaliscosmetics.de` → Save. Später „Enforce HTTPS“ anhaken.
5. 1–2 Tage testen: Seite erreichbar, E-Mails kommen an, Buchung funktioniert. Erst dann Onepage kündigen.

## Änderungen später

Dateien ändern und bei GitHub erneut hochladen. Nach ca. 1 Minute ist die Änderung live. Alte Stände bleiben in GitHub gespeichert.
