// ============================================================
// KALIS COSMETICS – Inhalte der Website
// Hier werden Preise, Texte, Team und Fotos geändert.
// Die Seite selbst (index.html) muss dafür nicht angefasst werden.
// Wichtig: Anführungszeichen " und Kommas , nicht löschen.
// ============================================================

// Planity-Seiten zur Online-Buchung (alle „Buchen“-Buttons führen direkt dorthin)
// "kathi" = Kathis Planity-Seite, "lisa" = Planity-Seite für Lisa, Anna und Laura
const PLANITY = {
  "kathi": "https://www.planity.com/de-DE/kalis-x-kathrin-brill-34289-zierenberg",
  "lisa": "https://www.planity.com/de-DE/kalis-x-lisa-arnold-34289-zierenberg"
};

// Aktuelles & Specials (oben auf der Seite, Reihenfolge = Anzeige)
// "bis": letzter Tag, an dem der Eintrag angezeigt wird (Format JJJJ-MM-TT). Leer = immer anzeigen.
// "buchen": Konto aus PLANITY (zeigt einen Buchungsbutton), leer = kein Button.
// "link" + "linkText": optionaler zweiter Button, z. B. E-Mail ("mailto:…") oder Instagram.
// "bildGanz": true zeigt das Bild vollständig (für Grafiken mit Text), sonst wird es passend zugeschnitten.
// "gross": true zeigt die Karte am PC als breites Banner über den anderen. Optional: "preise" und "hinweis".
const AKTUELLES = [
  {
    "label": "November-Special",
    "titel": "Kryolipolyse",
    "text": "Gezielt Fettdepots reduzieren und Körperkonturen definieren – jetzt zum Aktionspreis bei Lisa.",
    "preise": [
      { "name": "Bauch", "statt": "390 €", "preis": "329 €" },
      { "name": "Hüfte, Rücken, Beine oder Arme", "statt": "460 €", "preis": "389 €" }
    ],
    "hinweis": "Nur für Termine, die im November gebucht werden und auch im November stattfinden.",
    "bild": "kryolipolyse-special.jpg",
    "bildGanz": true,
    "gross": true,
    "bis": "2026-11-30",
    "buchen": "lisa"
  },
  {
    "label": "Special",
    "titel": "Cashmere Brows",
    "text": "Natürlich schöne Augenbrauen: feine Hairstrokes mit softer Schattierung. Bis Jahresende für 299 € statt 399 €, buchbar ab dem 23.11.",
    "bild": "cashmere.jpg",
    "bis": "2026-12-31",
    "buchen": "kathi"
  },
  {
    "label": "Gutschein-Special",
    "titel": "Brows zum Verschenken",
    "text": "Cashmere Brows als Gutschein für 299 € statt 399 €, einzulösen bis 01.04.2027. Schreiben Sie uns einfach eine Nachricht.",
    "bild": "einblick-3.jpg",
    "bis": "2026-12-31",
    "buchen": "",
    "link": "mailto:info@kaliscosmetics.de?subject=Gutschein%20Cashmere%20Brows&body=Hallo%20Kathi%2C%0A%0Aich%20m%C3%B6chte%20gern%20einen%20Cashmere-Brows-Gutschein%20f%C3%BCr%20299%20%E2%82%AC.%0A%0AViele%20Gr%C3%BC%C3%9Fe",
    "linkText": "Gutschein anfragen"
  },
  {
    "label": "Neu im Team",
    "titel": "Anna",
    "text": "Massagen & therapeutische Behandlungen. Anna ist gelernte MFA und Massagetherapeutin. Termine ab sofort online buchbar.",
    "bild": "anna.jpg",
    "bis": "",
    "buchen": "lisa"
  },
  {
    "label": "Neu im Team · Modellpreis",
    "titel": "Laura",
    "text": "Nageldesign von zartem Milky Nude bis feiner Marmoroptik. Im Moment gibt es ihre Nägel zum Modellpreis.",
    "preise": [
      { "name": "Nägel zum Modellpreis", "statt": "60 €", "preis": "ab 40 €" }
    ],
    "bild": "laura.jpg",
    "bis": "",
    "buchen": "lisa"
  }
];

