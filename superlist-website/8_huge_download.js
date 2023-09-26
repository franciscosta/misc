
// ------------------------------------------------
// A. Updates the color of the huge download based on the quadrant the cursor is in
// ------------------------------------------------

function updateButtonColor(e) {

  // 1. Calculate the quadrants
  const width = window.innerWidth;
  const height = window.innerHeight;

  const halfWidth = width / 2;
  const halfHeight = height / 2;

  const quadrant = (e.clientX > halfWidth) + 2 * (e.clientY > halfHeight);

  // 2. Get the button
  const button = document.querySelector('.s23-huge-download-link');

  // 3. Apply the color
  const colors = ['#F84F39', '#6B66DA', '#2590F2', '#2A966F'];
  button.style.backgroundColor = colors[quadrant];
}

// 4. Update the color on mousemove
document.addEventListener('mousemove', function(e) {
  updateButtonColor(e)
});