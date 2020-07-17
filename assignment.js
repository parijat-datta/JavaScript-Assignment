 //---------------------------------------------------------------------   Answer to Question Number: 1   ------------------------------------------------------------------------//

function feetToMile(feet){



    var mile=0.000189394*feet; //feet
    
    //Checking the Negative Value of Feet for the bonus mark
    
    if(mile<0){
    
        console.log("Distance can not be Negative");
    }
    
    else if(mile<1){
    
    
        mile=mile.toFixed(6);
        console.log(feet,"feet","=",mile,"mile");
    }
    
    else{
    
        mile=mile.toFixed(3);
        console.log(feet,"feet","=",mile,"mile");
    }
    
    }
    
    //To see output
    
    feetToMile(10);
    
    feetToMile(-10);




     //---------------------------------------------------------------------   Answer to Question Number: 2   ------------------------------------------------------------------------//

function woodCalculator(chair, table, bed){



    if(chair<0||table<0||bed<0){  //Rejecting Negative Value for Bonus Mark
    
    
    console.log("The amount of chair, table, or bed cannot be negative");
    
    
    }
    
    else{
    
    
    var totalWood=chair*1+table*3+bed*5;
    console.log("The total amount of wood will be required is:", totalWood,"cubic feet");
    
    
    }
    
    
    
    }
    
    //To see output
    
    woodCalculator(1,0,5);
    
    woodCalculator(1,-4,6);



     //---------------------------------------------------------------------   Answer to Question Number: 3   ------------------------------------------------------------------------//

function brickCalculator(numberOfFloor) {

    var noOfFloor = numberOfFloor;
    var totalFloor = noOfFloor;
    var noOfFeet = 0;
    
    //For Bonus Marks: Program Rejects negative value for the Number of Floors
    
    if (numberOfFloor < 0) {
    
        console.log("The Number of Floor Can not be Negative or Equals to Zero");
    
    }
    
    else {
    
    
    
    
    
        if (numberOfFloor <= 10) {
    
            noOfFeet = noOfFloor * 15;
    
    
        }
    
        else if (numberOfFloor > 10 && numberOfFloor <= 20) {
    
            numberOfFloor = numberOfFloor - 10;
            noOfFeet = numberOfFloor * 12;
            noOfFeet = noOfFeet + 150; //Because the number of feet for first ten floor => 10*15 =150
    
    
        }
    
        else if (numberOfFloor > 20) {
    
    
            numberOfFloor = numberOfFloor - 20;
            noOfFeet = numberOfFloor * 10;
            noOfFeet = noOfFeet + 150 + 120; //Because the number of feet for first ten floor => 10*15 =150 and the number of feet for 10 to 20 floor => 10*12 =120
    
    
        }
    
        var totalNoOfFeet = noOfFeet;
        var noOfBrick = totalNoOfFeet * 1000;
        console.log("The number of brick will be required", noOfBrick);
    }
    
    }
    
    //To get output (Checked with Negative and Positive Value)
    
    brickCalculator(-5);
    brickCalculator(38);
    

    

    //---------------------------------------------------------------------   Answer to Question Number: 4   ------------------------------------------------------------------------//

function tinyFriends(names) {
    var smallElement = names[0];

    //For Bonus mark checking if the array of Names is not Null!
    if (names.length > 0) {
        for (var i = 1; i < names.length; i++) {
            if (smallElement.length > names[i].length) {
                smallElement = names[i];
            }

        }
    }

    else {
        return ("Blank Array Can Not Be Provided")
    }

    return smallElement;
}


//to see output:

var name = ["Jonny", "Ronok", "Kamal", "Jitu", "Nabila", "Sourav"];
console.log(tinyFriends(name));

//Bonus work: Avoid Blank Array:

var blankName = [];
console.log(tinyFriends(blankName));
