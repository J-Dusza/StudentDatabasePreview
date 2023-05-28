# Aplikacja zarządzająca bazą danych studentów, grup, prowadzących i projektów

## Jak uruchomić

Aby uruchomić aplikację, należy najpierw utworzyć nową bazę danych PostgreSQL, na przykład lokalnie.

Aby połączyć się z działającą bazą danych, należy skonfigurować plik `.env` w głównym katalogu aplikacji. W pliku `.env` należy podmienić wartość zmiennej `DATABASE_URL` na link umożliwiający połączenie z bazą danych.

### Jak utworzyć lokalną bazę danych

1. Pobierz i zainstaluj PostgreSQL ze strony [https://www.postgresql.org/download/](https://www.postgresql.org/download/).
2. Uruchom PostgreSQL.
3. Utwórz nową bazę danych.
4. Link który musisz zmodyfikować w pliku `.env` ma następujący schemat
   `"postgresql://[nazwa_użytkownika]:[hasło]@localhost:5432/[nazwa_bazy_danych]?schema=public"`

Po upewnieniu się, że baza danych działa poprawnie, wykonaj następujące polecenia w konsoli, aby zainstalować wymagane moduły, skonfigurować bazę danych i uruchomić aplikację:

```bash
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev
```

Teraz możesz otworzyć przeglądarkę internetową i wejść na stronę [http://localhost:3000](http://localhost:3000).

## Jak korzystać z aplikacji

Aplikacja zawiera 5 różnych widoków, które umożliwiają realizację różnych zadań opisanych w specyfikacji projektu. Możesz przełączać się między widokami, korzystając z przycisku znajdującego się w prawym górnym rogu aplikacji.

Dodatkowo, na każdej stronie istnieje możliwość sortowania danych według wybranej kolumny. Aby posortować dane, wystarczy kliknąć na nagłówek odpowiedniej kolumny.
