export const modFox = function modFox(state) {
  return (document.querySelector(".fox").className = `fox fox-${state}`);
};

export const modScene = function modScene(state) {
  return (document.querySelector(".game").className = `game ${state}`);
};

export const tooglePoopBag = function togglePoopBag(show) {
  return document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};
