/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// utwożenie funkcji o nazwie jeden bez żadnych parametrów
function jeden() {

    // utworzenie zmiennej lokalnej (o zasięgu od momętu deklaracji do końca funkcji)
    // oraz przypisanie jej wartości początkowej 1
    var zmienna1 = 1;

    // stworzenie funkcji zagnieżdżonej o nazwie "dwa" również nie przyjmującej
    // zadnych argumentów
    function dwa() {

        // wypisanie w konsoli przeglądarki wartości zmiennej zmienna1
        console.log(zmienna1);

        // utworznie zmiennej lokalnej oraz przypisanie wartości początkowej 3
        var zmienna2 = 3;
    }

    // wywołanie fukcji dwa
    dwa();

    // tutaj powinien pokazać się błąd, ponieważ zmienna2 już nie jest widoczna
    // w tym miejscu (zmienna2 możęmy użyć tylko w funkcji zagnieżdrzonej "dwa()")
    console.log(zmienna2)
}

// wywołanie funkcji "jeden"
jeden()