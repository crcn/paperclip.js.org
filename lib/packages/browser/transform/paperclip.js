var paperclip = require("paperclip"),
fs            = require("fs");

module.exports = {

  extension: "pc",

  transform: function (content, fp) {
    return "module.exports = " + paperclip.parse(content);
  }
};
