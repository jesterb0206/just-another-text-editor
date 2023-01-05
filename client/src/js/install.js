const buttonInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// An event handler for the beforeinstallprompt event

window.addEventListener('beforeinstallprompt', (event) => {
  // Stores triggered events

  window.deferredPrompt = event;
  console.log('Before Install Prompt');

  // Removes the hidden class

  buttonInstall.classList.toggle('hidden', false);
});

// A click event handler on the 'buttonInstall' element

buttonInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Shows prompt

  prompt.Event.prompt();

  // Resets the deferred prompt variable (can only be used once)

  window.deferredPrompt = null;
  buttonInstall.classList.toggle('hidden', true);
});

// Adds a handler for the 'appinstalled' event

window.addEventListener('appinstalled', (event) => {
  console.log('The app was successfully installed!');

  // Clear prompt

  window.deferredPrompt = null;
});
