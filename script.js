// Select all buttons with the class 'button'
const buttons = document.querySelectorAll('.button');

// Add an event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // When a button is clicked, toggle the display of the alert div
    const alertDiv = document.getElementById('alert');
    alertDiv.classList.toggle('visible');
  });
});

// Function to show an alert message
function showAlert() {
  const alertDiv = document.getElementById('alert');
  alertDiv.classList.add('visible');
  
  // Wait for 2 seconds
  setTimeout(() => {
    alertDiv.classList.remove('visible');
  }, 2000);
}
