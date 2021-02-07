/* eslint-disable @typescript-eslint/no-explicit-any */
import { state } from "@/state"
import { Platform } from "@/platforms/platforms"

export let toolboxXML: string;

export async function getToolboxXml() {
  toolboxXML = "";

  toolboxXML = "<xml>";

  (await import("@/platforms/general/definitions")).default(Blockly.Blocks);
  (await import("@/platforms/general/generators")).default(
    Blockly.Python as any
  );

  if (state.mode === Platform.Python) {
    (await import("@/platforms/python/blocks/imports/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/imports/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/imports/toolbox.xml");

    (await import("@/platforms/python/blocks/variables/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/variables/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/variables/toolbox.xml");

    (await import("@/platforms/python/blocks/statements/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/statements/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/statements/toolbox.xml");

    (await import("@/platforms/python/blocks/logic/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/logic/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/logic/toolbox.xml");

    (await import("@/platforms/python/blocks/lists/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/lists/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/lists/toolbox.xml");

    (await import("@/platforms/python/blocks/loops/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/loops/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/loops/toolbox.xml");

    (await import("@/platforms/python/blocks/definitions/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/definitions/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/definitions/toolbox.xml");

    (await import("@/platforms/python/blocks/math/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/math/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/math/toolbox.xml");

    (await import("@/platforms/python/blocks/turtle/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/turtle/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/turtle/toolbox.xml");

    (await import("@/platforms/python/blocks/graphs/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/graphs/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/graphs/toolbox.xml");

    (await import("@/platforms/python/blocks/random/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/random/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/random/toolbox.xml");

    (await import("@/platforms/python/blocks/processing/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/processing/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/processing/toolbox.xml");

    (await import("@/platforms/python/blocks/requests/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/python/blocks/requests/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/python/blocks/requests/toolbox.xml");
  }

  if (state.mode === Platform.MicroBit) {
    (await import("@/platforms/microbit/blocks/basic/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/microbit/blocks/basic/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/microbit/blocks/basic/toolbox.xml");

    (await import("@/platforms/microbit/blocks/variables/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/microbit/blocks/variables/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/microbit/blocks/variables/toolbox.xml");

    (await import("@/platforms/microbit/blocks/display/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/microbit/blocks/display/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/microbit/blocks/display/toolbox.xml");

    (await import("@/platforms/microbit/blocks/buttons/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/microbit/blocks/buttons/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/microbit/blocks/buttons/toolbox.xml");

    (
      await import("@/platforms/microbit/blocks/accelerometer/definitions")
    ).default(Blockly.Blocks);
    (
      await import("@/platforms/microbit/blocks/accelerometer/generators")
    ).default(Blockly.Python as any);
    toolboxXML += require("@/platforms/microbit/blocks/accelerometer/toolbox.xml");

    (await import("@/platforms/microbit/blocks/compass/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/microbit/blocks/compass/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/microbit/blocks/compass/toolbox.xml");

    (await import("@/platforms/microbit/blocks/radio/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/microbit/blocks/radio/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/microbit/blocks/radio/toolbox.xml");

    (await import("@/platforms/microbit/blocks/speech/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/microbit/blocks/speech/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/microbit/blocks/speech/toolbox.xml");

    (await import("@/platforms/microbit/blocks/music/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/microbit/blocks/music/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/microbit/blocks/music/toolbox.xml");

    (
      await import("@/platforms/microbit/blocks/microphone/definitions")
    ).default(Blockly.Blocks);
    (await import("@/platforms/microbit/blocks/microphone/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/microbit/blocks/microphone/toolbox.xml");

    (await import("@/platforms/microbit/blocks/neopixel/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/microbit/blocks/neopixel/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/microbit/blocks/neopixel/toolbox.xml");

    (await import("@/platforms/microbit/blocks/pins/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/microbit/blocks/pins/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/microbit/blocks/pins/toolbox.xml");
  }

  if (state.mode === "CircuitPython") {
    (
      await import("@/platforms/circuitpython/blocks/basic/definitions")
    ).default(Blockly.Blocks);
    (await import("@/platforms/circuitpython/blocks/basic/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/circuitpython/blocks/basic/toolbox.xml");

    (await import("@/platforms/microbit/blocks/variables/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/microbit/blocks/variables/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/microbit/blocks/variables/toolbox.xml");

    (
      await import("@/platforms/circuitpython/blocks/digital/definitions")
    ).default(Blockly.Blocks);
    (
      await import("@/platforms/circuitpython/blocks/digital/generators")
    ).default(Blockly.Python as any);
    toolboxXML += require("@/platforms/circuitpython/blocks/digital/toolbox.xml");

    (
      await import("@/platforms/circuitpython/blocks/analog/definitions")
    ).default(Blockly.Blocks);
    (
      await import("@/platforms/circuitpython/blocks/analog/generators")
    ).default(Blockly.Python as any);
    toolboxXML += require("@/platforms/circuitpython/blocks/analog/toolbox.xml");

    (
      await import("@/platforms/circuitpython/blocks/neopixel/definitions")
    ).default(Blockly.Blocks);
    (
      await import("@/platforms/circuitpython/blocks/neopixel/generators")
    ).default(Blockly.Python as any);
    toolboxXML += require("@/platforms/circuitpython/blocks/neopixel/toolbox.xml");

    (
      await import("@/platforms/circuitpython/blocks/touch/definitions")
    ).default(Blockly.Blocks);
    (await import("@/platforms/circuitpython/blocks/touch/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/circuitpython/blocks/touch/toolbox.xml");

    (
      await import("@/platforms/circuitpython/blocks/servo/definitions")
    ).default(Blockly.Blocks);
    (await import("@/platforms/circuitpython/blocks/servo/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/circuitpython/blocks/servo/toolbox.xml");

    (
      await import("@/platforms/circuitpython/blocks/audio/definitions")
    ).default(Blockly.Blocks);
    (await import("@/platforms/circuitpython/blocks/audio/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/circuitpython/blocks/audio/toolbox.xml");

    (await import("@/platforms/circuitpython/blocks/pwm/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/circuitpython/blocks/pwm/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/circuitpython/blocks/pwm/toolbox.xml");

    (
      await import("@/platforms/circuitpython/blocks/dotstar/definitions")
    ).default(Blockly.Blocks);
    (
      await import("@/platforms/circuitpython/blocks/dotstar/generators")
    ).default(Blockly.Python as any);
    toolboxXML += require("@/platforms/circuitpython/blocks/dotstar/toolbox.xml");

    (
      await import("@/platforms/circuitpython/blocks/advanced/definitions")
    ).default(Blockly.Blocks);
    (
      await import("@/platforms/circuitpython/blocks/advanced/generators")
    ).default(Blockly.Python as any);
    toolboxXML += require("@/platforms/circuitpython/blocks/advanced/toolbox.xml");

    (await import("@/platforms/circuitpython/blocks/cpx/definitions")).default(
      Blockly.Blocks
    );
    (await import("@/platforms/circuitpython/blocks/cpx/generators")).default(
      Blockly.Python as any
    );
    toolboxXML += require("@/platforms/circuitpython/blocks/cpx/toolbox.xml");
  }

  toolboxXML += "</xml>";

  return toolboxXML;
}
