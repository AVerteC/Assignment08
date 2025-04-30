export async function getJSON() {
    const response = await fetch('../data/employees.json')
    // Wait for promise
    const data = await response.json()
    // Return object
    return data
}

export default getJSON()