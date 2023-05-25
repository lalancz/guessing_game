function chooseRandomMsg(score) {
	$.get('/input_json.json')
		.done(data => {
			let keys = Object.keys(data)
			let randIndex = Math.floor(Math.random() * keys.length)
			let randKey = keys[randIndex]
			let message = data[randKey]["content"].toLowerCase().replace("\n", " ")
			let author = data[randKey]["author"]
			$("#message").text(message)
			$("#score").text(score)
			$("#answer").val(author)
		})
	}

let score = 0
chooseRandomMsg(score)

var audioWin = new Audio("Children Yay! Sound Effect.mp3")
var audioLose = new Audio("what_is_this_game_about_ft_drdisrespect_-1240116428001050212-[AudioTrimmer.com].mp3")

function checkWin(element, answer) {
	if (answer === element.value) {
		score += 1
		audioWin.play()
	} else {
		audioLose.play()
		alert("Ooopsies! That was the wrong answer")
		score = 0
	}
	$("#score").text(score)
	chooseRandomMsg(score)
}
