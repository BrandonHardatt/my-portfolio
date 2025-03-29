#!/bin/bash

# Check if commit message is provided
if [ -z "$1" ]; then
  echo "Error: No commit message provided."
  echo "Usage: ./deploy.sh 'Your commit message'"
  exit 1
fi

# Print status message
echo "Starting deployment process..."

# Add all changes to Git
git add .

# Commit changes with the provided message
git commit -m "$1"

# Push changes to GitHub
git push origin main

# Print success message
echo "✅ Deployment complete! Changes pushed to GitHub."
