// function pow(x,n) // no space between arguments and curly braces are below the function
// {
//     let result=1; // no spaces
//     for(let i=0;i<n;i++) {result*=x;} // it should be separated by new line // no spaces
//     return result;
// }
//
// let x=prompt("x?",''), n=prompt("n?",'') // too long and hard to read, better to write separately, // no spaces
// if (n<=0) //curly braces are below the function
// {
//     alert(`Power ${n} is not supported, please enter an integer number greater than zero`); // difficult to read
// }
// else
// {
//     alert(pow(x,n)) // no spaces and ;
// }

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
    alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
    alert( pow(x, n) );
}