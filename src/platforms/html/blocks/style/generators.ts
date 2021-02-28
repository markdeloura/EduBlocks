import { HTMLGenerator } from "../../html-generator";

export default function define(HTML: Blockly.BlockGenerators) {
  HTML['style_block'] = function(block) {
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `<style>
    ${statements_content}
    </style>`;
    return code;
  };

  HTML['stylesheet_link'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `<link rel="stylesheet" href="${value_content}">\n`;
    return code;
  };

  HTML['pseudo'] = function(block) {
    var dropdown_options = block.getFieldValue('options');
    var code = `:${dropdown_options}`;
    return [code, 0];
  };

  HTML['element_style'] = function(block) {
    var value_element = HTMLGenerator.valueToCode(block, 'element', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `
    ${value_element} {
      ${statements_content}
    }`;
    return code;
  };

  HTML['element_style'] = function(block) {
    var value_element = HTMLGenerator.valueToCode(block, 'element', 0);
    var value_attributes = HTMLGenerator.valueToCode(block, 'attributes', 0);
    var statements_content = HTMLGenerator.statementToCode(block, 'content');
    var code = `
    ${value_element}${value_attributes} {
      ${statements_content}
    }`;
    return code;
  };

  HTML['text_color'] = function(block) {
    var value_name = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `color: ${value_name};`;
    return code;
  };

  HTML['font_family'] = function(block) {
    var value_name = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `font-family: ${value_name};`;
    return code;
  };

  HTML['font_size_value'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var dropdown_type = block.getFieldValue('type');
    var code = `font-size: ${value_content}${dropdown_type};\n`;
    return code;
  };

  HTML['font_size_text'] = function(block) {
    var dropdown_size = block.getFieldValue('size');
    var code = `font-size: ${dropdown_size};\n`;
    return code;
  };

  HTML['color_picker'] = function(block) {
    var colour_color = block.getFieldValue('color');
    var code = colour_color;
    return [code, 0];
  };

  HTML['text_align'] = function(block) {
    var dropdown_align = block.getFieldValue('align');
    var code = `text-align: ${dropdown_align};`;
    return code;
  };

  HTML['text_transform'] = function(block) {
    var dropdown_transform = block.getFieldValue('transform');
    var code = `text-transform: ${dropdown_transform};`;
    return code;
  };

  HTML['text_decoration'] = function(block) {
    var dropdown_line = block.getFieldValue('line');
    var dropdown_style = block.getFieldValue('style');
    var code = `text-transform: ${dropdown_line} ${dropdown_style};`;
    return code;
  };

  HTML['text_shadow'] = function(block) {
    var value_h = HTMLGenerator.valueToCode(block, 'h', 0);
    var value_v = HTMLGenerator.valueToCode(block, 'v', 0);
    var value_blur = HTMLGenerator.valueToCode(block, 'blur', 0);
    var value_color = HTMLGenerator.valueToCode(block, 'color', 0);
    var code = `text-shadow: ${value_h} ${value_v} ${value_blur} ${value_color}`;
    return code;
  };

  HTML['display'] = function(block) {
    var dropdown_options = block.getFieldValue('options');
    var code = `display: ${dropdown_options};`;
    return code;
  };

  HTML['margin_direction'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var dropdown_unit = block.getFieldValue('unit');
    var code = `margin-${dropdown_direction}: ${value_content}${dropdown_unit};`;
    return code;
  };

  HTML['margin'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var dropdown_unit = block.getFieldValue('unit');
    var code = `margin: ${value_content}${dropdown_unit};`;
    return code;
  };

  HTML['padding_direction'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var dropdown_unit = block.getFieldValue('unit');
    var code = `padding-${dropdown_direction}: ${value_content}${dropdown_unit};`;
    return code;
  };

  HTML['padding'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var dropdown_unit = block.getFieldValue('unit');
    var code = `padding: ${value_content}${dropdown_unit};`;
    return code;
  };

  HTML['overflow'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var dropdown_options = block.getFieldValue('options');
    var code = `overflow-${dropdown_direction}: ${dropdown_options};`;
    return code;
  };

  HTML['float'] = function(block) {
    var dropdown_options = block.getFieldValue('options');
    var code = `float: ${dropdown_options};`;
    return code;
  };

  HTML['element_width'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var dropdown_unit = block.getFieldValue('unit');
    var code = `width: ${value_content}${dropdown_unit};`;
    return code;
  };

  HTML['element_height'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var dropdown_unit = block.getFieldValue('unit');
    var code = `height: ${value_content}${dropdown_unit};`;
    return code;
  };

  HTML['background_color'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `background-color: ${value_content};`;
    return code;
  };

  HTML['background_image'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var code = `background-image: url("${value_content}");`;
    return code;
  };

  HTML['background_repeat'] = function(block) {
    var dropdown_options = block.getFieldValue('options');
    var code = `background-repeat: ${dropdown_options};`;
    return code;
  };

  HTML['background_position'] = function(block) {
    var dropdown_options = block.getFieldValue('options');
    var code = `background-position: ${dropdown_options};`;
    return code;
  };

  HTML['background_size'] = function(block) {
    var dropdown_options = block.getFieldValue('options');
    var code = `background-size: ${dropdown_options};`;
    return code;
  };

  HTML['background_clip'] = function(block) {
    var dropdown_options = block.getFieldValue('options');
    var code = `background-clip: ${dropdown_options};`;
    return code;
  };

  HTML['rgba'] = function(block) {
    var value_r = HTMLGenerator.valueToCode(block, 'r', 0);
    var value_g = HTMLGenerator.valueToCode(block, 'g', 0);
    var value_b = HTMLGenerator.valueToCode(block, 'b', 0);
    var value_a = HTMLGenerator.valueToCode(block, 'a', 0);
    var code = `rgba(${value_r}, ${value_g}, ${value_b}, ${value_a})`;
    return [code, 0];
  };

  HTML['border_set'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var dropdown_size = block.getFieldValue('size');
    var dropdown_type = block.getFieldValue('type');
    var value_color = HTMLGenerator.valueToCode(block, 'color', 0);
    var code = `border: ${value_content}${dropdown_size} ${dropdown_type} ${value_color};`;
    return code;
  };

  HTML['border_direction_set'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var dropdown_size = block.getFieldValue('size');
    var dropdown_type = block.getFieldValue('type');
    var value_color = HTMLGenerator.valueToCode(block, 'color', 0);
    var code = `border-${dropdown_direction}: ${value_content}${dropdown_size} ${dropdown_type} ${value_color};`;
    return code;
  };

  HTML['border_radius_direction'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var dropdown_size = block.getFieldValue('size');
    var code = `border-${dropdown_direction}-radius: ${value_content}${dropdown_size};`;
    return code;
  };

  HTML['border_radius'] = function(block) {
    var value_content = HTMLGenerator.valueToCode(block, 'content', 0);
    var dropdown_size = block.getFieldValue('size');
    var code = `border-radius: ${value_content}${dropdown_size};`;
    return code;
  };

  HTML['cursor'] = function(block) {
    var dropdown_options = block.getFieldValue('options');
    var code = `cursor: ${dropdown_options};`;
    return code;
  };

  HTML['box_shadow'] = function(block) {
    var value_h = HTMLGenerator.valueToCode(block, 'h', 0);
    var value_v = HTMLGenerator.valueToCode(block, 'v', 0);
    var value_blur = HTMLGenerator.valueToCode(block, 'blur', 0);
    var value_color = HTMLGenerator.valueToCode(block, 'color', 0);
    var code = `box-shadow: ${value_h} ${value_v} ${value_blur} ${value_color}`;
    return code;
  };
}
