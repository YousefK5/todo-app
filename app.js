let name=prompt("Enter Your Name :");

let gender= prompt(`Enter your Gender: "male or female" `);

if(gender !=="male" && gender!=="female") {
    gender = prompt(`Re-Enter your Gender: please only "male" or "female"`);
}

let age= prompt(`Enter Your Age :`);

if(+age<=0) {
    alert(`Wrong Age`);
}

let skip=confirm("Are you want show Welcoming Message ?");

if(skip) {
    alert(`Hello ${gender=="male" ? "Mr." : "Mrs."}${name} Welcome to My Website`);
}


