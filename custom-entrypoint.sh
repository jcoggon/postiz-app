#!/bin/bash

# Copy the custom main.js file to the correct location
if [ -f /app/custom-files/main.js ]; then
  echo "Copying custom main.js file..."
  # Create directory structure if it doesn't exist
  mkdir -p /app/dist/apps/backend/
  cp -f /app/custom-files/main.js /app/dist/apps/backend/main.js
  echo "Custom main.js file copied successfully."
fi

# Copy the custom colors.scss file to the correct location
if [ -f /app/custom-files/colors.scss ]; then
  echo "Copying custom colors.scss file..."
  # Create directory structure if it doesn't exist
  mkdir -p /app/apps/frontend/src/app/
  cp -f /app/custom-files/colors.scss /app/apps/frontend/src/app/colors.scss
  echo "Custom colors.scss file copied successfully."
fi

# Install missing dependencies
echo "Installing missing dependencies..."
cd /app
# Check if npm is available and install bs58
if command -v npm &> /dev/null; then
  npm install bs58 --no-save
  echo "bs58 installed successfully."
else
  echo "Warning: npm not found, skipping dependency installation."
fi

# Ensure uploads directory has proper permissions
mkdir -p /uploads
chmod -R 777 /uploads

# Execute the original entrypoint
exec /app/entrypoint.sh "$@"
