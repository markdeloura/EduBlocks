export const HTMLGenerator: Blockly.Generator = new Blockly.Generator("HTML");

HTMLGenerator.init = (workspace) => {};
HTMLGenerator.finish = (code) => {return code;};

HTMLGenerator.scrub_ = (block, code) => {
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    const nextCode = HTMLGenerator.blockToCode(nextBlock);
    return code + nextCode;
}