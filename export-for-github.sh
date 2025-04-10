#!/bin/bash

# Create a directory for the static site
mkdir -p gh-pages

# Build the static site
echo "Building static website..."
npx vite build --outDir=./gh-pages --base=./

# Copy required assets
echo "Copying assets..."
cp -r client/public/* gh-pages/ 2>/dev/null || :

# Create a README file with instructions
echo "Creating README.md..."
cat > gh-pages/README.md << READMEEOF
# Sri Hindwani Electricals

This is the website for Sri Hindwani Electricals, an authorized Finolex Dealer in Bengaluru.

## Deployment Instructions

1. Create a new GitHub repository
2. Upload all these files to the repository
3. Go to Settings > Pages
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select the branch with these files and save
6. Your site will be published at https://yourusername.github.io/repository-name/
READMEEOF

echo "✅ Done! The static site is ready in the 'gh-pages' directory."
echo "You can upload the contents of the 'gh-pages' directory to GitHub to deploy with GitHub Pages."
