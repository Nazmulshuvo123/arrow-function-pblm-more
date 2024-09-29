//task  -3: Access and show habluder adda
// show output Beginner

let data2 = {
    data: 
        [
            {
                bookId: 1,
                bookDetails: {
                    name: 'Habluder adda',
                    category: 'XYZ',
                    price: "20$",
                },
                bookCategory: 'Basic',
            },
            
            {
                bookId: 2,
                bookDetails: {
                    name: 'Gobluder adda',
                    category: 'ABC',
                    price: "30$",
                },
                bookCategory: 'Beginner',
            },

        ]
} 
console.log(data2['data'][0]['bookDetails']['name'], data2['data'][1]['bookCategory'])