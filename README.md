A feladat megoldásának határideje egy hét, kérlek az andras.vancsa@erpool.ai elérhetőségen jelezd amikor elkészültél vele és feltöltötted.

# Általános webalkalmazás megvalósítása.

A feladat egy általános webalkalmazás létrehozása, ahol a felhasználó be tud jelentkezni, majd termékeket tud rögzíteni.
Továbbá  a bejelentkezett felhasználó tud vásárlásokat rögzíteni, a vásárlásba termékeket beválogatni.
A vásárlás véglegesítésekor az alkalmazás kiszámolja a vásárlás értékét, figyelembe véve a mennyiségi kedvezményeket.

## Alap funkcionalitás

- Regisztráció
- Bejelentkezés
- Elfelejtett jelszó
- 2FA
- Profiloldal
- Jelszóváltoztatás

## Alap követelmények

- Frontend Validáció
- Kötelezőség megjelenítése

## Bővített funkcionalitás

- Egyedi dashboard

## Üzleti funkcionalitás

:: Menü

: Termékek

- Új termék
	Név
	Egységár
	3 darabos ár
	5 darabos ár
- Termék módosítása
- Termék törlése - amennyiben a termékből még nincs vásárolva -

: Vásárlások

- Új vásárlás
	Termékek hozzáadása, vásárolt mennyiség megadása
- Vásárlás módosítása
- Vásárlás törlése - amennyiben még nincs a vásárlás véglegesítve -
- Vásárlás véglegesítése

## Egységtesztek

: Egységteszt készítése a vásárlások érték számításának tesztelésére.
	
## Elvárt  módszertanok

- MVC
- OOP
- SFC
- Újrahasználható komponens alapú tervezés

## Elvárt technológiák

- Laravel keretrendszer
- Jetstream
- Inertia
- Vue.js
- PostgreSQL
- Quasar komponensek