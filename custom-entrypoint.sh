#!/bin/bash

# Copy the custom main.js file to the correct location
if [ -f /app/custom-files/main.js ]; then
  echo "Copying custom main.js file..."
  cp /app/custom-files/main.js /app/dist/apps/backend/main.js
  echo "Custom main.js file copied successfully."
fi

# Copy the custom colors.scss file to the correct location
if [ -f /app/custom-files/colors.scss ]; then
  echo "Copying custom colors.scss file..."
  cp /app/custom-files/colors.scss /app/apps/frontend/src/app/colors.scss
  echo "Custom colors.scss file copied successfully."
fi

# Ensure uploads directory has proper permissions
mkdir -p /uploads
chmod -R 777 /uploads

# Execute the original entrypoint
exec /app/entrypoint.sh "$@"
