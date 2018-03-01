function calculateGrade() {
    var hw = document.getElementById("HomeworkPoints").value;
    var cw = document.getElementById("ClassworkPoints").value;
    var as = document.getElementById("AssessmentPoints").value;
    var pr = document.getElementById("ParticipationPoints").value;
    var hwArray = convertArrayStringToNumber(hw);
    var cwArray = convertArrayStringToNumber(cw);
    var asArray = convertArrayStringToNumber(as);
    var prArray = convertArrayStringToNumber(pr);
    //averages
    var hwAverage = averageArray(hwArray);
    var cwAverage = averageArray(cwArray);
    var asAverage = averageArray(asArray);
    var prAverage = averageArray(prArray);
    //weights
    var hwWeight = parseInt(document.getElementById("HomeworkWeight").value) * .01;
    var cwWeight = parseInt(document.getElementById("ClassworkWeight").value) * .01;
    var asWeight = parseInt(document.getElementById("AssessmentWeight").value) * .01;
    var prWeight = parseInt(document.getElementById("ParticipationWeight").value) * .01;
    //final Grades
    var homeworkFinalGrade = hwAverage * hwWeight;
    var classworkFinalGrade = cwAverage * cwWeight;
    var assessmentFinalGrade = asAverage * asWeight;
    var participationFinalGrade = prAverage * prWeight;
    var currentGrade = (homeworkFinalGrade + classworkFinalGrade + assessmentFinalGrade + participationFinalGrade) / (hwWeight + cwWeight + asWeight + prWeight);
    document.getElementById("myGrade").innerHTML = "Current Grade:" + currentGrade + "%";
    return currentGrade;
}
function calculateFinal(){
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    var finalGradeDesired = parseInt(document.getElementById("gradeRequired").value);
    var currentWeight = 1 - (finalWeight / 100);
    var weightedCurrentGrade = calculateGrade() * currentWeight;
    var finalGradeRequired = (finalGradeDesired - weightedCurrentGrade) / (finalWeight / 100);
    document.getElementById("gradeRequired").innerHTML = finalGradeRequired.toString().slice(0,5) + "% required to get a " + finalGradeDesired;
    document.getElementById("finalGradeRequired").innerHTML = "Final Grade Required:" + finalGradeRequired;
    console.log(finalGradeRequired);
}
function averageArray(array){
    var sum = 0;
    for (var i = 0; i<array.length; i++){
        sum += parseInt(array[i]);
    }
    var average = sum / array.length;
    return average;
}
function convertArrayStringToNumber(input) {
    var array = input.split(",");
    for (var i = 0; i< array.length;i++){
        array[i] = parseInt(array[i])
    }
    return array;
}
function calculateWeight(average, array ){
    var weight = (document.getElementById(array + "Weight").value / 100);
    var total = weight * average;
    console.log(total);
    return total;
}
