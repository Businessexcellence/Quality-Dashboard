# Quality Dashboard - Base File Update Guide

## Overview
This guide explains how to update the base Excel file that powers the Quality Dashboard and automatically push it to GitHub.

## Current Configuration

### Dashboard URLs
- **Live Dashboard**: https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai
- **Dashboard Password**: Excellence@2026

### Base File Location
- **Active File**: `/home/user/webapp/public/data/BaseFile.xlsx`
- **Auto-Load Path**: `/data/BaseFile.xlsx`
- **File Size**: 1.7MB

## How It Works

### 1. Automatic Loading
The dashboard automatically loads data from `/data/BaseFile.xlsx` when:
- The page first loads (DOMContentLoaded event)
- A new file is uploaded through the dashboard UI

### 2. Data Processing
The dashboard reads the following Excel sheets:
- **Parameter_Audit_Count** - Parameter performance data
- **Recruiter_Audit_Count** - Recruiter performance metrics
- **Account_Summary** - Account-level data
- **RCA_CAPA** - Root Cause Analysis and Corrective Actions
- **Projects** - Project tracking data
- **SLA** - Service Level Agreement metrics

### 3. Git Integration
Changes to BaseFile.xlsx are tracked in Git and can be pushed to GitHub.

## Step-by-Step Update Process

### Method 1: Upload Through Dashboard (Recommended)

1. **Open the Dashboard**
   ```
   URL: https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai
   Password: Excellence@2026
   ```

2. **Click the Upload Button**
   - Look for the "Upload" button in the top menu
   - Click to open the file upload modal

3. **Select Your Updated Base File**
   - Choose your updated Excel file (must match the required format)
   - The file should contain all required sheets listed above

4. **Upload and Verify**
   - Click "Upload" to process the file
   - The dashboard will automatically refresh with new data
   - Verify all tabs show updated information

### Method 2: Manual File Replacement

1. **Copy Your Updated File**
   ```bash
   cp "/path/to/your/updated/Base File.xlsx" /home/user/webapp/public/data/BaseFile.xlsx
   ```

2. **Restart the Server**
   ```bash
   cd /home/user/webapp && pm2 restart webapp
   ```

3. **Verify the Update**
   ```bash
   # Check file was copied
   ls -lh /home/user/webapp/public/data/BaseFile.xlsx
   
   # Test the endpoint
   curl -I http://localhost:3000/data/BaseFile.xlsx
   ```

4. **Refresh Dashboard in Browser**
   - Open the dashboard URL
   - Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
   - Data should update automatically

## Pushing to GitHub

### Option 1: Automatic Push (Recommended)

After updating the base file, commit and push to GitHub:

```bash
# Navigate to project
cd /home/user/webapp

# Add the updated file
git add public/data/BaseFile.xlsx

# Commit with descriptive message
git commit -m "Updated base file with latest data - $(date +%Y-%m-%d)"

# Push to GitHub (requires setup_github_environment first)
git push origin main
```

### Option 2: Using the Script (Automated)

Create and run this convenience script:

```bash
#!/bin/bash
cd /home/user/webapp

# Add and commit the base file
git add public/data/BaseFile.xlsx
git commit -m "Updated base file - $(date +%Y-%m-%d %H:%M:%S)"

# Push to GitHub
git push origin main

# Restart server to ensure changes are active
pm2 restart webapp

echo "✅ Base file updated and pushed to GitHub"
echo "📊 Dashboard URL: https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai"
```

Save this as `update_base_file.sh` and run:
```bash
chmod +x update_base_file.sh
./update_base_file.sh
```

## GitHub Setup Requirements

Before pushing to GitHub for the first time:

1. **Setup GitHub Authentication**
   ```
   Call setup_github_environment tool first
   This configures git credentials globally
   ```

2. **Verify GitHub Connection**
   ```bash
   cd /home/user/webapp
   git remote -v
   ```

3. **Confirm Repository Access**
   - Ensure you have write permissions to the repository
   - Verify the remote URL is correct

## File Format Requirements

Your Base File.xlsx must include these sheets:

