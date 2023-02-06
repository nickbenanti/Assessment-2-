///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE


sumOfFood = cart.reduce((acc,element)=> {
    return acc + element.price
},0)


console.log(sumOfFood)



// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = ((element) =>{
        let cartTotal = 0
        let tax = 0
        let couponValue = 0
    return ((element.cartTotal * element.tax) + cartTotal - element.couponValue) 

    
})

console.log(calcFinalPrice(10,3,3))
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
// This customer object will contain customer id number , name, email, address, and birthdays, and ammount of times the customer has dined. Name will be a string, 
    email will be a string aswell, adress will be a string, brirthdays will be a date, and ammoutn of times dined will be a integer.I choose 
    these data types so we will be able to track how often the custome comes to the resturant. Birthdays will allow us to send advertisements
    to email for cupons and other offers. Customer id will be to organize all customer information and will allow easy finding of information.


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE


const customers = [
    {id : 1, name : "Nick Benanti", address : "123 Road Dr., Dallas, Tx, 75001", birthday : 01/02/1998, visits : 24},
    {id : 2, name : "Kathy Benanti", address : "321 Road Dr., Dallas, Tx, 75001", birthday : 12/02/1963, visits : 14},
    {id : 3, name : "John Doe", address : "111 Road Dr., Dallas, Tx, 75001", birthday : 01/01/1977, visits : 44},
    {id : 4, name : "Jesse Max", address : "1453 Road Dr., Dallas, Tx, 75001", birthday : 04/12/2001, visits : 4},
    {id : 5, name : "Laura Shea", address : "222 Road Dr., Dallas, Tx, 75001", birthday : 12/02/1985, visits : 27}
]







