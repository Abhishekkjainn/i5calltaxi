function page1topage2(){

    if((document.getElementById("pickinputinside").value == "")||(document.getElementById("dropinputinside").value =="")||(document.getElementById("dateinput").value =="")|| (document.getElementById("dateinput").value =="")){
        alert("Enter Pickup and Drop Location : None Input")
    }
    if((document.getElementById("pickinputinside").value != "")||(document.getElementById("dropinputinside").value !="")||(document.getElementById("dateinput").value !="")|| (document.getElementById("dateinput").value !="")){
        // document.getElementById("formtwo").style.transition = "all 2s";
        document.getElementById("formone").style.display="none";
        document.getElementById("formtwo").style.display = "flex";
        
        document.getElementById("pagination2").style.backgroundColor="rgba(23, 190, 187, 1)";
        document.getElementById("bannerbelowdiv").style.backgroundImage = "url('customerbanner.jpg')";
    }
        
    
    // // document.getElementById("formtwo").style.transition = "all 2s";
    // document.getElementById("formone").style.display="none";
    // document.getElementById("formtwo").style.display = "flex";
    
    // document.getElementById("pagination2").style.backgroundColor="rgba(23, 190, 187, 1)";
    // document.getElementById("bannerbelowdiv").style.backgroundImage = "url('customerbanner.jpg')";

}
function page2topage3(){
    if((document.getElementById("passengername").value=="") || (document.getElementById("passengerphone").value=="")||(document.getElementById("passengeremail").value=="")){
        alert("Enter Name , Phone Number , or Email Address")
    }
    if((document.getElementById("passengername").value!="") || (document.getElementById("passengerphone").value!="")||(document.getElementById("passengeremail").value!="")){
        // document.getElementById("formtwo").style.transition = "all 2s";
    document.getElementById("formtwo").style.display="none";
    document.getElementById("formthree").style.display = "flex";
    document.getElementById("pagination3").style.backgroundColor="rgba(255, 201, 20, 1)";
    document.getElementById("bannerbelowdiv").style.backgroundImage = "url('selectcab.jpg')";
    }

    // // document.getElementById("formtwo").style.transition = "all 2s";
    // document.getElementById("formtwo").style.display="none";
    // document.getElementById("formthree").style.display = "flex";
    // document.getElementById("pagination3").style.backgroundColor="rgba(255, 201, 20, 1)";
    // document.getElementById("bannerbelowdiv").style.backgroundImage = "url('selectcab.jpg')";

}
function page3topage4(){
    document.getElementById("formthree").style.display="none";
    document.getElementById("formfour").style.display = "flex";
    document.getElementById("pagination4").style.backgroundColor="rgba(46, 40, 42, 1)";
    document.getElementById("bannerbelowdiv").style.backgroundImage = "url('confirmbanner.jpg')";
}