export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['style_block'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("<style>");
          this.appendStatementInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("</style>");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Style block");
       this.setHelpUrl("");
        }
    };

    Blocks['stylesheet_link'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("<link rel=\"stylesheet\" href=\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\">");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Add a link to an external stylesheet");
       this.setHelpUrl("");
        }
    };

    Blocks['pseudo'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(":")
              .appendField(new Blockly.FieldDropdown([[":before",":before"], [":after",":after"], ["focus","focus"], ["hover","hover"]]), "options");
          this.setOutput(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Pseudo element");
       this.setHelpUrl("");
        }
    };

    Blocks['element_style'] = {
        init: function() {
          this.appendValueInput("element")
              .setCheck(null);
          this.appendValueInput("attributes")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("{");
          this.appendStatementInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("}");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Pseudo element");
       this.setHelpUrl("");
        }
    };

    Blocks['text_color'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("text-color: ");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Set text color");
       this.setHelpUrl("");
        }
    };

    Blocks['font_family'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("font-family: ");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Set text font family");
       this.setHelpUrl("");
        }
    };

    Blocks['font_size_value'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("font-size: ");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([["px","px"], ["em","em"], ["rem","rem"], ["%","%"]]), "type")
              .appendField(";");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Set font-size to a value");
       this.setHelpUrl("");
        }
    };

    Blocks['font_size_text'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("font-size: ")
              .appendField(new Blockly.FieldDropdown([["initial","initial"], ["inherit","inherit"], ["xx-small","xx-small"], ["x-small","x-small"], ["small","small"], ["large","large"], ["x-large","x-large"], ["xx-large","xx-large"], ["smaller","smaller"], ["larger","larger"]]), "size")
              .appendField(";");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Set font size");
       this.setHelpUrl("");
        }
    };

    Blocks['color_picker'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldColour("#ff0000"), "color");
          this.setOutput(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Color Picker");
       this.setHelpUrl("");
        }
    };

    Blocks['rgba'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("rgba(");
          this.appendValueInput("r")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(", ");
          this.appendValueInput("g")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(", ");
          this.appendValueInput("b")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(", ");
          this.appendValueInput("a")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(")");
          this.setInputsInline(true);
          this.setOutput(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Set RGBA color value");
       this.setHelpUrl("");
        }
    };

    Blocks['text_align'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("text-align: ")
              .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"], ["center","center"], ["justify","justify"]]), "align");
          this.appendDummyInput()
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Align Text");
       this.setHelpUrl("");
        }
    };

    Blocks['text_transform'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("text-transform: ")
              .appendField(new Blockly.FieldDropdown([["none","none"], ["capitalize","capitalize"], ["uppercase","uppercase"], ["lowercase\t","lowercase\t"], ["initial","initial"], ["inherit","inherit"]]), "transform");
          this.appendDummyInput()
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Transform text");
       this.setHelpUrl("");
        }
    };

    Blocks['text_decoration'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("text-decoration:")
              .appendField(new Blockly.FieldDropdown([["underline","underline"], ["overline","overline"], ["line-through","line-through"], ["initial","initial"], ["inherit","inherit"], ["none","none"]]), "line")
              .appendField(new Blockly.FieldDropdown([["solid","solid"], ["double","double"], ["dotted","dotted"], ["dashed","dashed"], ["wavy","wavy"], ["initial","initial"], ["inherit","inherit"]]), "style");
          this.appendDummyInput()
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Change the text decoration");
       this.setHelpUrl("");
        }
    };

    Blocks['text_shadow'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("text-shadow: ");
          this.appendValueInput("h")
              .setCheck(null);
          this.appendValueInput("v")
              .setCheck(null);
          this.appendValueInput("blur")
              .setCheck(null);
          this.appendValueInput("color")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Add a text shadow");
       this.setHelpUrl("");
        }
    };

    Blocks['display'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("display: ")
              .appendField(new Blockly.FieldDropdown([["block","block"], ["none","none"], ["flex","flex"], ["inline","inline"], ["inline-block","inline-block"], ["inline-flex","inline-flex"], ["inline-table","inline-table"], ["table","table"], ["inherit","inherit"], ["initial","initial"]]), "options")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Configure element display behavior");
       this.setHelpUrl("");
        }
    };

    Blocks['margin_direction'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("margin-")
              .appendField(new Blockly.FieldDropdown([["top","top"], ["bottom","bottom"], ["left","left"], ["right","right"]]), "direction")
              .appendField(": ");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([["px","px"], ["em","em"], ["rem","rem"], ["%","%"]]), "unit")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Apply margin to specified direction");
       this.setHelpUrl("");
        }
    };

    Blocks['margin'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("margin: ")
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([["px","px"], ["em","em"], ["rem","rem"], ["%","%"]]), "unit")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Apply margin");
       this.setHelpUrl("");
        }
    };

    Blocks['padding_direction'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("padding-")
              .appendField(new Blockly.FieldDropdown([["top","top"], ["bottom","bottom"], ["left","left"], ["right","right"]]), "direction")
              .appendField(": ");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([["px","px"], ["em","em"], ["rem","rem"], ["%","%"]]), "unit")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Apply padding to specified direction");
       this.setHelpUrl("");
        }
    };

    Blocks['padding'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("padding: ")
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([["px","px"], ["em","em"], ["rem","rem"], ["%","%"]]), "unit")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Apply padding");
       this.setHelpUrl("");
        }
    };

    Blocks['overflow'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("overflow-")
              .appendField(new Blockly.FieldDropdown([["x","x"], ["y","y"]]), "direction")
              .appendField(": ")
              .appendField(new Blockly.FieldDropdown([["scroll","scroll"], ["auto","auto"], ["hidden","hidden"], ["visible","visible"], ["initial","inital"], ["inherit","inherit"]]), "options")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Configure the overflow of an element");
       this.setHelpUrl("");
        }
    };

    Blocks['float'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("float: ")
              .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"]]), "options")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Float element to specified direction");
       this.setHelpUrl("");
        }
    };

    Blocks['element_width'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("width: ");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([["px","px"], ["em","em"], ["rem","rem"], ["%","%"]]), "unit")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Set element width");
       this.setHelpUrl("");
        }
    };

    Blocks['element_height'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("height: ");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([["px","px"], ["em","em"], ["rem","rem"], ["%","%"]]), "unit")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Set element height");
       this.setHelpUrl("");
        }
    };

    Blocks['background_color'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("background-color:");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Set the background color");
       this.setHelpUrl("");
        }
    };

    Blocks['background_image'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("background-image: url(\"");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField("\");");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Set the background image to a specified URL");
       this.setHelpUrl("");
        }
    };

    Blocks['background_repeat'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("background-repeat: ")
              .appendField(new Blockly.FieldDropdown([["repeat","repeat"], ["no-repeat","no-repeat"], ["repeat-x","repeat-x"], ["repeat-y","repeat-y"], ["round","round"], ["space","space"]]), "options")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Control the repetition of an element's background image");
       this.setHelpUrl("");
        }
    };

    Blocks['background_position'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("background-position: ")
              .appendField(new Blockly.FieldDropdown([["bottom","bottom"], ["center","center"], ["left","left"], ["left bottom","left bottom"], ["left top","left top"], ["right","right"], ["right bottom","right bottom"], ["right top","right top"], ["top","top"]]), "options")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Control the position of an element's background image");
       this.setHelpUrl("");
        }
    };

    Blocks['background_size'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("background-size: ")
              .appendField(new Blockly.FieldDropdown([["auto","auto"], ["cover","cover"], ["contain","contain"]]), "options")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Control the size of an element's background image");
       this.setHelpUrl("");
        }
    };

    Blocks['background_clip'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("background-clip: ")
              .appendField(new Blockly.FieldDropdown([["border-box","border-box"], ["padding-box","padding-box"], ["content-box","content-box"], ["text","text"]]), "options")
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Control the bounding box of an element's background.");
       this.setHelpUrl("");
        }
    };

    Blocks['border_set'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("border: ");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([["px","px"], ["em","em"], ["rem","rem"], ["%","%"]]), "size")
              .appendField(" ")
              .appendField(new Blockly.FieldDropdown([["solid","solid"], ["dotted","dotted"], ["dashed","dashed"], ["double","double"], ["groove","groove"], ["ridge","ridge"], ["inset","inset"], ["outset","outset"], ["none","none"]]), "type")
              .appendField(" ");
          this.appendValueInput("color")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Set border for element");
       this.setHelpUrl("");
        }
    };

    Blocks['border_direction_set'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("border- ")
              .appendField(new Blockly.FieldDropdown([["top","top"], ["bottom","bottom"], ["left","left"], ["right","right"]]), "direction")
              .appendField(": ");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([["px","px"], ["em","em"], ["rem","rem"], ["%","%"]]), "size")
              .appendField(" ")
              .appendField(new Blockly.FieldDropdown([["solid","solid"], ["dotted","dotted"], ["dashed","dashed"], ["double","double"], ["groove","groove"], ["ridge","ridge"], ["inset","inset"], ["outset","outset"], ["none","none"]]), "type")
              .appendField(" ");
          this.appendValueInput("color")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Set border for element");
       this.setHelpUrl("");
        }
    };

    Blocks['border_radius_direction'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("border- ")
              .appendField(new Blockly.FieldDropdown([["top-left","top-left"], ["top-right","top-right"], ["bottom-left","bottom-left"], ["bottom-right","bottom-right"]]), "direction")
              .appendField("-radius: ");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([["px","px"], ["em","em"], ["rem","rem"], ["%","%"]]), "size");
          this.appendDummyInput()
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Control the border radius of an element");
       this.setHelpUrl("");
        }
    };

    Blocks['border_radius'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("border-radius: ");
          this.appendValueInput("content")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(new Blockly.FieldDropdown([["px","px"], ["em","em"], ["rem","rem"], ["%","%"]]), "size");
          this.appendDummyInput()
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Control the border radius of an element");
       this.setHelpUrl("");
        }
    };

    Blocks['cursor'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("cursor: ")
              .appendField(new Blockly.FieldDropdown([["auto","auto"], ["default","default"], ["pointer","pointer"], ["wait","wait"], ["text","text"], ["move","move"], ["help","help"], ["not-allowed","not-allowed"]]), "options")
              .appendField(";");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Control the cursor style when hovering over an element.");
       this.setHelpUrl("");
        }
    };

    Blocks['box_shadow'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("box-shadow: ");
          this.appendValueInput("h")
              .setCheck(null);
          this.appendValueInput("v")
              .setCheck(null);
          this.appendValueInput("blur")
              .setCheck(null);
          this.appendValueInput("color")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(";");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#AD40FF");
       this.setTooltip("Add a box shadow");
       this.setHelpUrl("");
        }
    };
}

