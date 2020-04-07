function getMin(arr) {

    if (arr.filter( i => typeof +i !== 'number' || isNaN(+i)).length) return 'Invalid input'
    
    return Math.min(...arr)
}


function getEven(arr) {

    if (arr.filter( i => typeof +i !== 'number' || isNaN(+i)).length) return 'Invalid input'

    return arr.filter( i => i % 2 === 0).map(i => +i)
}


let people = [
    {name: 'Andrew', birthDate: '1995-12-17'},
    {name: 'Johny Walker', birthDate: '2001-12-11'},
    {name: 'Johny Dilinger', birthDate: '1920-01-17'},
    {name: 'Andrew', birthDate: '1998-10-10'},
]

function searchByName(str) {

    const matchedArray = []
    
    
    for (let person of people) {
        if (person.name.toLowerCase()
            .search(str.toLowerCase()) === -1) continue
        matchedArray.push(person);
    }
    return matchedArray
}

function searchByName1(str) {
    
    return people.filter( person => person.name.toLowerCase().includes(str.toLowerCase()) )

}

console.log(getMin(['1', 3, 6, 2]));
console.log(getMin([1, 3, 6, 2, 'lol']));
console.log(getEven([1, 3, 6, 2, 'lol']));
console.log(getEven([1, 3, '6', 2, 4, 12]));
console.log(searchByName('And'));
console.log(searchByName1('And'));
console.log(searchByName('a'));
console.log(searchByName1('a'));
console.log(searchByName('A'));
console.log(searchByName1('A'));

 
