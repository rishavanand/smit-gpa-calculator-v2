show_coa = () => {
	$("#coa").show('slow');
	$("#cob").hide('slow');
	$("#other-year").hide('slow');
	$("#gpa-section").hide('slow');

}

show_cob = () => {
	$("#coa").hide('slow');
	$("#cob").show('slow');
	$("#other-year").hide('slow');
	$("#gpa-section").hide('slow');
}

show_other_year = () => {
	$("#coa").hide('slow');
	$("#cob").hide('slow');
	$("#other-year").show('slow');
	$("#gpa-section").hide('slow');
}

calculate_coa = () => {
	var totalObtained = 0;
	var maxPossible = 0;
	for(var i=1;i<=9;i++){
		var fieldData = $("#sub" + i, "#coa").val();
		var credit = parseFloat($("#sub" + i, "#coa").attr("credit"));
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
		var final_gpa = Math.round((totalObtained/maxPossible) * 100) / 100;
		$("#show-gpa").html('Your Estimated is : ' + final_gpa)
		$("#gpa-section").show();
		$('html, body').animate({
	        scrollTop: $("#gpa-section").offset().top
	    }, 2000);
	}
}

calculate_cob = () => {
	var totalObtained = 0;
	var maxPossible = 0;
	for(var i=1;i<=9;i++){
		var fieldData = $("#sub" + i, "#coa").val();
		var credit = parseFloat($("#sub" + i, "#coa").attr("credit"));
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
		var final_gpa = Math.round((totalObtained/maxPossible) * 100) / 100;
		$("#show-gpa").html('Estimated GPA is : ' + final_gpa)
		$("#gpa-section").show();
		$('html, body').animate({
	        scrollTop: $("#gpa-section").offset().top
	    }, 2000);
	}
}

calculate_other_year = () => {
	var totalObtained = 0;
	var maxPossible = 0;
	for(var i=1;i<=9;i++){
		var fieldData = $("#sub" + i, "#other-year").val();
		var credit = parseFloat($("#sub" + i, "#other-year").attr("credit"));
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
		var final_gpa = Math.round((totalObtained/maxPossible) * 100) / 100;
		$("#show-gpa").html('Estimated GPA is : ' + final_gpa)
		$("#gpa-section").show();
		$('html, body').animate({
	        scrollTop: $("#gpa-section").offset().top
	    }, 2000);
	}
}

isValidGrade = grade =>{
	if(grade == "S" || grade == "A" || grade == "B" || grade == "C" || grade == "D" || grade == "E" || grade == "F"){
		return 1;
	}else{
		return 0;
	}
}

gradeToPoint = grade => {
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