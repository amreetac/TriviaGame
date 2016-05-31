var number = 10; // Time allowed in Trivia game in seconds
        var a = new Array(8); //a[i] is the status of i-th question. -1 if unanswered, 0 if incorrect, 1 if correct
        for (var i = 0; i < a.length; i++){ // set initial value of a[i] to -1 (unanswered)
            a[i] = -1;
        }
        var correct = 0, incorrect = 0, unanswered = 0; // correct/incorrect/unanswered = Total number of correct/incorrect/unanswered answers
        $('#A11').on('click', loss1); // function call for button click for A11, loss1 for incorrect outcome, win1 for correct outcome
        $('#A12').on('click', loss1);
        $('#A13').on('click', win1);
        $('#A14').on('click', loss1);

        $('#A21').on('click', loss2);
        $('#A22').on('click', win2);
        $('#A23').on('click', loss2);
        $('#A24').on('click', loss2);

        $('#A31').on('click', loss3);
        $('#A32').on('click', win3);
        $('#A33').on('click', loss3);
        $('#A34').on('click', loss3);

        $('#A41').on('click', win4);
        $('#A42').on('click', loss4);
        $('#A43').on('click', loss4);
        $('#A44').on('click', loss4);

        $('#A51').on('click', loss5);
        $('#A52').on('click', loss5);
        $('#A53').on('click', loss5);
        $('#A54').on('click', win5);

        $('#A61').on('click', loss6);
        $('#A62').on('click', loss6);
        $('#A63').on('click', win6);
        $('#A64').on('click', loss6);

        $('#A71').on('click', win7);
        $('#A72').on('click', loss7);
        $('#A73').on('click', loss7);
        $('#A74').on('click', loss7);

        $('#A81').on('click', loss8);
        $('#A82').on('click', loss8);
        $('#A83').on('click', win8);
        $('#A84').on('click', loss8);

        function win1(){
             a[0] = 1;
        }
        function loss1(){
             a[0] = 0;
        }
        function win2(){
             a[1] = 1;
        }
        function loss2(){
             a[1] = 0;
        }
        function win3(){
             a[2] = 1;
        }
        function loss3(){
             a[2] = 0;
        }
        function win4(){
             a[3] = 1;
        }
        function loss4(){
             a[3] = 0;
        }
        function win5(){
             a[4] = 1;
        }
        function loss5(){
             a[4] = 0;
        }
        function win6(){
             a[5] = 1;
        }
        function loss6(){
             a[5] = 0;
        }
        function win7(){
             a[6] = 1;
        }
        function loss7(){
             a[6] = 0;
        }
        function win8(){
             a[7] = 1;
        }
        function loss8(){
             a[7] = 0;
        }

        function run(){
            counter = setInterval(decrement, 1000); //decrement function is called every 1000 ms or 1 second
        }
        function decrement(){
            number--; // reduce number by 1
            $('#show-time').html('<h2>' + "Time Remaining: " + number + " Seconds" + '</h2>'); //Shows time remaining in seconds
            if (number === 0){ // Excute once timer expires
                stop();
                for (var i = 0; i < a.length; i++){
                    if (a[i] == -1) unanswered++; // Get total # of unanswered
                    if (a[i] == 0) incorrect++; // Get total # of incorrect
                    if (a[i] == 1) correct++; // Get total # of correct
                }


            $('#show-time2').html('<h2>' + "All Done!" + "\nCorrect Answers: " + correct + "\nIncorrect Answers: "
                + incorrect + "\nUnanswered: " + unanswered);


            window.location = "indexresults.html";

                //alert('All Done!' + "\nCorrect Answers: " + correct
                //+ "\nIncorrect Answers: " + incorrect + "\nUnanswered: " + unanswered );  \n is new line
            }
        }
        function stop(){
            clearInterval(counter);
        }
        run(); // only line in main besides variable declaration. Executed after web-page is opened