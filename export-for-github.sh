#!/bin/bash

# Create a directory for the static site
mkdir -p gh-pages

# Build the static website
echo "Building static website..."
npx vite build --outDir=../gh-pages --base=./

# Copy required assets (if any exist in client/public)
echo "Copying assets..."
cp -r ./gh-pages/* .
cp -r client/public/* ./gh-pages/ 2>/dev/null || :

echo "✅ Done! The static site is ready in the 'gh-pages' directory."
echo "You can upload the contents of the 'gh-pages' directory to GitHub to deploy with GitHub Pages."