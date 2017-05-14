// BACK END LOGIC BELOW THIS POINT
function pizza(Size, Cost, toppings){
	this.Size = Size;
	this.Cost = Cost;
	this.toppings = toppings;
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
				var Size = $("#userInputSize").val();
				var Toppings = [];
			$("input:checkbox[name=topping]:checked").each(function() {
				var topping = $(this).val();
					Toppings.push(topping);
				});

				var myPizza = new pizza(Size, Cost, Toppings);

				$("#complete-pizza").append("<p>" + myPizza + "</p>");





	});
});
