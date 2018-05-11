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
	else
		return 0;
}

$("#calculate-button").click(function(){
	var regNo = $("#registration-number").val();
	var examId = $("#exam-id option:selected").val();
	if(regNo && examId != "non"){
		$.getJSON('results/' + examId + '.json', function (data) {
			result = data['results'][regNo];
			var totalCredit = 0.0;
			var pointSum = 0.0;
			if(result){
				$('#subject-table tbody').html('');
				$("#gpa-section").fadeIn(500);
				for (sub in result){
					var subjectGrade = result[sub];
					var subjectName = data['subjects'][sub]['name'];
					var subjectCredit = data['subjects'][sub]['credit'];
					if(sub.search('BACK') == -1){
						pointSum += (gradeToPoint(subjectGrade) * subjectCredit);
						totalCredit += subjectCredit;
					}
					var markup = '<tr><td>' + subjectName + '</td><td>' + subjectGrade + '</td></tr>';
					$('#subject-table tbody').append(markup);
				}
				var gpa = pointSum / totalCredit
				gpa = Math.round((gpa) * 100) / 100
				$("#show-gpa").html('Your GPA is : ' + gpa);
				$('html, body').animate({
			        scrollTop: $("#gpa-section").offset().top
			    }, 2000);
			}else{
				alert("Registration number not found");
			}
		});
	}else{
		alert('Please fill the form')
	}
});