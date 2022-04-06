const HIGHSCORES = [];

export async function saveScore(highscore) {
  HIGHSCORES.push(highscore);
  return highscore;
}

export async function loadScore() {
  return HIGHSCORES;
}