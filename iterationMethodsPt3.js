// You are given an array representing a series of transactions in a small business. 
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/

// Task 1
let incomeResult = [];

transactions.forEach( (num)=>{
    if (num[0] == "income") {
        incomeResult.push(num);
    }
});

console.log(incomeResult);

// Task 2
let expenseResult = [];

transactions.forEach( (num)=>{
    if (num[0] == "expense") {
        expenseResult.push(num);
    }
});

console.log(expenseResult);


/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses (expense) and return it.
       Output 4) 800

******************************************************************/

// Task 3
let sum = 0;

transactions.forEach( (num)=>{
    if (num[0] == "income") {
       sum = sum + num[1];
    }
});

console.log(sum);

// Task 4
let summ = 0;

transactions.forEach( (num)=>{
    if (num[0] == "expense") {
        summ = summ + num[1];
    }
});

console.log(summ);


/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500]]

******************************************************************/

// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.

// Task 5
let sumnn = 0;
let summm = 0;
let total = 0;

transactions.forEach( (num)=>{
    if (num[0] == "income") {
       sumnn = sumnn + num[1];
    }

    if (num[0] == "expense") {
        summm = summm + num[1];
    }
    total = sumnn - summm;
});

console.log(total);


// Task 6

const result = transactions.filter( (transaction)=>{
    return transaction[1] > 500
});

console.log(result);
