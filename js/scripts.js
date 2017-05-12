// BACK END LOGIC BELOW THIS POINT
// var allPrices = pricesSize  + pricesSauce + pricesCrust + pricesToppings;
function pizza(pizzaSize, pizzaSauce, pizzaCrust, pizzaCheckedToppings, price){
	this.pizzaSize = pizzaSize;
	this.pizzaSauce = pizzaSauce;
	this.pizzaCrust = pizzaCrust;
	this.pizzaCheckedToppings = pizzaCheckedToppings;
	this.price = price;

}
pizza.prototype.assemble = function(){

	return this.pizzaSize + " " + this.pizzaSauce + " " + this.pizzaCrust + " " + 		 this.pizzaCheckedToppings +"Your price is "+ " " +  this.price ;

}

function pizzaCost(sizeTotal,toppingTotal ){
  var toppingPrice = toppingTotal.length * 0.50;
  if(sizeTotal === "X-Large"){
    var sizePrice = 16.00;
  }
  else if(sizeTotal === "Large"){
    var sizePrice = 12.00;
  }
  else if(sizeTotal === "Medium"){
    var sizePrice = 8.00;
  }
  else if(sizeTotal === "Small"){
    var sizePrice = 5.00;
  }
  return (toppingTotal + sizeCost).toFixed(2);
};

// FRONT END LOGIC BELOW THIS POINT
$(document).ready(function(){
	$("#blueLink").click(function(event){
		event.preventDefault();

		// TO TOGGLE ITEM LIST ON AND OFF
		$(".form-group").show();
		$(".col-md-6").show();

		$("#toggle1").click(function(){
			$("#userInputSize").slideToggle(1);
		});

		$("#toggle2").click(function(){
			$("#userInputSauce").slideToggle(1);
		});

		$("#toggle3").click(function(){
			$("#userInputCrust").slideToggle(1);
		});

		$("#toggle4").click(function(){
			$("#userInputVeggieTopping").slideToggle(1);
		});

		$("#toggle5").click(function(){
			$("#userInputMeatTopping").slideToggle(1);
		});
	});
// ON SUBMISSION OF COMPLETE ORDER
		$("#button1").click(function(event){
			event.preventDefault();
			$("#complete-pizza").show();
			$(".col-md-6").show();

			var myPizza = new pizza(pizzaSize, pizzaSauce, pizzaCrust, pizzaCheckedToppings);
				var pizzaSize = $("#userInputSize").val();
				var pizzaSauce = $("#userInputSauce").val();
				var pizzaCrust = $("#userInputCrust").val();
				var pizzaCheckedToppings = [];
				$("input:checkbox[name=topping]:checked").each(function() {
				      var topping = $(this).val();
				      pizzaCheckedToppings.push(topping);
				    });
						console.log(myPizza);

				$("#complete-pizza").append("<p>" + myPizza.assemble() + "</p>");


	});
});
