#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

const projectName = process.argv[2];

if (!projectName) {
    console.log('Please provide a project name.');
    process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);
const boilerplatePath = path.join(__dirname, '..', 'jboilerplate'); // Adjust this based on your package structure

// Create the new project directory
fs.mkdirSync(projectPath);

// Copy the entire jboilerplate directory excluding cli.js
fs.copy(boilerplatePath, projectPath, { filter: (src) => {
    // Exclude cli.js from copying
    return !src.endsWith('cli.js');
}})
.then(() => {
    console.log(`Project ${projectName} created at ${projectPath}`);
})
.catch(err => {
    console.error('Error copying files:', err);
});