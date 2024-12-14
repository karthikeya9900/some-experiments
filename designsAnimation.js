function createScreen(width, height) {
  const screen = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(' ');
    }
    screen.push(row);
  }
  return screen;
}

function putPixel(screen, char, x, y) {
  if (x < 0 || x >= screen[0].length || y < 0 || y >= screen.length) {
    return;
  }

  screen[Math.floor(y)][Math.floor(x)] = char;
}

function putString(screen, str, x, y) {
  for (let i = 0; i < str.length; i++) {
    putPixel(screen, str[i], x + i, y);
  }
}

function screenToString(screen) {
  let frame = '';
  for (let i = 0; i < screen.length; i++) {
    frame += screen[i].join('');
  }

  return frame;
}

function putCurve(screen, particle) {
  const position = particle[0];
  const symbol = particle[1];
  const radius = particle[2];
  const angle = particle[3];

  const x = position[0] + radius * Math.cos(angle);
  const y = position[1] + radius * Math.sin(angle);

  putString(screen, ' ', position[0], position[1]);
  putString(screen, symbol, x, y);
}

function updateCurve(particle) {
  const angle = particle[3];
  const angularSpeed = particle[4];

  // Update angle
  particle[3] = angle + angularSpeed;
}

// ----------------------------------- my functions -------------------------

function putCurves(screen, curves) {
  for (const curve of curves) {
    putCurve(screen, curve);
  }
}

function updateCurves(curves) {
  for (const curve of curves) {
    updateCurve(curve);
  }
}

function animate(screen, curves, steps) {
  let frames = '';

  for (let i = 0; i < steps; i++) {
    putCurves(screen, curves);
    updateCurves(curves);
    frames += screenToString(screen);
  }

  return frames;
}

function animateOneByOneCurve(screen, curves, steps) {
  let frames = "";

  for (const curve of curves) {
    frames += drawSingleCurve(steps, screen, curve);
  }

  return frames;
}

function drawSingleCurve(steps, screen, curve) {
  let frames = "";

  for (let index = 0; index < steps; index++) {
    putCurve(screen, curve);
    updateCurve(curve);
    frames += screenToString(screen);
  }

  return frames;

}

function displayAnimFormat(width, height, frames) {
  console.log(width, height);
  console.log(frames);
}

// particle = [position, name, radius, angle, angularSpeed]
// angle and angular speed in radians

function main(WIDTH, HEIGHT, curves, type, steps) {
  const screen = createScreen(WIDTH, HEIGHT);

  const frames = type === "parallel" ? animate(screen, curves, steps) :
    animateOneByOneCurve(screen, curves, steps);

  displayAnimFormat(WIDTH, HEIGHT, frames);

}

const design1 = function () {
  const WIDTH = 45;
  const HEIGHT = 45;
  const curve1 = [[0, 23], '*', 22, 90, 0.13];
  const curve2 = [[23, 45], '*', 22, 90, 0.13];
  const curve3 = [[45, 23], '*', 22, -45, 0.13];
  const curve4 = [[23, 0], '*', 22, 0, 0.13];
  const curves = [curve1, curve2, curve3, curve4];

  main(WIDTH, HEIGHT, curves, "parallel", 50);
};

// design1();


const design2 = function () {
  const WIDTH = 45;
  const HEIGHT = 45;
  const curve1 = [[0, 23], '*', 22, 90, 0.13];
  const curve2 = [[23, 45], '*', 22, 90, 0.13];
  const curve3 = [[45, 23], '*', 22, -45, 0.13];
  const curve4 = [[23, 0], '*', 22, 0, 0.13];
  const curves = [curve1, curve2, curve3, curve4];

  main(WIDTH, HEIGHT, curves, "series", 45);
};

design2();

/*

for diamond series

const curve1 = [[0, 0], '*', 22.5, 180, 0.13];
const curve2 = [[0, 45], '*', 22.5, 90, 0.13];
const curve4 = [[45, 0], '*', 22.5, 180, 0.13];
const curve3 = [[45, 45], '*', 22.5, 0, 0.13];
const curves = [curve1, curve2, curve3, curve4];

const frames = animateOneByOneCurve(screen, curves, 50);


for flower series

  const curve1 = [[0, 23], '*', 22, 90, 0.13];
  const curve2 = [[23, 45], '*', 22, 90, 0.13];
  const curve3 = [[45, 23], '*', 22, -45, 0.13];
  const curve4 = [[23, 0], '*', 22, 0, 0.13];
  const curves = [curve1, curve2, curve3, curve4];

  const frames = animateOneByOneCurve(screen, curves, 50);

*/
