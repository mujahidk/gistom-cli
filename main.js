#!/usr/bin/env node
'use strict';

const program = require('commander'),
    chalk = require("chalk");

program
  .version('1.0.0')
  .option('-l, --list','List')
  .option('-s, --search <term>','Search')
  .parse(process.argv);

console.log(chalk.green('Completed the execution.'));