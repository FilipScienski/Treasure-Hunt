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
