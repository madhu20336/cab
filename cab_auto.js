const dict = require("readline-sync")
let fs = require("fs")
const { resolve } = require("path")
let User_pickup_location = dict.question("Enter your Current Location: ")
let User_destination_location = dict.question("Enter your Droping Point:")
//Which vihicle you want//
let vahicle_type = ["cab","auto","texi"]
for( vahi in vahicle_type){
console.log(vahicle_type[vahi])
}
let Choose_vahicle = dict.question("Enter here in which vahicle do you want:  ")
let Read_file = fs.readFileSync("cab_auto.json")
let  file = JSON.parse(Read_file)
let serial_no = 1
for(let data in file["driveData"]){
    if(file["driveData"][data]["vehicle"] === Choose_vahicle){
    console.log(serial_no,file["driveData"][data])
    serial_no ++}
}
//Driver name//
let choose_Driver = dict.question("Choose driver name which whom you wants to go: ")
serial_no = 1
for(let data in file["driveData"]){
    if(file["driveData"][data]["Driver_name"] === choose_Driver){
        var price = file["driveData"][data]["price"]
        var Feedback = file["driveData"][data]["feedback"]
        console.log(serial_no++,file["driveData"][data])
    }
}
console.log(`YOUR BOOKING IS CONFORM WITH  ${choose_Driver} YOUR ${Choose_vahicle} IS ON THE WAY`)
console.log(`${choose_Driver} SEND YOU FOUR DIGIT OPT ON YOUR NUMBER`)
//Distance//
function kilometer(){
    var Distance=Math.floor((Math.random() * 200) + 1)
    return Distance;
}
console.log(`Your total Distance is:${kilometer()}km`)

// OTP//
function OTP(){
    var val = Math.floor(1000 + Math.random() * 9000);
    return(val);
}
function yourDestination(sec){
    return new Promise(resolve => setTimeout(resolve,sec));
}
//Money transfer//
async function demo(){
    setTimeout(()=>{console.log("YOUR OTP IS: ",OTP())},3000)
    await yourDestination(3000);
    console.log(`YOUR REACH TO THE ${User_destination_location} PLEASE PAY MONEY TO DRIVER`)
    let money_transfer = dict.question("How whould you like to do payment:  ")
    if ( money_transfer == "online"){
        console.log("use phone pay or google pay")
        console.log("YOUR TOTAL AMOUNT IS:",price)
        setTimeout(()=>{console.log("Your cash transection is sucessful")},3000)
        //Feedback//
        var driver_Feedback = dict.question("Enter your Feedback: ")
        Feedback.push(driver_Feedback)
        fs.writeFileSync("cab_auto.json",JSON.stringify(file,null,4))
    }else{
        console.log("YOUR TOTAL AMOUNT IS:",price)
        console.log("Thankyou")
        //Feedback//
        var driver_Feedback = dict.question("Enter your Feedback: ")
        Feedback.push(driver_Feedback)
        fs.writeFileSync("cab_auto.json",JSON.stringify(file,null,4))
    }
}demo()
// otp user se bhi maango fir confirm karo
// payment ke method dikho terminal pr
// total amount undefined dikha rha h
// last me push kaam nhi kr rha h




