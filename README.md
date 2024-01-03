Pálinkafőzde weboldal.

A weboldal közös együttműködéssel készült el egy Backend fejlesztővel.

A projekt két részből áll: felhasználói (publikus), és admin oldal.
Admin oldalról az adminisztrátor joggal rendelkező felhasználók tudnak híreket közölni, a cég tagjait hozzáadni, illetve képeket feltölteni.
Az adatok a publikus, valamint az admin felületen is megjelennek. Ezeket az adatokat az adminisztrációs felületen lehet törölni.
A backend úgy lett megírva, hogy az teljesen biztonságos legyen, az előre elkészített felhasználóval belépést követően lehet csak új adatokat hozzáadni az oldalhoz, illetve törölni ezeket.

A backend Spring, a frontend React keretrendszerben kódolt, CSS nyelvvel formázott, és framer-motion csomaggal animált.
A galériát firebase-ben kezeljük, képfeltöltés esetén ott kerül tárolásra, és onnan kerül lekérésre oldal újratöltés nélkül. Ezeket a képeket admin oldalról lehet törölni, mely a firebase-ban is törlése kerül.
