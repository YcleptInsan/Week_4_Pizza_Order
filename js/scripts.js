// BACK END LOGIC BELOW THIS POINT


// FRONT END LOGIC BELOW THIS POINT
$(document).ready(function(){
	$("#blueLink").click(function(event){
		event.preventDefault();
		$(".form-group").toggle();
		$(".col-md-6").toggle();

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

		$("#button1").submit(function(){
			var pizzaSize = $("#userInputSize").val();
			var pizzaSauce = $("#userInputSauce").val();
			var pizzaCrust = $("#userInputCrust").val();
			var pizzaAllToppings = $("input:checkbox[name=topping]:checked").each(function(){
			var checkToppings = $(this).val();

				//next do something with this var that has the state of which checkbox is checked
				$('#complete-pizza').append(checkToppings + "<br>");
			});
		});
	});
});
