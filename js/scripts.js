// BACK END LOGIC BELOW THIS POINT
function Pizza(pizzaSize, pizzaCrust, pizzaSauce, total){
	this.pizzaSize = pizzaSize;
	this.pizzaCrust = pizzaCrust;
	this.pizzaSauce = pizzaSauce;
	this.pizzaCheckedToppings = [];
	this.total = total;
}
Pizza.prototype.construct = function(){
 	var toppingCost = this.pizzaCheckedToppings.length * 2.00;
		if(this.pizzaSize === "XL") {
			this.total = 24.95;
		} else if(this.pizzaSize === "Large") {
			this.total = 19.99;
		} else if(this.pizzaSize === "Medium") {
			this.total = 16.00;
		} else if(this.pizzaSize === "Small") {
			this.total = 14.00;
		} else {
			return (this.total + toppingCost);
		}
		console.log(this.total + toppingCost);
}
Pizza.prototype.sentence = function(){

	return "You bought an" + " " + this.pizzaSize + " " + this.pizzaCrust + " " + " Style pizza with " + this.pizzaSauce + " " + "Sauce and the following toppings." + " " + this.pizzaCheckedToppings + " " + "Your total is: " + this.total;

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
				var total = 0;
				var pizza1 = new Pizza(pizzaSize, pizzaCrust, pizzaSauce, total);

			$("input:checkbox[name=topping]:checked").each(function(){
				var topping = $(this).val();
					pizza1.pizzaCheckedToppings.push(topping);
				});


				// var finalCost = pizza1.construct(pizzaSize, pizzaCrust, pizzaSauce, pizzaCheckedToppings, this.total);

				pizza1.construct();
				$("#complete-pizza").append("<p>" + pizza1.sentence() + "</p>");
				console.log(pizza1);

	});
});
