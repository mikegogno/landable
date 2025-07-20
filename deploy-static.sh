#!/bin/bash

# Deploy script for static assets

# Build the project
npm run build

# Make sure the public directory exists
mkdir -p ./dist

# Add a simple robots.txt
cat > ./dist/robots.txt << END
User-agent: *
Allow: /
END

# Deploy using Vercel
npx vercel ./dist --prod --yes --token ${VERCEL_TOKEN}
