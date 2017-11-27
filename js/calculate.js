function isValidGrade(grade){
	if(grade == "S" || grade == "A" || grade == "B" || grade == "C" || grade == "D" || grade == "E" || grade == "F"){
		return 1;
	}else{
		return 0;
	}
}

function gradeToPoint(grade){
	if(grade == 'S')
		return 10;
	else if(grade == 'A')
		return 9;
	else if(grade == 'B')
		return 8;
	else if(grade == 'C')
		return 7;
	else if(grade == 'D')
		return 6;
	else if(grade == 'E')
		return 5;
	else if(grade == 'F')
		return 0;
	else if(grade == 'G')
		return 0;
	else if(grade == 'I')
		return 0;
}

$("#submit-button").click(function(){
	var totalObtained = 0;
	var maxPossible = 0;
	for(var i=1;i<=9;i++){
		var fieldData = $("#sub" + i).val();
		var credit = parseFloat($("#sub" + i).attr("credit"));
		var capFieldData = fieldData.toUpperCase();
		if(!isValidGrade(capFieldData)){
			alert("Please fill all fields with valid grades!");
			break;
		}else{
			totalObtained = totalObtained + (gradeToPoint(capFieldData) * credit);
			maxPossible = maxPossible + credit;
		}
	}
	if(i==10){
		$("#grade-form").hide();
		console.log(totalObtained);
		console.log(maxPossible);
		$("#gpa-obtained").html("<strong>" + Math.round((totalObtained/maxPossible) * 100) / 100 + "</strong>");
		$("#grade-messagebox").fadeIn(3000);
	}
});