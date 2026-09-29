import type { V3LocaleCopy } from './types';

/**
 * Polish copy for the v3 pages. Terminology follows the Shotera app's pl
 * language pack.
 */
export default {
  home: 'Shotera — Szybsze i inteligentniejsze zrzuty ekranu oraz nagrywanie',
  nav: {
    features: 'Funkcje',
    versions: 'Wersje',
    changelog: 'Historia zmian',
    about: 'O nas',
    faq: 'FAQ',
    menu: 'Menu',
    language: 'Język',
    cta: 'Pobierz za darmo',
  },
  hero: {
    badge: 'Nowość',
    announce: 'Wersja Lite: instalator to zaledwie ~17 MB',
    modes: [
      {
        key: 'capture',
        label: 'Zrzut ekranu',
        caption: 'Okna i elementy interfejsu wykrywają się pod kursorem — właściwy obszar za pierwszym razem.',
      },
      {
        key: 'long',
        label: 'Długi zrzut',
        caption: 'Długie strony i długie czaty — scalone w jeden obraz, automatycznie lub ręcznie.',
      },
      {
        key: 'pin',
        label: 'Przypinanie',
        caption: 'Przypnij zrzuty na wierzchu ekranu — skaluj, zmieniaj przezroczystość, porównuj obok siebie.',
      },
      {
        key: 'record',
        label: 'Nagrywanie',
        caption:
          'Od 720p do 4K przy wysokiej liczbie klatek, podświetlenie kursora i kliknięć, eksport do MP4 lub GIF.',
      },
      {
        key: 'ai',
        label: 'AI',
        caption: 'Wycinanie AI, wymazywanie AI i OCR offline — wszystko przetwarzane na Twoim urządzeniu.',
      },
    ],
    h1: [
      [{ text: 'Zrzuty ekranu, nagrywanie, ' }, { text: 'magia AI', hl: true }],
      [{ text: 'wszystko z jednego skrótu' }],
    ],
    sub: 'Shotera to narzędzie do przechwytywania dla osób, które robią zrzuty przez cały dzień: adnotacje, długie zrzuty stron, nagrywanie do GIF, wycinanie obiektów z pomocą AI, OCR offline, tłumaczenie obrazów i przypinanie materiałów — bez wychodzenia z rytmu pracy.',
    primary: 'Pobierz za darmo',
    secondary: 'Zobacz, jak to działa',
    metaStrong: 'Windows 10/11+',
    metaRest: 'Instalator / wersja przenośna / MSI',
    store: 'Dostępna także w Microsoft Store',
    shellMonitor: 'Obudowa monitora z aluminium',
    shellLaptop: 'Obudowa laptopa',
  },
  download: {
    more: 'Więcej opcji pobierania',
    menu: 'Opcje pobierania',
    edition: 'Shotera Standard',
    setup: 'Instalator (.exe)',
    portable: 'Wersja przenośna (.7z)',
    msi: 'Instalator MSI',
    store: 'Microsoft Store',
    setupTip: 'Kliknij dwukrotnie, aby zainstalować. Wybór większości osób.',
    portableTip: 'Rozpakuj i uruchom — może mieszkać na pendrive.',
    msiTip: 'Zwykle używany przez administratorów IT do wdrożenia aplikacji na wielu komputerach.',
    storeTip: 'Wersja z Microsoft Store — dla osób, które wolą instalować aplikacje stamtąd.',
    recommend: 'Zalecany',
    allVersions: 'Wszystkie wersje na GitHubie',
  },
  trust: [
    { value: '15', label: 'języków interfejsu' },
    { value: '4.9 / 5', label: 'ocena użytkowników' },
    { value: '100%', label: 'AI na urządzeniu' },
    { value: '<0.1s', label: 'start ze skrótu' },
  ],
  modesSection: {
    bestFor: 'NAJLEPSZE DO',
    eyebrow: 'Trzy codzienne zadania',
    title: 'Jeden skrót do każdego zadania z przechwytywaniem',
    lead: 'Przechwytywanie, przypinanie, nagrywanie i GIF — trzy zadania, po które sięgasz przez cały dzień, wszystkie pod jednym skrótem.',
    cards: [
      {
        icon: 'capture',
        title: 'Zrzut ekranu',
        one: 'Obszar, okno lub cały ekran jednym skrótem — okna i elementy interfejsu wykrywają się same.',
        steps: ['Naciśnij skrót', 'Najedź kursorem, aby uchwycić granice', 'Dodaj adnotacje, skopiuj lub zapisz'],
        bestFor: 'codzienne udostępnianie i dokumentacja',
      },
      {
        icon: 'pin',
        title: 'Przypinanie do pulpitu',
        one: 'Trzymaj zrzut na wierzchu, jak długo potrzebujesz.',
        steps: [
          'Przypnij od razu po zrzucie',
          'Skaluj, zmieniaj przezroczystość, porównuj',
          'Pracuj bez żonglowania oknami',
        ],
        bestFor: 'praca z materiałami odniesienia',
      },
      {
        icon: 'record',
        title: 'Nagrywanie & GIF',
        one: 'Od 720p do 4K przy 30 lub 60 fps, bez limitu czasu nagrywania.',
        steps: ['Wybierz obszar i nagrywaj', 'Podświetl kursor i kliknięcia', 'Eksportuj do MP4 lub GIF'],
        bestFor: 'samouczki i zgłoszenia błędów',
      },
    ],
  },
  features: [
    {
      eyebrow: 'Zrzut ekranu',
      title: 'Jedno naciśnięcie i ramka co do piksela',
      lead: 'Wywołaj skrótem, a potem przechwyć, dodaj adnotacje i skopiuj jednym płynnym ruchem.',
      rows: [
        'Najedź kursorem, a Shotera przyciągnie się do okna lub elementu pod spodem',
        'Strzałki, prostokąty, tekst, numeracja kroków, emoji, lupa — adnotacje dodasz w momencie przechwytywania',
        'Dwa tryby zakończenia: kopiuj od razu do schowka albo przejdź do adnotacji (Elegancko / Adnotacje od razu)',
      ],
      items: [
        { title: 'Naklejki emoji', note: 'powiedz więcej jednym kliknięciem' },
        { title: 'Lupa', note: 'przybliż szczegóły' },
        { title: 'Numeracja kroków', note: 'wskaż kolejność czytania' },
        { title: 'Mozaika & zakreślacz', note: 'prywatność i wyróżnienie' },
      ],
      image: 'capture',
    },
    {
      eyebrow: 'Długi zrzut',
      title: 'Strona wyższa niż ekran — na jednym zrzucie',
      lead: 'Długie strony, długie czaty i całe dokumenty — przechwycone od góry do dołu na jednym obrazie.',
      rows: [
        'Przewijanie automatyczne albo ręczne — każde ujęcie jest przechwytywane na bieżąco',
        'Sąsiednie ujęcia są dopasowywane i łączone, więc gotowy długi zrzut nie ma widocznych szwów',
      ],
      items: [
        { title: 'Podgląd scalania na żywo', note: 'zatrzymaj się, gdy całość jest gotowa' },
        { title: 'Bez widocznych szwów', note: 'czyta się jak jedna ciągła strona' },
        { title: 'Długie czaty', note: 'cały wątek na jednym obrazie' },
        { title: 'Skopiuj albo zapisz', note: 'gotowe do dokumentacji i zgłoszeń' },
      ],
      image: 'longshot',
      reversed: true,
    },
    {
      eyebrow: 'Przypinanie do pulpitu',
      title: 'Przypnij materiały na wierzchu i pracuj obok nich',
      lead: 'Przypnij zrzut na wierzchu — porównuj, korzystaj z odniesienia i pracuj dalej bez przełączania okien.',
      rows: [
        'Przypnij zrzut na wierzchu ekranu, nie przerywając pracy',
        'Zmieniaj rozmiar za dowolną krawędź lub róg przy zablokowanych proporcjach; dwukrotne kliknięcie przełącza między oryginalnym rozmiarem a miniaturą',
      ],
      items: [
        { title: 'Kilka przypinek naraz', note: 'porównuj obok siebie' },
        { title: 'Tryb miniatury', note: 'dwuklik zwija przypinkę' },
        { title: 'Przenikanie myszy', note: 'nie blokuje okna pod spodem' },
        { title: 'Przywróć ostatnią przypinkę', note: 'jeden klawisz i wraca' },
      ],
      image: 'pin',
    },
    {
      eyebrow: 'Nagrywanie',
      title: 'Nagrywaj w 4K tak długo, jak potrzebujesz',
      lead: 'Zamień „trudne do wyjaśnienia” w nagranie, które zrozumie każdy.',
      rows: [
        '720p / 1080p / 2K / 4K przy 30 lub 60 fps, bez limitu czasu nagrywania',
        'Wrzuć lekki GIF do dokumentacji, czatu lub zgłoszenia — odtwarzacz nie jest potrzebny',
      ],
      items: [
        { title: 'Podświetlenie kursora i kliknięć', note: 'każdy krok pozostaje czytelny' },
        { title: 'MP4 czy GIF', note: 'jakość albo rozmiar pliku — Twój wybór' },
        { title: 'Gotowe na 4K', note: 'stworzone z myślą o ekranach HiDPI' },
        { title: 'Historia', note: 'znajdź ostatnie nagranie' },
      ],
      image: 'recording',
      reversed: true,
    },
    {
      eyebrow: 'Możliwości AI',
      title: 'AI, które dokończy zrzut za Ciebie',
      lead: 'Wycinanie AI, wymazywanie AI i OCR działają lokalnie: inteligentnie, bez rezygnacji z prywatności.',
      rows: [
        'Ludzie, produkty, logotypy: przezroczysty PNG w kilka sekund — bez wysyłania i czekania na serwer',
        'OCR działa na Twoim urządzeniu i w jednym kliknięciu zwraca tekst do edycji i kopiowania',
      ],
      items: [
        { title: 'Wytnij obiekt', note: 'przezroczyste tło jednym kliknięciem' },
        { title: 'Wymaż to, czego nie powinno być', note: 'AI odtworzy to, co było pod spodem' },
        { title: 'OCR offline', note: 'wiele języków, kod, tabele' },
        { title: 'Tłumaczenie obrazów', note: 'obcojęzyczne zrzuty czytasz od razu' },
      ],
      image: 'ai',
    },
  ],
  cta: {
    eyebrow: 'Zacznij za darmo',
    title: 'Każdy zrzut szybszy i inteligentniejszy',
    lead: 'Pobierz za darmo, instalacja zajmie kilka sekund. Oddaj codzienne „zrób zrzut” narzędziu, które to rozumie.',
    primary: 'Pobierz za darmo',
    secondary: 'Więcej wersji',
    note: 'Wersje Standard i Lite; Windows 10/11+. Dostępne: instalator / wersja przenośna / MSI.',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Masz pytanie albo pomysł? Napisz do nas.',
    lead: 'Trafiłeś na problem, chcesz nowej funkcji, a może po prostu chcesz się przywitać — wybierz kanał, który Ci odpowiada.',
    replyNote: 'E-mail i GitHub sprawdzamy codziennie; zwykle odpowiadamy w ciągu 24 godzin roboczych.',
    faqNote: 'Utknąłeś na czymś? Większość odpowiedzi znajdziesz już w FAQ.',
    faqLink: 'Przeczytaj FAQ',
    soon: 'Już wkrótce',
    mail: {
      subject: 'Opinia o Shoterze — ',
      body: [
        'Cześć,',
        '',
        '(Opisz problem, na który trafiłeś, albo funkcję, którą chciałbyś zobaczyć.)',
        '',
        '',
        'Jeśli możesz, dopisz te informacje — pomogą nam szybciej dotrzeć do rozwiązania:',
        '',
        '\u00b7 Wersja Shotera (Lite / Standard):',
        '\u00b7 Wersja Windows:',
        '\u00b7 Kroki do odtworzenia:',
        '',
        'Z góry dziękuję!',
      ].join('\n'),
      copied: 'E-mail skopiowany — otwieram aplikację pocztową…',
    },
    groups: [
      {
        key: 'talk',
        title: 'Napisz do nas',
        note: 'Każdą opinię czytamy uważnie.',
        channels: [
          {
            key: 'email',
            name: 'E-mail',
            handle: 'mosuzo.studio@gmail.com',
            note: 'Wsparcie, licencje, współpraca.',
            icon: 'tabler:mail',
            href: 'mailto:mosuzo.studio@gmail.com',
            tint: '#0a7cff',
          },
          {
            key: 'github',
            name: 'GitHub',
            handle: 'mosuzo-studio/Shotera',
            note: 'Zgłoszenia błędów, propozycje funkcji, starsze wersje.',
            icon: 'tabler:brand-github',
            href: 'https://github.com/mosuzo-studio/Shotera',
            tint: '#24292f',
          },
          {
            key: 'discord',
            name: 'Discord',
            note: 'Rozmowy z innymi użytkownikami Shotera.',
            icon: 'tabler:brand-discord',
            tint: '#5865f2',
          },
        ],
      },
      {
        key: 'follow',
        title: 'Bądź na bieżąco',
        note: 'Informacje o wydaniach, wskazówki i kulisy pracy.',
        channels: [
          {
            key: 'x',
            name: 'X',
            note: 'Informacje o wydaniach i szybkie wskazówki.',
            icon: 'tabler:brand-x',
            tint: '#111111',
          },
          {
            key: 'bilibili',
            name: 'Bilibili',
            note: 'Samouczki i omówienia funkcji.',
            icon: 'tabler:brand-bilibili',
            tint: '#00a1d6',
          },
          {
            key: 'telegram',
            name: 'Telegram',
            note: 'Ogłoszenia o wydaniach.',
            icon: 'tabler:brand-telegram',
            tint: '#229ed9',
          },
        ],
      },
    ],
  },
  footer: {
    blurb:
      'Szybsze i inteligentniejsze zrzuty ekranu oraz nagrywanie — przypniesz, oznaczysz i rozpoznasz jednym skrótem.',
    cols: [
      {
        title: 'Produkt',
        links: [
          { text: 'Funkcje', path: '/', hash: 'features' },
          { text: 'Wersje', path: '/versions' },
        ],
      },
      {
        title: 'Wsparcie',
        links: [
          { text: 'FAQ', path: '/faq' },
          { text: 'Historia zmian', path: '/changelog' },
        ],
      },
      {
        title: 'Firma',
        links: [
          { text: 'O nas', path: '/about' },
          { text: 'Kontakt', path: '/contact' },
        ],
      },
    ],
    legal: [
      { text: 'Warunki', path: '/terms' },
      { text: 'Prywatność', path: '/privacy' },
    ],
    rights: '© 2026 Mosuzo Studio',
    system: 'Windows 10/11+ · 15 języków interfejsu',
  },
} satisfies V3LocaleCopy;
