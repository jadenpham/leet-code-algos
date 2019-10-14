// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// var validParen = function(s){
//     let last = s[s.length];
//     //checking for the easy false
//     //empty strings are true
//     if(s.length == 0){
//         return true;
//     }
//     //if s is not even, then its false, since 0%2 is 0, accounts for that
//     if(s.length % 2 != 0){
//         return false;
//     }
//     //if s starts out w a closing parentheses or ending is a starting paren, then false
//     if(s[0] === ")" || s[0] == "}" || s[0] == "]" || s[last] == "(" || s[last] == "{" || s[last] == "["){
//         return false
//     }
//     //setting dict w all paren values and a count
//     var paren = {
//         "{": 0, "(":0, "[":0, "]": 0, ")":0, "}": 0
//     }
//     //loop thru string
//     for(let i = 0; i<s.length; i++){
//         //if it matches, then increase count by 1
//         if(s[i]== "{" || s[i]=="(" || s[i]=="[" || s[i] ==")" || s[i] == "]" || s[i] == "}"){
//             paren[s[i]]++;
//         }
//         else{
//             //if input is none of those, return false
//             return false;
//         }
//     }
//     if(paren["["] != paren["]" || paren["{"] != paren["}"]] || paren["("] != paren[")"]){
//         return false
//     }
//     else{
//         return true;
//     }
// }

// console.log(validParen("()(){}{}[][]P"));

// var isValid = function(s){
//     //setting dict to have the pairs
//     let paren = {
//         ")":"(", "}":"{", "]": "["
//     }
//     //setting up stack to push the left paren inside
//     let stack = []
//     //loop thru s
//     for(let i =0; i<s.length; i++){
//         let char = s[i];
//         if(char =="(" || char=="{" || char == "["){
//             stack.push(char);
//         }
//         else if( char == ")" && stack.length >= 0 && stack[0] == "("){
//             stack.pop();
//         }
//         else if(char =="}" && stack.length > 0 && stack[0] == "{"){
//             stack.pop();
//         }
//         else if(char == "]" && stack.length >0 && stack[0] == "["){
//             stack.pop();
//         }
//     }
//     console.log(stack, "this is final stack");
//     if(stack.length > 0){
//         return false;
//     }
//     else{ return true};
// }

// var isValid = function(s){
//     let stack = [];
//     for(let i =0 ; i<s.length; i++){
//         if(s[i] == "(" || s[i]=="{" || s[i]=="["){
//             console.log("pushed in", s[i]);
//             stack.push(s[i]);
//         }
//         else if(s[i] == ")" && s.length >= 0 && s[i-1] == "("){
//             // console.log("popped", s[s.length-1])
//             // console.log("popped off", s[i-1])
//             stack.pop();
//             console.log(stack, i, stack.length, "this is the leftovers");
//         }
//         else if(s[i] == "}" && s.length >= 0 && s[i-1] == "{"){
//             // console.log("popped", s[i-1])
//             stack.pop()
//             console.log(stack, "this is the leftovers");
//         }
//         else if(s[i] == "]" && s.length >=0 && s[i-1] == "["){
//             // console.log("popped", s[i-1])
//             stack.pop();
//             console.log(stack, "this is the leftovers");
//             }
//     }
//     console.log(stack);
// }

var isValid = function(s){
    //set up a stack to push each char into it
    if(s.length ==0){
        return true;
    }
    if(s.length % 2 != 0){
        return false;
    }
    let stack = [];
    //loop thru and if is an opening paren then push it into stack
    for(let i= 0; i<s.length; i++){
        let char = s[i];
        if(char == "(" || char=="{" || char=="["){
            stack.push(char);
            // console.log(stack);
        }
        //if not an opening paren, check if there's a corresponding opener
        else if(char==")" && stack[stack.length-1] == "("){
            //if there is, pop it from stack
            stack.pop();
        }
        else if(char =="}" && stack[stack.length-1] == "{"){
            stack.pop();
        }
        else if(char =="]" && stack[stack.length-1] == "["){
            stack.pop();
        }
    }
    console.log(stack);
    return (stack.length ===0)
}
console.log(isValid("({[[([])]]}))"));

// let ex = ["(", ")"]
// console.log(ex.pop(), ex.length);