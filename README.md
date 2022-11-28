Az oldalhoz a kiírásban megadott adatbázist használom, lekérve a következő url-ről: `https://nettuts.hu/jms/berkemoni/cinema`.
Az oldalt az npm start utasítással lehet futtatni a `http://localhost:4200/` oldalon.
1. adatmodell készítése a `https://nettuts.hu/jms/berkemoni/cinema` alapján, az id nem kötelező az újonnan létrehozott elemek miatt
2. cimena.service.ts generálása
3. az adatbázis elérési útjának elhelyezése az environment file-ban
4. a HttpClientModule és FormsModule importálása az app.module.ts-be (a formok létrehozására és kezelésére)
5. az apiUrl importálása a cinema.service.ts-be
6. entitás megadása a cinema.service.ts-ben
7. CRUD készítése az adatok kezeléséhez
8. a főoldal, a listázó oldal és a szerkesztő oldal komponensének generálása
9. navigációs komponens készítése bootstrap segítségével
10. a routing beállítása a nav-komponensben
11. a címek hozzárendelése a komponensekhez az app-routing modulban
12. az app-componentben a router-outlet elhelyezése
13. a filmek tömbjének forrását beállítjuk a cinema.component.ts-ben
14. feliratkozás async pipe-pal a filmek adataira
15. A kártáyk elkészítése

 a főoldalon gomb létrehozása, amelyről a listázó oldalra jutunk




# EgyeniAngularProjectBerkemoni

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
