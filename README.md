To jest aplikacja wyświetlająca bazę danych zawierającą studentów, grupy, prowadzących i projekty

## Jak uruchomić

Należy uruchomić nową bazę danych postgreSQL np. lokalnie

Aby połączyć się z działającą bazą danych na początku należy skonfigurować plik `.env` w katalogu głównym aplikacji - podmienić link służący do podłączenia do bazy danych jako DATABASE_URL

Następnie przy działającej bazie danych w konsoli wykonać zestaw poleceń instalujący potrzebne moduły i seedujący bazę danych

```bash
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev
```

Teraz możemy wejść na [http://localhost:3000](http://localhost:3000) w dowolnej przeglądarce

## Jak obsługiwać

Aplikacja zawiera 5 różnych widoków realizujących zadania przedstawione w specyfikacji zadania. Zmienić widok możemy w prawym górnym rogu aplikacji.

Dodatkowo każda strona zawiera możliwośc posortowania po wybranej kolumnie co możemy zrobić klikając na wybrany nagłówek.
