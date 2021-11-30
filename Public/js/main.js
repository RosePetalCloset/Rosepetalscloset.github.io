// nav

let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");

    nav.style.position = "fixed";
  } else {
    nav.classList.remove("sticky");
  }
});

let lathu = "helllo world";
console.log(lathu);
// sticky nav

// ripple effect

const buttons = document.getElementById("button");

buttons.addEventListener("click", (event) => {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  buttons.appendChild(circle);
});

if (window.Error) {
  console.log("ell");
}

