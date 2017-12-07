console.log('Monday Warmup');

var questionString = "HELLO";
var grannyTalk = function(question)
{
   var startYear = 1930;
   var endYear = 1950;
   var year = Math.round(Math.random() * (endYear - startYear) + startYear);

   if (question === question.toUpperCase() && question !== "BYE")
   {
      console.log("NO, NOT SINCE " + year);
   }
   else
   {
      console.log("SPEAK UP SONNY JIM");
   }
}

grannyTalk(questionString);
