$("#tableshow1").hide();
$("#demo").hide();

var userInput;
function test(){
     userInput = document.getElementById("userInput").value;





     //console.log(userInput);
    //document.getElementById("demo").innerHTML = userInput;
    $.getJSON("data.json", function(result) {
      results= JSON.stringify(result['results'][userInput]);
      res=JSON.parse(results);

      //document.getElementById("demo").innerHTML= (results['userInput']); // this will show the info it in firebug console
      sub_code=Object.keys(res);
    //  console.log(Object.values(sub_code));
      /*for(i=0;i<sub_code.length;i++)
      {
        console.log(sub_code[i])  ;
      }*/

      sub_grades= Object.values(res);
    //  console.log(sub_grades);

      //have subject codes
      //have sub_grades
      // have credits from json files
      // 10-S 9-A 8-B 7-C 6-D 5-E 0-REMAINING

      //console.log(result['subjects']['MA1306']['credit']);
      //console.log(result['subjects'][sub_code[0]]['name'])
      credits=0;
      credit_sum=0;
      grade_sum=0;
      for(i=0;i<sub_code.length;i++)
      {
        if(sub_grades[i]=='S')
        {

           credit=result['subjects'][sub_code[i]]['credit'];
           grade_sum=grade_sum + 10*credit;
           credit_sum=credit_sum+ credit;

        }
        else if(sub_grades[i]=='A')
        {
              credit=result['subjects'][sub_code[i]]['credit'];
            grade_sum=grade_sum + 9*credit;
           credit_sum=credit_sum+ credit;

        }
        else if(sub_grades[i]=='B')
        {
           credit=result['subjects'][sub_code[i]]['credit'];
            grade_sum=grade_sum + 8*credit;
           credit_sum=credit_sum+ credit;

        }
        else if(sub_grades[i]=='C')
        {
           credit=result['subjects'][sub_code[i]]['credit'];
            grade_sum=grade_sum + 7*credit;
           credit_sum=credit_sum+ credit;

        }
        else if(sub_grades[i]=='D')
        {
           credit=result['subjects'][sub_code[i]]['credit'];
            grade_sum=grade_sum + 6*credit;
           credit_sum=credit_sum+ credit;

        }
        else if(sub_grades[i]=='E')
        {
           credit=result['subjects'][sub_code[i]]['credit'];
            grade_sum=grade_sum + 5*credit;
           credit_sum=credit_sum+ credit;

        }
        else{
           credit=0;
           grade_sum=grade_sum + 10*credit;
           credit_sum=credit_sum+credit;
        }



      }

        const final_gpa=(grade_sum/credit_sum);

        document.getElementById('demo').innerHTML =  'Your GPA = '+ final_gpa.toPrecision(3);
        //for(i=0;i<sub_code.length;i++)

        document.getElementById('grade1').innerHTML =  result['subjects'][sub_code[0]]['name'];
          document.getElementById('sub1').innerHTML =  sub_grades[0];

          document.getElementById('grade2').innerHTML =  result['subjects'][sub_code[1]]['name'];
            document.getElementById('sub2').innerHTML =  sub_grades[1];
            document.getElementById('grade3').innerHTML =  result['subjects'][sub_code[2]]['name'];
              document.getElementById('sub3').innerHTML =  sub_grades[2];
              document.getElementById('grade4').innerHTML =  result['subjects'][sub_code[3]]['name'];
                document.getElementById('sub4').innerHTML =  sub_grades[3];
                document.getElementById('grade5').innerHTML =  result['subjects'][sub_code[4]]['name'];
                  document.getElementById('sub5').innerHTML =  sub_grades[4];
                  document.getElementById('grade6').innerHTML =  result['subjects'][sub_code[5]]['name'];
                    document.getElementById('sub6').innerHTML =  sub_grades[5];
                    document.getElementById('grade7').innerHTML =  result['subjects'][sub_code[6]]['name'];
                      document.getElementById('sub7').innerHTML =  sub_grades[6];
                      document.getElementById('grade8').innerHTML =  result['subjects'][sub_code[7]]['name'];
                        document.getElementById('sub8').innerHTML =  sub_grades[7];
                        document.getElementById('grade9').innerHTML =  result['subjects'][sub_code[8]]['name'];
                          document.getElementById('sub9').innerHTML =  sub_grades[8];
                          document.getElementById('grade10').innerHTML =  result['subjects'][sub_code[9]]['name'];
                            document.getElementById('sub10').innerHTML =  sub_grades[9];
                          //  document.getElementById('grade11').innerHTML =  result['subjects'][sub_code[10]]['name'];
                            //  document.getElementById('sub11').innerHTML =  sub_grades[10];
                              //document.getElementById('grade12').innerHTML =  result['subjects'][sub_code[11]]['name'];
                                //document.getElementById('sub12').innerHTML =  sub_grades[11];


                          //document.getElementById('grade').innerHTML =  (result['subjects'][sub_code[0]]['name']);

        /*for(i=0;i<sub_code.length;i++)
        {
        document.getElementById('demo1').innerHTML =  result['subjects'][sub_code[0]]['name'];
        }*/





    });
}

                  $(document).ready(function()
                  {
                  $("#tableprop").hide();


                  $("#tableshow").click(function()
                  {
                      $
                      $("#tableshow").hide();
                      $("#tableshow1").show();
                      $("#tableprop").fadeIn(2000);
                    $("#demo").fadeIn(3000);



                    });
});



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