// Kacheln: jede Leistung ist ein Eintrag. Daraus wird auch die Gesamt-Preisliste gebaut.
// "bild": Foto auf der Kachel (z. B. "waxing.jpg").
// "preisHinweis": Hinweis über den Preisen (z. B. „gilt ab …“), mit "preisHinweisBis" automatisch ausgeblendet.
// Aktionspreis: bei einem Preis "aktion" und "aktionBis" (JJJJ-MM-TT) ergänzen.
// Bis zu diesem Tag steht der Aktionspreis da, danach automatisch wieder der normale Preis.
// "konto" in "buchen" verweist auf PLANITY oben. Kein "buchen" = kein Button.
const LEISTUNGEN = [
  {
    "titel": "Permanent Make-up",
    "bild": "lippen-1.jpg",
    "wer": "Kathi",
    "text": "Natürlich betonte Augenbrauen und ausdrucksvolle Lippen. Ich nehme mir Zeit für Ihre Wünsche und berate Sie persönlich.",
    "gruppen": [
      {
        "name": "",
        "preise": [
          {
            "name": "Cashmere Brows",
            "preis": "399 €",
            "aktion": "299 €",
            "aktionBis": "2026-12-31"
          },
          {
            "name": "Velvet Lips",
            "preis": "399 €"
          },
          {
            "name": "Powder Brows",
            "preis": "379 €"
          },
          {
            "name": "Wimpernkranzverdichtung",
            "preis": "129 €"
          },
          {
            "name": "Nachbehandlung Wimpernkranzverdichtung",
            "preis": "59 €"
          },
          {
            "name": "Nachbehandlung Lippen & Augenbrauen",
            "preis": "129 €"
          }
        ]
      }
    ],
    "buchen": [
      {
        "label": "Bei Kathi buchen",
        "konto": "kathi"
      }
    ]
  },
  {
    "titel": "Waxing",
    "bild": "waxing.jpg",
    "wer": "Kathi",
    "text": "Sanftes Waxing für glatte Haut, auch für Männer. Weitere Körperareale auf Anfrage.",
    "gruppen": [
      {
        "name": "Gesicht",
        "preise": [
          {
            "name": "Augenbrauen",
            "preis": "13 €"
          },
          {
            "name": "Oberlippe",
            "preis": "13 €"
          },
          {
            "name": "Nase",
            "preis": "9 €"
          }
        ]
      },
      {
        "name": "Körper",
        "preise": [
          {
            "name": "Achseln",
            "preis": "25 €"
          },
          {
            "name": "Bikinizone",
            "preis": "25 €"
          },
          {
            "name": "Brazilian",
            "preis": "49 €"
          },
          {
            "name": "Brazilian inkl. Pofalte",
            "preis": "59 €"
          },
          {
            "name": "Unterschenkel",
            "preis": "30 €"
          },
          {
            "name": "Beine komplett",
            "preis": "59 €"
          }
        ]
      },
      {
        "name": "Für Männer",
        "preise": [
          {
            "name": "Rücken",
            "preis": "49 €"
          },
          {
            "name": "Brust",
            "preis": "39 €"
          },
          {
            "name": "Brust & Bauch",
            "preis": "59 €"
          }
        ]
      },
      {
        "name": "Pakete",
        "preise": [
          {
            "name": "Achseln & Unterschenkel",
            "preis": "49 €"
          },
          {
            "name": "Achseln, Unterschenkel & Bikinizone",
            "preis": "69 €"
          },
          {
            "name": "Achseln, Brazilian inkl. Pofalte & Unterschenkel",
            "preis": "99 €"
          }
        ]
      }
    ],
    "buchen": [
      {
        "label": "Bei Kathi buchen",
        "konto": "kathi"
      }
    ]
  },
  {
    "titel": "Nageldesign",
    "bild": "naegel-kirschen.jpg",
    "wer": "Laura",
    "text": "Gepflegte Nägel in Natur, Farbe oder Design. Neue Nageltermine vergibt aktuell Laura.",
    "preisHinweis": "Die hier genannten Nagelpreise gelten ab Januar 2027. Bis dahin gelten die aktuellen Preise, die Sie bei der Online-Buchung (Planity) sehen.",
    "preisHinweisBis": "2026-12-31",
    "gruppen": [
      {
        "name": "Neuset mit Verlängerung",
        "preise": [
          { "name": "Natur", "preis": "70 €" },
          { "name": "Farbe", "preis": "75 €" },
          { "name": "Design", "preis": "ab 80 €" },
          { "name": "Überlänge", "preis": "ab 75 €" }
        ]
      },
      {
        "name": "Neuset ohne Verlängerung",
        "preise": [
          { "name": "Natur", "preis": "60 €" },
          { "name": "Farbe", "preis": "65 €" },
          { "name": "Design", "preis": "ab 65 €" }
        ]
      },
      {
        "name": "Refill (innerhalb von 4 Wochen)",
        "preise": [
          { "name": "Natur", "preis": "60 €" },
          { "name": "Farbe", "preis": "65 €" },
          { "name": "Design", "preis": "ab 65 €" },
          { "name": "Überlänge", "preis": "ab 65 €" }
        ]
      },
      {
        "name": "Weitere",
        "preise": [
          { "name": "Babyboomer", "preis": "60 €" },
          { "name": "French", "preis": "65 €" },
          { "name": "Ablösen inkl. Maniküre", "preis": "30 €" },
          { "name": "Maniküre ohne Lack", "preis": "30 €" }
        ]
      }
    ],
    "hinweis": "Nageldesign macht bei uns Laura – aktuell zum Modellpreis ab 40 € statt 60 €. Kathi nimmt im Moment keine neuen Nageltermine an.",
    "buchen": [
      {
        "label": "Bei Laura buchen",
        "konto": "lisa"
      }
    ]
  },
  {
    "titel": "Wimpern & Brauen",
    "bild": "wimpern-auge.jpg",
    "wer": "Lisa",
    "text": "Lifting, Färben und Wimpernverlängerung für einen offenen, gepflegten Blick.",
    "gruppen": [
      {
        "name": "Brauen & Wimpern",
        "preise": [
          {
            "name": "Lashlifting inkl. Färben",
            "preis": "65 €"
          },
          {
            "name": "Browlifting inkl. Färben",
            "preis": "60 €"
          },
          {
            "name": "Kombipaket Lifting",
            "preis": "105 €"
          },
          {
            "name": "Koreanisches Lashlifting",
            "preis": "75 €"
          },
          {
            "name": "Koreanisches Browlifting",
            "preis": "65 €"
          },
          {
            "name": "Kombi Koreanisches Lash- und Browlifting",
            "preis": "120 €"
          },
          {
            "name": "Wimpern & Brauen Gesamtpaket (Färben & Zupfen)",
            "preis": "35 €"
          }
        ]
      },
      {
        "name": "Wimpernverlängerung",
        "preise": [
          {
            "name": "Neuanlage 1:1",
            "preis": "115 €"
          },
          {
            "name": "Refill 1:1 (bis 3 Wochen)",
            "preis": "55 €"
          },
          {
            "name": "Neuanlage Hybrid",
            "preis": "125 €"
          },
          {
            "name": "Refill Hybrid (bis 3 Wochen)",
            "preis": "60 €"
          },
          {
            "name": "Neuanlage Volumen",
            "preis": "135 €"
          },
          {
            "name": "Refill Volumen (bis 3 Wochen)",
            "preis": "65 €"
          }
        ]
      }
    ],
    "buchen": [
      {
        "label": "Bei Lisa buchen",
        "konto": "lisa"
      }
    ]
  },
  {
    "titel": "Kosmetik & Gesicht",
    "bild": "einblick-2.jpg",
    "wer": "Lisa",
    "text": "Die klassische Gesichtsbehandlung mit gründlicher Reinigung, Peeling, Ausreinigung, Maske und Pflege, individuell erweiterbar mit Zusatzpaketen.",
    "gruppen": [
      {
        "name": "Gesichtsbehandlung",
        "preise": [
          {
            "name": "Klassische Gesichtsbehandlung",
            "preis": "79 €"
          },
          {
            "name": "+ Anti-Age Paket (Straffung & Regeneration)",
            "preis": "+49 €"
          },
          {
            "name": "+ Glow Paket (Leuchtkraft & Feuchtigkeit)",
            "preis": "+45 €"
          },
          {
            "name": "+ Clear Skin Paket (Klärung & Balance)",
            "preis": "+49 €"
          },
          {
            "name": "+ Wellness Paket (Entspannung & Regeneration)",
            "preis": "+39 €"
          }
        ]
      },
      {
        "name": "Apparative Kosmetik",
        "preise": [
          {
            "name": "Microneedling",
            "preis": "130 €"
          },
          {
            "name": "BB Glow",
            "preis": "99 €"
          },
          {
            "name": "Kombibehandlung",
            "preis": "180 €"
          },
          {
            "name": "Aquafacial",
            "preis": "130 €"
          }
        ]
      },
      {
        "name": "Zubuchbar",
        "preise": [
          {
            "name": "Gesichtsmassage",
            "preis": "15 €"
          },
          {
            "name": "Dekolletémassage",
            "preis": "10 €"
          },
          {
            "name": "Kombimassage",
            "preis": "20 €"
          }
        ]
      }
    ],
    "buchen": [
      {
        "label": "Bei Lisa buchen",
        "konto": "lisa"
      }
    ]
  },
  {
    "titel": "Kryolipolyse & Lymphdrainage",
    "bild": "kryolipolyse-bauch.jpg",
    "wer": "Lisa",
    "text": "Kryolipolyse: eine nicht invasive Anwendung zur Körperformung. Dazu Brasilianische Lymphdrainage.",
    "gruppen": [
      {
        "name": "Kryolipolyse",
        "preise": [
          {
            "name": "Doppelkinn",
            "preis": "330 €"
          },
          {
            "name": "Bauch",
            "preis": "390 €",
            "aktion": "329 €",
            "aktionBis": "2026-11-30"
          },
          {
            "name": "Jawline",
            "preis": "390 €"
          },
          {
            "name": "Arme, Rücken, Hüfte, Knie oder Oberschenkel",
            "preis": "460 €",
            "aktion": "389 €",
            "aktionBis": "2026-11-30"
          }
        ]
      },
      {
        "name": "Brasilianische Lymphdrainage",
        "preise": [
          {
            "name": "Klassisch",
            "preis": "130 €"
          },
          {
            "name": "Mit Gesicht",
            "preis": "150 €"
          }
        ],
        "text": "Die brasilianische Lymphdrainage ist eine intensive, körperformende Massagetechnik, die den Lymphfluss anregt, den Abtransport überschüssiger Gewebsflüssigkeit unterstützt und Wassereinlagerungen reduzieren kann. Durch gezielte, dynamische Massagegriffe und spezielle Techniken werden zusätzlich fasziale Spannungen gelöst, die Durchblutung gefördert und die Körperkonturen optisch definiert. Das Ergebnis: Ein leichteres Körpergefühl, weniger Schwellungen und eine sichtbar glattere, definiertere Silhouette – häufig schon nach der ersten Behandlung."
      }
    ],
    "hinweis": "Bei Kombination von Bauch mit Doppelkinn, Jawline, Arme, Oberschenkel oder Knie: 10 % Rabatt",
    "buchen": [
      {
        "label": "Bei Lisa buchen",
        "konto": "lisa"
      }
    ]
  },
  {
    "titel": "Fußpflege",
    "bild": "fusspflege-1.jpg",
    "wer": "Sonja",
    "text": "Als Fußpflegerin habe ich meine Berufung gefunden. Ich helfe Menschen, sich wohlzufühlen und ihre Gesundheit zu verbessern.",
    "gruppen": [
      {
        "name": "Fußpflege",
        "preise": [
          {
            "name": "Klassische Fußpflege",
            "preis": "39 €"
          },
          {
            "name": "mit Lack",
            "preis": "50 €"
          },
          {
            "name": "mit Schellack",
            "preis": "55 €"
          },
          {
            "name": "French/Design",
            "preis": "58 €"
          },
          {
            "name": "Problemfuß Fußpflege",
            "preis": "45 €"
          }
        ]
      },
      {
        "name": "Dazu buchbar",
        "preise": [
          {
            "name": "Kleine Fußmassage „Time out“",
            "preis": "15 €"
          },
          {
            "name": "Vitalisierendes Fußbad",
            "preis": "6 €"
          },
          {
            "name": "Entfernen von Fremdarbeit Lack",
            "preis": "8 €"
          },
          {
            "name": "Entfernen von Fremdarbeit Schellack",
            "preis": "10 €"
          }
        ]
      },
      {
        "name": "Wellness Fußpflege Paket",
        "preise": [
          {
            "name": "Fußbad, Peeling, Fußpflege, Nägel kürzen, Hornhaut entfernen, Fußmassage",
            "preis": "65 €"
          }
        ]
      }
    ],
    "hinweis": "Aktuell nehmen wir keine neuen Fußpflege-Termine an. Terminvereinbarung für bestehende Kundinnen: 0172/5686718",
    "buchen": []
  },
  {
    "titel": "Massage & Therapie",
    "bild": "massage-ruecken.jpg",
    "wer": "Anna",
    "text": "Massagen und therapeutische Behandlungen von Anna, MFA und Massagetherapeutin. Ob wohltuende Entspannung, gezielte Behandlung von Verspannungen oder einfach eine kleine Auszeit vom Alltag.",
    "gruppen": [
      {
        "name": "",
        "preise": [
          { "name": "Rückenmassage (30 Min.)", "preis": "45 €" },
          { "name": "Rückenmassage (45 Min.)", "preis": "60 €" },
          { "name": "Ganzkörpermassage (60 Min.)", "preis": "79 €" },
          { "name": "Sportmassage (30 Min.)", "preis": "49 €" },
          { "name": "Kinesio Taping (ab 15 Min.)", "preis": "ab 15 €" },
          { "name": "Schwangerschaftsmassage (60 Min.)", "preis": "85 €" },
          { "name": "Faszienbehandlung (60 Min.)", "preis": "110 €" }
        ]
      }
    ],
    "buchen": [
      {
        "label": "Bei Anna buchen",
        "konto": "lisa"
      }
    ]
  }
];

