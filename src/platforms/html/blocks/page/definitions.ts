export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['textinline'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "text");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FFFFFF");
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Text input for inline input");
      this.setHelpUrl("");
    }
  };

  Blocks['sliderinline'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldSlider("1", "1", "6", "1", "1", "Heading Size"), 'slider');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#FFFFFF");
      this.setTooltip("Heading Size Slider");
      this.setHelpUrl("");
    }
  };

  Blocks['html'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<html>");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</html>");
      this.setColour("#FFC100");
   this.setTooltip("Wrapper for HTML page");
   this.setHelpUrl("");
    }
  };

  Blocks['head'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<head>");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</head>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FFC100");
   this.setTooltip("Wrapper for the page head");
   this.setHelpUrl("");
    }
  };

  Blocks['title'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<title>");
      this.appendValueInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</title>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FFC100");
   this.setTooltip("Add title to HTML page");
   this.setHelpUrl("");
    }
  };

  Blocks['body'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<body>");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</body>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FFC100");
   this.setTooltip("Wrapper for the page body");
   this.setHelpUrl("");
    }
  };
}

