	var board_size;

	function randomColor(){
		var letters = '0123456789ABCDEF'.split('');
		var color = '#'
		for(var i = 0; i < 6; i++){
			color += letters[Math.floor(Math.random() *16)];
		}
		return color;
	}
	
	function draw(){
		var isDown = false;
		$(".cell").mousedown(function(){
			isDown = true;
			$(this).css("background-color", randomColor());
		});
		$(".cell").mouseup(function(){
			isDown = false;
		});
		$(".cell").mouseover(function(){
			if(isDown){
				$(this).css("background-color", randomColor());
			}
		})
	}

	$(document).on("click", "#resize", function() {
	 	board_size	= document.getElementById("resize_input").value;
	 	if(board_size > 128 || board_size <= 0){
	 		do{
	 			board_size = prompt("Enter a valid board size between 1-128: ");
	 		}while(board_size > 128 || board_size <= 0);
	 		document.getElementById("resize_input").value = board_size;
	 	}
	 	$(".row, .cell").remove();
	 	$("#psize").remove();
	 	$("#psize1").remove();
	 	for(var i = 0; i < board_size; i++){
			$(".table").append("<div class='row'></div>");
			console.log(i);
		}
		for(var i = 0; i < board_size; i++){
			$(".row").append("<div class='cell'></div>");
		}
		$(".cell").css("width", ((765-(board_size*2))/board_size));
		$(".cell").css("height", ((765-(board_size*2))/board_size));
		$("#table_title").append("<p id='psize'>Your " + board_size + "x" + board_size + " sketchpad:</p>");
		$("#table_title").append("<p id='psize1'>Click to square to draw!</p>")
		draw();
	})
