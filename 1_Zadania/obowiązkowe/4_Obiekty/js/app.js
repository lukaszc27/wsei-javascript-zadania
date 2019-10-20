// zadanie 0a
const City = {
    capital : 'Krakow',
    population : 8,
    president : 'Ja',
    primeMinisters : ['jeden', 'Dwa']
};

const keys = Object.keys(City);
for (const key of keys) {
    console.log(City[key]);
}

// zadanie 0b
const TimeMachine = {
    shape : 'kolo',
    model : 'xyz-200M',
    
    run : function(date, place) {
        console.log('Podrużujemy w czasie! Przenosimy się do ' + place + ' czas: ' + date);
    }
};

const TimeMachineKeys = Object.keys(TimeMachine);
for (const key of TimeMachineKeys) {
    console.log(TimeMachine[key]);
}

TimeMachine.run('2035/12/24', 'Kraków');

// zadanie 1
const Book = {
    title : 'Kije samobije',
    author : 'Ja',
    numberOfPages : 45
}

const bookKeys = Object.keys(Book);
for (const key of bookKeys) {
    console.log(Book[key]);
}

const Person = {

}