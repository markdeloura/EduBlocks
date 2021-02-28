export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['iframe'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("<iframe src=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\"");
          this.appendValueInput("attributes")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("></iframe>");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#ED2CD5");
       this.setTooltip("Embed a webpage or video");
       this.setHelpUrl("");
        }
      };

    Blocks['video'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("<video src=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\"");
          this.appendValueInput("attributes")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("></video>");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#ED2CD5");
       this.setTooltip("Embed a video");
       this.setHelpUrl("");
        }
    };

    Blocks['audio'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("<audio src=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\"");
          this.appendValueInput("attributes")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("></audio>");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#ED2CD5");
       this.setTooltip("Embed an audio file");
       this.setHelpUrl("");
        }
    };

    Blocks['image'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("<img src=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\"");
          this.appendValueInput("attributes")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(">");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#ED2CD5");
       this.setTooltip("Display an image");
       this.setHelpUrl("");
        }
    };

    Blocks['media_controls'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([["autoplay","autoplay"], ["controls","controls"], ["loop","loop"], ["muted","muted"]]), "controls");
          this.setOutput(true, null);
          this.setColour("#ED2CD5");
       this.setTooltip("Media Controls");
       this.setHelpUrl("");
        }
    };
}

