#!/usr/bin/env node

/**
 * crlfi
 * CRLF Bug scanner for WebPentesters and Bugbounty Hunters
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */

//lib and includes section 
const url = require('url');
const payloads = require('./payloads').payloads;
const scanner =  require('./scan');
var fs = require('fs');
const lineReader = require('line-reader');
//lib and includes section 


//Constractor class 
class loader {
    constructor(path,save) {
       
        lineReader.eachLine(path, (line, last) => {
            for (const payload of payloads) {
                new scanner.scanner(line,payload,save)
                }
            //console.log(line)
        });
        
        
 }
}
//Exporting the modules
module.exports = {
    engine: loader
}