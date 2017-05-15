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
function calcCost(pizzaSize, pizzaCheckedToppings, total) {
	if(this.pizzaSize === "XL") {
		this.total = 24.95;
	} else if(this.pizzaSize === "Large") {
		this.total = 19.99;
	} else if(this.pizzaSize === "Medium") {
		this.total = 16.00;
	} else if(this.pizzaSize === "Small") {
		this.total = 14.00;
	} else {
		return this.pizzaSize + this.total;
	}
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
				this.pizzaSize = $("#userInputSize").val();
				this.pizzaSauce = $("#userInputSauce").val();
				this.pizzaCrust = $("#userInputCrust").val();
				this.pizzaCheckedToppings = [];
				//trying to pass string to global varible
				// console.log(pizzaCheckedToppings);

			$("input:checkbox[name=topping]:checked").each(function() {
				var topping = $(this).val();
					this.pizzaCheckedToppings.push(topping);
					console.log(topping);
					console.log(typeof(topping));
				});

				// var myPizza = new pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaCheckedToppings, total);
				// $("#complete-pizza").append("<p>" + myPizza + "</p>");





	});
});
