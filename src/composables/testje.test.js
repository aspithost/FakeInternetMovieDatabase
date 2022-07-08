import useFilterShows from './filterShows.js'

test('should return', () => {
    expect(useFilterShows([], 'horror')).toBeFalsy()
    expect(useFilterShows([], 'horror')).toBe(undefined)
})


// test('filter shows', () => {
//     expect(useFilterShows(dummyArray, 'Sports')).toEqual([])
//     expect(useFilterShows(dummyArray, 'Drama')).toHaveLength(4)
    // expect(useFilterShows(dummyArray, 'Drama')).toStrictEqual([
    //     { 
    //         rating: {
    //             average: 8
    //         },
    //         genres: ['Drama']
    //     },
    //     { 
    //         rating: {
    //             average: 7
    //         },
    //         genres: ['Drama', 'Comedy']
    //     },
    //     { 
    //         rating: {
    //             average: 6
    //         },
    //         genres: ['Drama', 'Horror']
    //     },
    //     { 
    //         rating: {
    //             average: 5.4
    //         },
    //         genres: ['Drama', 'Horror', 'Comedy']
    //     }
    // ])
// })



// const add = (a, b) => {
//     return a + b
// }

// test('add values', () => {
//     const a = 3;
//     const b = 5;
//     expect(a + b).toBe(8)
// })

// test('test add function', () => {
//     const a = 3;
//     const b = 7;
//     expect(add(a,   b))
//         .toEqual(a + b)
// })

// test('should be falsy', () => {
//     expect(add(undefined, undefined)).toBeFalsy()
// })


const dummyArray = [
    { 
        rating: {
            average: 6
        },
        genres: ['Drama', 'Horror']
    },
    { 
        rating: {
            average: 5.4
        },
        genres: ['Drama', 'Horror', 'Comedy']
    },
    { 
        rating: {
            average: 8.2
        },
        genres: ['Comedy', 'Horror', 'Thriller']
    },
    { 
        rating: {
            average: 8
        },
        genres: ['Drama']
    },
    { 
        rating: {
            average: 7
        },
        genres: ['Drama', 'Comedy']
    },
]