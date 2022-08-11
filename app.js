let names=prompt("Enter Your Name :");

while (names == null || names =="") {
    names=prompt("Re-Enter Your Name :");
}

let gender= prompt(`Enter your Gender: "male or female" `);

while(gender !=="male" && gender!=="female") {
    gender = prompt(`Re-Enter your Gender: please only "male" or "female"`);
}

let age= prompt(`Enter Your Age :`);

while (+age<=0 || isNaN(+age)) {
    age= prompt(`Re-Enter Your Age :`);
} 

let skip=confirm("Are you want show Welcoming Message ?");

if(skip) {
    alert(`Hello ${gender=="male" ? "Mr." : "Mrs."}${names} Welcome to My Website`);
}

let q1 = prompt(`Are You Happy ? only "Yes / y" or "No /n" `);
let q2 = prompt(`Are You Ready ? only "Yes / y" or "No /n" `);
let q3 = prompt(`Are You Excited ? only "Yes / y" or "No /n" `);

let q = [q1,q2,q3];

for (let i = 0; i < q.length; i++) {
    switch (q[i]) {
        case "Yes":
        case "yes":
        case "y":
            q[i]="Yes";
            break;
        case "No":
        case "no":
        case "n":
            q[i]="No";
            break;
        default:
            q[i]="Invalid";;
            break;
    }
}

for (let i = 0; i < q.length; i++) {
    console.log(`Answer of Question ${i+1} is ${q[i]}`);
}

let rate= prompt(`Rate Our Website : "Write Number from 0 to 5"`);

while (+rate<=0 || isNaN(+rate)) {
    rate=prompt("Write Correct Number from 0 to 5");
}

switch(+rate) {
    case 0:
        alert(`Thank You for Rating`);
        break;
    case 1:
        alert(`Thank You for Rating * Stars`);
        break;
    case 2:
        alert(`Thank You for Rating ** Stars`);
        break;
    case 3:
        alert(`Thank You for Rating *** Stars`);
        break;
    case 4:
        alert(`Thank You for Rating **** Stars`);
        break;
    default:
        alert(`Thank You for Rating ***** Stars`);
}


