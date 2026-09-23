---
title: 'Aktualizacje'
layout: '~/layouts/MarkdownLayout.astro'
---

# Informacje o wersjach Shotera — wszystkie wersje (polski)

**📫 Opinie**

Ustawienia → O programie → Opinie i sugestie

**🔗 Indeks wersji**

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

**Data wydania:** 2026-09-24

Wersja Lite, długi zrzut, przypinki ze zmianą rozmiaru i lżejsze kompilacje.

**🆚 Lite vs pełna wersja:** różnice w funkcjach znajdziesz w [porównaniu wersji](/pl/versions).

**✨ Nowe funkcje**

- Dodano wersję Lite: instalator o rozmiarze 17 MB z podstawowymi funkcjami zrzutu i adnotacji. Baner aktualizacji w ustawieniach prowadzi do pełnej wersji na stronie.
- Zaktualizowano [oficjalną stronę](https://shotera.mosuzo.com/) — nowa treść i styl.
- Dodano długi zrzut (wersja zapoznawcza, testy beta): tryb przewijania automatycznego i ręcznego z oknem podglądu na żywo. Inteligentny algorytm łączenia wykrywa górną granicę i obsługuje mieszane układy. Podpowiedzi instruktażowe prowadzą przy pierwszym użyciu. Dołącz do grupy beta, aby przetestować.
- Ulepszenia okna przypinki: dwuklik przełącza między oryginalnym rozmiarem a trybem miniatury z przyciskiem zamykania. Przeciągaj krawędzie lub narożniki, aby zmienić rozmiar z zachowaniem proporcji. Natywne menu kontekstowe wykracza poza granice okna. Widoczność paska narzędzi jest zachowywana między sesjami ([#5](https://github.com/mosuzo-studio/Shotera/issues/5), [#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8), [#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10), [#14](https://github.com/mosuzo-studio/Shotera/issues/14)).
- Model wycinania AI zmieniono na wbudowany u2netp dla natychmiastowego działania. rmbg-1.4 jest teraz pobierany na żądanie wraz ze wskazówkami przy pierwszym użyciu.
- Dodano polecenie drukowania w edytorze: menu kontekstowe i menu Plik otwierają systemowe okno drukowania ([#7](https://github.com/mosuzo-studio/Shotera/issues/7), [#8](https://github.com/mosuzo-studio/Shotera/issues/8)).
- Menu kontekstowe edytora otwiera folder zawierający plik i podświetla bieżący plik ([#9](https://github.com/mosuzo-studio/Shotera/issues/9), [#10](https://github.com/mosuzo-studio/Shotera/issues/10)).

**🚀 Ulepszenia**

- Rozmiar kompilacji zmniejszony o 20%: zoptymalizowano kompresję instalatora i ustawienia kompilatora. Dodano profil FastBuild dla szybszych iteracji.
- Zmniejszono bazowe zużycie pamięci.
- Pasek tytułu edytora dynamicznie pokazuje nazwę bieżącego obrazu.
- Powiadomienie o udanej aktualizacji uproszczono do logo, tekstu i przycisku — bez dużego podglądu.
- Dopracowano proces wprowadzenia: 8-stronicowy przewodnik przeniesiono do karty zaproszenia w prawym dolnym rogu. Okno prezentacji nowych funkcji przestaje się pojawiać po trzecim zamknięciu. Wycinanie AI pokazuje wskazówki przy pierwszym użyciu.
- Tłumaczenie obrazów AI ostrzega, gdy wynik jest identyczny z tekstem źródłowym, i wskazuje ustawienia języka. Ostrzeżenie można wyłączyć w Ustawienia → Możliwości AI.
- Domyślna nazwa pliku dla zrzutów, długich zrzutów i wyników edytora ujednolicona do `Shotera_YYYYMMDD_HHMMSS`.
- Miniatura w powiadomieniu o długim zrzucie przycina górny obszar ekranu zamiast ściskać cały obraz.

**🐞 Poprawki błędów**

- Naprawiono początkowe pozycjonowanie okna adnotacji na konfiguracjach z dwoma monitorami.
- Naprawiono błędy obliczania proporcji przy zmianie rozmiaru okna przypinki przez przeciąganie oraz drganie ramki.
- Naprawiono brak działania dwukliku po zaznaczeniu i brak powrotu do oryginalnego rozmiaru.
- Naprawiono blokowanie okna błędu łączenia długiego zrzutu przez reguły klikania na wskroś.
- Naprawiono widmowe paski przewijania i błędne wskazania powiększenia 0% lub 1% po wczytaniu obrazu w edytorze.
- Naprawiono duplikowanie nazw plików na pasku tytułu edytora.

**🙏 Podziękowania**

Dziękujemy członkom społeczności, którzy zgłaszali problemy i sugerowali funkcje, kształtując to wydanie. Ulepszenia długiego zrzutu i okna przypinki wynikły z opinii użytkowników.

---

## Shotera v7.6.0

**Data wydania:** 2026-09-21

Okno „Co nowego”, skanowanie kodów QR, odtwarzanie GIF i więcej formatów obrazów.

**✨ Nowe funkcje**

- Dodano okno „Co nowego” przy starcie: porównuje dwa tryby kończenia zrzutu, pokazuje, gdzie znajduje się skanowanie kodów QR, i zaprasza do oceny Shotera. Zaznacz „Nie pokazuj więcej” lub kliknij „Rozumiem” trzy razy, aby je wyłączyć.
- Dodano skanowanie kodów QR: Micro QR, Data Matrix, Aztec, PDF417, Code128, EAN13, Code39, ITF i UPCA oraz GS1 Digital Link. Panel wyników można zmieniać w rozmiarze i przeciągać, a historia jest numerowana.
- Otwiera pliki PNG, JPG, JPEG, WebP, BMP, GIF, SVG, ICO, AVIF i TIFF (tif/tiff). SVG, ICO, AVIF i TIFF są nowe w tym wydaniu. Otwieraj z menu Plik lub przeciągnij obrazy.
- Dodano odtwarzanie animacji GIF. Pasek stanu i panel Informacje o obrazie pokazują liczbę klatek i łączny czas.
- Dodano panel Informacje o obrazie: wymiary, format, DPI, tryb koloru, głębia bitowa, dane zdjęciowe EXIF oraz kontrola prywatności tagów autora i GPS. Otwierany z menu Plik, menu kontekstowego płótna, paska stanu lub przez Ctrl+I.
- Pasek stanu pokazuje powiększenie, wymiary obrazu, rozmiar pliku i ścieżkę pliku. Ścieżka ma trzy tryby wyświetlania: ukryta, okruszki i pełna.
- Pasek tytułu edytora pokazuje nazwę bieżącego obrazu. Menu kontekstowe płótna otwiera folder zawierający plik i podświetla bieżący plik ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Dodano okno potwierdzenia przed nadpisaniem pliku przy zapisie. Zaznacz „Nie pytaj ponownie”, aby je później pomijać.
- Okna przypinek: ukrywanie paska narzędzi w prawym górnym rogu z menu kontekstowego; ustawienie jest zapamiętywane ([#4](https://github.com/mosuzo-studio/Shotera/issues/4)).

**🚀 Ulepszenia**

- Górny pasek trybów znów jest widoczny — oferuje pozycje Zrzut ekranu i Kod QR.
- Przeprojektowano renderowanie dużych obrazów w edytorze — wczytywanie i powiększanie są teraz płynne.
- Powiększanie Ctrl+kółko jest teraz zakotwiczone w kursorze, a nie w środku płótna.
- Dodano skróty powiększania: Ctrl+=, Ctrl+-, Ctrl+0.
- Powiększanie i przesuwanie nie wypychają już obrazu całkowicie poza widok.
- Obrazy w edytorze mają miękki cień, a tryb jasny używa czysto białego płótna.
- Przeprojektowano lupę wyboru koloru: kwadratowa podwójna ramka, ściślejsza krawędź panelu, kwadratowa próbka koloru i dopracowany kolor celownika.
- Menu Pomoc otwiera stronę bezpośrednio.
- Tłumaczenie obrazów AI ostrzega, gdy wynik jest identyczny z oryginałem (zwykle gdy język docelowy jest taki sam jak źródłowy) i wskazuje ustawienie języka. Podpowiedź można wyłączyć w Ustawienia → Możliwości AI.
- Zmieniono moment wyświetlania prośby o ocenę: pojawia się teraz po pierwszym zrzucie w każdej wersji, a później najwyżej raz w miesiącu.

**🐞 Poprawki błędów**

- Naprawiono widmowe paski przewijania i błędny odczyt powiększenia 0% lub 1% po wczytaniu obrazu.
- Naprawiono przycinanie listy rozwijanej „Plik” przy krawędzi okna edytora.
- Naprawiono nieoczekiwane wywoływanie zrzutów przy starcie aplikacji wraz z Windows.
- Naprawiono brak aktualizacji trybu kończenia zrzutu w ustawieniach po zmianie z okna „Co nowego”.

**🙏 Podziękowania**

Dziękujemy @korenevskiy i @NewJon27 za sugestie funkcji, które ukształtowały to wydanie.

Skanowanie kodów QR dodano w odpowiedzi na opinie Horihons.

---

## Shotera v7.5.1

**Data wydania:** 2026-09-14

Elegancki tryb przechwytywania, natychmiastowa przypinka, skróty kopiowania.

**✨ Nowe funkcje**

- Dodano tryb przechwytywania „Elegancko”: zaznacz obszar i gotowe. Obraz skopiowany wraz z podglądem w powiadomieniu. Bez nakładki. Obsługa trybu ciemnego ([#1](https://github.com/mosuzo-studio/Shotera/issues/1)).
- Dodano skrót F3 do natychmiastowego przypięcia podczas przechwytywania lub po nim. Można go dostosować w Ustawienia → Skróty klawiszowe ([#3](https://github.com/mosuzo-studio/Shotera/issues/3), [#4](https://github.com/mosuzo-studio/Shotera/issues/4)).
- Dodano Ctrl+C, aby skopiować zrzut i zamknąć nakładkę jednym krokiem.
- Dodano dwuklik, aby natychmiast zatwierdzić zrzut.
- Dodano kliknięcie prawym przyciskiem, aby anulować przechwytywanie.
- Dodano przełącznik „Automatycznie wyodrębniaj tekst po zrzucie” w Ustawienia → Przechwytywanie.
- Pasek tytułu okna edytora podąża za motywem systemu.

**🚀 Ulepszenia**

- „Zapisz jako” w edytorze używa dynamicznych znaczników czasu w nazwach plików.
- Skrót Ctrl+Shift+S dla „Zapisz jako”.
- Menu zasobnika i tytuł okna edytora są teraz przetłumaczone.

**🐞 Poprawki błędów**

- Naprawiono błąd OCR przy instalacji w ścieżkach innych niż angielskie.
- Naprawiono obniżoną rozdzielczość przypiętych obrazów na ekranach o wysokim DPI.
- Naprawiono tworzenie przez F3 zduplikowanych przypinek z zaznaczenia i schowka.
- Naprawiono brak powiadomienia w trybie „Elegancko” w wersji Microsoft Store.
- Naprawiono wywoływanie dodatkowego zrzutu po kliknięciu powiadomienia w wersji Microsoft Store.
- Naprawiono utrzymywanie się czerwonej kropki na przycisku aktualizacji po aktualizacji.

**🙏 Podziękowania**

Dziękujemy @Const-me, @LightQuanta i @wherewhere za sugestie funkcji, które ukształtowały to wydanie.

---

## Shotera v7.5.0

**Data wydania:** 2026-09-12

Pełny edytor obrazów, tryby przechwytywania, rozszerzone wsparcie procesorów.

**✨ Nowe funkcje**

- Dodano pełny edytor obrazów w osobnym oknie z zasobnika przez „Edytuj Obraz…”. Obsługuje otwieranie, zapisywanie i „Zapisz jako”, przeciąganie i upuszczanie, powiększanie Ctrl+kółko od 10% do 400%, narzędzia adnotacji, OCR, wycinanie AI oraz wymazywanie AI.
- Dodano styl „Zwykła strzałka” ze zwężanym grotem do podpaska narzędzi strzałki.
- Dodano ustawienie „Po wykonaniu zrzutu”: wybierz „Elegancko”, aby skopiować zaznaczenie z podglądem w powiadomieniu (kliknięcie otwiera edytor), lub pozostaw domyślny tryb „To, co widzisz, jest tym, co otrzymujesz”.
- Dodano ustawienia „Automatycznie wyodrębniaj tekst po zrzucie” i „Ukryj przyciski AI”.
- Język docelowy tłumaczenia podąża za językiem interfejsu.

**🚀 Ulepszenia**

- Rozszerzono wsparcie procesorów do Intel 3. generacji (Ivy Bridge) i starszych. Funkcje AI są niedostępne na starszych procesorach — pojawia się okno wyjaśniające.
- Gdy powiadomienia Windows są wyłączone, w prawym dolnym rogu rysowane jest własne okno wskazówek.
- Gumka usuwa teraz strzałki i linie oraz pokazuje kursor gumki.
- Główny pasek narzędzi jest osadzony w pasku menu i zawsze widoczny. Pasek dodatkowy nie przesuwa obrazu.
- Kopiowanie w edytorze nie zamyka już okna ani nie czyści zaznaczenia. Czerwony ✕ czyści obraz.
- Strona Przechwytywanie w ustawieniach oznacza nowe funkcje czerwoną kropką.

**🐞 Poprawki błędów**

- Naprawiono awarię aplikacji przy starcie na procesorach bez obsługi AVX2.
- Naprawiono błąd OCR przy instalacji w chińskich i innych nieangielskich ścieżkach.
- Naprawiono błąd wczytywania obrazów ze znakami nie-ASCII w ścieżce przez przeciąganie.
- Naprawiono sytuacje, w których okno edytora nie wczytywało zrzutu z powiadomienia.
- Naprawiono przesunięte obrazy i nieusunięte pasy po wycinaniu i wymazywaniu AI.
- Naprawiono brak aktualizacji paska stanu edytora po wczytaniu obrazu.
- Naprawiono przesunięcie podświetleń przy wyodrębnianiu tekstu w edytorze.
- Naprawiono opadanie stempli z numerami i emoji podczas zmiany rozmiaru.

**🗑️ Usunięto**

- Menu Edycja i Widok z paska menu edytora.

---

## Shotera v7.4.2

**Data wydania:** 2026-09-07

Opinie w aplikacji, instalator w 22 językach, ulepszenia wydajności.

**✨ Nowe funkcje**

- Dodano formularz opinii w aplikacji w Ustawienia → O programie do ocen, sugestii i ankiet.
- Rozszerzono obsługę języków instalatora NSIS z 2 do 22.

**🚀 Ulepszenia**

- Poprawiono wydajność adnotacji dla płynniejszego rysowania.
- Domyślna szczegółowość wykrywania to „Wykrywanie elementu interfejsu”.
- Punkty zaczepienia zaznaczenia pojawiają się tylko wtedy, gdy zaznaczenie jest wystarczająco duże.
- Pozycja opinii w O programie używa klikalnej ikony.
- Dopracowano sformułowania dla czystszego tonu.
- Poprawiono przepływ otwierania strony aktualizacji z powiadomienia.

**🐞 Poprawki błędów**

- Naprawiono pojawianie się nakładek adnotacji na niewłaściwym monitorze.
- Naprawiono resetowanie warstw podświetlenia przy przechodzeniu między elementami w wykrywaniu elementów.
- Naprawiono psucie się autostartu po aktualizacji wersji z Microsoft Store.

**🗑️ Usunięto**

- Pozycja „Przeglądaj przewodnik wprowadzający” i tekst podpowiedzi trybu.

---

## Shotera v7.4.1

**Data wydania:** 2026-09-04

Porównanie modeli, spójne nazewnictwo, pomoc w kontekście.

**✨ Nowe funkcje**

- Dodano tabelę porównania modeli: ikona pomocy obok „Model wycinania AI” otwiera tabelę porównującą wszystkie cztery modele pod względem rozmiaru, szybkości, jakości i zastosowania.
- Spójne nazewnictwo modeli w formacie „Model · Cecha”, posortowane od najmniejszego do największego.
- Pomoc w kontekście dla tłumaczenia obrazów: opis przeniesiono do podpowiedzi wyświetlanej po najechaniu na ikonę pomocy.

---

## Shotera v7.4.0

**Data wydania:** 2026-09-03

Przeprojektowana obsługa aktualizacji, wsparcie Microsoft Store, poprawki AI.

**✨ Nowe funkcje**

- Przeprojektowano obsługę aktualizacji wraz z optymalizacją logiki i interfejsu ustawień. Automatyczna instalacja w czasie bezczynności, cztery tryby aktualizacji, inteligentniejsza częstotliwość przypomnień.
- Poprawiono zgodność z wersją Microsoft Store i naprawiono autostart przy starcie Windows.

**🐞 Poprawki błędów**

- Naprawiono ponowne pobieranie modelu wycinania AI przy każdym sprawdzeniu.
- Dodano przyspieszenie przez chińskie lustro (shotera-ai.pages.dev) z automatycznym powrotem do Hugging Face.

---

## Shotera v7.3.1

**Data wydania:** 2026-08-29

Obsługa trybu ciemnego.

**✨ Nowe funkcje**

- Dodano obsługę trybu ciemnego: wybierz jasny, ciemny lub „Zgodnie z systemem” w ustawieniach. Wszystkie okna aktualizują się natychmiast, bez ponownego uruchamiania.

---

## Shotera v7.3.0

**Data wydania:** 2026-08-23

Automatyczny OCR, częściowe kopiowanie, powiązane podświetlanie.

**✨ Nowe funkcje**

- Automatyczny OCR: tekst wyodrębniany zaraz po zaznaczeniu obszaru. Zaznaczenie pozostaje edytowalne z automatycznym ponownym wyodrębnianiem.
- Częściowe kopiowanie: przeciągnij po rozpoznanym tekście i naciśnij Ctrl+C, aby skopiować tylko ten fragment. Pojawia się w historii schowka Windows.
- Powiązane podświetlanie: zaznaczenie tekstu na oryginalnym obrazie podświetla pasujące znaki w panelu wyników, znak po znaku.
- Nakładka świadoma narzędzia: warstwa tekstu pozostaje interaktywna, gdy żadne narzędzie adnotacji nie jest aktywne, i ukrywa się po wybraniu narzędzia.
- Lokalizacja: chiński tradycyjny, japoński, koreański, portugalski (Brazylia), hiszpański, niemiecki, francuski, włoski, rosyjski, arabski, niderlandzki, polski i szwedzki obejmują teraz ustawienia tłumaczenia obrazów.

**🐞 Poprawki błędów**

- Naprawiono otwieranie panelu wyników bezpośrednio przez „Wyodrębnij tekst” po automatycznym OCR.
- Naprawiono brak blokowania narysowanych kształtów przy anulowaniu narzędzia adnotacji.
- Naprawiono niewidoczny przycisk „Pomiń” w przewodniku pierwszego uruchomienia.

---

## Shotera v7.2.2

**Data wydania:** 2026-08-20

Dostawcy tłumaczenia obrazów, test klucza, poprawki dla wysokiego DPI.

**✨ Nowe funkcje**

- Każda usługa to teraz rozwijana karta: Baidu Image Translation (V2.0 Wysoka precyzja / V1 Klasyczna) i Youdao Translate (99 języków).
- Baidu działa od razu z wbudowanym limitem. Własny APP ID i APP Secret zwiększają limit.
- Pamięć języka przechowywana osobno dla każdego dostawcy.
- Dodano „Testuj klucz”, aby zweryfikować dane uwierzytelniające jednym prawdziwym żądaniem.

**🐞 Poprawki błędów**

- Naprawiono poprawne otwieranie linków do dokumentacji API dostawców.
- Naprawiono przeciąganie zaznaczenia z użyciem ścieżki wejścia wskaźnika o wysokiej częstotliwości.
- Naprawiono konwersję współrzędnych zaznaczenia przez układ współrzędnych sceny przy wysokim DPI.
- Naprawiono wyrównanie zamrożonej nakładki przechwytywania do natywnych współrzędnych wirtualnego pulpitu na wielu monitorach o mieszanym DPI.

---

## Shotera v7.2.1

**Data wydania:** 2026-08-18

Przechwytywanie do schowka, ruchome paski narzędzi.

**✨ Nowe funkcje**

- Dodano przechwytywanie prosto do schowka: naciśnij Alt+C lub wybierz „Przechwyć i kopiuj” z menu zasobnika, aby pominąć adnotacje. Zrzut trafia do schowka.
- Przywrócono sześciopunktowy uchwyt przeciągania na głównym i dodatkowym pasku adnotacji. Widoczność można ustawić w Ustawieniach.

---

## Shotera v7.2.0

**Data wydania:** 2026-08-02

Szybszy start przechwytywania, niestandardowy zrzut, 15 języków.

**✨ Nowe funkcje**

- Znacznie szybszy start przechwytywania: ścieżka zrzutu i adnotacji ponownie używa i wstępnie rozgrzewa okno adnotacji, unikając wąskiego gardła dekodowania obrazu. Średni czas od skrótu do zaznaczenia spadł o 68,2% w testach na dwóch monitorach.
- Dodano przepływ niestandardowego zrzutu: otwierany domyślnym skrótem Alt+F1 lub z menu zasobnika. Określ dokładną pozycję X/Y oraz szerokość i wysokość, zablokuj proporcje, zamień orientację, dodaj opóźnienie. Zapisuj presety rozmiaru do ponownego użycia z automatycznym przywracaniem ostatniej wartości. Obsługa współrzędnych wielu monitorów (także ujemnych) i rozmiarów do 40000 pikseli.
- Dodano 15 języków interfejsu: chiński tradycyjny, japoński, portugalski brazylijski, hiszpański, niemiecki, francuski, włoski, koreański, rosyjski, arabski, niderlandzki, polski i szwedzki. Zmiana języka działa natychmiast we wszystkich otwartych oknach i w zasobniku, bez ponownego uruchamiania. Arabski obejmuje pełny układ od prawej do lewej.

**🚀 Ulepszenia**

- Czystsze wyjście z przechwytywania — usunięto błyski starego zaznaczenia i powidok całego okna.
- Szybsze rozpoznawanie zagnieżdżonych kontrolek z mniejszą liczbą przeskoków.
- Elementy paska zadań oraz ikony i teksty nawigacji Eksploratora plików są precyzyjniej wybierane jako cel.
- Drzewa dostępności Chromium i Electron są wstępnie rozgrzewane i ponawiane w razie potrzeby.
- Transfer obrazu przez schowek używa bardziej bezpośredniej ścieżki RGBA.
- Alt+T dla przypięcia i Ctrl+S dla zapisu działają przy zaznaczonym obszarze.
- Przywrócono zasoby modeli AI. Pakiety przenośne zawierają wymagane pliki modeli.

---

## Shotera v7.1.0

**Data wydania:** 2026-07-29

Wykrywanie okien, narzędzia adnotacji, ulepszone przypinki.

**✨ Nowe funkcje**

- Ulepszono wykrywanie okien i kontrolek, łatwiejsze wybieranie zagnieżdżonych celów.
- Dopracowano lupę przechwytywania: wyraźniejsze granice, większe uchwyty zmiany rozmiaru, lepszy celownik.
- Dodano obsługę kształtów, strzałek, tekstu, naklejek, zakreślaczy i lokalnej lupy.
- Ulepszono edycję: płynniejsza zmiana rozmiaru, obrót, stylowanie, cofanie i ponawianie.
- Zaktualizowano układ paska narzędzi.
- Ulepszono przypinki zawsze na wierzchu: przenoszenie, zmiana rozmiaru, obrót, odbicie, przezroczystość, klikanie na wskroś.
- Lepsza zgodność ze schowkiem.
- Przywrócono pozycję narzędzi AI i przyciski paska narzędzi.
- Przywrócono pozycje przewodnika po funkcjach.
- Ulepszono tryb prezentacji.
- Ulepszono zarządzanie skrótami, kanały aktualizacji, trwałość ustawień.
- Dwujęzyczna licencja w instalatorze MSI.
- Zrzuty pozostają w pełni lokalne. Konto nie jest wymagane.

---

## Shotera v7.0.0

**Data wydania:** 2026-07-23

Przechwyć to, co ważne. Wyjaśnij to jasno. Miej to na widoku.

**✨ Nowe funkcje**

- Szybki przepływ pracy ze zrzutami: skrót F1, wykrywanie okien i kontrolek, lupa na ekranie.
- Narzędzia adnotacji: prostokąty, elipsy, linie, strzałki, pędzel odręczny, zakreślacz, tekst sformatowany, automatyczna numeracja kroków, mozaika i rozmycie, naklejki emoji, lokalna lupa.
- F3 tworzy przypinki zawsze na wierzchu dla zrzutów lub zawartości schowka. Przypinki obsługują przenoszenie, zmianę rozmiaru, obrót, odbicie i przezroczystość.
- Tryb prezentacji pomaga przygotować czystszy pulpit przed zrzutami i spotkaniami, ukrywając ikony i stosując presety motywu oraz tapety.

**🚀 Ulepszenia**

- Bardziej spójne doświadczenie z wyraźniejszą informacją zwrotną przy zaznaczaniu.
- Widoczne uchwyty zmiany rozmiaru.
- Czystsza lupa przechwytywania.
- Wyrównane paski narzędzi adnotacji.
- Dopracowana edycja tekstu.
- Ulepszone wprowadzenie do aplikacji.
- Niezawodne ustawienia.
- Płynniejsza instalacja w Windows.
