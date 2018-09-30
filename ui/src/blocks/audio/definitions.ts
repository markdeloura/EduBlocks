export default function define(Blocks: Blockly.BlockDefinitions) {
  let audiocol = "#4CE254"
  Blocks['import_audio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import audioio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
      this.setTooltip('Imports the DigitalIO library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['audio_enable'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("audio"), "pin")
          .appendField(".switch_to_output(")
          .appendField(new Blockly.FieldTextInput("value=True"), "val")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['audio_conf'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("audio"), "pin")
          .appendField(" = audioio.AudioOut(")
          .appendField(new Blockly.FieldTextInput(""), "pinno")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['audio_wav'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("audio"), "pin")
          .appendField(" = audioio.WaveFile(")
          .appendField(new Blockly.FieldTextInput(""), "pinno")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blocks['audio_open'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("data"), "data")
          .appendField(" = open(")
          .appendField(new Blockly.FieldTextInput(""), "pinno")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blocks['audio_playing'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("audio"), "pin")
          .appendField(".playing");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['audio_raw'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("sample"), "pin")
          .appendField(" = audioio.RawSample(")
          .appendField(new Blockly.FieldTextInput(""), "pinno")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['audio_play'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("audio"), "pin")
          .appendField(".play(")
          .appendField(new Blockly.FieldTextInput(""), "pinno")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['audio_stop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("audio"), "pin")
          .appendField(".stop()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


}