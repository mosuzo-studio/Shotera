---
title: 'Aggiornamenti'
layout: '~/layouts/MarkdownLayout.astro'
---

# Note di rilascio di Shotera – tutte le versioni (italiano)

**📫 Feedback**

Impostazioni → Info → Feedback e suggerimenti

**🔗 Indice delle versioni**

<ul class="version-index">
  <li><a href="#shotera-v770">v7.7.0</a></li>
  <li><a href="#shotera-v760">v7.6.0</a></li>
  <li><a href="#shotera-v751">v7.5.1</a></li>
  <li><a href="#shotera-v750">v7.5.0</a></li>
  <li><a href="#shotera-v742">v7.4.2</a></li>
  <li><a href="#shotera-v741">v7.4.1</a></li>
  <li><a href="#shotera-v740">v7.4.0</a></li>
  <li><a href="#shotera-v731">v7.3.1</a></li>
  <li><a href="#shotera-v730">v7.3.0</a></li>
  <li><a href="#shotera-v722">v7.2.2</a></li>
  <li><a href="#shotera-v721">v7.2.1</a></li>
  <li><a href="#shotera-v720">v7.2.0</a></li>
  <li><a href="#shotera-v710">v7.1.0</a></li>
  <li><a href="#shotera-v700">v7.0.0</a></li>
</ul>

---

## Shotera v7.7.0

**Rilasciato:** 2026-09-24

Versione Lite, screenshot lungo, finestre fissate ridimensionabili e build più leggere.

**🆚 Lite vs. versione completa:** le differenze tra le funzioni sono elencate nel [confronto versioni](/it/versions).

**✨ Novità**

