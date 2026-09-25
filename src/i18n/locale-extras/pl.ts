import type { LocaleExtras } from '../locale-extras-types';

/**
 * Polish copy that brings the home and about pages to parity with the
 * English pages. Terminology follows the Shotera app's Polish language pack.
 */
export const content: LocaleExtras = {
  footerScrolling: 'Przechwytywanie z przewijaniem',

  home: {
    heroAlt:
      'Narzędzia Shotera na ekranie: przechwytywanie, przechwytywanie z przewijaniem, adnotacje, nagrywanie, wycinanie AI, OCR offline, rozpoznawanie kodów QR i kreskowych, tłumaczenie i przypinanie',
    cards: [
      {
        title: 'Przechwytywanie z przewijaniem',
        description:
          'Strona wyższa niż ekran wciąż mieści się na jednym zrzucie. Przewijaj ją ręcznie albo pozwól Shoterze przewijać automatycznie i patrz, jak długi zrzut scala się w całość.',
      },
      {
        title: 'Rozpoznawanie kodów QR i kreskowych',
        description:
          'Odczytaj kod ze zrzutu — linki, Wi-Fi, kontakty, kody kreskowe — i skopiuj jego zawartość. W pełni offline.',
      },
      {
        title: 'Przeglądarka obrazów',
        description:
          'Otwórz zrzut albo dowolny plik graficzny we własnym oknie przeglądarki: przeglądaj folder, powiększaj i poprawiaj, co trzeba — bez innej aplikacji. Popularne formaty otwierają się od razu.',
      },
    ],
    scrolling: {
      tagline: 'Przechwytywanie z przewijaniem',
      title: 'Strona wyższa niż ekran — na jednym zrzucie',
      text: 'Całe strony, długie czaty i pełne dokumenty — przechwycone od góry do dołu na jednym obrazie.',
      alt: 'Przechwytywanie z przewijaniem scala długą stronę w jeden obraz',
      items: [
        {
          title: 'Przewijanie automatyczne albo ręczne',
          description:
            'Pozwól Shoterze prowadzić stronę w dół albo przewijaj ręcznie. Tak czy inaczej każde ujęcie jest przechwytywane na bieżąco.',
        },
        {
          title: 'Patrz, jak zrzut rośnie',
          description:
            'Podgląd na żywo obok zaznaczenia rośnie z każdym ujęciem, więc możesz zatrzymać się w momencie, gdy cała strona jest już w środku.',
        },
        {
          title: 'Bez widocznych szwów',
          description:
            'Sąsiednie ujęcia są dopasowywane i łączone, dzięki czemu gotowy długi zrzut wygląda jak jedna ciągła strona.',
        },
        {
          title: 'Skopiuj albo zapisz',
          description:
            'Wyślij długi zrzut prosto do schowka albo zapisz go na dysku — gotowy do dokumentacji, czatu i zgłoszeń błędów.',
        },
      ],
    },
    stats: [
      { title: 'Języki', amount: '15' },
      { title: 'Ocena', amount: '4.9 / 5' },
      { title: 'AI offline', amount: '100%' },
      { title: 'Start ze skrótu', amount: '<0.1s' },
    ],
    workflow: {
      title: 'Od ekranu do udostępnienia w trzech krokach.',
      alt: 'Przepływ pracy w Shoterze',
      steps: [
        {
          title: 'Naciśnij skrót',
          description:
            'Wywołaj Shotera w dowolnym miejscu i najedź kursorem — okno lub element, o który chodzi, jest już wykryty.',
        },
        {
          title: 'Dodaj adnotacje, wyodrębnij lub edytuj',
          description:
            'Zaznacz to, co ważne, uruchom OCR, wytnij obiekt, przetłumacz — w tym samym oknie.',
        },
        {
          title: 'Skopiuj, zapisz lub przypnij',
          description:
            'Wyślij do schowka, zapisz lokalnie albo przypnij na wierzchu, aby mieć pod ręką.',
        },
      ],
    },
  },

  about: {
    metaDescription:
      'Poznaj zespół stojący za Shoterą i powody, dla których tworzymy szybkie, proste i dyskretne zrzuty ekranu.',
    hero: {
      tagline: 'O nas',
      title: 'Zrób zrzuty ekranu',
      accent: 'tak dobre, że aż niezauważalne',
      subtitle:
        'Shotera zaczęła się od prostej frustracji: zrzuty, które robimy po kilkanaście razy dziennie, powinny być szybsze i płynniejsze. Jesteśmy małym zespołem ludzi produktu i inżynierów, którzy opierają się na narzędziach do przechwytywania tak mocno jak wszyscy — i tę obsesję wbudowaliśmy w każdy skrót, każde zaznaczenie, każdą klatkę.',
      alt: 'Narzędzia do adnotacji Shotera na pulpicie Windows',
    },
    stats: [
      { title: 'Języki', amount: '15' },
      { title: 'Ocena', amount: '4.9 / 5' },
      { title: 'AI offline', amount: '100%' },
      { title: 'Start ze skrótu', amount: '<0.1s' },
    ],
    stand: {
      title: 'Na czym się opieramy',
      subtitle:
        'Im lepiej narzędzie się sprawdza, tym mniej je zauważasz — ta myśl stoi za każdą naszą decyzją.',
      items: [
        {
          title: 'Szybkość przede wszystkim',
          description:
            'Jeden skrót, aby je wywołać, automatyczne wykrywanie okien i elementów oraz dokładnie ta klatka, którą miałeś na myśli. Od zamiaru do zrzutu w mniej niż sekundę.',
        },
        {
          title: 'Najpierw lokalnie, domyślnie prywatnie',
          description:
            'OCR, wycinanie i inne funkcje działają tam, gdzie to możliwe, na urządzeniu. Twoje zrzuty nie trafiają do chmury, chyba że sam zdecydujesz inaczej.',
        },
        {
          title: 'Powściągliwość w projekcie',
          description:
            'Bez nadmiaru funkcji i przerywania pracy. Codzienne rzeczy są o jedno kliknięcie, a zaawansowane pojawiają się tylko wtedy, gdy ich potrzebujesz.',
        },
      ],
    },
    toolbox: {
      title: '',
      subtitle: '',
      alt: 'Zestaw narzędzi Shotera: przechwytywanie, przechwytywanie z przewijaniem, nagrywanie, wycinanie AI, OCR offline, tłumaczenie obrazów, przypinanie i przeglądarka obrazów',
      items: [
        {
          title: 'Przechwytywanie',
          description:
            'Inteligentne wykrywanie okien i elementów — właściwa ramka jest już wybrana, więc rzadko rysujesz ją ręcznie.',
        },
        {
          title: 'Przechwytywanie z przewijaniem',
          description:
            'Przewiń stronę lub długi czat i pozwól Shoterze scalić go w jeden długi zrzut — automatycznie albo ręcznie, z podglądem na żywo.',
        },
        {
          title: 'Nagrywanie ekranu i GIF',
          description:
            'Nagrywaj ekran i eksportuj do lekkiego GIF-a; podświetlenia kursora i kliknięć utrzymują przejrzystość prezentacji.',
        },
        {
          title: 'Wycinanie AI',
          description:
            'Wykryj obiekt i jednym kliknięciem usuń tło, eksportując przezroczyste PNG. Bez Photoshopa.',
        },
        {
          title: 'OCR offline',
          description:
            'Wyodrębniaj tekst z dowolnego zrzutu, na swoim urządzeniu, w wielu językach. Kopiuj i wklejaj — w pełni offline.',
        },
        {
          title: 'Tłumaczenie obrazów',
          description:
            'Rozpoznawaj i tłumacz tekst w dowolnym obrazie od ręki — obcojęzyczne dokumenty, wykresy i interfejsy stają się czytelne.',
        },
        {
          title: 'Przypinanie na ekranie',
          description:
            'Trzymaj dowolny zrzut na wierzchu jako odniesienie, ułożony obok siebie bez bałaganu.',
        },
        {
          title: 'Przeglądarka obrazów',
          description:
            'Otwórz zrzut lub dowolny plik graficzny we własnym oknie — przeglądaj folder, powiększaj i poprawiaj, co potrzebne.',
        },
      ],
    },
    values: {
      title: 'Nasze wartości',
      subtitle:
        'Tworzenie narzędzia i korzystanie z niego to dla nas to samo. Codziennie pracujemy w tym, co robimy.',
      items: [
        {
          title: 'Stworzone do prawdziwej pracy',
          description:
            'Każda funkcja wynika z prawdziwego problemu — pisania dokumentacji, adnotacji w projektach, nagrywania zgłoszeń, czytania obcych materiałów. Najpierw używamy jej sami, potem przekazujemy ją Tobie.',
        },
        {
          title: 'Stale dopracowujemy',
          description:
            'Wyczucie skrótów, przyciąganie krawędzi zaznaczenia, rozmiar nagrania a jego czytelność — dopracowujemy szczegóły, aż będą w porządku.',
        },
        {
          title: 'Szacunek dla użytkowników',
          description:
            'Bez dołączanego oprogramowania, bez natrętnych okien, bez cichego wysyłania danych. Podstawowe funkcje pozostają bezpłatne — to nasza obietnica.',
        },
      ],
    },
    history: {
      title: 'Jak tu dotarliśmy',
      subtitle:
        'Od narzędzia, które zbudowaliśmy dla siebie, po takie, na którym ludzie polegają każdego dnia.',
      cta: 'Pobierz Shotera za darmo',
      items: [
        {
          title: 'Zaczęło się od własnej potrzeby',
          description:
            'Nie mogliśmy znaleźć narzędzia do przechwytywania, które byłoby dość szybkie i płynne, więc napisaliśmy własne.',
        },
        {
          title: 'Rozwijane przez użytkowników',
          description:
            'Przechwytywanie z przewijaniem, wycinanie AI, OCR offline, tłumaczenie obrazów — wiele funkcji powstało wprost z opinii użytkowników.',
        },
        {
          title: 'Docieramy do coraz większej liczby osób',
          description:
            'Dziś Shotera mówi w 15 językach interfejsu i wciąż rośnie — z tym samym celem: uprościć zrzuty ekranu.',
        },
      ],
    },
    contact: {
      title: 'Skontaktuj się',
      tagline: 'Napisz do nas, kiedy chcesz',
      items: [
        {
          title: 'Społeczność',
          description:
            'Dołącz do społeczności Shotera, aby poznawać nowe wersje i wskazówki oraz bezpośrednio mówić nam, co myślisz.',
        },
        {
          title: 'Wsparcie e-mail',
          description:
            'Masz problem albo pomysł na funkcję? Napisz na mosuzo.studio@gmail.com — czytamy i odpowiadamy na każdą wiadomość.',
        },
      ],
    },
  },
};
