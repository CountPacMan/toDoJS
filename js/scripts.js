var currentCategory;
var allCategories = [];

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
          $("ul#tasks").append("<li><span class='task'>" + task.name + "</span></li>");
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
    console.log(ourCategory);
    ourCategory.tasks.push(newTask);

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
