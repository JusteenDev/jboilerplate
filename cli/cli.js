#!/usr/bin/env node

const fs = require('fs-extra'); // Ensure fs-extra is installed
const path = require('path');

const projectName = process.argv[2];

if (!projectName) {
    console.log('Please provide a project name.');
    process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

// Create the new project directory
fs.mkdirSync(projectPath, { recursive: true });

// Get the path of the templates directory
const templatesDir = path.join(__dirname, '../templates');

// Copy the templates to the new project directory
fs.copy(templatesDir, projectPath)
    .then(() => {
        console.log(`Project ${projectName} Created`);
    })
    .catch(err => {
        console.error(`Error copying files: ${err}`);
        process.exit(1);
    });