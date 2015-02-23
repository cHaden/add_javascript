// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .


// When the user clicks on the save button, disable the button so that it cannot
// be accidentally double-clicked.
function disableButton() {
  document.getElementById("btn").style.display = 'none';
};

// Hide the last empty row of the grading scale section when the page loads.
// When the "Add Grade Threshold" button is clicked, show the last row. You do not
// need to make it show an additional row if the user clicks again.
function toggleEmpty( displayStyle ){
  if(document.getElementById("btn btn-danger flush-association") != "null"){
    document.getElementById("btn btn-danger flush-association").parentNode.parentNode.style.display= displayStyle;
  };
};

// When a Delete button is clicked, hide the row to which it belongs, but mark the
// hidden _destroy field in that row as truthy.
function hideDeleted( deleteButton ){
  deleteButton.parentNode.parentNode.parentNode.style.display = 'none';
};

// Back on the course detail page, you'll notice that clicking on the various nav
// buttons in the blue box will cause the page to snap to that section. Implement
// smooth scrolling instead. You'll have to look it up on Google.
function smoothScrolling(){

};
