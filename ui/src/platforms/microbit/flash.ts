import * as DAPjs from '../../lib/dapjs';
/// <reference path="./lib/microbit.d.ts" />

export async function flashMicroBit(python: string, onProgress: (progress: number) => void) {
  console.log('Select your micro:bit');

  const device = await navigator.usb.requestDevice({
    filters: [{ vendorId: 0x0d28, productId: 0x0204 }],
  });

  // Connect to device
  window.transport = new DAPjs.WebUSB(device);
  window.daplink = new DAPjs.DAPLink(window.transport);

  // Ensure disconnected
  window.daplink.disconnect();

  // Event to monitor flashing progress
  window.daplink.on(DAPjs.DAPLink.EVENT_PROGRESS, (progress: number) => {
    console.log('progress', progress);

    onProgress(progress);
  });

  try {
    // Push binary to board
    await window.daplink.connect();

    try {
      flashUniversalHex(python)
    } catch (e) {
      alert(e.message);
      return;
    }
  
    } catch (e) {
    console.log('Error flashing: ' + e);

    // If micro:bit does not support dapjs
    if (e.message === 'No valid interfaces found.') {
      return;
    } else if (e.message === 'Unable to claim interface.') {
      return;
    }
  }
}
