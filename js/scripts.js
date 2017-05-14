// BACK END LOGIC BELOW THIS POINT
function pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaCheckedToppings, total){
	this.pizzaSize = pizzaSize;
	this.pizzaCrust = pizzaCrust;
	this.pizzaSauce = pizzaSauce;
	this.pizzaCheckedToppings = pizzaCheckedToppings;
	this.total = total;
}
pizza.prototype.sentence = function(){

	return "You bought an" + " " + this.pizzaSize + " " + this.pizzaCrust + " " + " Style pizza with " + this.pizzaSauce + " " + "Sauce and the following toppings." + " " + this.pizzaCheckedToppings + " " + "Your total is: " + this.total;

}

function totalCost(pizzaCheckedToppings, sizeCost) {
	var toppingCost = pizzaCheckedToppings.length * 2.00;
		if(sizeCost = "XL"){
			sizeCost = 19.00;
		} else if(sizeCost = "Large"){
			sizeCost = 16.00;
		} else if(sizeCost = "Medium"){
			sizeCost = 14.00 ;
		} else if(sizeCost = "small"){
			sizeCost = 9.00;
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

				var myPizza = new pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaCheckedToppings, total);
				$("#complete-pizza").append("<p>" + myPizza + "</p>");





	});
});
