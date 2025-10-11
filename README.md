# Gra - „Dzień Krajów”

Interaktywna gra internetowa stworzona na szkolne wydarzenie z okazji Dnia Krajów.  
Uczestnicy przemieszczali się po szkole, odnajdując **stacje oznaczone kodami QR**, które prowadziły do odpowiednich podstron gry (`/nrStacji`).  
Na każdej stronie znajdowało się zadanie do wykonania – poprawna odpowiedź przyznawała punkt.  
Po ukończeniu wszystkich zadań należało wrócić do punktu startowego, aby sprawdzić wynik i odebrać nagrodę.

🔗 **Strona projektu:** [dustmedia.pl/ang/](https://dustmedia.pl/ang/)

---

## Jak to działa

1. Po całej szkole rozmieszczono **kody QR** prowadzące do kolejnych stacji (np. `/1`, `/2`, `/3` itd.).  
2. Każda stacja zawierała **zadanie lub pytanie**.  
3. Poprawna odpowiedź dodawała punkt do wyniku gracza.  
4. Postęp był zapisywany w **localStorage**, więc nie ginął między stronami.  
5. Po odwiedzeniu wszystkich stacji uczestnik wracał do punktu startowego, gdzie mógł zweryfikować wynik i otrzymać nagrodę. 

---

## Użyłem:

- **React** 
- **Tailwind CSS**
- **GSAP**
- **[React Bits (CountUp)](https://www.reactbits.dev/text-animations/count-up)**  

---

## Rzeczy do poprawy

- Jeżeli wpisze się w inputach słowo + " " to nie zalicza punktu nawet jeżeli odpowiedź była prawidłowa, brak ignorowania spacji na końcu i początku (przez to musiałem doliczać zawodnikom punkty rekompensaty). 
- Można ukończyć grę z jednego miejsca – przyciski pozwalają przechodzić dalej bez skanowania kodów. 

Jeżeli będzie to organizowane za rok:  
- dodanie systemu logowania aby był admin gry który na bieżąco widzi postęp użytkowników, odpowiedzi (w razie błędu takiego jak ten ze spacjami, może zweryfikować na mecie wyniki )
- ( opcjonalne ) drużyny, w drużynie jest 2 graczy więc zamiast tak jak w tegorocznym (tylko jedna osoba używa strony w parze ) można używać 2 ( jedna osoba robi 1 zadanie druga, drugie zadanie ).   

---

## Czego się nauczyłem

- Pierwszy raz użyłem React Router
- Pierwszy raz używałem tylu hooków, i się nie pogubiłem.
- Animacji GSAP w React
  
---
### sukcesy:
- Rozumiem kod który napisałem.
---
