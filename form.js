function verify()
{
    var n1 = document.getElementById("firstname").value
    var exp1 =/^[A-Za-z]+$/

    var n2 = document.getElementById("Middle Name").value
    var exp2 =/^[A-Za-z]+$//*

    var n3 = document.getElementById("lastname").value
    var exp3 =/^[A-Za-z]+$/

    var n4 = document.getElementById("phone").value
    var exp4 =/^[A-Za-z]+$/

    var n5 = document.getElementById("address").value
    var exp5 =/^[A-Za-z]+$/

    var n6 = document.getElementById("email").value
    var exp6 =/^[A-Za-z]+$/

    var n7 = document.getElementById("").value
    var exp7 =/^[A-Za-z]+$/*/



    if(n1.length==0)
    {
      document.getElementById("x1").innerHTML="Field should not be empty";
    }
    else if(!exp1.test(n1))
    {
        document.getElementById("x1").innerHTML="Only Alphabets are allowed";
    }


    if(n2.length==0)
    {
        document.getElementById("x1").innerHTML="Field should not be empty";
    }}/*
    else if(!exp2.test(n2))
    {
        document.getElementById("x1").innerHTML="Only Alphabets are allowed";
    }
    if(n3.length==0)
    {
        document.getElementById("x1").innerHTML="Field should not be empty";
    }
    else if(!exp3.test(n3))
    {
        document.getElementById("x1").innerHTML="Only Alphabets are allowed";
    }
    if(n4.length==0)
    {
        document.getElementById("x1").innerHTML="Field should not be empty";
    }
    else if(!exp4.test(n4))
    {
        document.getElementById("x1").innerHTML="Only Alphabets are allowed";
    }
    if(n5.length==0)
    {
        document.getElementById("x1").innerHTML="Field should not be empty";
    }
    else if(!exp5.test(n5))
    {
        document.getElementById("x1").innerHTML="Only Alphabets are allowed";
    }
    if(n6.length==0)
    {
        document.getElementById("x1").innerHTML="Field should not be empty";
    }
    else if(!exp6.test(n6))
    {
        document.getElementById("x1").innerHTML="Only Alphabets are allowed";
    }
    if(n7.length==0)
    {
        document.getElementById("x1").innerHTML="Field should not be empty";
    }
    else if(!exp7.test(n7))
    {
        document.getElementById("x1").innerHTML="Only Alphabets are allowed";
    }
}




/*function submit()
{
    let x = document.getElementById("firstname").value;
    let y = document.getElementById("middlename").value;
    let z = document.getElementById("lastname").value;
    
    if(x == ""  || y == "" || z == "" )
    {
        alert ("Name must be filled out");
        
    }
}*/

    
    


   
        
    



    

