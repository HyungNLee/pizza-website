//Back-end
//Pizza Constructor
function Pizza() {
  this.size = "";
  this.toppings = [];
  this.sides = [];
  this.orderNumber = "";
  this.customerName = "";
  this.cost = 0;
}
//variables
var customerOrderNumber = 1;
var extraPrices = { "small":6, "medium":8, "large":10, "pepperoni":2, "italianSausage":2, "ham":2, "bacon":2, "chicken":2, "olive":1.5, "onion":1.5, "mushroom":1.5, "tomato":1, "spinach":2, "breadSticks":3.5, "onionRings":4, "mozzarellaSticks":5 };

//Function to calculate pizza cost
Pizza.prototype.calculateCost = function() {
  var price = 0;
  var pizzaArray = [];

  pizzaArray.push(this.size);
  pizzaArray = pizzaArray.concat(this.toppings);
  pizzaArray = pizzaArray.concat(this.sides);

  pizzaArray.forEach(function(custom) {
    price += extraPrices[custom];
  })

  price = price.toFixed(2);
  this.cost = price;
}

//Forumula for pizza order number
Pizza.prototype.confirmationNumber = function() {
  this.orderNumber = customerOrderNumber;
  customerOrderNumber++;
}

//Function to reset all fields after pizza order
function resetFields() {
  $("#nameBox").val("");
  $('input[type=checkbox]').prop('checked',false);
}

//User Interface
$(document).ready(function() {

  //Click function to show size menu and hide others
  $("#sizeMenuButton").click(function() {
    $(".toppings-page").hide();
    $(".sides-page").hide();
    $(".size-page").show();
  })
  //Click function to show toppings menu and hide others
  $("#toppingMenuButton").click(function() {
    $(".toppings-page").show();
    $(".sides-page").hide();
    $(".size-page").hide();
  })
  //Click function to show sides menu and hide others
  $("#sidesMenuButton").click(function() {
    $(".toppings-page").hide();
    $(".sides-page").show();
    $(".size-page").hide();
  })
  //Click function to finalize pizza
  $("#pizzaFinish").click(function() {
    $(".options-page").hide();
    $(".user-input-page").show();
    $("#pizzaFinish").hide();
    $("#backToPizza").show();
    $("#orderPizza").show();
    $(".btn-group").hide();
  })
  //Click function to go back to pizza
  $("#backToPizza").click(function() {
    $(".options-page").show();
    $(".user-input-page").hide();
    $("#pizzaFinish").show();
    $("#backToPizza").hide();
    $("#orderPizza").hide();
    $(".btn-group").show();
  })

  //Click function for new pizza after order
  $("#newPizza").click(function() {
    $(".options-page").show();
    $(".user-input-page").hide();
    $("#pizzaFinish").show();
    $("#backToPizza").hide();
    $("#orderPizza").hide();
    $(".btn-group").show();
    $("#newPizza").hide();
    $(".confirmation-page").hide();
  })

  //Function to order finalized pizza
  $("#orderPizza").click(function() {
    var userName = $("#nameBox").val();
    if (userName) {
      var pizzaOrder = new Pizza();
      pizzaOrder.customerName = userName;
      pizzaOrder.size = $("input:radio[name=size]:checked").val();

      $("input:checkbox[name=meats]:checked").each(function(){
        var addTopping = $(this).val();
        pizzaOrder.toppings.push(addTopping);
      });

      $("input:checkbox[name=nonmeats]:checked").each(function(){
        var addTopping = $(this).val();
        pizzaOrder.toppings.push(addTopping);
      });

      $("input:checkbox[name=sides]:checked").each(function(){
        var addSides = $(this).val();
        pizzaOrder.sides.push(addSides);
      });
      pizzaOrder.calculateCost();
      pizzaOrder.confirmationNumber();
      resetFields();

      $(".user-name-output").text(pizzaOrder.customerName);
      $(".cost-output").text(pizzaOrder.cost);
      $(".order-number-output").text(pizzaOrder.orderNumber);
      $("#newPizza").show();
      $("#backToPizza").hide();
      $("#orderPizza").hide();
      $(".user-input-page").hide();
      $(".confirmation-page").show();
    } else {
      alert("Please enter your name.");
    }
  })
})
