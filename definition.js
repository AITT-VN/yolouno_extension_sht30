Blockly.Blocks["uno_sht30_temp"] = {
  init: function () {
    this.jsonInit({
      message0: "nhiệt độ SHT30",
      args0: [],
      output: null,
      colour: "#d400d4",
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["uno_sht30_temp"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_sht30'] = 'from sht30 import *';
  Blockly.Python.definitions_['init_sht30'] = 'sht30 = SHT30(SCL_PIN, SDA_PIN)';
  var code = "sht30.measure(fix=1)[0]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["uno_sht30_humid"] = {
  init: function () {
    this.jsonInit({
      message0: "độ ẩm SHT30",
      args0: [],
      output: null,
      colour: "#d400d4",
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["uno_sht30_humid"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_sht30'] = 'from sht30 import *';
  Blockly.Python.definitions_['init_sht30'] = 'sht30 = SHT30(SCL_PIN, SDA_PIN)';
  var code = "sht30.measure(fix=1)[1]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["uno_sht30_change_address"] = {
  init: function () {
    this.jsonInit({
      inputsInline: true,
      colour: "#d400d4",
      nextStatement: null,
      tooltip: "",
      message0: "cài đặt địa chỉ I2C %1",
      previousStatement: null,
      args0: [{ type: "input_value", name: "ADDR" }],
      helpUrl: ""
    });
  },
};

Blockly.Python['uno_sht30_change_address'] = function (block) {
  var addr = Blockly.Python.valueToCode(block, 'ADDR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_sht30'] = 'from sht30 import *';
  Blockly.Python.definitions_['init_sht30'] = 'sht30 = SHT30(SCL_PIN, SDA_PIN)';
  var code = "sht30.address(int(" + addr + ", 16))\n";
  return code;
};