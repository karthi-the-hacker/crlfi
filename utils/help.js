#!/usr/bin/env node

/**
 * crlfi
 * CRLF Bug scanner for WebPentesters and Bugbounty Hunters
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */


//lib and includes section 
require("os").userInfo().username
module.exports = {
    helpmenu: function() {
       var argv = require('yargs/yargs')(process.argv.slice(2))
          .usage('\n\n \x1b[30;1m$\x1b[0m \x1b[32;1mcrlfi \x1b[36;1m[option]\n\n \x1b[37;42;1mUsage:\x1b[0m $0 \x1b[33;1m[options]\x1b[30;1m')
          .help('help').alias('help', 'h')
          .version('version', '1.0.1').alias('version', 'V')
          .options({
            input: {
              alias: 'i',
              description: "<filename> Input file name",
              requiresArg: true,
              required: true
            },
            output: {
              alias: 'o',
              description: "<filename> output file name",
              requiresArg: true,
              required: true
            }
          })
          .argv;

        console.log('Inspecting options');
        console.dir(argv);

        console.log("input:", argv.input);
        console.log("output:", argv.output);
    },
     helpintro: function() {
cyan='\e[1;36m%s\e[0m\n'
console.log("  \n\n\x1b[36;1m👋 Hey \x1b[37;1m"+require("os").userInfo().username+" \x1b[36;1m\n");
console.log(" .-----------------------------.           ");

console.log(" |  Tool   : crlfi 👾          |           ");
console.log(" |  Author : \x1b[32;1m@karthithehacker🎖️\x1b[36;1m |           ");
console.log(" |       'OR'1'='1' --+        |           ");
console.log(" '-----------------------------'           ");
console.log("                 ^      (\\_/)    ");
console.log("                 '----- (O.o)    ");
console.log("                        (> <)    ");
      console.log("\n\x1b[37;1mCrlfi  v0.0.1 \x1b[30;1m\nCRLF Bug scanner for WebPentesters and Bugbounty Hunters ")
     }
};
