//Task- 2: console log - output : petersburg
let student = {
    2222: {
        name: 'Jack',
        section: 'c',
        class: 'IX',
        address: {
            'building no': 12,
            'street': "St.Jonson",
            'city': "Petersburg",
            'country': "UK"
        }
    },
    3333: {
        name: 'Herry',
        section: 'D',
        class: 'X',
        address: {
            'building no': 85,
            'street': "DC road",
            'city': "Mirpur-2",
            'country': "BD"
        }
    },
}
console.log(student['2222']['address']['city'], student['3333']['name']);