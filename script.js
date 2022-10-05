const body = document.getElementById("body");
const menuAir = document.getElementById("air");
const menuWater = document.getElementById("water");
const menuEarth = document.getElementById("earth");
const menuFire = document.getElementById("fire");
const liquidElement = document.getElementById("liquid");

const resetColor = "rgb(158,158,158)";
const airColor = "rgb(0, 46, 31)";
const waterColor = "rgb(0, 16, 41)";
const earthColor = "rgb(32, 17, 3)";
const fireColor = "rgb(24, 3, 0)";

eventHandler(menuAir, airColor, resetColor, body, liquidElement);
eventHandler(menuWater, waterColor, resetColor, body, liquidElement);
eventHandler(menuEarth, earthColor, resetColor, body, liquidElement);
eventHandler(menuFire, fireColor, resetColor, body, liquidElement);

function eventHandler(
  menuItem,
  elementColor,
  resetColor,
  target
) {
  menuItem.addEventListener("mouseover", () => {
    changeEnviroment(elementColor, target);
  });
  menuItem.addEventListener("mouseout", () => {
    resetEnviroment(resetColor, target);
  });
}

function changeEnviroment(elementColor, target) {
  target.style.background = elementColor;
}

function resetEnviroment(resetColor, target) {
  target.style.background = resetColor;
}
