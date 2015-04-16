
jQuery(document).ready(function() {
  $("#category").focus();
  $("#add-category").submit(function(event) {
    event.preventDefault();
    var inputCategory = $("#category").val();
    var newCategory = {name: inputCategory, tasks: []};

    $("#categories").append("<li><span class='category'>" + newCategory.name + "</span></li>");
    $("#category").val("");

    function clicker() {
      $(".category").last().click(function() {
        $("#add-task").show();
      });
    }
    clicker();
  });




  $("#add-task").submit(function(event) {
    event.preventDefault();
    // loop through and append all contacts of the clicked categor


    $(".task-list").show();

    var inputTask = $("#task").val();
    var newTask = {name: inputTask, done: false};
    newCategory.tasks.push(newTask);

    newCategory.tasks.forEach(function(name) {
      $("ul#tasks").append("<li><span class='task'>" + task.name + "</span></li>");
    });

    // $("ul#tasks").append("<li><span class='task'>" + newTask.name + "</span></li>");

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
