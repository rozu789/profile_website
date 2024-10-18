 // Function to handle grade input
 function handleGradeInput(input) {
    var gradeValue = parseFloat(input.value); // Get the grade input and convert to number
    var creditCell = input.parentElement.nextElementSibling; // Get the next column (EC value)
    var ecValue = parseFloat(creditCell.innerText.split(' ')[0]); // Extract the EC value (assumes "(value) EC" format)

    // Only process if the grade is valid and greater than or equal to 5.5
    if (!isNaN(gradeValue)) {
      // Replace the input with the grade text
      input.parentElement.innerHTML = gradeValue;

      // Check if the grade is above or equal to 5.5
      if (gradeValue >= 5.5) {
        // Update the progress bar with the EC value
        addToProgressBar(ecValue);
      }
    }
  }

  // Function to update the progress bar
  function addToProgressBar(ecValue) {
    var progressBar = document.getElementById("progressBar");
    var progressText = document.getElementById("progressText"); // Reference to the progress text element
    var currentProgress = parseFloat(progressBar.value);
    var newProgress = currentProgress + ecValue;

    // Ensure progress doesn't exceed the max value
    if (newProgress <= 60) {
      progressBar.value = newProgress;
      progressText.innerText = `${newProgress} / 60`; // Update the progress text
    } else {
      progressBar.value = 60; // Cap the value at 60
      progressText.innerText = `60 / 60`; // Set to max value
    }
  }

  window.onload = function () {
    // Set the initial progress bar value and text
    var progressBar = document.getElementById("progressBar");
    var progressText = document.getElementById("progressText");
    progressBar.value = 0; // Start at 0 by default
    progressText.innerText = `0 / 60`; // Display initial progress text
  };
