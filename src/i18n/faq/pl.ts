import type { FaqContent } from '../faq-types';

/**
 * Polish FAQ copy. Structure mirrors the English page; wording follows the
 * app's pl language pack.
 */
export const content: FaqContent = {
  metaTitle: 'FAQ',
  metaDescription:
    'Krótkie odpowiedzi o Shoterze: jakie platformy i języki interfejsu obsługuje, co działa offline, co pozostaje bezpłatne, jak działają eksport i wydajność oraz szczegóły, takie jak motywy i skróty.',
  title: 'Najczęściej zadawane pytania',
  lead: 'Platformy, języki, prywatność offline, wersje, eksport i szczegóły — krótko i na temat.',
  groups: [
    {
      id: 'platform',
      label: 'Platformy i języki',
      items: [
        {
          q: 'Jakie systemy operacyjne obsługuje Shotera?',
          a: 'Shotera obsługuje obecnie pulpit Windows: instalator jest niewielki, szybko się uruchamia i działa offline — pobierasz go i od razu zaczynasz pracę. macOS, Linux i kolejne platformy są w planach.',
        },
        {
          q: 'Jakie języki interfejsu obsługuje Shotera?',
          a: 'Shotera obsługuje teraz chiński tradycyjny, japoński, portugalski (Brazylia), hiszpański, niemiecki, francuski, włoski, koreański, rosyjski, arabski, niderlandzki, polski i szwedzki. Razem z angielskim i chińskim uproszczonym daje to 15 języków interfejsu.',
        },
      ],
    },
    {
      id: 'offline',
      label: 'Offline i prywatność',
      items: [
        {
          q: 'Czy OCR i wycinanie AI wymagają połączenia z internetem?',
          a: 'Nie. OCR, wycinanie AI i wymazywanie AI działają w całości offline na Twoim urządzeniu — nic nie jest wysyłane, więc Twoje dane pozostają prywatne. Tłumaczenie obrazów korzysta z interfejsów API w chmurze i podlega politykom prywatności odpowiednich dostawców.',
        },
        {
          q: 'Czy Shotera działa bez żadnego połączenia z internetem?',
          a: 'Tak. Przechwytywanie, adnotacje, nagrywanie, OCR, wycinanie AI, wymazywanie AI i przeglądarka obrazów działają offline, a to, co przechwycisz, nie opuszcza Twojego komputera. Tłumaczenie obrazów jako jedyne odwołuje się do API w chmurze, więc wymaga połączenia.',
        },
      ],
    },
    {
      id: 'plans',
      label: 'Wersje, eksport i wydajność',
      items: [
        {
          q: 'Czy Shotera jest bezpłatna?',
          a: 'Podstawowe przechwytywanie, adnotacje i przypinanie są bezpłatne. Jeśli wystarczy Ci codzienne przechwytywanie i adnotacje, sięgnij po Shotera Lite — lżejszą wersję bez nagrywania i AI. Nagrywanie, wycinanie AI, wymazywanie AI i tłumaczenie obrazów są dostępne w wersji Standard — szczegóły znajdziesz w porównaniu wersji.',
        },
        {
          q: 'Jakie rozdzielczości i liczbę klatek obsługuje nagrywanie?',
          a: 'Jakość nagrania sięga od 720p przez 1080p i 2K aż do 4K, przy 30 fps lub 60 fps — bez limitu czasu. Eksport do MP4 albo do GIF-a, którego liczbę klatek możesz obniżyć, aby plik był mniejszy.',
        },
        {
          q: 'Czy nagranie można wyeksportować jako GIF?',
          a: 'Tak. Każde nagranie wyeksportujesz do MP4 — od 720p do 4K, przy 30 lub 60 fps — albo do kompaktowego GIF-a na potrzeby dokumentacji, czatu i zgłoszeń błędów. Żadna z tych opcji nie ogranicza czasu nagrywania.',
        },
        {
          q: 'Czy Shotera spowolni mój komputer?',
          a: 'Nie. Shotera powstała z myślą o lekkości — minimalne zużycie pamięci i natychmiastowy start, niezauważalna nawet działając w tle.',
        },
      ],
    },
    {
      id: 'details',
      label: 'Szczegóły i personalizacja',
      items: [
        {
          q: 'Czy Shotera ma tryb ciemny?',
          a: 'Tak. Ustawienia → Ogólne → Motyw interfejsu przełącza między opcjami Zgodnie z systemem, Jasny i Ciemny; opcja Zgodnie z systemem automatycznie podąża za jasnym/ciemnym ustawieniem Windows.',
        },
        {
          q: 'Czy Shotera działa z wieloma monitorami i ekranami o wysokiej rozdzielczości?',
          a: 'Tak. Wiele monitorów jest traktowanych jako jeden ciągły pulpit, więc dodatkowy ekran ustawiony po lewej stronie głównego nadal zaznacza się poprawnie — a interfejs i zrzuty pozostają ostre na ekranach HiDPI.',
        },
        {
          q: 'Czy mogę zmienić skróty klawiszowe?',
          a: 'Tak. Przechwytywanie, niestandardowy zrzut ekranu, przypinanie do pulpitu i tryb prezentacji możesz przypisać do innych klawiszy w Ustawienia → Skróty klawiszowe; jeśli dany klawisz należy już do innej aplikacji, Shotera Cię o tym poinformuje, a wszystkie domyślne skróty przywrócisz jednym kliknięciem.',
        },
        {
          q: 'Jak zaktualizować Shotera do nowej wersji?',
          a: 'Shotera aktualizuje się sama: domyślnie sprawdza dostępność nowej wersji przy starcie, potrafi pobrać i zainstalować ją w tle, a ręcznie sprawdzisz ją w Ustawienia → Aktualizacja. Wersja z Microsoft Store aktualizuje się przez Store.',
        },
      ],
    },
  ],
  footnoteBefore: 'Masz jeszcze pytanie?',
  footnoteLink: 'Napisz do nas',
  footnoteAfter: '— zwykle odpowiadamy w ciągu 24 godzin roboczych.',
};
