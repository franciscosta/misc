
// ------------------------------------------------
// A. Decreases the opacity of each element programatically
// ------------------------------------------------

function adjustOpacity() {

  // 1. Get all the elements
  const elements = document.querySelectorAll('.s23-laundry-row-title');
  
  // 2. Calculate the decrement based on the number of elements
  const decrement = (1 - 0.1) / (elements.length - 1); 

  // 3. Reduce opacity accordingly
  for (let i = 1; i < elements.length; i++) {
      const targetOpacity = 1 - i * decrement;
      elements[i].style.opacity = targetOpacity.toFixed(2); 
  }
}

adjustOpacity();