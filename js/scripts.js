// BACK END LOGIC BELOW THIS POINT
function pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaCheckedToppings, total){
	this.pizzaSize = pizzaSize;
	this.pizzaCrust = pizzaCrust;
	this.pizzaSauce = pizzaSauce;
	this.pizzaCheckedToppings = pizzaCheckedToppings;
	this.total = total;

}
pizza.prototype.sentence = function(){

	return "You bought an" + " " + this.pizzaSize + " " + this.pizzaCrust + " " + " Style pizza with " + this.pizzaSauce + " " + "Sauce and the following toppings." + " " + this.pizzaCheckedToppings + " " + "Your total is: " + total;

}
// pizza.prototype.prices = function(){
// 	var xL = 19.95;
// 	var large = 16.00;
// 	var medium = 14.00;
// 	var small = 9.00
// 	var costToppings = pizzaCheckedToppings.length;
// 	var xlTotal = xL + costToppings;
// 	var largeTotal = large + costToppings;
// 	var mediumTotal = medium + costToppings;
// 	var smallTotal = small + costToppings;
//
// }
function sizeCost(toppingsAmount, sizeCost) {
	var toppingCost = toppingAmount.length * 2.00;
	console.log(toppingcost);
		if(sizeCost === "XL"){
			sizeCost = 19.00 + toppingCost;
		} else if(sizeCost === "Large"){
			sizeCost = 16.00 + toppingCost;
		} else if(sizeCost === "Medium"){
			sizeCost = 14.00 + toppingCost;
		} else if(sizeCost === "small"){
			sizeCost = 9.00 + toppingCost;
		}
		 return (toppingCost + sizeCost).toFixed(2);
		}

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
				var pizzaSize = $("#userInputSize").val();
				var pizzaSauce = $("#userInputSauce").val();
				var pizzaCrust = $("#userInputCrust").val();
				var pizzaCheckedToppings = [];

			$("input:checkbox[name=topping]:checked").each(function() {
				var topping = $(this).val();
					pizzaCheckedToppings.push(topping);
				});
				console.log(pizzaCheckedToppings);
				var myPizza = new pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaCheckedToppings);
				var total = sizeCost(toppingCost, sizeCost);
				$("#complete-pizza").append("<p>" + myPizza.sentence() + "</p>");





	});
});
