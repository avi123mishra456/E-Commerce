// Get all the buttons on the left panel
const optionButtons = document.querySelectorAll('.option-btn');

// Get the action container in the right panel
const actionContainer = document.getElementById('action-container');

// Define the actions to display when a button is clicked
const actions = ['Repurchase Intention', 'Word of Mouth', 'Customer Loyalty'];

// Add event listeners to all buttons
optionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Clear the current content in the action container
    actionContainer.innerHTML = '';

    // Get the target name from the button's data attribute
    const targetName = button.dataset.target;

    // Create a heading to display the selected option
    const heading = document.createElement('h3');
    heading.textContent = `Actions for ${targetName}`;
    actionContainer.appendChild(heading);

    // Create buttons for each action
    actions.forEach(action => {
      const actionButton = document.createElement('button');
      actionButton.className = 'action-btn';
      actionButton.textContent = action;

      // Add a click event to the action button
      actionButton.addEventListener('click', () => {
        alert(`You selected "${action}" for "${targetName}"`);
      });

      // Append the button to the action container
      actionContainer.appendChild(actionButton);
    });
  });
});
