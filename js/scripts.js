var currentCategory;
var allCategories = [];

function addTaskClicker(task) {
  $("#show-completed").show();
  task.done = true;
  $(this).parent().remove();
  $(".complete").last().click(addCompletedTaskClicker(task));
}

function addCompletedTaskClicker(task) {
  task.done = false;
  $(this).parent().remove();
  $(".task").last().click(addTaskClicker(task));
}

jQuery(document).ready(function() {
  $("#category").focus();
  $("#add-category").submit(function(event) {
    event.preventDefault();
    var inputCategory = $("#category").val();
    var newCategory = {name: inputCategory, tasks: []};
    allCategories.push(newCategory);
    $("#categories").append("<li><span class='category'>" + newCategory.name + "</span></li>");
    $("#category").val("");

    function clicker() {
      $(".category").last().click(function() {
        $("#tasks").text("");
        $(".task-completed").text("");
        $("#add-task").show();
        currentCategory = $(this).text();
        var index;
        for (var i in allCategories) {
          if (allCategories[i].name === currentCategory) {
            index = i;
          }
        }
        var ourCategory = allCategories[index];
        ourCategory.tasks.forEach(function(task) {
          if (!task.done) {
            $("ul#tasks").append("<li><span class='task'>" + task.name + "</span></li>");
            $(".task").last().click(addTaskClicker(task));
          } else {
            $(".task-completed").append("<li><span class='complete'>" + task.name + "</span></li>");
            $(".complete").last().click(addCompletedTaskClicker(task));
          }
        });
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
    var index;
    for (var i in allCategories) {
      if (allCategories[i].name === currentCategory) {
        index = i;
      }
    }
    var ourCategory = allCategories[index];
    ourCategory.tasks.push(newTask);

    $("ul#tasks").append("<li><span class='task'>" + newTask.name + "</span></li>");

    $("#task").val("");

    $(".task").last().click(addTaskClicker(task));
    // function clicker() {
    //   $(".task").last().click(function(){
    //     $("#show-completed").show();
    //     $(".task-completed").append("<li><span class='complete'>" + newTask.name + "</span></li>");
    //     newTask.done = true;
    //     $(this).parent().remove();
    //     $(".complete").last().click(function() {
    //       $("ul#tasks").append("<li><span class='task'>" + newTask.name + "</span></li>");
    //       newTask.done = false;
    //       $(this).parent().remove();
    //       clicker();
    //     });
    //   });
    // }
    // clicker();
  });
});
