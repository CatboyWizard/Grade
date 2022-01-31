var subject, totalQuestions, numCorrect, percentScore;

function testResults() {

    subject = document.getElementById("subject").value;
    totalQuestions = document.getElementById("numberOfQuestions").value;
    numCorrect = document.getElementById("numberCorrect").value;

    percentScore = numCorrect / totalQuestions * 100;
    percentScore = percentScore.toFixed(2);

    //Grades

    var A = 90;
    var B = 80;
    var C = 70;
    var D = 60;

    switch (true) {
        case percentScore >= A:
            document.getElementById("testResults").innerHTML = "A";
            document.getElementById("testMessage").innerHTML = `Exellent Job. You Got ${percentScore}% correct. That's an 'A' for Awesome`;
        case percentScore >= B:
            document.getElementById("testResults").innerHTML = "B";
            document.getElementById("testMessage").innerHTML = `Exellent Job. You Got ${percentScore}% correct. That's an 'A' for Awesome`;
        case percentScore >= C:
                document.getElementById("testResults").innerHTML = "";
                document.getElementById("testMessage").innerHTML = `Meh . You Got ${percentScore}% correct. That's an 'C' for Could Be Better`;
            case percentScore >= D:
                    document.getElementById("testResults").innerHTML = "D";
                    document.getElementById("testMessage").innerHTML = `Go Away. You Got ${percentScore}% correct. That's an 'F' for Fail Nation`;
            break;
        default:
            document.getElementById("testResults").innerHTML = "F";
            document.getElementById("testMessage").innerHTML = `You Got ${percentScore}% correct.`;
            break;
    }
}