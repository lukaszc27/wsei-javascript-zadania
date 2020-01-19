
foo();  // wywołanie przed definicją, funkcja działa

// utworzenie funkcji
function foo() {
    console.log('Cześć');
}

foo();  // wywołanie po definicji, funkcja działą

bar();  // wywolanie funkcji przed definicją, funkcja nie działa (konsola zgłasza błąd że nie rozpoznano nazwy bar

// utworzenie funkcji poprzez przypisanie funkcji do zmiennej
var bar = function() {
    console.log('Witaj');
}

bar();  // wywołanie funkcji po definicji, funkcja działa


/**
 * WNIOSKI:
 * funkcja utworzona standardowo ma zasięg globalny (w danym pliku)
 * i nie ma znaczenia gdzie jest jej deklaracja a w którym miejscu ja wywołujemy
 * 
 * Funkcja która została stwożona poprzez przypisane do zmiennej nie może być wywoływana
 * przed jej definicją ponieważ jest jeszcze nie znana.
 */