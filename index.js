#!/usr/bin/env node

/**
 * crlf-i
 * CRLF Bug scanner for WebPentesters and Bugbounty Hunters
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */

//lib and includes section 
const yargs = require('yargs/yargs')
const help = require('./utils/help');
const loader = require('./utils/crlf-i');
const { hideBin } = require('yargs/helpers')
//lib and includes section 

//variable and object declariation section
const argv = yargs(hideBin(process.argv)).argv 
//variable and object declariation section

// used to check the argument parsed data is empty or not 
if( argv.h == true ){
    help.helpmenu();
    return; 
}
//used to check for valid input data and syntax 
if(argv.i == null || argv.i == true ){
    if(argv.input == null || argv.input == true){
        help.helpintro();
        return; 
    }
    
}

//program execution part and calling the constructor class 
new loader.engine(argv.i || argv.input,argv.o || argv.output)


