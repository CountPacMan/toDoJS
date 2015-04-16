var currentCategory;
var allCategories = [];

function addTaskClicker(task, child) {
  task.done = true;
  child.parent().remove();
  $(".task-completed").append("<li><span class='complete'>" + task.name + "</span></li>");
  child = $(".complete").last();
  $(".complete").last().click(function() {
    addCompletedTaskClicker(task, child);
  });
}

function addCompletedTaskClicker(task, child) {
  task.done = false;
  child.parent().remove();
  $("ul#tasks").append("<li><span class='task'>" + task.name + "</span></li>");
  child = $(".task").last();
  $(".task").last().click(function() {
    addTaskClicker(task, child);
  });
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

    $(".category").last().click(function() {
      $("#tasks").text("");
      $(".task-completed").text("");
      $("#add-task").show();
      $("#show-completed").show();

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
          var child = $(".task").last();
          $(".task").last().click(function() {
            addTaskClicker(task, child);
          });
        } else {
          $(".task-completed").append("<li><span class='complete'>" + task.name + "</span></li>");
          var child = $(".complete").last();
          $(".complete").last().click(function() {
            addCompletedTaskClicker(task, child);
          });
        }
      });
    });
  });

  $("#add-task").submit(function(event) {
    event.preventDefault();

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
    var child = $(".task").last();
    $(".task").last().click(function() {
      addTaskClicker(newTask, child);
    });
  });
});
