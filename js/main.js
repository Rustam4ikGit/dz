// let students = [
//     {
//         name: "Rustam",
//         age: 15,
//         gender: 'man' 
//     },
//     {
//         name: "Sunnat",
//         age: 21,
//         gender: 'man' 
//     },
//     {
//         name: "Amir",
//         age: 20,
//         gender: 'man' 
//     },
//     {
//         name: "Doniyor",
//         age: 13,
//         gender: 'man' 
//     },
//     {
//         name: "Farrux",
//         age: 11,
//         gender: 'man' 
//     },
//     {
//         name: "Timur",
//         age: 18,
//         gender: 'man' 
//     },
//     {
//         name: "Sokhib",
//         age: 18,
//         gender: 'man' 
//     },
//     {
//         name: "Ibragim",
//         age: 15,
//         gender: 'woman' 
//     },
//     {
//         name: "Ibragim",
//         age: 15,
//         gender: 'woman' 
//     },
//     {
//         name: "Raximjon",
//         age: 18,
//         gender: 'man' 
//     }
// ]

// let man = 0
// let woman = 0

// let a = students.forEach(item => {
//     if(item.gender === 'man'){
//         man++
//     } else {
//         woman++
//     }
// })

// let man = []
// let woman = []

// let a = students.forEach(item => {
//     if(item.gender === 'man'){
//         man.push(item)
//     } else {
//         woman.push(item)
//     }
// })

// console.log(man);
// console.log(woman);






//                          дз
let arr = [ 
    {
      userId: 1,
      id: 1, 
      title: "delectus aut au`tem", 
      completed: false 
    }, 
    { 
     userId: 1,
     id: 2, 
     "title": "quis ut nam facilis et officia qui", 
     completed: false 
    }, 
    { 
        userId: 1, 
        id: 3, 
        title: "fugiat veniam minus", 
        completed: false 
    }, 
    { 
        userId: 1,
        id: 4, 
        title: "et porro tempora",
        completed: true
    }, 
    { 
        userId: 1, 
        id: 5, "title": "laboriosam mollitia et enim quasi adipisci quia provident illum", 
        completed: false 
    }, 
    { 
        userId: 1, 
        id: 6, 
        title: "qui ullam ratione quibusdam voluptatem quia omnis", 
        completed: false 
    }, 
    { 
        userId: 1, 
        id: 7, 
        title: "illo expedita consequatur quia in", 
        completed: false 
    }, 
    { 
        userId: 1, 
        id: 8, 
        title: "quo adipisci enim quam ut ab",
        completed: true 
    }, 
    { 
        userId: 1, 
        id: 9, 
        title: "molestiae perspiciatis ipsa", 
        completed: false 
    }, 
    { 
        userId: 1, 
        id: 10, 
        title: "illo est ratione doloremque quia maiores aut", 
        completed: true 
    }, ] 

    let b = { count: 0, arr: [] } 
    
    let c = { count: 0, arr: [] } 

let a = arr.forEach(item => {
    if(item.completed === true){
        b.count++
    } else {
        c.count++
    }
})

let a1 = arr.forEach(item => {
    if(item.completed === true){
        b.count++
    } else {
        c.count++
    }
})


console.log(a);
console.log(b);
console.log(c);