const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// Using the join() method, create a string that joins all elements of the colors array into a single string separated by commas.
const _joins = colors.join(" , ")
console.log(_joins)

// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'.
const _splice = colors.splice(2, 2,"purple","pink")
console.log(_splice)

// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.
const _copyWithin = colors.copyWithin(0,1,3)
console.log(_copyWithin)

// Finally, transform all elements of the colors array to uppercase using the toUpperCase() method.
const _uppercase = colors.map(Element => {return Element.toUpperCase()});
console.log(_uppercase)

// Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
const _find = colors.find((Element) => Element.startsWith("b"))
console.log(_find)

// Apply the slice() method to create a new array selectedColors containing the elements from index 1 to index 3 (inclusive) from the colors array.
const new_color = colors.slice(1,4)
const new_array = []
const _push = new_array.push(_string)
console.log(_push)
console.log(new_array)

// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
// 2. Filter and show the product that will be expensive in the array
// 3. Calculate the full price of all products combined
// 4. Calculate the full price of all products combined and remove products that are under $10
// 5. Filter and show the product that will be start with letter b at first postion

const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];

// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
const minPrice = items[2].price;
const result1 = items.filter((element) => element.price <= minPrice)
console.log(result1)

// 2. Filter and show the product that will be expensive in the array
const maxPrice = items[4].price
const result2 = items.filter((element) => element.price > maxPrice)
console.log(result2)

// 3. Calculate the full price of all products combined
const result3 = items.reduce((a,b) => { return a + b.price}, 0)
console.log(result3)

// 4. Calculate the full price of all products combined and remove products that are under $10
const result4 = items.filter((element) => element.price >=10).reduce((a,b) => a + b.price, 0)
console.log(result4)

// 5. Filter and show the product that will be start with letter b at first postion
const result5 = items.filter((element) => element.name.charAt(0) === 'B')
console.log(result5)
