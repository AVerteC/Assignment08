// import { writeFileSync } from 'fs'

// // CREATE AN ARRAY OF EMPLOYEES
// let arrEmployees = [
//     [34123413, "Zak Ruvalcaba", 3424, "zak@vectacorp.com", "Executive"],
//     [23424665, "Sally Smith", 2344, "sally@vectacorp.com", "Administrative"],
//     [12341244, "Mark Martin", 5352, "mark@vectacorp.com", "Sales"],
//     [14545423, "Robin Banks", 7867, "robin@vectacorp.com", "Marketing"],
//     [13413453, "Sue Wedge", 1235, "sue@vectacorp.com", "QA"]
// ]

// function ArrayToJSON(inputArray) {
//     let data = {}
//     let items = []
//     for (let item of inputArray) {
//         let employee = {}
//         let keys = ['id', 'name', 'extension', 'email', 'title']
//         let keyIndex = 0
//         console.log('item:' + item)
//         for (let detail of item) {
//             console.log(`${keys[keyIndex]}: ${detail}`)
//             employee[keys[keyIndex]] = detail
//             keyIndex += 1
//         }
//         console.log('\n')
//         keyIndex = 0
//         items.push(employee)
//     }
//     data['employees'] = items
//     return data
// }

// function JSONToFile(inputArray, filepath) {
//     let jsonArray = JSON.stringify(inputArray, null, 2)
//     writeFileSync(`${filepath}.json`, jsonArray, 'utf-8')
// }
// JSONToFile(ArrayToJSON(arrEmployees), './data/employees')
