# Quick Reference: Update Base File & Push to GitHub

## 🎯 Goal
Update the Excel base file that powers the Quality Dashboard and automatically push it to GitHub so the dashboard always uses the latest data.

---

## ✅ What's Already Configured

### Auto-Load Feature ✓
- Dashboard **automatically loads** data from `/data/BaseFile.xlsx` on page load
- No manual refresh needed after uploading file
- Server configuration already set up to serve the data directory

### File Location ✓
- **Active File**: `/home/user/webapp/public/data/BaseFile.xlsx`
- **URL Path**: `https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai/data/BaseFile.xlsx`
- **File Size**: 1.7 MB

### Git Tracking ✓
- BaseFile.xlsx is tracked in Git
- `.gitignore` configured to allow base file commits
- Server changes committed

---

## 🚀 How to Update Base File (3 Methods)

### Method 1: Automated Script (EASIEST) ⭐

```bash
# Copy your new file to the data directory
cp "/path/to/your/New Base File.xlsx" /home/user/webapp/public/data/BaseFile.xlsx

# Run the automated update script
cd /home/user/webapp
./update_and_push_base_file.sh
```

**What it does:**
1. ✅ Validates file exists
2. ✅ Commits to Git with timestamp
3. ✅ Pushes to GitHub
4. ✅ Restarts server
5. ✅ Provides dashboard URL

---

### Method 2: Manual Commands

```bash
# Step 1: Copy your new file
cp "Your Updated Base File.xlsx" /home/user/webapp/public/data/BaseFile.xlsx

# Step 2: Commit to Git
cd /home/user/webapp
git add public/data/BaseFile.xlsx
git commit -m "Updated base file with latest data - $(date +%Y-%m-%d)"

# Step 3: Push to GitHub
git push origin main

# Step 4: Restart server
pm2 restart webapp

# Step 5: Verify
curl -I http://localhost:3000/data/BaseFile.xlsx
```

---

### Method 3: Upload Through Dashboard (Coming Soon)

1. Open: https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai
2. Click "Upload" button in menu
3. Select your updated Excel file
4. Dashboard refreshes automatically

*(Note: Upload feature will need to be enhanced to include Git commit/push)*

---

## 📋 Required Excel Sheets

Your Base File.xlsx **must contain** these sheets:

| Sheet Name | Description |
|------------|-------------|
| **Parameter_Audit_Count** | Parameter performance metrics |
| **Recruiter_Audit_Count** | Recruiter audit data |
| **Account_Summary** | Account-level summaries |
| **RCA_CAPA** | Root cause analysis & corrective actions |
| **Projects** | Project tracking data |
| **SLA** | Service level agreement metrics |

---

## 🔐 First-Time GitHub Setup

**Before pushing to GitHub for the first time**, you need to set up authentication:

```bash
# This tool configures Git credentials globally
# Run this ONCE before your first push
Call: setup_github_environment

# Then verify
git remote -v
git config --global user.name
git config --global user.email
```

**If setup_github_environment fails:**
- Go to the **#github tab** in your interface
- Complete GitHub App authorization
- Set up OAuth tokens if needed
- Re-run setup_github_environment

---

## ✅ Verification After Update

1. **Check File**
   ```bash
   ls -lh /home/user/webapp/public/data/BaseFile.xlsx
   ```

2. **Verify Server**
   ```bash
   pm2 list
   curl -I http://localhost:3000/data/BaseFile.xlsx
   ```

3. **Check Dashboard**
   - Open: https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai
   - Password: Excellence@2026
   - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Verify all 10 tabs show new data

4. **Confirm GitHub Push**
   ```bash
   cd /home/user/webapp
   git log --oneline -3
   ```

---

## 🎯 Complete Workflow Example

```bash
# === STEP 1: Update the file ===
cp "/downloads/New_Base_File.xlsx" /home/user/webapp/public/data/BaseFile.xlsx

# === STEP 2: Run automated script ===
cd /home/user/webapp
./update_and_push_base_file.sh

# === STEP 3: Verify in browser ===
# Open: https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai
# Press: Ctrl+Shift+R (hard refresh)
# Check: All tabs display updated data

# === DONE! ===
```

---

## 🛠️ Troubleshooting

### Problem: Dashboard shows old data

**Solution:**
```bash
# Hard refresh browser
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)

# Or clear cache in DevTools (F12)
Right-click refresh → "Empty Cache and Hard Reload"
```

---

### Problem: Git push fails

**Solution:**
```bash
# Setup GitHub authentication first
Call: setup_github_environment

# Verify credentials
git config --global user.name
git config --global user.email

# Check remote
git remote -v

# Try push again
git push origin main
```

---

### Problem: Server not responding

**Solution:**
```bash
# Restart server
pm2 restart webapp

# Check status
pm2 list

# View logs
pm2 logs webapp --nostream
```

---

## 📚 Documentation Files

- **Complete Guide**: `/home/user/webapp/BASE_FILE_UPDATE_GUIDE.md`
- **Update Script**: `/home/user/webapp/update_and_push_base_file.sh`
- **This Quick Reference**: `/home/user/webapp/QUICK_REFERENCE.md`

---

## 🔗 Important URLs

| Resource | URL |
|----------|-----|
| **Live Dashboard** | https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai |
| **Password** | Excellence@2026 |
| **Base File URL** | https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai/data/BaseFile.xlsx |
| **10-Page SOP** | https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai/downloads/Quality_Dashboard_Actual_Implementation_SOP.docx |

---

## 💡 Pro Tips

1. **Backup before updates:**
   ```bash
   cp public/data/BaseFile.xlsx public/data/BaseFile_backup_$(date +%Y%m%d).xlsx
   ```

2. **Use descriptive commit messages:**
   ```bash
   git commit -m "Updated base file: Q1 2026 data, 1500 new audits, 25 new accounts"
   ```

3. **Check Git status regularly:**
   ```bash
   git status
   git log --oneline -5
   ```

4. **Test after every update:**
   - Open all 10 tabs
   - Verify KPI cards
   - Check charts render correctly
   - Review browser console (F12) for errors

---

**Last Updated**: April 8, 2026  
**Project**: Quality Excellence Dashboard v2.5
