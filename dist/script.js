$(document).ready(function () {
  let score = 0;

  $(".draggable").draggable({
    revert: "invalid",
    helper: "clone"
  });

  $(".droppable").droppable({
    accept: ".draggable",
    drop: function (event, ui) {
      const droppedWord = ui.draggable.text();
      const correctMatch = $(this).text();

      if (
        (droppedWord === "🦈🦈🦈" &&
          correctMatch === "giant fin, scary, blood, sharp teeth") ||
        (droppedWord === "🧀🧀🧀" &&
          correctMatch === "rats, giant triangle, funky smell") ||
        (droppedWord === "🍨🍨🍨" &&
          correctMatch === "cold, colorful, sweet, refreshing, summer") ||
        (droppedWord === "🚕🚕🚕" && correctMatch === "NYC, yellow, loud, fast")
      ) {
        score++;
        $("#score").text("Score: " + score);
        $(this).css("background-color", "#228b22");
        $(this).droppable("disable");
        ui.draggable.draggable("disable");
      } else {
        $(this).css("background-color", "#ff0000");
      }
    }
  });

  $("#resetGame").click(function () {
    score = 0;
    $("#score").text("Score: " + score);
    $(".droppable").css("background-color", "#fffaf0").droppable("enable");
    $(".draggable").draggable("enable");
  });
});