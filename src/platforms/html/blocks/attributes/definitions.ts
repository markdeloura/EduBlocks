// @ts-nocheck

export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['id'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("id=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\"");
          this.setInputsInline(true);
          this.setOutput(true, null);
          this.setColour("#00CA4D");
       this.setTooltip("Element ID");
       this.setHelpUrl("");
        }
    };

    Blocks['class'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("class=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\"");
          this.setInputsInline(true);
          this.setOutput(true, null);
          this.setColour("#00CA4D");
       this.setTooltip("Element ID");
       this.setHelpUrl("");
        }
    };

    Blocks['style'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("style=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\"");
          this.setInputsInline(true);
          this.setOutput(true, null);
          this.setColour("#00CA4D");
       this.setTooltip("Element ID");
       this.setHelpUrl("");
        }
    };

    Blocks['height'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("height=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\"");
          this.setInputsInline(true);
          this.setOutput(true, null);
          this.setColour("#00CA4D");
       this.setTooltip("Element ID");
       this.setHelpUrl("");
        }
    };

    Blocks['width'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("width=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\"");
          this.setInputsInline(true);
          this.setOutput(true, null);
          this.setColour("#00CA4D");
       this.setTooltip("Element ID");
       this.setHelpUrl("");
        }
    };

    Blocks['value'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("value=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\"");
          this.setInputsInline(true);
          this.setOutput(true, null);
          this.setColour("#00CA4D");
       this.setTooltip("Set Value");
       this.setHelpUrl("");
        }
    };

    Blocks['placeholder'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("placeholder=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\"");
          this.setInputsInline(true);
          this.setOutput(true, null);
          this.setColour("#00CA4D");
       this.setTooltip("Set Placeholder");
       this.setHelpUrl("");
        }
    };

    Blocks['type'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("type=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\"");
          this.setInputsInline(true);
          this.setOutput(true, null);
          this.setColour("#00CA4D");
       this.setTooltip("Set Type");
       this.setHelpUrl("");
        }
    };

    Blocks['attributes'] = {
        init: function() {
          var inputsC = 1;    
          this.setOutput(true, 'FOO');
          this.setColour("#00CA4D");
          this.setInputsInline(true);
          
          this.appendValueInput('in1')
        },
        
          mutationToDom: function () {
              var container = Blockly.utils.xml.createElement('mutation');
              container.setAttribute('inputCount', this.inputsC);
              return container;
          },
          
       
          domToMutation: function (xmlElement) {
              this.inputsC = parseInt(xmlElement.getAttribute('inputCount'), 10) || 1;
              this.updateShape_();
          },
        
          updateShape_: function() {
              this.removeInput('in1');
              
              if(this.inputsC == 1){
                  this.appendValueInput('in1')
                  .appendField(new Blockly.FieldImage(
                      "https://fonts.gstatic.com/s/i/materialiconsoutlined/add/v4/24px.svg?download=true",
                      15,
                      15,
                  "*", function() {
                  this.getSourceBlock().plus_();
                  } ));
              }
              else if(this.inputsC == 5){
                  this.appendValueInput('in1')
                  .appendField(new Blockly.FieldImage(
                      "https://fonts.gstatic.com/s/i/materialiconsoutlined/remove/v4/24px.svg?download=true",
                      15,
                      15,
                  "*", function() {
                  this.getSourceBlock().minus_();
                  } ));
              }
              else{
                  this.appendValueInput('in1')
                  .appendField(new Blockly.FieldImage(
                      "https://fonts.gstatic.com/s/i/materialiconsoutlined/remove/v4/24px.svg?download=true",
                      15,
                      15,
                  "*", function() {
                  this.getSourceBlock().minus_();
                  } ))
                  .appendField(new Blockly.FieldImage(
                      "https://fonts.gstatic.com/s/i/materialiconsoutlined/add/v4/24px.svg?download=true",
                      15,
                      15,
                  "*", function() {
                  this.getSourceBlock().plus_();
                  } ));
              }
              
              var i = 2;
              while (this.getInput('in' + i)) {
                 this.removeInput('in' + i);
              i++;
              }
            
              for (var x = 2; x <= this.inputsC; x++) {
                 this.appendValueInput('in' + x)
              }
          },
       
       
          plus_: function (){
              this.inputsC = (this.inputsC + 1);
              this.updateShape_();
          },
        
          minus_: function (){
              this.inputsC = (this.inputsC - 1);
              this.updateShape_();
          }
      };
      
}

