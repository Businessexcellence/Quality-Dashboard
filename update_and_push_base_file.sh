#!/bin/bash

# Quality Dashboard - Base File Update and GitHub Push Script
# This script updates the base file, commits it to Git, and pushes to GitHub

set -e  # Exit on error

echo "🚀 Quality Dashboard Base File Update Script"
echo "=============================================="
echo ""

# Navigate to project directory
cd /home/user/webapp

# Check if BaseFile.xlsx exists in public/data
if [ ! -f "public/data/BaseFile.xlsx" ]; then
    echo "❌ Error: BaseFile.xlsx not found in public/data/"
    echo "Please ensure the file exists before running this script."
    exit 1
fi

# Get file info
FILE_SIZE=$(du -h "public/data/BaseFile.xlsx" | cut -f1)
FILE_DATE=$(date -r "public/data/BaseFile.xlsx" "+%Y-%m-%d %H:%M:%S")

echo "📁 Current Base File Info:"
echo "   Location: public/data/BaseFile.xlsx"
echo "   Size: $FILE_SIZE"
echo "   Last Modified: $FILE_DATE"
echo ""

# Check Git status
echo "📊 Checking Git status..."
if git diff --quiet public/data/BaseFile.xlsx; then
    echo "ℹ️  No changes detected in BaseFile.xlsx"
    echo "The file is already up-to-date in Git."
    read -p "Do you want to continue anyway? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Update cancelled."
        exit 0
    fi
fi

# Stage the file
echo "📝 Staging BaseFile.xlsx..."
git add public/data/BaseFile.xlsx

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit."
else
    # Commit with timestamp
    COMMIT_MSG="Updated base file - $(date '+%Y-%m-%d %H:%M:%S')"
    echo "💾 Committing changes: $COMMIT_MSG"
    git commit -m "$COMMIT_MSG"
fi

# Push to GitHub
echo "🔄 Pushing to GitHub..."
if git push origin main; then
    echo "✅ Successfully pushed to GitHub!"
else
    echo "❌ Failed to push to GitHub"
    echo "Please ensure:"
    echo "  1. GitHub authentication is set up (call setup_github_environment)"
    echo "  2. You have write permissions to the repository"
    echo "  3. Remote URL is correct: $(git remote get-url origin)"
    exit 1
fi

# Restart the server
echo "🔄 Restarting server..."
pm2 restart webapp > /dev/null 2>&1

echo ""
echo "✅ Update Complete!"
echo "=================="
echo ""
echo "📊 Dashboard URL: https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai"
echo "🔑 Password: Excellence@2026"
echo ""
echo "Next steps:"
echo "  1. Open the dashboard in your browser"
echo "  2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)"
echo "  3. Verify all tabs show updated data"
echo ""
echo "To view recent commits: git log --oneline -5"
echo "To check server status: pm2 list"
echo ""
