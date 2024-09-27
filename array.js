//passing student
let scr= [45, 67, 89, 23, 76, 50, 90]; 
let passingScore = 50;                   
let passCount = 0;                       

for (let i = 0; i < scr.length; i++) {
    if (scr[i] >= passingScore) {    
        passCount++;                   
    }
}

console.log("Number of students passed: " + passCount); // Print the count of passing students

//Topper score
// let scores = [45, 67, 89, 23, 76, 500, 90]; // example scores array
// console.log("Topper's score: " + Math.max(...scores));//method 1
// console.log(Math.max(45,67,89,23,76,500,90));//method 2
let scores = [45, 67, 89, 23, 76, 50, 90]; 
let highestScore = scores[0];
for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highestScore) {
        highestScore = scores[i]; 
    }
}

console.log("Topper's score: " + highestScore);



//Grand total of all employee
let salaries = [50000, 60000, 55000, 75000, 62000]; 
let grandTotal = 0; 

for (let i = 0; i < salaries.length; i++) {
    grandTotal += salaries[i]; 
}

console.log("Grand total of all employee salaries: " + grandTotal);

//purchase and sale
let transactions = [
    {purchase: 100, sale: 150},  
    {purchase: 200, sale: 180},
    {purchase: 120, sale: 130},
    {purchase: 50, sale: 70}
];

for (let i = 0; i < transactions.length; i++) {
    let purchase = transactions[i].purchase;
    let sale = transactions[i].sale;
    
    if (sale > purchase) {
        console.log(`Transaction ${i + 1}: Profit of ${sale - purchase}`);
    } else if (sale < purchase) {
        console.log(`Transaction ${i + 1}: Loss of ${purchase - sale}`);
    } else {
        console.log(`Transaction ${i + 1}: No profit, no loss`);
    }
}



//odd location element only
let elements = [10, 20, 30, 40, 50, 60, 70]; // Example array

// Loop through the array and print elements at odd positions
for (let i = 1; i < elements.length; i += 2) {
    console.log("Element at odd index " + i + ": " + elements[i]);
}

//cross product
var a=[10,20,30,40,50];
var b=[2,3,1,4,5];
var y=4;
for(x=0;x<5;x++){
    console.log(a[x]*b[y--])
}

//sum of both array
let array1 = [1, 2, 3, 4]; 
let array2 = [5, 6, 7, 8]; 
let sumArray = [];         


for (let i = 0; i < array1.length; i++) {
    sumArray[i] = array1[i] + array2[i]; 
}

console.log("Sum of the two arrays: ", sumArray); 

//common elements
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
let commonElements = [];       

for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
        commonElements.push(array1[i]);
    }
}

console.log("Common elements: ", commonElements); 

//merged array
let c= [1, 2, 3, 4, 5]; 
let d= [6, 7, 8, 9, 10]; 

let merged = [];

for (let i = 0; i < c.length; i++) {
    merged.push(c[i]);
}

for (let i = 0; i < d.length; i++) {
    merged.push(d[i]); 
}

console.log("Merged array: ", merged);