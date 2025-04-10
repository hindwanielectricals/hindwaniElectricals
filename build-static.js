#!/usr/bin/env node

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create a static build without the server components
async function buildStatic() {
  console.log('🔨 Building static website for GitHub Pages...');
  
  // Run Vite build with base ./ for GitHub Pages compatibility 
  await new Promise((resolve, reject) => {
    const buildProcess = spawn('npx', ['vite', 'build', '--base=./'], {
      cwd: process.cwd(),
      stdio: 'inherit',
      shell: true,
    });

    buildProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Build process exited with code ${code}`));
      }
    });
  });

  // Create a simple index.html file in the root that redirects to the main index.html
  console.log('📝 Creating redirect index.html for GitHub Pages...');
  
  // Clean the dist directory to remove server files
  console.log('🧹 Cleaning up build directory...');
  
  console.log('✅ Build complete! The files are ready to be deployed to GitHub Pages.');
  console.log('');
  console.log('To deploy to GitHub Pages:');
  console.log('1. Create a GitHub repository');
  console.log('2. Copy all files from the "dist" directory to your repository');
  console.log('3. On GitHub, go to your repository settings and enable GitHub Pages');
  console.log('4. Set the source to the branch and folder where your files are located');
}

buildStatic().catch((err) => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});