- Nuova versione Lite: installer da 17 MB con le funzioni principali di cattura e annotazione. Un banner di upgrade nelle Impostazioni rimanda alla versione completa sul sito.
- Il [sito ufficiale](https://shotera.mosuzo.com/) è stato aggiornato nei contenuti e nello stile.
- Nuovo screenshot lungo (anteprima, test in beta): modalità automatica e manuale con finestra di anteprima in tempo reale. L'algoritmo di unione intelligente rileva il bordo superiore e gestisce layout misti. Suggerimenti guidano al primo utilizzo. Unisciti al gruppo beta per provarlo.
- Migliorie alle finestre fissate: il doppio clic alterna tra dimensioni originali e modalità miniatura con pulsante di chiusura. Trascinando bordi o angoli si ridimensiona mantenendo le proporzioni. Il menu contestuale nativo può uscire dai limiti della finestra. La visibilità della barra degli strumenti viene ricordata tra le sessioni ([#5](https://github.com/mosuzo-studio/Shotera/issues/5), [#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8), [#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10), [#14](https://github.com/mosuzo-studio/Shotera/issues/14)).
- Il modello di scontorno AI ora usa u2netp integrato, per prestazioni immediate. rmbg-1.4 viene scaricato su richiesta, con una guida al primo utilizzo.
- Nuovo comando di stampa nell'editor: il menu contestuale e il menu File aprono la finestra di stampa di sistema ([#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8)).
- Il menu contestuale dell'editor può aprire la cartella che contiene il file, evidenziandolo ([#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10)).

**🚀 Miglioramenti**

- Dimensione della build ridotta del 20%: compressione dell'installer e impostazioni del compilatore ottimizzate. Aggiunto il profilo FastBuild per iterazioni più rapide.
- Ridotto il consumo di memoria di base.
- La barra del titolo dell'editor mostra dinamicamente il nome del file immagine corrente.
- La notifica di aggiornamento riuscito è stata semplificata in logo + testo + pulsante, senza anteprima grande.
- Flusso di avvio ottimizzato: la guida di 8 pagine è passata alla scheda invito in basso a destra. La finestra delle novità non compare più dopo 3 chiusure. Lo scontorno AI mostra una guida al primo utilizzo.
- La traduzione immagini AI avvisa quando il risultato coincide con l'originale e rimanda alle impostazioni della lingua. L'avviso si può disattivare in Impostazioni → Capacità AI.
- Il nome file predefinito per screenshot, screenshot lunghi e output dell'editor è unificato in `Shotera_YYYYMMDD_HHMMSS`.
- La miniatura nella notifica dello screenshot lungo mostra la parte superiore della schermata invece di schiacciare l'intera immagine.

**🐞 Correzioni di bug**

- Corretta la posizione iniziale della finestra di annotazione su configurazioni a doppio monitor.
- Corretti gli errori di calcolo del rapporto nel ridimensionamento trascinando le finestre fissate e lo sfarfallio della cornice.
- Il doppio clic non aveva effetto dopo una selezione e non riportava alle dimensioni originali: risolto.
- La finestra di errore dell'unione dello screenshot lungo era bloccata dalle regole di click-through: risolto.
- Corrette le barre di scorrimento fantasma e la visualizzazione dello zoom a 0% o 1% dopo il caricamento delle immagini nell'editor.
- La barra del titolo dell'editor mostrava nomi di file duplicati: risolto.

**🙏 Ringraziamenti**

Grazie ai membri della community che hanno segnalato problemi e proposto funzioni che hanno dato forma a questa versione. Lo screenshot lungo e le migliorie alle finestre fissate sono nati dal feedback degli utenti.

---

## Shotera v7.6.0

**Rilasciato:** 2026-09-21

Una finestra delle novità, lettura dei codici QR, riproduzione GIF e altri formati immagine.

**✨ Novità**

- Nuova finestra delle novità all'avvio: confronta le due modalità di completamento della cattura, mostra dove si trova la lettura dei codici QR e invita a valutare Shotera. Seleziona «Non mostrare più» o fai clic su «Ho capito» per tre volte per non visualizzarla più.
- Nuova lettura dei codici QR: Micro QR, Data Matrix, Aztec, PDF417, Code128, EAN13, Code39, ITF e UPCA, più GS1 Digital Link. Il pannello dei risultati è ridimensionabile e trascinabile, con cronologia numerata.
- Apre PNG, JPG, JPEG, WebP, BMP, GIF, SVG, ICO, AVIF e TIFF (tif/tiff). SVG, ICO, AVIF e TIFF sono nuovi in questa versione. Si aprono dal menu File o trascinando le immagini.
- Nuova riproduzione delle animazioni GIF. La barra di stato e il pannello Info immagine mostrano il numero di fotogrammi e la durata totale.
- Nuovo pannello «Info immagine»: dimensioni, formato, DPI, modalità colore, profondità di bit, dati di scatto EXIF e controllo privacy per i tag autore e GPS. Si apre dal menu File, dal clic destro sulla tela, dalla barra di stato o con Ctrl+I.
- La barra di stato mostra livello di zoom, dimensioni dell'immagine, dimensione del file e percorso. Il percorso ha tre modalità: Nascosto, Percorso di navigazione e Completo.
- La barra del titolo dell'editor mostra il nome dell'immagine corrente. Il menu contestuale della tela apre la cartella che contiene il file evidenziandolo ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Nuova finestra di conferma prima di sovrascrivere un file al salvataggio. Seleziona «Non chiedere più» per saltarla in seguito.
- Finestre fissate: il menu contestuale permette di nascondere la barra degli strumenti in alto a destra; l'impostazione viene ricordata ([#4](https://github.com/mosuzo-studio/Shotera/issues/4)).

**🚀 Miglioramenti**

- La barra dei modi superiore è di nuovo visibile e offre le voci Screenshot e Codice QR.
- La resa delle immagini di grandi dimensioni nell'editor è stata rivista: caricamento e zoom sono ora fluidi e scorrevoli.
- Lo zoom con Ctrl+rotella ora si ancora al cursore invece che al centro della tela.
- Nuove scorciatoie di zoom: Ctrl+=, Ctrl+-, Ctrl+0.
- Dopo zoom e spostamento l'immagine non può più uscire completamente dall'area visibile.
- Le immagini nell'editor hanno un'ombra morbida e la modalità chiara usa una tela bianca pura.
- Lente del selettore colore ridisegnata: cornice quadrata a doppio tratto, bordo del pannello più stretto, campione di colore quadrato e mirino con colore ricalibrato.
- Il menu Aiuto apre direttamente il sito.
- La traduzione immagini AI avvisa quando il risultato coincide con l'originale (di solito la lingua di destinazione è uguale a quella di origine) e rimanda all'impostazione della lingua. Il suggerimento si disattiva in Impostazioni → Capacità AI.
- Rivista la tempistica della richiesta di valutazione: ora compare dopo la prima cattura di ogni versione, poi al massimo una volta al mese.

**🐞 Correzioni di bug**

- Corrette le barre di scorrimento fantasma e la lettura errata dello zoom a 0% o 1% dopo il caricamento di un'immagine.
- Il menu a tendina «File» dell'editor veniva tagliato dal bordo della finestra: risolto.
- All'avvio con Windows si attivavano catture indesiderate: risolto.
- La modalità di completamento nelle Impostazioni non si aggiornava se modificata dalla finestra delle novità: risolto.

**🙏 Ringraziamenti**

Grazie a @korenevskiy e @NewJon27 per i suggerimenti sulle funzioni che hanno dato forma a questa versione.

La lettura dei codici QR è stata aggiunta in risposta al feedback di Horihons.

---

## Shotera v7.5.1

**Rilasciato:** 2026-09-14

Modalità di cattura elegante, fissaggio immediato, scorciatoie di copia.

**✨ Novità**

- Nuova modalità di cattura «Elegante»: seleziona l'area, fatto. Immagine copiata con anteprima nella notifica. Nessun overlay. Supporta la modalità scura ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Nuova scorciatoia F3 per fissare subito durante o dopo la cattura. Personalizzabile in Impostazioni → Tasti rapidi ([#3](https://github.com/mosuzo-studio/Shotera/issues/3), [#4](https://github.com/mosuzo-studio/Shotera/issues/4)).
- Ctrl+C copia lo screenshot e chiude l'overlay in un solo passaggio.
- Il doppio clic conferma subito la cattura.
- Il clic destro annulla la cattura.
- Nuova opzione «Estrai il testo automaticamente dopo la cattura» in Impostazioni → Cattura.
- La barra del titolo della finestra dell'editor segue il tema di sistema.

**🚀 Miglioramenti**

- «Salva con nome» nell'editor usa timestamp dinamici per i nomi dei file.
- Scorciatoia Ctrl+Shift+S per «Salva con nome».
- Il menu del tray e il titolo della finestra dell'editor sono ora localizzati.

**🐞 Correzioni di bug**

- L'OCR falliva con percorsi di installazione non in inglese: risolto.
- Le immagini fissate perdevano risoluzione su display ad alto DPI: risolto.
- F3 creava fissaggi duplicati dalla selezione e dagli appunti: risolto.
- La versione Microsoft Store non mostrava la notifica in modalità «Elegante»: risolto.
- Nella versione Microsoft Store il clic sulla notifica attivava uno screenshot aggiuntivo: risolto.
- Il punto rosso del pulsante di aggiornamento restava visibile dopo l'aggiornamento: risolto.

**🙏 Ringraziamenti**

Grazie a @Const-me, @LightQuanta e @wherewhere per i suggerimenti sulle funzioni che hanno dato forma a questa versione.

---

## Shotera v7.5.0

**Rilasciato:** 2026-09-12

Editor di immagini completo, modalità di cattura, supporto CPU esteso.

**✨ Novità**

- Nuovo editor di immagini completo in una finestra separata, accessibile da «Modifica immagine…» nel tray. Supporta apri/salva/salva con nome, trascinamento, zoom con Ctrl+rotella dal 10% al 400%, strumenti di annotazione, OCR, scontorno AI e gomma AI.
- Nuovo stile di freccia «Freccia semplice» (affusolata) nella sotto-barra delle frecce.
- Nuova impostazione «Dopo la cattura»: scegli «Elegante» per copiare la selezione con anteprima nella notifica (un clic apre l'editor), oppure mantieni la modalità predefinita «Annotazione immediata».
- Nuove impostazioni «Estrai il testo automaticamente dopo la cattura» e «Nascondi i pulsanti AI».
- La lingua di destinazione della traduzione segue la lingua dell'interfaccia.

**🚀 Miglioramenti**

- Supporto CPU esteso a Intel di 3ª generazione (Ivy Bridge) e precedenti. Su CPU più vecchie le funzioni AI non sono disponibili, con una finestra esplicativa.
- Finestra guida disegnata internamente in basso a destra quando le notifiche di Windows sono disattivate.
- La gomma ora cancella frecce e linee e mostra il cursore a gomma.
- La barra degli strumenti principale è integrata nella barra dei menu ed è sempre visibile. La barra secondaria non sposta più l'immagine.
- Copiare nell'editor non chiude più la finestra né annulla la selezione. La ✕ rossa svuota l'immagine.
- La pagina Cattura nelle Impostazioni segnala le nuove funzioni con un punto rosso.

**🐞 Correzioni di bug**

- L'app si chiudeva all'avvio su CPU senza supporto AVX2: risolto.
- L'OCR falliva con percorsi di installazione cinesi o non in inglese: risolto.
- Le immagini con caratteri non ASCII nel percorso non si caricavano per trascinamento: risolto.
- La finestra dell'editor a volte non caricava lo screenshot dalla notifica: risolto.
- Scontorno e gomma AI lasciavano immagini spostate e strisce non cancellate: risolto.
- La barra di stato dell'editor non si aggiornava dopo il caricamento dell'immagine: risolto.
- Le evidenziazioni dell'estrazione del testo erano disallineate nell'editor: risolto.
- Gli adesivi numerici ed emoji si spostavano verso il basso quando venivano ridimensionati: risolto.

**🗑️ Rimosso**

- I menu Modifica e Visualizza dalla barra dei menu dell'editor.

---

## Shotera v7.4.2

**Rilasciato:** 2026-09-07

Feedback in-app, installer in 22 lingue, miglioramenti alle prestazioni.

**✨ Novità**

- Nuovo modulo di feedback in-app in Impostazioni → Info per valutazioni, suggerimenti e sondaggi.
- Il supporto linguistico dell'installer NSIS passa da 2 a 22 lingue.

**🚀 Miglioramenti**

- Prestazioni di annotazione migliorate per un disegno più fluido.
- La granularità di rilevamento predefinita è «Rileva elementi dell'interfaccia».
- Gli ancoraggi di selezione compaiono solo quando la selezione è abbastanza grande.
- La voce del feedback in Info usa un'icona cliccabile.
- Testi riformulati per un tono più chiaro.
- Migliorato il flusso di apertura della pagina di aggiornamento dalla notifica.

**🐞 Correzioni di bug**

- Gli overlay di annotazione comparivano sul monitor sbagliato: risolto.
- Il rilevamento degli elementi azzerava i livelli di evidenziazione passando da un elemento all'altro: risolto.
- L'avvio automatico si rompeva dopo l'aggiornamento della versione Microsoft Store: risolto.

**🗑️ Rimosso**

- La voce «Guida alle funzioni» e il testo del suggerimento sulla modalità.

---

## Shotera v7.4.1

**Rilasciato:** 2026-09-04

Confronto modelli, denominazione coerente, aiuto in linea.

**✨ Novità**

- Nuova tabella di confronto dei modelli: l'icona di aiuto accanto a «Modello di scontorno AI» apre una tabella che confronta tutti e quattro i modelli per dimensione, velocità, qualità e caso d'uso.
- Denominazione coerente dei modelli nel formato «Modello · Caratteristica», ordinati dal più piccolo al più grande.
- Aiuto in linea per la traduzione immagini: la descrizione è passata al tooltip sull'icona di aiuto.

---

## Shotera v7.4.0

**Rilasciato:** 2026-09-03

Nuova esperienza di aggiornamento, supporto Microsoft Store, correzioni AI.

**✨ Novità**

- Esperienza di aggiornamento ridisegnata, con logica di aggiornamento e interfaccia delle impostazioni ottimizzate. Installazione automatica in inattività, quattro modalità di aggiornamento, frequenza dei promemoria più intelligente.
- Migliorata la compatibilità della versione Microsoft Store e corretto l'avvio automatico all'avvio di Windows.

**🐞 Correzioni di bug**

- Il modello di scontorno AI veniva riscaricato a ogni controllo: risolto.
- Aggiunta l'accelerazione tramite mirror in Cina (shotera-ai.pages.dev) con fallback automatico a Hugging Face.

---

## Shotera v7.3.1

**Rilasciato:** 2026-08-29

Supporto alla modalità scura.

**✨ Novità**

- Nuovo supporto alla modalità scura: in Impostazioni scegli Chiaro, Scuro o Segui sistema. Tutte le finestre si aggiornano all'istante, senza riavvio.

---

## Shotera v7.3.0

**Rilasciato:** 2026-08-23

OCR automatico, copia parziale, evidenziazione collegata.

**✨ Novità**

- OCR automatico: il testo viene estratto non appena si seleziona l'area. La selezione resta modificabile con riestrazione automatica.
- Copia parziale: trascina sul testo riconosciuto e premi Ctrl+C per copiare solo quella parte. Compare nella cronologia degli appunti di Windows.
- Evidenziazione collegata: selezionando il testo sull'immagine originale, i caratteri corrispondenti vengono evidenziati nel pannello dei risultati, carattere per carattere.
- Sovrapposizione consapevole degli strumenti: il livello di testo resta interattivo quando nessuno strumento di annotazione è attivo e si nasconde quando ne viene scelto uno.
- Localizzazione: cinese tradizionale, giapponese, coreano, portoghese (Brasile), spagnolo, tedesco, francese, italiano, russo, arabo, olandese, polacco e svedese ora coprono le impostazioni della traduzione immagini.

**🐞 Correzioni di bug**

- «Estrai testo» apriva direttamente il pannello dei risultati dopo l'OCR automatico: risolto.
- Annullare uno strumento di annotazione non bloccava le forme disegnate: risolto.
- Il pulsante «Salta» era invisibile nella guida al primo avvio: risolto.

---

## Shotera v7.2.2

**Rilasciato:** 2026-08-20

Provider di traduzione immagini, test della chiave, correzioni per display ad alto DPI.

**✨ Novità**

- Ogni servizio è ora una scheda comprimibile: Baidu Image Translation (V2.0 alta precisione / V1 classica) e Youdao Translate (99 lingue).
- Baidu funziona subito con una quota integrata. Un APP ID e un Secret personalizzati aumentano il limite.
- La memoria della lingua è memorizzata per provider.
- Nuovo «Testa chiave» per verificare le credenziali con una richiesta reale.

**🐞 Correzioni di bug**

- I link alla documentazione API dei provider si aprivano in modo errato: risolto.
- Il trascinamento della selezione usava un percorso di input del puntatore ad alta frequenza: risolto.
- Le coordinate di selezione ad alto DPI venivano convertite tramite il sistema di coordinate dello stage: risolto.
- Con DPI misti e più monitor, l'overlay di cattura congelato si allineava alle coordinate native del desktop virtuale: risolto.

---

## Shotera v7.2.1

**Rilasciato:** 2026-08-18

Cattura negli appunti, barre degli strumenti spostabili.

**✨ Novità**

- Nuova cattura diretta negli appunti: premi Alt+C o scegli «Cattura e copia» dal menu del tray per saltare l'annotazione. Lo screenshot finisce negli appunti.
- Ripristinata la maniglia a sei punti sulle barre degli strumenti di annotazione principale e secondaria. La visibilità è configurabile nelle Impostazioni.

---

## Shotera v7.2.0

**Rilasciato:** 2026-08-02

Avvio della cattura più rapido, cattura personalizzata, 15 lingue.

**✨ Novità**

- Avvio della cattura molto più rapido: il percorso di cattura e annotazione riutilizza e pre-riscalda la finestra di annotazione, evitando il collo di bottiglia della decodifica delle immagini. Nei benchmark a doppio monitor il tempo medio dalla scorciatoia alla selezione si è ridotto del 68,2%.
- Nuovo flusso di cattura personalizzata: si apre con la scorciatoia predefinita Alt+F1 o dal menu del tray. Definisci posizione X/Y esatta e larghezza/altezza, blocca le proporzioni, inverti l'orientamento e aggiungi un ritardo. Salva preimpostazioni di dimensione riutilizzabili con ripristino automatico dell'ultimo valore usato. Sono supportate coordinate multi-monitor (anche negative) e dimensioni fino a 40000 pixel.
- 15 nuove lingue dell'interfaccia: cinese tradizionale, giapponese, portoghese brasiliano, spagnolo, tedesco, francese, italiano, coreano, russo, arabo, olandese, polacco e svedese. Il cambio di lingua si applica subito a tutte le finestre aperte e al tray, senza riavvio. L'arabo include un layout completo da destra a sinistra.

**🚀 Miglioramenti**

- Uscita dalla cattura più pulita: rimossi i lampeggi della vecchia selezione e l'immagine residua a schermo intero.
- Riconoscimento dei controlli annidati più rapido e con meno salti.
- Icone e testi dei controlli della barra delle applicazioni e della navigazione di Esplora file sono più facili da centrare con precisione.
- Gli alberi di accessibilità di Chromium ed Electron vengono pre-riscaldati e ritentati quando serve.
- Il trasferimento delle immagini negli appunti usa un percorso RGBA più diretto.
- Alt+T per fissare e Ctrl+S per salvare funzionano mentre la regione è selezionata.
- Ripristinate le risorse dei modelli AI. I pacchetti portatili includono i file dei modelli necessari.

---

## Shotera v7.1.0

**Rilasciato:** 2026-07-29

Rilevamento finestre, strumenti di annotazione, fissaggi migliorati.

**✨ Novità**

- Migliorato il rilevamento di finestre e controlli, con selezione più semplice dei target annidati.
- Lente di cattura rifinita: bordi più nitidi, maniglie di ridimensionamento più grandi, mirino migliorato.
- Aggiunto il supporto per forme, frecce, testo, adesivi, marcatori e lente locale.
- Editing migliorato con ridimensionamento, rotazione, stile e annulla/ripeti più fluidi.
- Layout della barra degli strumenti aggiornato.
- Fissaggi sempre in primo piano migliorati con spostamento, ridimensionamento, rotazione, ribaltamento, opacità e click-through.
- Migliore compatibilità con gli appunti.
- Ripristinate la voce degli strumenti AI e i pulsanti della barra degli strumenti.
- Ripristinate le voci della guida alle funzioni.
- Migliorata la Modalità presentazione.
- Migliorata la gestione delle scorciatoie, dei canali di aggiornamento e della persistenza delle impostazioni.
- Licenza bilingue nell'installer MSI.
- Gli screenshot restano completamente locali. Nessun account richiesto.

---

## Shotera v7.0.0

**Rilasciato:** 2026-07-23

Cattura ciò che conta. Spiegalo con chiarezza. Tienilo dove lo vedi.

**✨ Novità**

- Flusso di screenshot rapido con hotkey F1, rilevamento di finestre e controlli e lente sullo schermo.
- Strumenti di annotazione: rettangoli, ellissi, linee, frecce, penna a mano libera, evidenziatore, testo formattato, numerazione automatica dei passaggi, mosaico/sfocatura, adesivi emoji e lente locale.
- F3 crea fissaggi sempre in primo piano per screenshot o contenuti degli appunti. I fissaggi supportano spostamento, ridimensionamento, rotazione, ribaltamento e trasparenza.
- La Modalità presentazione aiuta a preparare un desktop più pulito prima di screenshot e riunioni, nascondendo le icone e applicando preimpostazioni di tema e sfondo.

**🚀 Miglioramenti**

- Esperienza più coerente con un riscontro di selezione più chiaro.
- Maniglie di ridimensionamento visibili.
- Lente di cattura più pulita.
- Barre degli strumenti di annotazione allineate.
- Modifica del testo rifinita.
- Onboarding migliorato.
- Impostazioni affidabili.
- Installazione su Windows più fluida.
