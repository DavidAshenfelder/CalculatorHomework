
console.log("Welcome to the DOM");

$(document).ready(function(){



  $('#add').click(function(event) {
    event.preventDefault();
    var numOne = Number($('#num_one').val());
    var numTwo = Number($('#num_two').val());
    $('#answer').html(numOne + numTwo);
  });

  $('#subtract').click(function(event) {
    event.preventDefault();
    var numOne = Number($('#num_one').val());
    var numTwo = Number($('#num_two').val());
    $('#answer').html(numOne - numTwo);
  });

  $('#multiply').click(function(event) {
    event.preventDefault();
    var numOne = Number($('#num_one').val());
    var numTwo = Number($('#num_two').val());
    $('#answer').html(numOne * numTwo);
  });

  $('#divide').click(function(event) {
    event.preventDefault();
    var numOne = Number($('#num_one').val());
    var numTwo = Number($('#num_two').val());
    $('#answer').html(numOne / numTwo);
  });

//////////////////////////////////////////////////

///This should be something like C button///////



//////////////////////////////////////////////////

$('.block-3').click(function(event) {
  event.preventDefault();
  $('#window').append($(this).data('value'));

});


$('#equal').click(function(event) {
  event.preventDefault();
  var txt = $('#window').html();
  $('#window').html([eval(txt)]);

 // var equals = eval($('#window'));
 // return equals;

});

$('#clear').on('click', function(e) {
  e.preventDefault();
  $('#window').empty();
});












});
