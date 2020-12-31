function range(n) {
	let _newArr = [];
	for (let i = 0; i < n; i++) _newArr.push(i);
	return _newArr;
}

window.onload = function () {
	if (localStorage.getItem('customPuzzles') == null) localStorage.setItem('customPuzzles', '[]');
	let custom = JSON.parse(localStorage.getItem('customPuzzles'));

  document.getElementById('color').value = '#000';
	let game = document.getElementById('pixels');
	let ctx = game.getContext('2d');

	let matrix = [];
  let colors = ['#000000'];

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (colors.indexOf(matrix[i][j]) === -1) colors.push(matrix[i][j]);
		}
	}

	let cols = 5;
	let rows = 5;
	let one = game.width / cols;
	let w = game.width;
	let h = game.height = one * rows;

  setMatrix(5, 5, false);
	render();
  renColors();
  function setMatrix(c, r, x=true) {
    if (x) if (!confirm('All data will be lost!')) return;
    cols = c;
    rows = r;
    one = game.width / cols;
  	h = game.height = one * rows;
    for (let i = 0; i < r; i++) {
      matrix[i] = [];
  		for (let j = 0; j < c; j++) {
  			matrix[i][j] = '#ffffff';
  		}
  	}
  }
  function renColors() {
    for (let i = 0; i < colors.length; i++) {
      console.log('x');
      if (colors.indexOf(document.getElementById('color').value) == -1) colors.push(document.getElementById('color').value);
    }
    document.getElementById('recent').innerHTML = '';
    for (let i = 0; i < colors.length; i++) {
      let _li = document.createElement('li');
      _li.innerHTML = colors[i] + ' (Click to set)';
      _li.style.color = colors[i];
      _li.style.textShadow = '1px 1px 2px black';
      _li.onclick = () => document.getElementById('color').value = colors[i];
      document.getElementById('recent').append(_li);
    }
  }
	function render() {
		ctx.clearRect(0, 0, w, h);
		for (let i of range(rows)) {
			for (let j of range(cols)) {
				ctx.fillStyle = matrix[i][j];
				ctx.fillRect(j * one, i * one, one, one);
			}
		}
	}
  document.getElementById('apply').onclick = function () {
    setMatrix(
      Number(document.getElementById('width').value),
      Number(document.getElementById('height').value)
    );
  }
  document.getElementById('ok').onclick = function () {
		custom.push(matrix);
		localStorage.setItem('customPuzzles', JSON.stringify(custom));
		location.href = 'index.html';
    //document.getElementById('output').innerHTML = JSON.stringify(matrix);
  }
	game.onclick = function (evt) {
		let _x = Math.floor(evt.offsetX / one);
		let _y = Math.floor(evt.offsetY / one);
		matrix[_y][_x] = document.getElementById('color').value;
		render();
    renColors();
	}
  game.oncontextmenu = function (evt) {
    evt.preventDefault();
		let _x = Math.floor(evt.offsetX / one);
		let _y = Math.floor(evt.offsetY / one);
		matrix[_y][_x] = '#ffffff';
		render();
	}
}
