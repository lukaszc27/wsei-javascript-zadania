
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// utorzenie funckji o nazwie sortArray która nie przyjmuje agrumentów
function sortArray() {

    // utorzenie tablicy oraz przypisanie jej początkowych wartości
    var points = [41, 3, 6, 1, 114, 54, 64];

    // sortowanie tablicy przy użyciu funkcji poruwnującej
    points.sort(function (a, b) {
        // poruwnywamie dwóch liczb poprzez odejmowanie
        // oraz zwrucenie wyniku
        // Zwratace wartości
        // -1: Gdy a < b
        //  1: Gdy a > b
        //  0: Gdy a==b
        return a - b;
    });

    // zwraca posortowana tablicę
    return points;
}

// wywołanie funkcji "sortArray"
sortArray();
