const express = require('express');

const pandas = require('node-pandas');

const convertCsvToDf = (filePath)=>{

     return pandas.readCsv(filePath).data
}

module.exports = convertCsvToDf;
