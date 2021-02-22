function calculate() {
    let education = document.getElementById("education");
    let networth = document.getElementById("networth");
    let skills = document.getElementsByClassName('skills');
    let result = document.getElementById('result');
    let btnShow = document.querySelector("button");
    let sum;
    sum = 500;
for (i = 0; i < 4; i++) {
    if (skills[i].checked === true) {
     sum += parseInt(skills[i].value);
}
}
for (i = 0; i < 3; i++) {
let reputation = 'rep' + i;
let age = 'age' + i;
let reputations = document.getElementById(rep);
let ages = document.getElementById(age);

if (reputations.checked === true) {
    if (reputations.value !== "200") {
    sum *= Number(reputations.value);
} else {
    sum -= Number(reputations.value); 
}
}
if (ages.checked === true) {
    sum *= Number(ages.value);
}
}
sum *= education.value;
sum *= networth.value;
result.innerText = "Total: " + sum + "$";
};
