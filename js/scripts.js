
jQuery(document).ready(function() {
  $("#task").focus();
  $("#toDo-form").submit(function(event) {
    event.preventDefault();
    var inputTask = $("#task").val();

    var newTask = {name: inputTask, done: false};

    $("ul#tasks").append("<li><span class='task'>" + newTask.name + "</span></li>");

    $("#task").val("");

    $(".task").last().click(function(){
      $("#show-completed").show();
      $(".task-show").text(newTask.name);
      $(".task-completed").text(newTask.done);
      $(".task-completed").click(function() {
        newTask.done = newTask.done === false ? true : false;
        $(this).text(newTask.done);
      });
    });

  });
});
