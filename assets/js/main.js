// -----lev1_4-----
const A = 'Susi is going to codingschool';

let B = A.slice(0, 4);
document.write(B + '<br>');

let C = A.slice(4, 7);
document.write(C + '<br>');

let D = A.replace('codingschool', 'school'). slice(4);
document.write(D + '<br>');

let E = A.slice(-6);
document.write(E + '<br>');

let F = A.replace('codingschool', 'school').replace('going to', '', );
document.write(F + '<br>');


// -----lev1_5-----
const text = 'Susi is going to codingschool';

let text2 = text.substring(0, 4);
document.write(text2 + '<br>');

let text3 = text.substring(4, 7);
document.write(text3 + '<br>');

let text4 = text.replace('codingschool', 'school').substring(16);
document.write(text4 + '<br>');

let text5 = text.replace('codingschool', 'school').replace('going to', '');
document.write(text5 + '<br>');


// -----lev1_9-----
const string1 = 'Sam is going to codingschool';
const string2 = 'Susi';
const string3 = 'programming bike';
const string4 = 'and';

let newString1 = string1.replace('codingschool', 'school');
let arr1 = [' ', string4, 'to ', 'the ', 'movie ', 'theater'].join(' ');
document.write(newString1.concat(arr1) + '<br>');

let newString2 = newString1.replace('school', '');
let arr2 = [' ', 'movie ', 'theater'].join(' ');
document.write(newString2.concat(arr2) + '<br>');

let newString3 = string1.replace('is', 'are').replace('codingschool', 'school');
let arr3 = [' ', newString3].join(' ');
document.write(string2 + ' ' + string4.concat(arr3) + '<br>');

let newString4 = string1.replace('codingschool', '');
let arr4 = [' ', 'gym'].join(' ');
document.write(string2 + ' ' + string4 + ' ' + newString4.concat(arr4, arr1) + '<br>');

let newString5 = newString1.replace('Sam', string2);
document.write(newString5.concat(arr1) + '<br>');
