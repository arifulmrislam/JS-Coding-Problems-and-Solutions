var rahim = {
    fullName : "Ariful",
    age      : 28,
    address  : "Mohanogor",
    job      : "Job Holder",
    wlcomeMsg : function(){
    console.log('Hello there');
}
}
// rahim.jipcode = 3569;
// rahim.job = "Student";

// console.log(rahim.wlcomeMsg());

for(let i in rahim){
    console.log(rahim[i]);
}