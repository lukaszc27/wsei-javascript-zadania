document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    var lis = document.querySelectorAll('.ex5 li');

    for (let i = 0; i < lis.length; i++) {
        if (i % 2) {
            lis[i].style.backgroundColor = 'green';
        }
        if (!(i % 3)) {
            lis[i].style.textDecoration = 'underline';
        }
    }
    lis[4].classList.add('big');
});