// Team (foto leer lassen = beiger Kreis, sonst Pfad wie "kathi.jpg")
const TEAM = [
  {
    "name": "Kathi",
    "rolle": "Permanent Make-up, Waxing, Nageldesign",
    "foto": "kathi.jpg",
    "text": "Ich möchte, dass Sie sich rundum wohlfühlen und Ihre natürliche Schönheit zur Geltung kommt."
  },
  {
    "name": "Lisa",
    "rolle": "Kosmetik, Kryolipolyse, Brasilianische Lymphdrainage, Wimpern",
    "foto": "lisa.jpg",
    "text": "Seit 2017 arbeite ich in der Beauty-Branche. Mein Anspruch ist das bestmögliche Ergebnis für Sie."
  },
  {
    "name": "Sonja",
    "rolle": "Fußpflege",
    "foto": "sonja.jpg",
    "text": "Ich verbinde meine Leidenschaft für Pflege und Beauty mit handwerklichem Geschick."
  },
  {
    "name": "Anna",
    "rolle": "Massage & therapeutische Behandlungen",
    "foto": "anna-portrait.jpg",
    "text": "Gelernte MFA und Massagetherapeutin – mit viel Erfahrung und Leidenschaft für wohltuende Auszeiten."
  },
  {
    "name": "Laura",
    "rolle": "Nageldesign",
    "foto": "laura-portrait.jpg",
    "text": "Unser Naturtalent für schöne Nägel – von zartem Milky Nude bis feiner Marmoroptik."
  }
];

