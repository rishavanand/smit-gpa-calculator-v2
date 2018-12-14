var allData = []
var singleResult = []
var regNo;
var examId;

$('#registration-number').keypress("keypress", function(e) {
    if (e.which == 13) {
    	calculate();
    }
})

$("#calculate-button").click(function(){
	calculate();
});

var calculate = () => {
	regNo = $("#registration-number").val();
	examId = $("#exam-id option:selected").val();

	if(regNo && examId != "non"){

		getResult(examId)
		.then(() => {
			return updateTable(regNo);
		})
		.then(() => {
			return calculateGpa(regNo);
		})
		.then((gpa) => {
			$("#show-gpa").html('Your GPA is : ' + gpa);
			$('html, body').animate({
		        scrollTop: $("#gpa-section").offset().top
		    }, 2000);
		})
		.catch((err) => {
			alert(err);
		})

	}else{
		alert('Please fill the form')
	}
}

var getResult = (examId) => {
	return new Promise((resolve, reject) => {
		$.getJSON('results/' + examId + '.json')
		.then((res) => {
			allData = res;
			singleResult = allData.results[regNo];
			return resolve();
		})
		.catch((err) => {
			return reject(err);
		});
	});
}

// Update result table
var updateTable = (regNo) => {
	return new Promise((resolve, reject) => {

		markup = '';
		if(!singleResult)
			return reject('Registration number not found');
		subs = Object.keys(singleResult);
		createMarkup(markup, singleResult, subs, 0)
		.then((markup) => {
			// Clear table
			$('#subject-table tbody').html('');
			// Update table
			$('#subject-table tbody').append(markup);
			// Show table
			$("#gpa-section").fadeIn(500);
			return resolve();
		})
		.catch((err) => {
			return reject(err);
		});

	});
}

var removeSubject = (id) => {
	delete singleResult[id];
	if(regNo && examId != "non"){

		updateTable(regNo)
		.then(() => {
			return calculateGpa(regNo);
		})
		.then((gpa) => {
			$("#show-gpa").html('Your GPA is : ' + gpa);
			$('html, body').animate({
		        scrollTop: $("#gpa-section").offset().top
		    }, 2000);
		})
		.catch((err) => {
			alert(err);
		})

	}else{
		alert('Please fill the form')
	}

}

// Create markup of rows
var createMarkup = (markup, result, subs, counter) => {
	return new Promise((resolve, reject) => {
		if(counter < subs.length){
			var subjectGrade = result[subs[counter]];
			var subjectName = allData['subjects'][subs[counter]]['name'];
			markup += `<tr><td><img height="15" src="images/cross.svg" onclick="removeSubject('` + subs[counter] + `')"> ` + subjectName + `</td><td>` + subjectGrade + `</td></tr>`;
			return resolve(createMarkup(markup, result, subs, counter+1))
		}else{
			return resolve(markup);
		}
	});
}

// Calculate GPA
var calculateGpa = (regNo) => {
	return new Promise((resolve, reject) => {
		var result = singleResult;
		var subs = Object.keys(result);
		var totalCredit = 0.0;
		var pointSum = 0.0;
		for(var i=0; i<subs.length; i++){
			var subjectGrade = result[subs[i]];
			var subjectCredit = allData['subjects'][subs[i]]['credit'];
			pointSum += (gradeToPoint(subjectGrade) * subjectCredit);
			totalCredit += subjectCredit;
		}
		var gpa = pointSum / totalCredit
		gpa = Math.round((gpa) * 100) / 100
		console.log(gpa, result, totalCredit, pointSum)
		return resolve(gpa);
	});
}

// Convert grade to point
var gradeToPoint = (grade) => {
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