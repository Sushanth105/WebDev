function main() {
    let a = prompt("enter the 1st number : ");
    let b = prompt("enter the 2nd number : ");

    // NaN -> Not a Number
    try {
        if (isNaN(a) || isNaN(b)) {
            throw SyntaxError("you should have to enter the number!!");
        }
    } catch (error) {
        console.log(error);
        return false
    }
    // if we add the try catch the compailer will run the codes below the try catch
    finally{
        console.log("code is going to end");
    } // this will be excicuted even though the return the fuction
    console.log(a + b);

    console.log(parseInt(a, 10) + parseInt(b, 10));
}

main()