// Galerie "Einblicke"
// Die ersten 9 Bilder werden direkt gezeigt, der Rest nach Klick auf "Mehr anzeigen".
const GALERIE = [
  "behandlungsraum.jpg",
  "lippen-1.jpg",
  "naegel-kirschen.jpg",
  "studio-licht.jpg",
  "lippen-2.jpg",
  "wimpern-auge.jpg",
  "naegel-nude.jpg",
  "lippen-3.jpg",
  "studio-vase.jpg",
  "lippen-4.jpg",
  "produkte.jpg",
  "naegel-schmetterling.jpg",
  "fusspflege-2.jpg",
  "fusspflege-3.jpg",
  "kryolipolyse-ruecken.jpg",
  "massage-bein.jpg",
  "laura-naegel.jpg",
  "studio.jpg",
  "natur.jpg",
  "gel.jpg",
  "schild.jpg",
  "nagelfarben.jpg",
  "kupferlampen.jpg",
  "schild-blumen.jpg",
  "vase.jpg",
  "glaslampe.jpg",
  "detail.jpg",
  "einblick-1.jpg",
  "einblick-2.jpg",
  "einblick-3.jpg",
  "einblick-4.jpg",
  "einblick-5.jpg",
  "einblick-6.jpg",
  "einblick-7.jpg",
  "einblick-8.jpg"
];
