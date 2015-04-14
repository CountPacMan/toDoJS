
jQuery(document).ready(function() {
  $("#task").focus();
  $("#toDo-form").submit(function(event) {
    event.preventDefault();
    var inputTask = $("#task").val();
    var newTask = {name: inputTask, done: false};

    $("ul#tasks").append("<li><span class='task'>" + newTask.name + "</span></li>");
    $("#task").val("");

    function clicker() {
      $(".task").last().click(function(){
        $("#show-completed").show();
        $(".task-completed").append("<li><span class='complete'>" + newTask.name + "</span></li>");
        newTask.done = true;
        $(this).parent().remove();
        $(".complete").last().click(function() {
          $("ul#tasks").append("<li><span class='task'>" + newTask.name + "</span></li>");
          newTask.done = false;
          $(this).parent().remove();
          clicker();
        });
      });
    }
    clicker();
  });
});
