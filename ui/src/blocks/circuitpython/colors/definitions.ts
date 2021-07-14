export default function define(Blocks: Blockly.BlockDefinitions) {

  let colcol = "#FF4A60"

  Blocks['colors_black'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("black");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(colcol);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['colors_red'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("red");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(colcol);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['colors_green'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("green");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(colcol);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['colors_blue'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("blue");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(colcol);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['colors_yellow'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("yellow");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(colcol);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['colors_cyan'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cyan");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(colcol);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['colors_magenta'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("magenta");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(colcol);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['colors_white'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("white");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(colcol);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['colors_custom'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("red: ");
      this.appendValueInput("redval")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("green: ");
      this.appendValueInput("greenval")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("blue: ");
      this.appendValueInput("blueval")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(colcol);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

}