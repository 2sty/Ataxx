# Ataxx
My own board game 
---
################################################# AtaXX #############################################################################


## O grze

Gra przeznaczona dla 2 osób. Celem gry jest zdobycie jak największej liczby pionków.
Każdy z graczy na przemian wykonuje ruch pionkiem. 
Pionek można przenieść o 1 pole (wtedy na planszy dodawany jest nowy pionek). 
Po zakończeniu ruchu, wszystkie pionki przeciwnika stykające się u góry lub na dole z poruszanym ostatnio pionkiem przechodzą na naszą stronę.




## Jak grać

Wybieramy, który pionek chcemy poruszyć klikając na niego i klikamy na wybrane sąsiadujące z nim pole, aby zatwierdzić pozycję.
Grę wygrywa gracz, który zapełni więcej pól pionkami swojego koloru. Dodatkowo każdy z graczy ma ustalony czas na swój ruch w wysokości 30s.
Przegrywa gracz, który jako pierwszy przekroczy czas przeznaczony na ruch.



## Wymagane oprogramowanie i instalacja

Ten projekt używa node.js oraz bazy NeDB

1)Instalacja node

1.1)Jeśli jest zainstalowane, można sprawdzić aktualną wersję w cmd poleceniem: node --version (zalecana wersja nie starsza od 6.9.4)
1.2)Jeśli nie jest zainstalowane, strona do pobrania --> https://nodejs.org/en/download/

Dokumentacja node.js --> https://nodejs.org/en/

2)Instalacja NeDB

2.1)Shift + PPM na folderze, w którym chcemy zainstalować (w tym przypadku w folderze z grą)
2.2)Wybrać opcję: "Otwórz okno polecenia tutaj"
2.3)Wpisać polecenie: "npm install nedb" i poczekać na zakończenie instalacji

Dokumentacja NeDB --> https://www.npmjs.com/package/nedb



## Uruchamianie gry

1)Gra na jednym komputerze

1.1)Odpalamy server.js poprzez node:
a)Shift+PPM na folderze z grą
b)Wybieramy z menu kontekstowego opcję: "Otwórz okno polecenia tutaj"
c)Wpisujemy w konsolę komendę: "node server.js"
1.2)Otwieramy dwa okna przeglądarki (zalecane zmniejszenie szerokości do połowy ekranu)
1.3)Wpisujemy w pasku adresu w obu oknach przeglądarki: "localhost:3000"
1.4)Wpisujemy nazwy użytkowników i startujemy grę (po zakończeniu gry należy zresetować uzytkowników,a by móc zagrać ponownie)


2)Gra na dwóch komputerach w jednej sieci

2.1)Powtarzamy kroki z punktu 1.1 na jednym, wybranym komputerze
2.2)Owieramy przeglądarki na obydwóch kmputerach
2.3)Wpisujemy w pasku adresu przeglądarki na obydwóch komputerach numer IP komputera serwera (ten, na którym wykonaliśmy punkt 1.1) wraz z portem 3000 (np. 192.168.1.1:3000)
2.4)Wpisujemy nazwy użytkowników i startujemy grę (po zakończeniu gry należy zresetować uzytkowników,a by móc zagrać ponownie)



## Licencja

Open Source --> https://pl.wikipedia.org/wiki/Licencja_wolnego_oprogramowania



## Autorzy

Arkadiusz Tłustowski
