To jest aplikacja wyświetlająca bazę danych zawierającą studentów, grupy, prowadzących i projekty

## Jak uruchomić

Aby połączyć się z bazą danych na początku należy skonfigurować plik [`.env`] i połączyć się z bazą postgreSQL

Następnie w konsoli wykonać zestaw poleceń instalujących potrzebne moduły i seedujący bazę danych

```bash
npm install
npm start
npx prisma db seed
npm run dev
```

Teraz możemy wejść na [http://localhost:3000](http://localhost:3000) w dowolnej przeglądarce
