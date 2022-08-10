let names=prompt("Enter Your Name :");

if(names !== null && names !=="") {

    let gender= prompt(`Enter your Gender: "male or female" `);

    if(gender !=="male" && gender!=="female") {
        gender = prompt(`Re-Enter your Gender: please only "male" or "female"`);
    }

    if(!(gender !=="male" && gender!=="female")) {

        let age= prompt(`Enter Your Age :`);

        if(+age<=0 || isNaN(+age)) {
            alert(`Wrong Age`);
        }

        let skip=confirm("Are you want show Welcoming Message ?");
        if(skip) {
            alert(`Hello ${gender=="male" ? "Mr." : "Mrs."}${names} Welcome to My Website`);
        }
    } else {
        alert("You Enter A Wrong Gender");
    }
} else {
    alert("You Dont Enter Your Name");
}