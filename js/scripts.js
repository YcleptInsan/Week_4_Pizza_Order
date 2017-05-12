// BACK END LOGIC BELOW THIS POINT
// var pizzaOrder = function(pizzaSize, pizzaSauce, pizzaCrust, pizzaAllToppings){
// CONSTRUCTOR FOR PIZZA BUILDING
function pizza(pizzaSize, pizzaSauce, pizzaCrust, pizzaAllToppings){
	this.pizzaSize = pizzaSize;
	this.pizzaSauce = pizzaSauce;
	this.pizzaCrust = pizzaCrust;
	this.pizzaAllToppings = pizzaAllToppings;
}

	// var myPizza = new pizza(pizzaSize, pizzaSauce, pizzaCrust, pizzaAllToppings);
	// console.log(myPizza);
	// ASSEMBLE PROTOTYPE
	pizza.prototype.assemble = function(){

		return this.pizzaSize + " " + this.pizzaSauce + " " + this.pizzaCrust + " " + 		 this.pizzaAllToppings;

}
// }

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
			// $("input:checkbox[name=topping]:checked").each(function(){
			// 	var temp = $(this).val();
			// 	toppingsTemp.push(temp);
			// });
				var pizzaSize = $("#userInputSize").val();
				var pizzaSauce = $("#userInputSauce").val();
				var pizzaCrust = $("#userInputCrust").val();
				// var pizzaAllToppings = $("input:checkbox[name=topping]:checked").val();
				var myPizza = new pizza(pizzaSize, pizzaSauce, pizzaCrust, pizzaAllToppings);

				$("#complete-pizza").append("<p>" + myPizza.assemble() + "</p>");
	
	});
});
