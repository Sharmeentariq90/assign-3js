// Q no:1
// let firstName = prompt("Plz enter ur first Name");
// let lastName =prompt ("Plz enter ur Last name");
// let fullName= firstName + " "+ lastName;
// alert("Good morning " + fullName);
// Q no2:
// let mobile =prompt("enter ur favourite mobile model");
// let lenght = mobile.length;
// document.write("My favourite Mobile phone is :" + mobile);
// document.write("<br>Length of string is:" + lenght);
// Q no3:
// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("string:"+" "+word+"<br>");
// document.write("the index of n in pasitani is:"+ index);
// Q no 4:
// let word=("hello world");
// let lastindex=word.lastIndexOf("l");
// document.write("string:"+" "+word+"<br>");
// document.write("the index of last l is :"+" "+lastindex);
// Q no 5:
// var word = "Pakistani";
// var char = word.charAt(3);
// document.write("The character at index 3 in the word '" + word + "' is: " + char);
// Q no 6:
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(" ", lastName);
// document.write("Hello " + fullName + "!");
// Q no 7:
// var word = "Hyderabad";
// var newWord = word.replace("Hyder", "Islam");
// document.write("Original word: " + word + "<br>");
// document.write("New word: " + newWord);
// Q no 8:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write("Original message: " + message + "<br>");
// document.write("New message: " + newMessage);
// Q no 9:
// var str = "472";
// var num = parseInt(str);

// document.write("String value: " + str + "<br>");
// document.write("Type of string value: " + typeof str + "<br>");
// document.write("Number value: " + num + "<br>");
// document.write("Type of number value: " + typeof num);
// Q no 10:
// var userInput = prompt("Enter your input:");
// var upperCaseInput = userInput.toUpperCase();
// document.write("Original input: " + userInput + "<br>");
// document.write("Uppercase input: " + upperCaseInput);
// Q no 11:
//********//************* */
// Q no 12 :
// var num = 35.36;
// var str = num.toString().replace(".", "");
// document.write("Original number: " + num + "<br>");
// document.write("Converted string: " + str);
// Q no 13 :
// var username = prompt("Enter your username: ");
// var specialChars = /[!@.,]/;
// if (specialChars.test(username)) {
//     alert("Invalid username! Username cannot contain special characters [@ . , !]");
//     username = prompt("Please enter a valid username: ");
// }
// alert("Welcome, " + username + "!");
// Q no 14:
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let item = prompt("Enter item to search: ").toLowerCase();
// let found = false;
// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === item) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert("Item found in the list.");
// } else {
//     alert("Item not found in the list.");
// }
// Qno 15:
///////////xxxxxx////////////
// Q no 16:
var university = "University of Karachi";
var arr = university.split(" ");

for (var i = 0; i < arr.length; i++) {
  document.write(arr[i] + "<br>");
}
// Q no 17:
// let userInput = prompt("Enter a string:");
// let lastChar = userInput.charAt(userInput.length-1);
// alert("The last character is: " + lastChar);
// Q no 18:
let str = "The quick brown fox jumps over the lazy dog";
let count = 0;
let words = str.split(" ");

for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === "the") {
    count++;
  }
}
console.log('The quick brown fox jumps over the lazy dog');
console.log(`The word "the" occurs ${count} times in the string.`);






