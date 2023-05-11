// Check if the developer console is open
function detectDevTools() {
  let devtools = /./;
  devtools.toString = function() {
    if (!this.opened) {
      this.opened = true;
      console.log('Developer tools detected. Logging out...');
      // Redirect to a different page or log the user out
      // For now, just reload the page
      location.reload();
    }
  }
}

// Call the function to start checking for the developer console
detectDevTools();
