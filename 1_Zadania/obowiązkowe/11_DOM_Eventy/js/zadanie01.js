window.addEventListener('DOMContentLoaded', () => {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

});

/**
 * po otworzeniu strony po raz pierwszy nie było błędów,
 * kiedy przeniosłem <Script> do sekcji <head> pojawiły się błędy o nie znaleznieniu
 * obiektów do któych odwoływaliśmy się w js, gdy dodałem obsługę zdarzenia 'DOMContentLoaded'
 * problem ze znalezieniem obiektów znikł, i gdy sekcję <script> znów przeniosłem
 * na koniec pliku błędów w konsoli również nie były
 */