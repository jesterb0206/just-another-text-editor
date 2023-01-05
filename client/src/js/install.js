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

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
