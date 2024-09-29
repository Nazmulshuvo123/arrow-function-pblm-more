//task -1: console log the secondary school location of sophia
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary: [
                    { school_name: 'Abc primary school'},
                    { location: 'Peters burg'}
                ]
            },
            {
                secondary: [
                    {school_name: 'Abc secondary school'},
                    { location: 'St Lorence'}
                ]
            },
        ]
    }
}
console.log(data.Sophia['study'][1].secondary[1])