| Sheet Name | Description | Required Columns |
|------------|-------------|------------------|
| **Parameter_Audit_Count** | Parameter performance data | Parameter Name, Accuracy %, Audit Count, Error Count, Status |
| **Recruiter_Audit_Count** | Recruiter metrics | Recruiter Name, Accuracy %, Audit Count, Error Count, Status |
| **Account_Summary** | Account-level summary | Account Name, Overall Accuracy, Critical Accuracy, Non-Critical Accuracy, Audit Count |
| **RCA_CAPA** | Root Cause Analysis | CAPA ID, Issue Description, Root Cause, Corrective Action, Preventive Action, Owner, Due Date, Status |
| **Projects** | Project tracking | Project Name, Status, Start Date, End Date, Progress %, Owner |
| **SLA** | Service Level Agreements | Metric Name, Target, Actual, Status, Compliance % |

## Verification Checklist

After updating the base file:

- [ ] File is uploaded to `/home/user/webapp/public/data/BaseFile.xlsx`
- [ ] Server restarted (`pm2 restart webapp`)
- [ ] Dashboard opens successfully
- [ ] All 10 tabs display data correctly:
  - [ ] Home (KPI cards show values)
  - [ ] Journey at Glance (funnel displays)
  - [ ] Account Summary (table populated)
  - [ ] Transactional (chart shows data)
  - [ ] Audit Summary (cards and charts)
  - [ ] Recruiter (table with metrics)
  - [ ] Strategic (regional map colored)
  - [ ] Projects (project list)
  - [ ] RCA-CAPA (issues listed)
  - [ ] CSAT (scores displayed)
- [ ] Changes committed to Git
- [ ] Pushed to GitHub successfully

## Troubleshooting

### Dashboard Not Loading New Data

1. **Hard Refresh Browser**
   ```
   Windows/Linux: Ctrl + Shift + R
   Mac: Cmd + Shift + R
   ```

2. **Clear Browser Cache**
   - Open DevTools (F12)
   - Right-click refresh button
   - Select "Empty Cache and Hard Reload"

3. **Verify File Path**
   ```bash
   ls -lh /home/user/webapp/public/data/BaseFile.xlsx
   curl -I http://localhost:3000/data/BaseFile.xlsx
   ```

### Git Push Fails

1. **Setup GitHub Authentication**
   - Call `setup_github_environment` tool first
   - Follow prompts to configure credentials

2. **Check Remote URL**
   ```bash
   cd /home/user/webapp
   git remote -v
   ```

3. **Verify Credentials**
   ```bash
   git config --global user.name
   git config --global user.email
   ```

### File Upload Through Dashboard Fails

1. **Check File Size** (must be < 10MB)
2. **Verify File Format** (must be .xlsx)
3. **Ensure All Required Sheets** are present
4. **Check Browser Console** (F12) for errors

## Best Practices

1. **Backup Before Updates**
   ```bash
   cp /home/user/webapp/public/data/BaseFile.xlsx \
      /home/user/webapp/public/data/BaseFile_backup_$(date +%Y%m%d).xlsx
   ```

2. **Use Descriptive Commit Messages**
   ```bash
   git commit -m "Updated base file: added Q1 2026 data, 1500 new audits"
   ```

3. **Test After Every Update**
   - Open all 10 dashboard tabs
   - Verify key metrics are correct
   - Check for any console errors

4. **Keep File Format Consistent**
   - Don't rename sheets
   - Don't remove required columns
   - Maintain data types (dates, numbers, text)

5. **Regular GitHub Pushes**
   - Push after each significant update
   - Don't let uncommitted changes pile up
   - GitHub serves as backup and version history

## Support

If you encounter issues:

1. Check the browser console (F12) for JavaScript errors
2. Verify the Excel file format matches requirements
3. Confirm server is running (`pm2 list`)
4. Review server logs (`pm2 logs webapp --nostream`)

## Quick Reference

```bash
# Update file manually
cp "New Base File.xlsx" /home/user/webapp/public/data/BaseFile.xlsx

# Commit and push to GitHub
cd /home/user/webapp
git add public/data/BaseFile.xlsx
git commit -m "Updated base file - $(date +%Y-%m-%d)"
git push origin main

# Restart server
pm2 restart webapp

# Verify
curl -I http://localhost:3000/data/BaseFile.xlsx
```

---

**Document Version**: 1.0  
**Last Updated**: April 8, 2026  
**Dashboard Version**: 2.5
