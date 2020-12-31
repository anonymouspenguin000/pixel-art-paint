function range(n) {
	let _newArr = [];
	for (let i = 0; i < n; i++) _newArr.push(i);
	return _newArr;
}

window.onload = function () {
	if (localStorage.getItem('customPuzzles') == null) localStorage.setItem('customPuzzles', '[]');
	let custom = JSON.parse(localStorage.getItem('customPuzzles'));

	let game = document.getElementById('pixels');
	let ctx = game.getContext('2d');

	let puzzles = [
		[["#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff"],["#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff"],["#c1ffff","#c1ffff","#c1ffff","#000000","#000000","#000000","#c1ffff","#c1ffff","#c1ffff","#000000","#000000","#000000","#c1ffff","#c1ffff","#c1ffff"],["#c1ffff","#c1ffff","#000000","#ff0000","#ff0000","#ff0000","#000000","#c1ffff","#000000","#ff0000","#ff0000","#ff0000","#000000","#c1ffff","#c1ffff"],["#c1ffff","#000000","#ff0000","#ff4f4f","#ff4f4f","#ff4f4f","#ff0000","#000000","#ff0000","#ff4f4f","#ff4f4f","#ff4f4f","#ff0000","#000000","#c1ffff"],["#c1ffff","#000000","#ff0000","#ff4f4f","#ff8282","#ff8282","#ff4f4f","#ff0000","#ff4f4f","#ff8282","#ff8282","#ff4f4f","#ff0000","#000000","#c1ffff"],["#c1ffff","#000000","#ff0000","#ff4f4f","#ff8282","#ff8282","#ff8282","#ff4f4f","#ff8282","#ff8282","#ff8282","#ff4f4f","#ff0000","#000000","#c1ffff"],["#c1ffff","#000000","#ff0000","#ff4f4f","#ff8282","#ff8282","#ff8282","#ff8282","#ff8282","#ff8282","#ff8282","#ff4f4f","#ff0000","#000000","#c1ffff"],["#c1ffff","#c1ffff","#000000","#ff0000","#ff4f4f","#ff8282","#ff8282","#ff8282","#ff8282","#ff8282","#ff4f4f","#ff0000","#000000","#c1ffff","#c1ffff"],["#c1ffff","#c1ffff","#c1ffff","#000000","#ff0000","#ff4f4f","#ff8282","#ff8282","#ff8282","#ff4f4f","#ff0000","#000000","#c1ffff","#c1ffff","#c1ffff"],["#c1ffff","#c1ffff","#c1ffff","#c1ffff","#000000","#ff0000","#ff4f4f","#ff8282","#ff4f4f","#ff0000","#000000","#c1ffff","#c1ffff","#c1ffff","#c1ffff"],["#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#000000","#ff0000","#ff4f4f","#ff0000","#000000","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff"],["#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#000000","#ff0000","#000000","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff"],["#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#000000","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff"],["#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff","#c1ffff"]],
		[["#000000","#000000","#00ff00","#00ff00","#00ff00"],["#000000","#ff0000","#ffff00","#ffff00","#00ff00"],["#000000","#ff0000","#ffffff","#ffffff","#00ffff"],["#000000","#ff0000","#ff00ff","#ff00ff","#0000ff"],["#000000","#000000","#0000ff","#0000ff","#0000ff"]],
		[["#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4"],["#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4"],["#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4"],["#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4"],["#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4"],["#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4"],["#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4"],["#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#000000","#006600","#006600","#006600","#006600","#006600","#006600","#006600","#006600","#006600","#000000","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4"],["#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#000000","#006600","#006600","#006600","#006600","#006600","#006600","#006600","#006600","#006600","#000000","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4"],["#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#000000","#006600","#006600","#006600","#006600","#006600","#ffcf40","#ffcf40","#006600","#006600","#000000","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4"],["#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#000000","#00c100","#00c100","#00c100","#00c100","#ffcf40","#ffcf40","#00c100","#00c100","#00c100","#000000","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4"],["#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#000000","#00c100","#00c100","#00c100","#ffcf40","#ffcf40","#00c100","#00c100","#00c100","#00c100","#000000","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4"],["#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#000000","#00c100","#00c100","#ffcf40","#ffcf40","#ffcf40","#ffcf40","#00c100","#00c100","#00c100","#000000","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4"],["#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#000000","#00c100","#00c100","#00c100","#ffcf40","#ffcf40","#ffcf40","#ffcf40","#00c100","#00c100","#000000","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4"],["#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#000000","#00c100","#00c100","#00c100","#00c100","#ffcf40","#ffcf40","#00c100","#00c100","#00c100","#000000","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4"],["#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#000000","#00c100","#00c100","#00c100","#ffcf40","#ffcf40","#00c100","#00c100","#00c100","#00c100","#000000","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4"],["#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#000000","#00c100","#00c100","#ffcf40","#ffcf40","#00c100","#00c100","#00c100","#00c100","#00c100","#000000","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4"],["#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#000000","#00c100","#00c100","#00c100","#00c100","#00c100","#00c100","#00c100","#00c100","#00c100","#000000","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4"],["#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#000000","#00c100","#00c100","#00c100","#00c100","#00c100","#00c100","#00c100","#00c100","#00c100","#000000","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4"],["#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#000000","#00c100","#00c100","#00c100","#00c100","#00c100","#00c100","#00c100","#00c100","#00c100","#000000","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4"],["#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4"],["#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4"],["#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4"],["#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4"],["#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4","#ffeba4","#fff9a4","#fff9a4","#ffeba4"]],
		[["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#000000","#000000","#000000","#000000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#d90000","#d90000","#d90000","#d90000","#d90000","#d90000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#d90000","#d90000","#d90000","#d90000","#d90000","#d90000","#d90000","#d90000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#d90000","#d90000","#d90000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#badae0","#badae0","#badae0","#badae0","#badae0","#8fc2cd","#418492","#000000","#d90000","#d90000","#aa0000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#badae0","#badae0","#badae0","#badae0","#badae0","#8fc2cd","#418492","#000000","#d90000","#d90000","#aa0000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#8fc2cd","#8fc2cd","#8fc2cd","#8fc2cd","#8fc2cd","#8fc2cd","#418492","#000000","#d90000","#d90000","#aa0000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#418492","#418492","#418492","#418492","#418492","#418492","#418492","#000000","#d90000","#d90000","#aa0000","#000000","#000000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#d90000","#d90000","#d90000","#aa0000","#000000","#d90000","#d90000","#000000","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#d90000","#d90000","#d90000","#d90000","#d90000","#d90000","#d90000","#d90000","#d90000","#aa0000","#000000","#d90000","#d90000","#000000","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#aa0000","#d90000","#d90000","#d90000","#d90000","#d90000","#d90000","#d90000","#d90000","#aa0000","#000000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#d90000","#d90000","#d90000","#d90000","#aa0000","#aa0000","#aa0000","#000000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#000000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#000000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#aa0000","#000000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#aa0000","#000000","#000000","#aa0000","#aa0000","#aa0000","#aa0000","#000000","#000000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#000000","#aa0000","#aa0000","#aa0000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#000000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#000000","#000000","#000000","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"],["#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033","#ffe033"]],
		[["#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#008000","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#008000","#008000","#008000","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#008000","#008000","#008000","#008000","#008000","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#008000","#008000","#008000","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#008000","#008000","#008000","#008000","#008000","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#008000","#008000","#008000","#008000","#008000","#008000","#008000","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#008000","#008000","#008000","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#008000","#008000","#008000","#008000","#008000","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#008000","#008000","#008000","#008000","#008000","#008000","#008000","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#008000","#008000","#008000","#008000","#008000","#008000","#008000","#008000","#008000","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#7d3f00","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff"],["#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff","#aeffff"]],
		...custom
	];

	let matrix = puzzles[Math.floor(Math.random() * puzzles.length)];
	let colors = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (colors.indexOf(matrix[i][j]) === -1) colors.push(matrix[i][j]);
		}
	}
	for (let i = 0; i < colors.length; i++) {
		let _select = document.createElement('option');
		let _list = document.createElement('li');
		_list.style.color = colors[i];
		_list.innerHTML = (i + 1) + '. ' + colors[i];
		_list.style.textShadow = '1px 1px 2px black';
		_list.style.cursor = 'pointer';
		_list.onclick = () => document.getElementById('color').selectedIndex = i;

		_select.innerHTML = i+1;
		document.getElementById('color').append(_select);
		document.getElementById('color_values').append(_list);
	}

	let cols = matrix[0].length;
	let rows = matrix.length;
	let one = game.width / cols;
	let w = game.width;
	let h = game.height = one * rows;

	let solved = [];
	for (let i of range(rows)) {
		solved[i] = [];
		for (let j of range(cols)) {
			solved[i][j] = 0;
		}
	}
	render();
	function render() {
		ctx.clearRect(0, 0, w, h);
		for (let i of range(rows)) {
			for (let j of range(cols)) {
				if (solved[i][j] === 0) {
					ctx.strokeRect(j * one, i * one, one, one);
					ctx.fillStyle = 'black';
					ctx.font = one / 2 + "px sans-serif";
					ctx.fillText(colors.indexOf(matrix[i][j]) + 1, j * one, (i + 1) * one)
				}
				if (solved[i][j] === 1) {
					ctx.fillStyle = matrix[i][j];
					ctx.fillRect(j * one, i * one, one, one);
				}
			}
		}

		let solved_c1 = 0;
		let solved_c2 = 0;
		for (let i = 0; i < solved.length; i++) {
			for (let j = 0; j < solved[0].length; j++) {
				if (solved[i][j] == 1) solved_c2++;
				solved_c1++;
			}
		}
		if (solved_c2 == solved_c1) {
			alert('You have solved!');
		}
	}

	const move = function (evt) {
		let _x = Math.floor(evt.offsetX / one);
		let _y = Math.floor(evt.offsetY / one);
		if (colors[document.getElementById('color').value - 1] == matrix[_y][_x]) solved[_y][_x] = 1;
		render();
	}
	game.onmouseup = game.onmouseout = () => game.onmousemove = null;
	game.onmousedown = (evt) => {
		game.onmousemove = game.onmousenter = move;
		move(evt);
	};
	window.onkeyup = function(event) {
		if (event.key == 'Tab') {
			event.preventDefault();
			document.getElementById('color').selectedIndex = document.getElementById('color').selectedIndex + 1;
		}
	}
}
