//Back-end
//Pizza Constructor
function Pizza() {
  this.size = [];
  this.toppings = [];
  this.sides = [];
  this.orderNumber = "";
  this.customerName = "";
}

//Function to calculate pizza cost
Pizza.prototype.calculateCost = function() {
  //add formula to calculate cost of pizza
}

Pizza.prototype.confirmationNumber = function() {
  //add formula to randomly generate a number.
}

//User Interface
$(document).ready(function() {

  //Click function to show size menu and hide others
  $("#sizeMenuButton").click(function(){
    $(".toppings-page").hide();
    $(".sides-page").hide();
    $(".size-page").show();
  })
  //Click function to show toppings menu and hide others
  $("#toppingMenuButton").click(function(){
    $(".toppings-page").show();
    $(".sides-page").hide();
    $(".size-page").hide();
  })
  //Click function to show sides menu and hide others
  $("#sidesMenuButton").click(function(){
    $(".toppings-page").hide();
    $(".sides-page").show();
    $(".size-page").hide();
  })

})
