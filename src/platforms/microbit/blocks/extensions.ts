/// <reference path="extensions.d.ts" />

// Global State
export const ExtensionsActive: Array<String> =  []


export const Extensions = [
    {
        title: "GiggleBot",
        description: "Hello World",
        image: "assets/platforms/microbit.png",
        manufacturerIcon: "dexter.png",
        definitions: "./gigglebot/definitions",
        generators: "./gigglebot/definitions",
    }
];

export const importPyFiles = () => {
    var FS = microbitFsWrapper;
    
    if (ExtensionsActive.indexOf("GiggleBot") !== -1){
        const gigglebot = require("./gigglebot/gigglebot.py");
        FS.write("gigglebot.py", gigglebot)
    }
}