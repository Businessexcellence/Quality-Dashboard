# Quality Dashboard - Complete Documentation

## Document Overview
**Document Title:** Quality Dashboard - User Guide & Technical Documentation  
**Version:** 1.0  
**Date:** January 2025  
**Purpose:** Complete guide to dashboard tabs, views, calculations, and formulas

---

## Table of Contents

1. Index Page / Login
2. Home Tab
3. Journey at Glance Tab
4. Account Summary Tab
5. Transactional Overview Tab
6. Parameter Performance Tab
7. Recruiter Insights Tab
8. Strategic Overview Tab
9. Project Summary Tab
10. RCA & CAPA Tab
11. Customer Satisfaction (CSAT) Tab
12. Competitive Intelligence Tab
13. SLA Overview Tab
14. Data Upload Process
15. Formulas & Calculations Reference

---

# 1. INDEX PAGE / LOGIN

## Overview
The Index page is the entry point to the Quality Dashboard, providing secure access to the analytics platform.

## Components

### 1.1 Login Screen
- **URL:** https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai
- **Password:** Excellence@2026
- **Security:** Password-protected access

### 1.2 Visual Elements
- **Logo:** "TAGGD" branding
- **Background:** Professional gradient design
- **Icons:** Lock icon for security indication
- **Form:** Single password field with submit button

### 1.3 Access Process
1. Navigate to dashboard URL
2. Enter password: Excellence@2026
3. Click "Unlock Dashboard" button
4. Dashboard loads to Home tab by default

---

# 2. HOME TAB

## Overview
The Home tab provides a comprehensive overview of the dashboard and quick access to all sections.

## Views & Components

### 2.1 Welcome Section
- **Dashboard Title:** Quality Dashboard
- **Subtitle:** Comprehensive Analytics Platform
- **Description:** Real-time quality metrics and performance insights

### 2.2 Quick Navigation Cards
Visual cards for each dashboard section with icons and descriptions:

1. **Journey at Glance** 🎯
   - End-to-end pipeline visibility
   - Overall quality metrics

2. **Account Summary** 🏢
   - Client-wise performance breakdown
   - Account health indicators

3. **Transactional Overview** 📈
   - Month-wise trends and patterns
   - Audit volume analysis

4. **Parameter Performance** 📊
   - Error analysis by parameter
   - Training needs identification

5. **Recruiter Insights** 👥
   - Individual performance tracking
   - Recruiter comparisons

6. **Strategic Overview** 🎯
   - Executive KPIs
   - Board-ready metrics

7. **Project Summary** 📋
   - Project-wise quality tracking
   - Resource allocation insights

8. **RCA & CAPA** 🔍
   - Root cause analysis tracking
   - Corrective action monitoring

9. **Customer Satisfaction** ⭐
   - CSAT trends and analysis
   - Client feedback insights

10. **Competitive Intelligence** 🏆
    - Industry benchmark tracking
    - Competitive positioning

11. **SLA Overview** ⏱️
    - Service level compliance
    - TAT performance

### 2.3 Key Features
- **User Manual:** Accessible via help icon
- **Data Upload:** Quick access to import functionality
- **Theme:** Professional design with brand colors

---

# 3. JOURNEY AT GLANCE TAB

## Overview
Provides end-to-end visibility of the recruitment pipeline with overall quality metrics.

## Views & Components

### 3.1 Overall Quality Metrics (Top Cards)

#### Card 1: Overall Accuracy
- **Metric:** Overall Accuracy Percentage
- **Formula:** 
  ```
  Overall Accuracy = (Total Opportunity Pass / (Total Opportunity Count - Total Opportunity NA)) × 100
  ```
- **Data Source:** Parameter_Audit_Count sheet
- **Display:** Large percentage with color coding
  - Green (≥90%): Excellent
  - Amber (75-89%): Good
  - Red (<75%): Needs Improvement
- **Icon:** ✓ Checkmark

#### Card 2: Total Audits
- **Metric:** Total number of audits conducted
- **Formula:** 
  ```
  Total Audits = SUM(Opportunity Count)
  ```
- **Data Source:** Parameter_Audit_Count sheet
- **Display:** Numeric count with thousands separator
- **Icon:** 📋 Clipboard

#### Card 3: Total Population
- **Metric:** Total population audited
- **Formula:** 
  ```
  Total Population = SUM(Total Population)
  ```
- **Data Source:** Parameter_Audit_Count sheet
- **Display:** Numeric count with thousands separator
- **Icon:** 👥 Users

#### Card 4: Sample %
- **Metric:** Sample percentage of population
- **Formula:** 
  ```
  Sample % = (Total Audits / Total Population) × 100
  ```
- **Data Source:** Calculated from Total Audits and Total Population
- **Display:** Percentage with one decimal place
- **Icon:** 📊 Chart

### 3.2 Regional Breakdown

#### Regional Accuracy Chart (Horizontal Bar Chart)
- **Metric:** Accuracy by region
- **Formula:** 
  ```
  Regional Accuracy = (Regional Opportunity Pass / (Regional Opportunity Count - Regional Opportunity NA)) × 100
  ```
- **Data Source:** Parameter_Audit_Count sheet, Regional Head column
- **Regions:** North, South, East, West, Central
- **Display:** Horizontal bars with percentage labels
- **Color Coding:**
  - Green (≥90%): High performance
  - Amber (75-89%): Moderate performance
  - Red (<75%): Low performance

### 3.3 India Map Visualization

#### Interactive Regional Map
- **Purpose:** Visual representation of regional performance
- **Data Points:**
  - North: Delhi, Punjab, Haryana
  - South: Karnataka, Tamil Nadu, Kerala
  - East: West Bengal, Odisha
  - West: Maharashtra, Gujarat
  - Central: Madhya Pradesh, Chhattisgarh
- **Color Coding:** Based on regional accuracy
- **Interactivity:** Hover to see region name and accuracy

### 3.4 Journey Filters
- **Filter Options:**
  - All Regions
  - North
  - South
  - East
  - West
  - Central
- **Functionality:** Updates all metrics based on selected region

---

# 4. ACCOUNT SUMMARY TAB

## Overview
Provides detailed client-wise performance breakdown with drill-down capabilities.

## Views & Components

### 4.1 Top Metrics Cards

#### Card 1: Total Accounts
- **Metric:** Number of unique accounts
- **Formula:** 
  ```
  Total Accounts = COUNT(DISTINCT Client)
  ```
- **Data Source:** Parameter_Audit_Count sheet
- **Display:** Numeric count
- **Icon:** 🏢 Building

#### Card 2: Avg Accuracy
- **Metric:** Average accuracy across all accounts
- **Formula:** 
  ```
  Avg Accuracy = AVERAGE(Account Accuracies)
  Where Account Accuracy = (Account Opportunity Pass / (Account Opportunity Count - Account Opportunity NA)) × 100
  ```
- **Data Source:** Calculated from Parameter_Audit_Count sheet
- **Display:** Percentage with one decimal
- **Color Coding:** Same as overall accuracy
- **Icon:** ✓ Checkmark

#### Card 3: High Performers
- **Metric:** Number of accounts with accuracy ≥90%
- **Formula:** 
  ```
  High Performers = COUNT(Accounts WHERE Accuracy ≥ 90%)
  ```
- **Data Source:** Calculated from account accuracies
- **Display:** Numeric count with percentage of total
- **Icon:** 🌟 Star

#### Card 4: Needs Attention
- **Metric:** Number of accounts with accuracy <75%
- **Formula:** 
  ```
  Needs Attention = COUNT(Accounts WHERE Accuracy < 75%)
  ```
- **Data Source:** Calculated from account accuracies
- **Display:** Numeric count with percentage of total
- **Icon:** ⚠️ Warning

### 4.2 Account Performance Table

#### Columns & Calculations

1. **Account Name**
   - Data Source: Parameter_Audit_Count sheet, Client column
   - Display: Client name with company icon

2. **Accuracy %**
   - Formula: 
     ```
     Account Accuracy = (Account Opportunity Pass / (Account Opportunity Count - Account Opportunity NA)) × 100
     ```
   - Display: Percentage badge with color coding
   - Sorting: Descending by default

3. **Sample %**
   - Formula: 
     ```
     Account Sample % = (Account Opportunity Count / Account Total Population) × 100
     ```
   - Display: Percentage with progress bar
   - Color: Blue

4. **Error %**
   - Formula: 
     ```
     Account Error % = (Account Opportunity Fail / Account Opportunity Count) × 100
     ```
   - Display: Percentage with progress bar
   - Color: Red

5. **Audit Count**
   - Formula: 
     ```
     Account Audit Count = SUM(Account Opportunity Count)
     ```
   - Display: Numeric count with thousands separator

6. **Status**
   - Logic:
     ```
     IF Accuracy ≥ 90% THEN "Excellent" (Green)
     ELSE IF Accuracy ≥ 75% THEN "Good" (Amber)
     ELSE "Needs Improvement" (Red)
     ```
   - Display: Colored badge

#### Interactive Features
- **Click Account:** Opens detailed breakdown
- **Sorting:** Click column headers to sort
- **Search:** Filter accounts by name
- **Hover:** Shows tooltip with additional details

### 4.3 Account Drill-Down Modal

When clicking an account, shows:
- **Account Details:** Name, total audits, accuracy
- **Parameter Breakdown:** Accuracy by parameter
- **Trend Analysis:** Month-wise performance
- **Error Types:** Common error categories
- **Action Items:** Recommended improvements

---

# 5. TRANSACTIONAL OVERVIEW TAB

## Overview
Provides month-wise analysis of accuracy trends and audit volumes with detailed breakdowns.

## Views & Components

### 5.1 Summary KPI Cards

#### Card 1: Monthly Avg Accuracy
- **Metric:** Average accuracy across all months
- **Formula:** 
  ```
  Monthly Avg Accuracy = AVERAGE(Monthly Accuracies)
  Where Monthly Accuracy = (Monthly Opportunity Pass / (Monthly Opportunity Count - Monthly Opportunity NA)) × 100
  ```
- **Data Source:** Transactional_Overview sheet
- **Display:** Percentage with trend indicator
- **Icon:** 📈 Trending

#### Card 2: Total Audits (Period)
- **Metric:** Total audits in selected period
- **Formula:** 
  ```
  Total Audits = SUM(Monthly Opportunity Count)
  ```
- **Data Source:** Transactional_Overview sheet
- **Display:** Numeric count
- **Icon:** 📋 Clipboard

#### Card 3: Peak Month
- **Metric:** Month with highest audit volume
- **Formula:** 
  ```
  Peak Month = Month with MAX(Monthly Opportunity Count)
  ```
- **Data Source:** Transactional_Overview sheet
- **Display:** Month name and count
- **Icon:** 📊 Peak

#### Card 4: Best Performance Month
- **Metric:** Month with highest accuracy
- **Formula:** 
  ```
  Best Month = Month with MAX(Monthly Accuracy)
  ```
- **Data Source:** Calculated monthly accuracies
- **Display:** Month name and accuracy %
- **Icon:** 🌟 Star

### 5.2 Month Wise Accuracy Score & Audit Count Chart

#### Chart Configuration
- **Type:** Combination chart (Line + Bar)
- **X-Axis:** Months (Apr, May, Jun, Jul, Aug, Sep, Oct, Nov)
- **Y-Axis (Left):** Accuracy Score % (0-100%)
- **Y-Axis (Right):** Audit Count (0-6000)

#### Legend (External - Above Chart)
- **Accuracy Score (%):** 🔵 Blue circle icon
- **Audit Count:** 🟧 Orange rectangle icon

#### Dataset 1: Accuracy Score (%)
- **Type:** Line graph
- **Color:** Blue (#3b82f6)
- **Formula:** 
  ```
  Monthly Accuracy = (Monthly Opportunity Pass / (Monthly Opportunity Count - Monthly Opportunity NA)) × 100
  ```
- **Data Labels:** 
  - Position: 15px above data points
  - Format: XX.X% (e.g., 99.4%)
  - Color: Blue
  - Font: 10px bold
- **Points:** 
  - Radius: 4px
  - Border: 2px white
  - Hover: Enlarges to 6px

#### Dataset 2: Audit Count
- **Type:** Bar graph
- **Color:** Orange (rgba(240, 70, 22, 0.7))
- **Formula:** 
  ```
  Monthly Audit Count = SUM(Monthly Opportunity Count)
  ```
- **Data Labels:** 
  - Position: Inside bars at top
  - Format: X,XXX (e.g., 3,083)
  - Color: White
  - Background: Semi-transparent black
  - Font: 10px bold
- **Bar Width:** 40% of category width

#### Chart Dimensions
- **Height:** 300px
- **Padding:** Top 35px, Right 20px, Bottom 10px, Left 15px
- **Legend Separation:** External HTML legend above chart

#### Example Data Display
```
Apr: 99.4% accuracy, 3,083 audits
May: 99.0% accuracy, 2,648 audits
Jun: 97.7% accuracy, 2,481 audits
Jul: 97.8% accuracy, 3,982 audits
Aug: 96.3% accuracy, 4,614 audits
Sep: 97.7% accuracy, 5,098 audits
Oct: 98.6% accuracy, 3,535 audits
Nov: 96.3% accuracy, 2,460 audits
```

### 5.3 Regional Head Breakdown Table

#### Purpose
Track quality performance by Regional Head with drill-down to accounts.

#### Columns & Calculations

1. **Regional Head**
   - Data Source: Parameter_Audit_Count sheet, Regional Head column
   - Display: Name with user icon 👤
   - Clickable: Opens accounts under this head

2. **Accuracy %**
   - Formula: 
     ```
     Regional Head Accuracy = (RH Opportunity Pass / (RH Opportunity Count - RH Opportunity NA)) × 100
     ```
   - Display: Colored badge
   - Color Coding:
     - Green (>90%): Excellent
     - Amber (75-90%): Good
     - Red (<75%): Needs Improvement

3. **Sample %**
   - Formula: 
     ```
     Regional Head Sample % = (RH Opportunity Count / RH Total Population) × 100
     ```
   - Display: Blue badge
   - Format: XX.X%

4. **Error %**
   - Formula: 
     ```
     Regional Head Error % = (RH Opportunity Fail / RH Opportunity Count) × 100
     ```
   - Display: Red badge
   - Format: XX.X%

5. **Audit Count**
   - Formula: 
     ```
     Regional Head Audit Count = SUM(RH Opportunity Count)
     ```
   - Display: Numeric with thousands separator
   - Font: Bold

#### Interactive Features
- **Click Row:** Opens modal with accounts under Regional Head
- **Hover:** Highlights row
- **Sorting:** Default by Audit Count (descending)
- **External Link Icon:** Indicates clickable row

### 5.4 Practice Head Breakdown Table

#### Purpose
Track quality performance by Practice Head with drill-down capabilities.

#### Columns & Calculations

1. **Practice Head**
   - Data Source: Parameter_Audit_Count sheet, Practice Head column
   - Display: Name with user icon 👤
   - Clickable: Opens accounts under this head

2. **Accuracy %**
   - Formula: 
     ```
     Practice Head Accuracy = (PH Opportunity Pass / (PH Opportunity Count - PH Opportunity NA)) × 100
     ```
   - Display: Colored badge (same logic as Regional Head)

3. **Sample %**
   - Formula: 
     ```
     Practice Head Sample % = (PH Opportunity Count / PH Total Population) × 100
     ```
   - Display: Blue badge

4. **Error %**
   - Formula: 
     ```
     Practice Head Error % = (PH Opportunity Fail / PH Opportunity Count) × 100
     ```
   - Display: Red badge

5. **Audit Count**
   - Formula: 
     ```
     Practice Head Audit Count = SUM(PH Opportunity Count)
     ```
   - Display: Numeric with thousands separator

#### Interactive Features
Same as Regional Head Breakdown

### 5.5 Head Accounts Modal

#### Trigger
Clicking on Regional Head or Practice Head name

#### Content
- **Modal Title:** "Accounts Under [Head Name]"
- **Close Button:** X in top-right corner
- **Accounts List:** Table with columns:
  - Account Name
  - Accuracy %
  - Sample %
  - Error %
  - Audit Count

#### Calculations
Same formulas as Account Summary but filtered for selected Head

---

# 6. PARAMETER PERFORMANCE TAB

## Overview
Detailed error analysis by parameter with training needs identification and improvement tracking.

## Views & Components

### 6.1 Parameter Summary Cards

#### Card 1: Total Parameters
- **Metric:** Count of unique parameters tracked
- **Formula:** 
  ```
  Total Parameters = COUNT(DISTINCT Parameter)
  ```
- **Data Source:** Parameter_Audit_Count sheet
- **Display:** Numeric count
- **Icon:** 📊 Chart

#### Card 2: High Error Parameters
- **Metric:** Parameters with error rate >10%
- **Formula:** 
  ```
  High Error Parameters = COUNT(Parameters WHERE Error % > 10%)
  Where Parameter Error % = (Parameter Opportunity Fail / Parameter Opportunity Count) × 100
  ```
- **Display:** Count with red badge
- **Icon:** ⚠️ Warning

#### Card 3: Avg Parameter Accuracy
- **Metric:** Average accuracy across all parameters
- **Formula:** 
  ```
  Avg Parameter Accuracy = AVERAGE(Parameter Accuracies)
  Where Parameter Accuracy = (Parameter Opportunity Pass / (Parameter Opportunity Count - Parameter Opportunity NA)) × 100
  ```
- **Display:** Percentage with color coding
- **Icon:** ✓ Checkmark

#### Card 4: Training Required
- **Metric:** Parameters needing training intervention
- **Formula:** 
  ```
  Training Required = COUNT(Parameters WHERE Accuracy < 90%)
  ```
- **Display:** Count with amber badge
- **Icon:** 📚 Book

### 6.2 Parameter Performance Table

#### Columns & Calculations

1. **Parameter Name**
   - Data Source: Parameter_Audit_Count sheet, Parameter column
   - Display: Parameter name
   - Sub-parameters: Grouped under main parameter

2. **Accuracy %**
   - Formula: 
     ```
     Parameter Accuracy = (Parameter Opportunity Pass / (Parameter Opportunity Count - Parameter Opportunity NA)) × 100
     ```
   - Display: Percentage with progress bar
   - Color:
     - Green (≥90%): Excellent
     - Amber (75-89%): Good
     - Red (<75%): Needs Improvement

3. **Error Count**
   - Formula: 
     ```
     Parameter Error Count = SUM(Parameter Opportunity Fail)
     ```
   - Display: Numeric count
   - Font: Bold if count >50

4. **Error %**
   - Formula: 
     ```
     Parameter Error % = (Parameter Opportunity Fail / Parameter Opportunity Count) × 100
     ```
   - Display: Percentage with red bar

5. **Total Audits**
   - Formula: 
     ```
     Parameter Total Audits = SUM(Parameter Opportunity Count)
     ```
   - Display: Numeric with separator

6. **Impact Level**
   - Logic:
     ```
     IF Error Count > 100 AND Error % > 10% THEN "Critical" (Red)
     ELSE IF Error Count > 50 OR Error % > 5% THEN "High" (Amber)
     ELSE IF Error Count > 20 OR Error % > 2% THEN "Medium" (Yellow)
     ELSE "Low" (Green)
     ```
   - Display: Colored badge

7. **Training Priority**
   - Logic:
     ```
     IF Impact Level = "Critical" THEN "Immediate" (Red)
     ELSE IF Impact Level = "High" THEN "High" (Amber)
     ELSE IF Impact Level = "Medium" THEN "Medium" (Yellow)
     ELSE "Low" (Green)
     ```
   - Display: Priority badge

### 6.3 Parameter Deep Dive Section

#### Error Type Distribution
- **Chart Type:** Pie chart
- **Data:** Top 10 parameters by error count
- **Labels:** Parameter name + error count
- **Colors:** Distinct colors for each parameter
- **Interactivity:** Click slice to filter table

#### Trend Analysis
- **Chart Type:** Line chart
- **X-Axis:** Months
- **Y-Axis:** Error %
- **Lines:** Top 5 high-error parameters
- **Purpose:** Track improvement over time

### 6.4 Training Recommendations Panel

#### Auto-Generated Recommendations
Based on parameter performance:

1. **Critical Parameters (Accuracy <75%)**
   - Immediate training workshops
   - One-on-one coaching
   - Process documentation review

2. **High Error Parameters (Error % >10%)**
   - Group training sessions
   - SOPs review and update
   - Quality check reinforcement

3. **Moderate Parameters (Accuracy 75-89%)**
   - Refresher training
   - Best practices sharing
   - Peer learning sessions

4. **Maintaining Excellence (Accuracy ≥90%)**
   - Continue monitoring
   - Share best practices
   - Recognition programs

---

# 7. RECRUITER INSIGHTS TAB

## Overview
Individual recruiter performance tracking with drill-down to parameter-level analysis.

## Views & Components

### 7.1 Recruiter Summary Cards

#### Card 1: Total Recruiters
- **Metric:** Count of unique recruiters
- **Formula:** 
  ```
  Total Recruiters = COUNT(DISTINCT Recruiter Name)
  ```
- **Data Source:** Recruiter_Audit_Count sheet
- **Display:** Numeric count
- **Icon:** 👥 Users

#### Card 2: Top Performer
- **Metric:** Recruiter with highest accuracy
- **Formula:** 
  ```
  Top Performer = Recruiter with MAX(Recruiter Accuracy)
  Where Recruiter Accuracy = (Recruiter Opportunity Pass / (Recruiter Opportunity Count - Recruiter Opportunity NA)) × 100
  ```
- **Display:** Name + Accuracy %
- **Icon:** 🌟 Star

#### Card 3: Avg Recruiter Accuracy
- **Metric:** Average accuracy across all recruiters
- **Formula:** 
  ```
  Avg Recruiter Accuracy = AVERAGE(Recruiter Accuracies)
  ```
- **Display:** Percentage with color coding
- **Icon:** ✓ Checkmark

#### Card 4: Needs Coaching
- **Metric:** Recruiters with accuracy <80%
- **Formula:** 
  ```
  Needs Coaching = COUNT(Recruiters WHERE Accuracy < 80%)
  ```
- **Display:** Count with red badge
- **Icon:** 📚 Coaching

### 7.2 Recruiter Performance Table

#### Columns & Calculations

1. **Recruiter Name**
   - Data Source: Recruiter_Audit_Count sheet
   - Display: Name with user icon 👤
   - Clickable: Opens detailed breakdown

2. **Accuracy %**
   - Formula: 
     ```
     Recruiter Accuracy = (Recruiter Opportunity Pass / (Recruiter Opportunity Count - Recruiter Opportunity NA)) × 100
     ```
   - Display: Large percentage with color badge
   - Sorting: Default descending

3. **Rank**
   - Formula: 
     ```
     Rank = RANK(Recruiter Accuracy, DESC)
     ```
   - Display: Numeric rank (#1, #2, etc.)
   - Top 3: Gold, Silver, Bronze medals

4. **Sample %**
   - Formula: 
     ```
     Recruiter Sample % = (Recruiter Opportunity Count / Recruiter Total Population) × 100
     ```
   - Display: Percentage with blue bar

5. **Error %**
   - Formula: 
     ```
     Recruiter Error % = (Recruiter Opportunity Fail / Recruiter Opportunity Count) × 100
     ```
   - Display: Percentage with red bar

6. **Audit Count**
   - Formula: 
     ```
     Recruiter Audit Count = SUM(Recruiter Opportunity Count)
     ```
   - Display: Numeric with separator

7. **Performance Trend**
   - Logic:
     ```
     IF Current Month Accuracy > Previous Month Accuracy THEN "Improving" ↑ (Green)
     ELSE IF Current Month Accuracy < Previous Month Accuracy THEN "Declining" ↓ (Red)
     ELSE "Stable" → (Amber)
     ```
   - Display: Arrow icon with text

8. **Status**
   - Logic:
     ```
     IF Accuracy ≥ 90% THEN "Excellent" (Green)
     ELSE IF Accuracy ≥ 80% THEN "Good" (Amber)
     ELSE IF Accuracy ≥ 70% THEN "Fair" (Yellow)
     ELSE "Needs Improvement" (Red)
     ```
   - Display: Colored badge

### 7.3 Recruiter Comparison Chart

#### Chart Type: Bar Chart (Horizontal)
- **X-Axis:** Accuracy %
- **Y-Axis:** Recruiter names (top 10 by audit count)
- **Bars:** Color-coded by accuracy range
- **Labels:** Accuracy % at end of each bar
- **Benchmark Line:** Average accuracy (dotted line)

### 7.4 Recruiter Detail Modal

#### Trigger
Clicking on recruiter name in table

#### Content Sections

1. **Recruiter Overview**
   - Name
   - Total audits
   - Overall accuracy
   - Current rank
   - Performance trend

2. **Parameter Breakdown**
   - Table showing accuracy by parameter
   - Columns: Parameter, Accuracy %, Error Count
   - Sorting: By error count (descending)

3. **Month-wise Trend**
   - Line chart showing accuracy over time
   - Highlights best and worst months

4. **Strength & Improvement Areas**
   - **Strengths:** Parameters with accuracy ≥95%
   - **Needs Improvement:** Parameters with accuracy <80%

5. **Recommended Actions**
   - Auto-generated based on performance
   - Specific training needs
   - Best practice suggestions

---

# 8. STRATEGIC OVERVIEW TAB

## Overview
Executive summary with board-ready KPIs and high-level insights.

## Views & Components

### 8.1 Executive KPI Cards (Top Row)

#### Card 1: Overall Quality Score
- **Metric:** Weighted average quality score
- **Formula:** 
  ```
  Overall Quality Score = (Accuracy % × 0.6) + (Sample % × 0.2) + ((100 - Error %) × 0.2)
  ```
- **Data Source:** Calculated from Parameter_Audit_Count
- **Display:** Large percentage with trend arrow
- **Color:** 
  - Green (≥85%): Excellent
  - Amber (70-84%): Good
  - Red (<70%): Needs Improvement
- **Trend:** Comparison with previous period
- **Icon:** 🎯 Target

#### Card 2: Total Audits Completed
- **Metric:** Total audit count across all parameters
- **Formula:** 
  ```
  Total Audits = SUM(Opportunity Count)
  ```
- **Data Source:** Parameter_Audit_Count sheet
- **Display:** Large number with thousands separator
- **Trend:** Month-over-month change
- **Icon:** 📋 Clipboard

#### Card 3: Active Projects
- **Metric:** Number of active projects
- **Formula:** 
  ```
  Active Projects = COUNT(DISTINCT Project Name WHERE Status = "Active")
  ```
- **Data Source:** Projects sheet
- **Display:** Numeric count
- **Color:** Blue
- **Icon:** 📊 Projects

#### Card 4: RCA/CAPA Total
- **Metric:** Total RCA and CAPA cases
- **Formula:** 
  ```
  RCA/CAPA Total = COUNT(All RCA/CAPA records)
  ```
- **Data Source:** RCA_CAPA sheet
- **Display:** Numeric count
- **Breakdown:** 
  - Open cases (red badge)
  - Closed cases (green badge)
- **Icon:** 🔍 Magnifier

### 8.2 Quality Trend Chart

#### Chart Configuration
- **Type:** Multi-line chart
- **X-Axis:** Months (last 12 months)
- **Y-Axis:** Percentage (0-100%)
- **Lines:**
  1. Overall Accuracy (Blue)
  2. Sample Rate (Green)
  3. Error Rate (Red - inverted)

#### Calculations
1. **Monthly Overall Accuracy**
   ```
   Monthly Accuracy = (Monthly Opportunity Pass / (Monthly Opportunity Count - Monthly Opportunity NA)) × 100
   ```

2. **Monthly Sample Rate**
   ```
   Monthly Sample Rate = (Monthly Opportunity Count / Monthly Total Population) × 100
   ```

3. **Monthly Error Rate**
   ```
   Monthly Error Rate = (Monthly Opportunity Fail / Monthly Opportunity Count) × 100
   ```

#### Features
- **Data Labels:** Show on hover
- **Legend:** Top right
- **Grid Lines:** Horizontal (10% intervals)
- **Benchmark Lines:** 
  - 90% accuracy target (green dotted)
  - 10% error threshold (red dotted)

### 8.3 Account Health Distribution

#### Chart Type: Donut Chart
- **Segments:**
  1. Excellent (≥90% accuracy) - Green
  2. Good (75-89% accuracy) - Amber
  3. Fair (60-74% accuracy) - Yellow
  4. Needs Attention (<60% accuracy) - Red

- **Calculations:**
  ```
  Each Segment Count = COUNT(Accounts in accuracy range)
  Segment % = (Segment Count / Total Accounts) × 100
  ```

- **Center Display:** Total number of accounts
- **Labels:** Count + Percentage for each segment
- **Interactivity:** Click segment to filter accounts

### 8.4 Top 5 High Impact Areas

#### Purpose
Identify critical areas needing immediate attention

#### Metrics Tracked
1. **Parameters with highest error rates**
   - Formula: Top 5 by Error %
   - Display: Parameter name, Error %, Audit Count

2. **Accounts needing attention**
   - Formula: Bottom 5 by Accuracy %
   - Display: Account name, Accuracy %, Gap to target

3. **Recruiters needing coaching**
   - Formula: Bottom 5 by Accuracy %
   - Display: Recruiter name, Accuracy %, Trend

4. **Projects at risk**
   - Formula: Projects with Accuracy <80%
   - Display: Project name, Accuracy %, Status

5. **RCA/CAPA overdue**
   - Formula: Open cases older than 30 days
   - Display: Case ID, Age (days), Priority

### 8.5 Strategic Insights Panel

#### Auto-Generated Insights
Based on data patterns:

1. **Performance Summary**
   - Current period vs previous period
   - Key improvements or declines
   - Trend direction

2. **Risk Alerts**
   - Accounts with declining trends
   - Parameters exceeding error thresholds
   - Overdue corrective actions

3. **Opportunities**
   - Best performing areas to replicate
   - Potential for sample rate increase
   - Training effectiveness indicators

4. **Recommendations**
   - Priority actions for leadership
   - Resource allocation suggestions
   - Quality improvement initiatives

---

# 9. PROJECT SUMMARY TAB

## Overview
Project-wise quality tracking with resource allocation insights and status monitoring.

## Views & Components

### 9.1 Project Overview Cards

#### Card 1: Total Projects
- **Metric:** Count of all projects
- **Formula:** 
  ```
  Total Projects = COUNT(DISTINCT Project Name)
  ```
- **Data Source:** Projects sheet
- **Display:** Numeric count
- **Breakdown:**
  - Active: Green badge
  - Completed: Blue badge
  - On Hold: Amber badge
- **Icon:** 📊 Projects

#### Card 2: Avg Project Accuracy
- **Metric:** Average accuracy across all projects
- **Formula:** 
  ```
  Avg Project Accuracy = AVERAGE(Project Accuracies)
  Where Project Accuracy = (Project Opportunity Pass / (Project Opportunity Count - Project Opportunity NA)) × 100
  ```
- **Display:** Percentage with color coding
- **Icon:** ✓ Checkmark

#### Card 3: Projects At Risk
- **Metric:** Projects with accuracy <80%
- **Formula:** 
  ```
  At Risk Projects = COUNT(Projects WHERE Accuracy < 80%)
  ```
- **Display:** Count with red badge
- **Alert:** Flashing if count >3
- **Icon:** ⚠️ Warning

#### Card 4: High Performing Projects
- **Metric:** Projects with accuracy ≥95%
- **Formula:** 
  ```
  High Performing = COUNT(Projects WHERE Accuracy ≥ 95%)
  ```
- **Display:** Count with green badge
- **Icon:** 🌟 Star

### 9.2 Project Performance Table

#### Columns & Calculations

1. **Project Name**
   - Data Source: Projects sheet
   - Display: Name with project icon 📋
   - Clickable: Opens project details

2. **Status**
   - Values: Active, Completed, On Hold, Closed
   - Display: Colored badge
     - Active: Green
     - Completed: Blue
     - On Hold: Amber
     - Closed: Gray

3. **Accuracy %**
   - Formula: 
     ```
     Project Accuracy = (Project Opportunity Pass / (Project Opportunity Count - Project Opportunity NA)) × 100
     ```
   - Display: Percentage with horizontal bar
   - Color based on accuracy range

4. **Sample %**
   - Formula: 
     ```
     Project Sample % = (Project Opportunity Count / Project Total Population) × 100
     ```
   - Display: Percentage with blue bar

5. **Error %**
   - Formula: 
     ```
     Project Error % = (Project Opportunity Fail / Project Opportunity Count) × 100
     ```
   - Display: Percentage with red bar

6. **Total Audits**
   - Formula: 
     ```
     Project Audits = SUM(Project Opportunity Count)
     ```
   - Display: Numeric with separator

7. **Team Size**
   - Data Source: Projects sheet, Team Size column
   - Display: Numeric count with user icons

8. **Start Date**
   - Data Source: Projects sheet
   - Display: DD-MMM-YYYY format

9. **Health**
   - Logic:
     ```
     IF Accuracy ≥ 90% AND Error % < 5% THEN "Healthy" (Green)
     ELSE IF Accuracy ≥ 80% AND Error % < 10% THEN "Moderate" (Amber)
     ELSE "At Risk" (Red)
     ```
   - Display: Health badge with icon

### 9.3 Project Comparison Chart

#### Chart Type: Grouped Bar Chart
- **X-Axis:** Project names (top 10 by audit count)
- **Y-Axis:** Percentage (0-100%)
- **Bar Groups:**
  - Accuracy % (Blue)
  - Sample % (Green)
  - Error % (Red)
- **Legend:** Top right
- **Benchmark Line:** 90% accuracy target

### 9.4 Project Timeline Gantt View

#### Visual Representation
- **Rows:** Project names
- **Columns:** Months
- **Bars:** Project duration
- **Colors:** Based on project status
- **Milestones:** Key dates marked
- **Today Line:** Vertical line for current date

### 9.5 Resource Utilization Analysis

#### Metrics Displayed

1. **Team Members per Project**
   - Formula: COUNT(Team Members) per project
   - Display: Horizontal bar chart

2. **Audit Load Distribution**
   - Formula: Audits per Team Member
   - Calculation: Project Audits / Team Size
   - Display: Bubble chart (size = audit count)

3. **Efficiency Score**
   - Formula: 
     ```
     Efficiency = (Accuracy % × 0.7) + (Productivity × 0.3)
     Where Productivity = Audits per Team Member / Average Audits per Team Member
     ```
   - Display: Score out of 100

---

# 10. RCA & CAPA TAB

## Overview
Root Cause Analysis and Corrective Action tracking with systematic problem-solving workflow.

## Views & Components

### 10.1 RCA/CAPA Summary Cards

#### Card 1: Total Cases
- **Metric:** Total RCA/CAPA cases
- **Formula:** 
  ```
  Total Cases = COUNT(All RCA/CAPA records)
  ```
- **Data Source:** RCA_CAPA sheet
- **Display:** Large numeric count
- **Icon:** 🔍 Magnifier

#### Card 2: Open Cases
- **Metric:** Cases with status = "WIP" or "Open"
- **Formula:** 
  ```
  Open Cases = COUNT(Cases WHERE Status IN ("WIP", "Open"))
  ```
- **Display:** Count with amber badge
- **Alert:** Red if >20
- **Icon:** 📂 Open Folder

#### Card 3: Closed Cases
- **Metric:** Cases with status = "Closed"
- **Formula:** 
  ```
  Closed Cases = COUNT(Cases WHERE Status = "Closed")
  ```
- **Display:** Count with green badge
- **Icon:** ✓ Checkmark

#### Card 4: Avg Closure Time
- **Metric:** Average days to close a case
- **Formula:** 
  ```
  Avg Closure Time = AVERAGE(Closure Date - Raised Date) for Closed Cases
  ```
- **Display:** Days with trend indicator
- **Target:** <30 days
- **Icon:** ⏱️ Clock

### 10.2 RCA/CAPA Filters

#### Filter Options

1. **RCA/CAPA Type Filter**
   - Data Source: Column B (RCA/CAPA Type)
   - Options: 
     - All Types
     - RCA (Root Cause Analysis)
     - CAPA (Corrective Action)
     - Combined RCA/CAPA
   - Functionality: Filters entire view

2. **Error Type Filter**
   - Data Source: Error Type column
   - Options: All unique error types
   - Display: Dropdown with count badges
   - Example types:
     - Data Entry Error
     - Process Gap
     - System Issue
     - Training Gap
     - Communication Error

3. **Impact Level Filter**
   - Options:
     - All Levels
     - Critical
     - High
     - Medium
     - Low
   - Color Coding:
     - Critical: Red
     - High: Amber
     - Medium: Yellow
     - Low: Green

4. **Status Filter**
   - Options:
     - All Status
     - WIP (Work In Progress)
     - Open
     - Closed
     - On Hold
   - Display: Colored badges

### 10.3 RCA/CAPA Details Table

#### Columns & Calculations

1. **Case ID**
   - Format: RCA-YYYY-XXXX or CAPA-YYYY-XXXX
   - Display: Unique identifier
   - Clickable: Opens case details

2. **Type**
   - Values: RCA, CAPA, RCA/CAPA
   - Display: Badge with icon
     - RCA: 🔍 Magnifier
     - CAPA: 🔧 Wrench
     - Combined: 🔍🔧

3. **Error Type**
   - Data Source: RCA_CAPA sheet
   - Display: Error category name
   - Examples:
     - Data Entry Error
     - Process Deviation
     - System Failure
     - Skill Gap

4. **Impact Level**
   - Logic:
     ```
     Based on Error Count and Business Impact:
     IF Error Count > 100 OR Business Impact = "High" THEN "Critical"
     ELSE IF Error Count > 50 OR Business Impact = "Medium" THEN "High"
     ELSE IF Error Count > 20 THEN "Medium"
     ELSE "Low"
     ```
   - Display: Colored badge

5. **Status**
   - Values:
     - WIP: Work in progress (Amber)
     - Open: Newly raised (Blue)
     - Closed: Completed (Green)
     - On Hold: Paused (Gray)
   - Display: Status badge

6. **Raised Date**
   - Data Source: RCA_CAPA sheet
   - Format: DD-MMM-YYYY
   - Display: Date with calendar icon

7. **Target Date**
   - Data Source: RCA_CAPA sheet
   - Format: DD-MMM-YYYY
   - Alert: Red if overdue

8. **Actual Closure Date**
   - Display: Only for closed cases
   - Format: DD-MMM-YYYY
   - Comparison with Target Date:
     - Green: Closed on/before target
     - Red: Closed after target

9. **Age (Days)**
   - Formula:
     ```
     For Open Cases: Age = TODAY() - Raised Date
     For Closed Cases: Age = Closure Date - Raised Date
     ```
   - Display: Number of days
   - Color:
     - Green: <15 days
     - Amber: 15-30 days
     - Red: >30 days

10. **Owner**
    - Data Source: Assigned To column
    - Display: Name with user icon

11. **Priority**
    - Logic: Based on Impact Level + Age
      ```
      IF Impact = "Critical" OR Age > 30 THEN "Immediate"
      ELSE IF Impact = "High" OR Age > 15 THEN "High"
      ELSE IF Impact = "Medium" THEN "Medium"
      ELSE "Low"
      ```
    - Display: Priority badge

### 10.4 RCA/CAPA Analytics

#### Status Distribution (Donut Chart)
- **Segments:**
  - Open (Blue)
  - WIP (Amber)
  - Closed (Green)
  - On Hold (Gray)
- **Center:** Total count
- **Labels:** Count + Percentage

#### Age Distribution (Histogram)
- **X-Axis:** Age ranges
  - 0-7 days
  - 8-15 days
  - 16-30 days
  - 31-60 days
  - >60 days
- **Y-Axis:** Number of cases
- **Colors:** Green to Red gradient
- **Purpose:** Identify overdue cases

#### Impact vs Status Matrix
- **Rows:** Impact Levels (Critical, High, Medium, Low)
- **Columns:** Status (Open, WIP, Closed)
- **Cells:** Count of cases
- **Colors:** Heat map (red = high count)

### 10.5 RCA/CAPA Detail Modal

#### Trigger
Clicking on Case ID

#### Content Sections

1. **Case Overview**
   - Case ID
   - Type (RCA/CAPA)
   - Error Type
   - Impact Level
   - Status
   - Priority

2. **Timeline**
   - Raised Date
   - Target Date
   - Actual Closure Date (if closed)
   - Age in days
   - Status history

3. **Root Cause Analysis**
   - Problem Description
   - Root Cause Identified
   - Contributing Factors
   - Impact Assessment

4. **Corrective Actions**
   - Action Plan
   - Implementation Steps
   - Responsible Person
   - Timeline
   - Status

5. **Evidence & Attachments**
   - Supporting documents
   - Screenshots
   - Process flows
   - Before/After comparisons

6. **Verification**
   - Verification Method
   - Verification Date
   - Verification Result
   - Verifier Name

7. **Effectiveness Review**
   - Follow-up Date
   - Effectiveness Rating
   - Recurrence Prevention
   - Lessons Learned

---

# 11. CUSTOMER SATISFACTION (CSAT) TAB

## Overview
Client satisfaction tracking with Top Box analysis and key insights.

## Views & Components

### 11.1 CSAT Header
- **Title:** Customer Satisfaction (CSAT)
- **Icon:** 😊 Smile
- **Subtitle:** Client feedback and satisfaction trends

### 11.2 Top Box Comparison Across Financial Years

#### Purpose
Track customer satisfaction trends using Top Box methodology

#### Top 2 Box Card (Green)
- **Definition:** % of customers rating 6-7 on a 7-point scale
- **Color:** Green gradient (background #d1f4e0, border #10b981)
- **Formula:**
  ```
  Top 2 Box % = (Count of ratings 6-7 / Total Responses) × 100
  ```
- **Display Components:**
  - **Header:** "Top 2 Box" with rounded green button
  - **Trend Box:** Year-over-year change with arrow
    - Example: "↓ -36.0%" (red for decline)
  - **Year Values:** FY 2022, FY 2023, FY 2024
    - Format: XX.X% with horizontal progress bar
    - Crown icon 👑 next to highest value
  - **Progress Bars:** Green colored, width proportional to %

#### Top 3 Box Card (Blue)
- **Definition:** % of customers rating 5-7 on a 7-point scale
- **Color:** Blue gradient (background #dbeafe, border #3b82f6)
- **Formula:**
  ```
  Top 3 Box % = (Count of ratings 5-7 / Total Responses) × 100
  ```
- **Display:** Same structure as Top 2 Box
  - Trend: Example "↓ -16.0%"
  - Progress bars: Blue colored

#### Top 4 Box Card (Purple)
- **Definition:** % of customers rating 4-7 on a 7-point scale
- **Color:** Purple gradient (background #e9d5ff, border #a855f7)
- **Formula:**
  ```
  Top 4 Box % = (Count of ratings 4-7 / Total Responses) × 100
  ```
- **Display:** Same structure as Top 2 Box
  - Trend: Example "↓ -10.0%"
  - Progress bars: Purple colored

#### Data Extraction Logic
```javascript
// From CSAT sheet, scan for:
Parameter contains "Top 2 Box" OR "Top Box 2"
Parameter contains "Top 3 Box" OR "Top Box 3"
Parameter contains "Top 4 Box" OR "Top Box 4"

// Extract values by Financial Year
// Calculate YoY change
// Identify highest value for crown icon
```

### 11.3 Key Insights & Analysis

#### Insight Card 1: Satisfaction Trend (Blue Gradient)
- **Icon:** 📈 Chart Line
- **Title:** "Satisfaction Trend"
- **Content Calculation:**
  ```
  Latest Year Satisfaction = Find "Overall Satisfaction" value for latest FY
  Previous Year Satisfaction = Find "Overall Satisfaction" value for previous FY
  Change = Latest - Previous
  Trend = IF Change >= 0 THEN "improving" ELSE "declining"
  ```
- **Display Example:**
  ```
  "Overall satisfaction is declining 📉 with a drop of 0.82 points 
   from FY2023 (5.95) to FY2024 (5.13)"
  ```

#### Insight Card 2: Response Rate (Green Gradient)
- **Icon:** 👥 Users
- **Title:** "Response Rate"
- **Content Calculation:**
  ```
  Latest Response Rate = Find "Response Rate" value for latest FY
  Previous Response Rate = Find "Response Rate" value for previous FY
  Change = Latest - Previous
  Status = IF Rate >= 70% THEN "Strong"
           ELSE IF Rate >= 50% THEN "Moderate"
           ELSE "Weak"
  ```
- **Display Example:**
  ```
  "Moderate engagement at 61.0% response rate in FY2024. 
   Decreased by 5.0% from previous year"
  ```

#### Insight Card 3: Account Coverage (Amber Gradient)
- **Icon:** 🏢 Building
- **Title:** "Account Coverage"
- **Content Calculation:**
  ```
  Latest Coverage = Find "Account Coverage" value for latest FY
  Status = IF Coverage >= 90% THEN "Excellent"
           ELSE IF Coverage >= 75% THEN "Good"
           ELSE "Needs Improvement"
  ```
- **Display Example:**
  ```
  "Excellent account coverage at 95.0% in FY2024. 
   Maintaining comprehensive feedback across client base"
  ```

### 11.4 Key Findings & Focus Areas (Purple Panel)

#### Fixed Insights (User Provided)
- **Icon:** 📋 Clipboard List
- **Title:** "Key Findings & Focus Areas"
- **Background:** Purple gradient (background #faf5ff, border #a855f7)

#### Content (Fixed Text):
1. **Response Rate:**
   ```
   "Response Rate: Drops to 61%; however, absolute number increases. 
    Account coverage healthy"
   ```

2. **Overall Satisfaction:**
   ```
   "Overall Satisfaction at 5.13: Drops from 5.95 in last cycle 
    (OPS level and Non-Key accounts most pronounced)"
   ```

3. **Positives:**
   ```
   "Positives: End-to-end hiring, engagement, flexibility, commitment"
   ```

4. **Focus:**
   ```
   "Focus: Niche hiring, team quality, insights, better profiles, more tech"
   ```

### 11.5 CSAT Data Sources

#### Excel Sheet: CSAT
**Required Columns:**
- Financial Year (e.g., "FY 2024", "2024")
- Parameter (e.g., "Overall Satisfaction", "Response Rate", "Top 2 Box")
- Sub Parameter 1 (additional parameter details)
- Values (numeric values, can be decimal or percentage)

#### Data Processing Logic:
```javascript
1. Parse Financial Year from string (extract "2024" from "FY 2024")
2. Normalize parameter names (lowercase, trim spaces)
3. Convert percentage values:
   - If value <= 1, multiply by 100 (0.61 → 61%)
   - If value > 1, use as is (61 → 61%)
4. Group data by Financial Year
5. Extract specific metrics:
   - Overall Satisfaction: Search for "satisfaction" + "overall"
   - Response Rate: Search for "response" + "rate"
   - Account Coverage: Search for "account" + "coverage"
   - Top 2/3/4 Box: Search for "top" + "box" + number
```

---

# 12. COMPETITIVE INTELLIGENCE TAB

## Overview
Industry benchmarking and competitive positioning analysis with comprehensive metrics tracking.

## Views & Components

### 12.1 Tab Header
- **Title:** Competitive Intelligence
- **Icon:** 🏆 Trophy
- **Description:** "Comprehensive analysis of metrics tracked by competitors across Global RPO, Indian RPO, and Service Providers"

### 12.2 Statistics Overview Cards

#### Card 1: Total Metrics Tracked
- **Metric:** Count of all benchmark metrics
- **Formula:**
  ```
  Total Metrics = COUNT(All Benchmark Rows)
  ```
- **Data Source:** Benchmark/Company_Metrics/Industry_Benchmarks sheet
- **Display:** Large number with chart icon 📊
- **Color:** Blue gradient

#### Card 2: Industry Adoption Rate
- **Metric:** Percentage of metrics adopted by industry
- **Formula:**
  ```
  Industry Adoption Rate = (COUNT(Metrics WHERE Adherence Status = "YES") / Total Metrics) × 100
  ```
- **Display:** Percentage with "YES" count
- **Example:** "71.4% - 65 of 91 metrics"
- **Color:** Green gradient
- **Icon:** ✓ Checkmark

#### Card 3: Partial Implementation
- **Metric:** Metrics with partial adoption
- **Formula:**
  ```
  Partial Rate = (COUNT(Metrics WHERE Adherence Status = "PARTIAL") / Total Metrics) × 100
  ```
- **Display:** Percentage with partial count
- **Color:** Amber gradient
- **Icon:** ⏱️ Clock

#### Card 4: Innovation Gap
- **Metric:** Metrics not yet adopted
- **Formula:**
  ```
  Gap Rate = (COUNT(Metrics WHERE Adherence Status = "NO") / Total Metrics) × 100
  ```
- **Display:** Percentage with "NO" count
- **Color:** Red gradient
- **Icon:** 📉 Chart Down

### 12.3 What This Tells Us (Insights Panel)

#### Blue Information Box
- **Icon:** 💡 Lightbulb
- **Title:** "What This Tells Us"
- **Content (Auto-generated):**
  ```
  "With a 71.4% industry adoption rate, 65 of 91 metrics are 
   being tracked by competitors. 15.4% (14 metrics) show partial 
   implementation, indicating evolving practices. The 13.2% gap 
   (12 metrics) represents opportunities for innovation or areas 
   where competitors haven't yet adopted these practices."
  ```

### 12.4 Filter by Category

#### Filter Buttons (Interactive)
Each button shows:
- **Icon:** Category-specific icon
- **Label:** Full category name
- **Badge:** Adoption ratio (e.g., "15/25")
- **Active State:** Fills with category color, scales to 1.05x, adds shadow

#### Categories:

1. **Global RPO** (Green)
   - Icon: 🌍 Globe
   - Color: #10b981
   - Filter: Shows only Global RPO metrics
   - Calculation: 
     ```
     Count = Total metrics in Global RPO
     Yes Count = Metrics with "YES" status
     Display: "Yes Count / Count"
     ```

2. **Indian RPO** (Blue)
   - Icon: 🇮🇳 Flag
   - Color: #3b82f6
   - Filter: Shows only Indian RPO metrics

3. **Global Service Provider** (Purple)
   - Icon: 🌐 Network
   - Color: #8b5cf6
   - Filter: Shows only Global Service Provider metrics

4. **Indian Service Provider** (Orange)
   - Icon: 🏢 Building
   - Color: #f59e0b
   - Filter: Shows only Indian Service Provider metrics

5. **View All** (Default)
   - Shows all metrics from all categories

#### Filter Behavior:
- **Click:** Activates filter, updates display
- **Active State:** 
  - Background: Category color
  - Text: White
  - Transform: scale(1.05)
  - Shadow: Colored glow
- **Inactive State:**
  - Background: White
  - Border: 2px solid category color
  - Text: Category color

### 12.5 Category Data Display

#### Structure
For each category (when filtered or in "View All"):

**Category Header:**
- **Icon:** Category icon with color
- **Label:** Category name (e.g., "Global RPO")
- **Badge:** Total metrics count
- **Color:** Category-specific colored border

#### Company Cards (Within Category)

Each company shows:

**Company Header:**
- **Company Name:** (e.g., "Allegis", "AMS")
- **Background:** Gradient based on category color
- **Adoption Rate Badge:**
  - Formula:
    ```
    Company Adoption Rate = (Company YES Count / Company Total Metrics) × 100
    ```
  - Color Logic:
    ```
    IF Rate >= 50% THEN Green
    ELSE IF Rate >= 25% THEN Amber
    ELSE Gray
    ```
  - Example: "60% Adoption Rate"

**Metrics by Taggd_Category:**
- **Grouping:** Metrics grouped by Taggd_Category
- **Category Label:** Displayed as subheader
- **Metrics List:** Each metric shows:

1. **Metric Name**
   - Data Source: Metric Name column
   - Display: Bold text

2. **Adherence Status**
   - Data Source: Multiple columns checked:
     - "Adherence Status"
     - "Adherence Status " (with space)
     - "Concise Description" (fallback)
   - Display: Icon + Badge
     - ✓ **Adopted** (Green): Status = "YES"
     - ⏱ **Partial** (Amber): Status = "PARTIAL"
     - ✗ **Not Used** (Red): Status = "NO"
     - — **N/A** (Gray): Status = "NA" or empty

3. **Concise Description**
   - Data Source: Concise Description column
   - Display: Small gray text below metric name
   - Hover: Shows full description

### 12.6 Data Sources

#### Excel Sheets (Priority Order):
1. **Company_Metrics** (Primary)
2. **Benchmark** (Fallback)
3. **Industry_Benchmarks** (Fallback)

#### Required Columns:
- **Category** (e.g., "Global RPO", "Indian RPO")
- **Company** (e.g., "Allegis", "AMS", "Randstad")
- **Metric Name** (e.g., "Time to Fill", "Quality of Hire")
- **Adherence Status** or **Adherence Status ** 
  - Values: "YES", "NO", "PARTIAL", "NA"
- **Taggd_Category** (Metric grouping)
- **Concise Description** (Metric explanation)

#### Data Processing:
```javascript
1. Load benchmark data from preferred sheet
2. Parse columns and normalize names
3. Group by Category → Company → Taggd_Category
4. Calculate statistics:
   - Total metrics per category
   - YES count per category (for adoption ratio)
   - Company adoption rates
5. Generate insights based on statistics
6. Render filtered or complete view
```

### 12.7 Competitive Intelligence Insights

#### Use Cases:
1. **Strategic Planning:** Identify which practices competitors are using
2. **Gap Analysis:** Find opportunities where we're behind or ahead
3. **Innovation Tracking:** Monitor emerging practices (Partial status)
4. **Best Practice Adoption:** Learn from high-adoption metrics
5. **Competitive Differentiation:** Identify unique capabilities

#### Key Metrics for Analysis:
- **71.4% adoption rate** = Industry standard practices
- **15.4% partial** = Evolving/experimental practices
- **13.2% gap** = Innovation opportunities or non-applicable metrics

---

# 13. SLA OVERVIEW TAB

## Overview
Service Level Agreement compliance tracking and turnaround time analysis.

## Views & Components

### 13.1 SLA Header
- **Title:** SLA Overview
- **Icon:** ⏱️ Clock
- **Description:** Service level compliance and turnaround time tracking

### 13.2 SLA Summary Cards

#### Card 1: Overall SLA Compliance
- **Metric:** Percentage of SLAs met
- **Formula:**
  ```
  SLA Compliance = (COUNT(Cases WHERE TAT <= SLA) / Total Cases) × 100
  ```
- **Data Source:** SLA sheet
- **Display:** Large percentage with color badge
- **Color:**
  - Green (≥95%): Excellent
  - Amber (85-94%): Good
  - Red (<85%): Needs Improvement
- **Icon:** ✓ Checkmark

#### Card 2: Avg TAT (Turnaround Time)
- **Metric:** Average turnaround time in hours
- **Formula:**
  ```
  Avg TAT = AVERAGE(Actual TAT) in hours
  ```
- **Display:** Hours with decimal
- **Comparison with Target TAT
- **Icon:** ⏱️ Clock

#### Card 3: SLA Breaches
- **Metric:** Count of SLA breaches
- **Formula:**
  ```
  SLA Breaches = COUNT(Cases WHERE Actual TAT > SLA TAT)
  ```
- **Display:** Count with red badge
- **Trend:** Month-over-month change
- **Icon:** ⚠️ Warning

#### Card 4: Best TAT
- **Metric:** Fastest turnaround time achieved
- **Formula:**
  ```
  Best TAT = MIN(Actual TAT)
  ```
- **Display:** Hours with green badge
- **Icon:** 🚀 Rocket

### 13.3 SLA Compliance Trend Chart

#### Chart Configuration
- **Type:** Line + Bar combination
- **X-Axis:** Months
- **Y-Axis (Left):** SLA Compliance %
- **Y-Axis (Right):** Total Cases
- **Line:** SLA Compliance % (Blue)
- **Bars:** Total Cases (Orange)
- **Target Line:** 95% SLA target (dotted green)

#### Calculations:
```
Monthly SLA Compliance = (Monthly Cases Met / Monthly Total Cases) × 100
Monthly Total Cases = COUNT(Cases in Month)
```

### 13.4 TAT Distribution Analysis

#### Chart Type: Histogram
- **X-Axis:** TAT Ranges
  - 0-4 hours (Green)
  - 4-8 hours (Light Green)
  - 8-12 hours (Yellow)
  - 12-24 hours (Amber)
  - >24 hours (Red)
- **Y-Axis:** Number of cases
- **Purpose:** Identify TAT patterns and bottlenecks

### 13.5 Process-wise SLA Table

#### Columns & Calculations

1. **Process Name**
   - Data Source: SLA sheet, Process column
   - Display: Process name

2. **SLA Target (Hours)**
   - Data Source: SLA Target column
   - Display: Hours with clock icon

3. **Avg TAT (Hours)**
   - Formula:
     ```
     Process Avg TAT = AVERAGE(Process Actual TAT)
     ```
   - Display: Hours with comparison to target

4. **SLA Compliance %**
   - Formula:
     ```
     Process SLA % = (Process Cases Met / Process Total Cases) × 100
     ```
   - Display: Percentage with color bar
   - Color: Green (≥95%), Amber (85-94%), Red (<85%)

5. **Total Cases**
   - Formula:
     ```
     Process Cases = COUNT(Process Cases)
     ```
   - Display: Numeric count

6. **Breaches**
   - Formula:
     ```
     Process Breaches = COUNT(Process Cases WHERE TAT > SLA)
     ```
   - Display: Count with red badge

7. **On-Time %**
   - Formula:
     ```
     On-Time % = 100% - Breach %
     ```
   - Display: Percentage with green indicator

### 13.6 SLA Performance by Team

#### Team Comparison
- **Rows:** Team names
- **Columns:**
  - Team SLA Compliance %
  - Avg TAT
  - Best TAT
  - Worst TAT
  - Total Cases
  - Breaches
- **Sorting:** By SLA Compliance % (descending)
- **Highlight:** Top 3 teams in green

---

# 14. DATA UPLOAD PROCESS

## Overview
The dashboard accepts Excel file uploads to populate all tabs with fresh data.

## Upload Modal

### 14.1 Accessing Upload Modal
- **Trigger:** Click upload icon in header
- **Location:** Top-right of dashboard
- **Icon:** 📤 Upload cloud

### 14.2 Upload Modal Components

#### Visual Elements
- **Background:** Semi-transparent overlay
- **Modal:** White card with shadow
- **Icon:** Large Excel file icon (64px)
- **Title:** "Select Your Base File"
- **Description:** "Choose an Excel file (.xlsx, .xls) to load data into the dashboard"
- **Button:** "Browse & Select File" with folder icon
- **File Info:** "Supported formats: Excel (.xlsx, .xls) • Max size: 5MB"

#### File Selection
1. Click "Browse & Select File" button
2. System file picker opens
3. Select Excel file (.xlsx or .xls)
4. File begins processing automatically

### 14.3 File Processing

#### Progress Indicators
1. **Upload Progress Bar**
   - Shows file upload progress (0-100%)
   - Color: Blue gradient
   - Updates in real-time

2. **Processing Status**
   - "Reading workbook..." - File being parsed
   - "Loading sheets..." - Individual sheets being read
   - "Processing data..." - Data being calculated
   - "Refreshing dashboard..." - Views being updated

#### Data Extraction Process
```javascript
1. Read Excel workbook using ExcelJS/XLSX library
2. Identify required sheets (by name priority):
   
   Parameter_Audit_Count:
   - Priority: "Parameter_Audit_Count", "Parameter Audit Count", "Audit Count"
   
   Account_Summary:
   - Priority: "Account_Summary", "Account Summary", "Accounts"
   
   Recruiter_Audit_Count:
   - Priority: "Recruiter_Audit_Count", "Recruiter Audit Count", "Recruiters"
   
   Transactional_Overview:
   - Priority: "Transactional_Overview", "Transactional Overview", "Monthly"
   
   RCA_CAPA:
   - Priority: "RCA_CAPA", "RCA CAPA", "RCA", "CAPA"
   
   Projects:
   - Priority: "Projects", "Project Summary", "Project"
   
   SLA:
   - Priority: "SLA", "SLA Overview", "Service Level"
   
   CSAT:
   - Priority: "CSAT", "Customer Satisfaction", "Satisfaction"
   
   Benchmark:
   - Priority: "Company_Metrics", "Benchmark", "Industry_Benchmarks"

3. Parse each sheet into JSON array
4. Store in window.dashboardData object
5. Validate data integrity
6. Trigger refresh for all tabs
```

### 14.4 Upload Summary

After successful upload, displays:
- **Total Sheets Loaded:** Count of sheets parsed
- **Data Summary:**
  - Audits: XXX records
  - Accounts: XXX records
  - Recruiters: XXX records
  - Transactions: XXX records
  - RCA/CAPA: XXX records
  - Projects: XXX records
  - SLA: XXX records
  - CSAT: XXX records
  - Benchmarks: XXX metrics

- **Status:** "✅ Data loaded successfully"
- **Button:** "Close" to dismiss modal

### 14.5 Error Handling

#### Common Errors

1. **File Format Error**
   - Message: "❌ Invalid file format. Please upload an Excel file (.xlsx or .xls)"
   - Solution: Upload correct file type

2. **Missing Sheets Error**
   - Message: "⚠️ Warning: Some required sheets were not found"
   - Details: Lists missing sheet names
   - Impact: Affected tabs will show "No data available"

3. **Corrupted File Error**
   - Message: "❌ Error reading file. The file may be corrupted."
   - Solution: Re-export Excel file and try again

4. **Size Limit Error**
   - Message: "❌ File too large. Maximum size is 5MB."
   - Solution: Reduce file size or split data

5. **Network Error**
   - Message: "❌ Upload failed. Please check your connection and try again."
   - Solution: Retry upload

### 14.6 Data Refresh Flow

After successful upload:
```javascript
1. Close upload modal
2. Show "Refreshing dashboard..." notification
3. Call refresh functions in sequence:
   - refreshHome()
   - refreshJourneyAtGlance()
   - refreshAccountSummary()
   - refreshTransactionalOverview()
   - refreshParameterPerformance()
   - refreshRecruiterInsights()
   - refreshStrategicOverview()
   - refreshProjectSummary()
   - refreshRCACAPATab()
   - refreshCSATTab()
   - refreshBenchmarksTab()
   - refreshSLATab()
4. Update all KPI cards
5. Redraw all charts
6. Refresh all tables
7. Show "✅ Dashboard updated successfully"
```

---

# 15. FORMULAS & CALCULATIONS REFERENCE

## Overview
Complete reference of all formulas and calculations used across the dashboard.

## 15.1 Core Quality Metrics

### Overall Accuracy
```
Overall Accuracy = (Total Opportunity Pass / (Total Opportunity Count - Total Opportunity NA)) × 100

Where:
- Opportunity Pass: Audits that passed quality check
- Opportunity Count: Total audits conducted
- Opportunity NA: Audits marked as Not Applicable

Example:
Pass = 2500, Count = 2847, NA = 150
Accuracy = (2500 / (2847 - 150)) × 100 = 92.7%
```

### Sample Percentage
```
Sample % = (Total Opportunity Count / Total Population) × 100

Where:
- Opportunity Count: Number of audits conducted
- Total Population: Total available population for audit

Example:
Count = 2847, Population = 10000
Sample % = (2847 / 10000) × 100 = 28.5%
```

### Error Percentage
```
Error % = (Total Opportunity Fail / Total Opportunity Count) × 100

Where:
- Opportunity Fail: Audits that failed quality check
- Opportunity Count: Total audits conducted

Example:
Fail = 197, Count = 2847
Error % = (197 / 2847) × 100 = 6.9%
```

## 15.2 Regional Calculations

### Regional Accuracy
```
Regional Accuracy = (Regional Opportunity Pass / (Regional Opportunity Count - Regional Opportunity NA)) × 100

Calculation Steps:
1. Filter data by Region (North, South, East, West, Central)
2. Sum Opportunity Pass for region
3. Sum Opportunity Count for region
4. Sum Opportunity NA for region
5. Apply accuracy formula

Example for North Region:
Pass = 800, Count = 900, NA = 50
North Accuracy = (800 / (900 - 50)) × 100 = 94.1%
```

## 15.3 Account-Level Calculations

### Account Accuracy
```
Account Accuracy = (Account Opportunity Pass / (Account Opportunity Count - Account Opportunity NA)) × 100

Process:
1. Filter data WHERE Client = "Account Name"
2. Sum filtered Opportunity Pass
3. Sum filtered Opportunity Count
4. Sum filtered Opportunity NA
5. Calculate accuracy

Example for HCLTech:
Pass = 450, Count = 486, NA = 10
HCLTech Accuracy = (450 / (486 - 10)) × 100 = 94.5%
```

### Account Status Logic
```
IF Account Accuracy >= 90% THEN "Excellent" (Green)
ELSE IF Account Accuracy >= 75% THEN "Good" (Amber)
ELSE "Needs Improvement" (Red)
```

## 15.4 Parameter Calculations

### Parameter Accuracy
```
Parameter Accuracy = (Parameter Opportunity Pass / (Parameter Opportunity Count - Parameter Opportunity NA)) × 100

Process:
1. Filter data WHERE Parameter = "Parameter Name"
2. Sum filtered Opportunity Pass
3. Sum filtered Opportunity Count
4. Sum filtered Opportunity NA
5. Calculate accuracy
```

### Parameter Impact Level
```
Logic:
IF (Parameter Error Count > 100 AND Parameter Error % > 10%) THEN "Critical"
ELSE IF (Parameter Error Count > 50 OR Parameter Error % > 5%) THEN "High"
ELSE IF (Parameter Error Count > 20 OR Parameter Error % > 2%) THEN "Medium"
ELSE "Low"

Color Coding:
Critical: Red (#ef4444)
High: Amber (#f59e0b)
Medium: Yellow (#fbbf24)
Low: Green (#10b981)
```

### Training Priority
```
Based on Impact Level:
Critical → "Immediate" (Red)
High → "High" (Amber)
Medium → "Medium" (Yellow)
Low → "Low" (Green)
```

## 15.5 Recruiter Calculations

### Recruiter Accuracy
```
Recruiter Accuracy = (Recruiter Opportunity Pass / (Recruiter Opportunity Count - Recruiter Opportunity NA)) × 100

Process:
1. Filter data WHERE Recruiter = "Recruiter Name"
2. Sum filtered Opportunity Pass
3. Sum filtered Opportunity Count
4. Sum filtered Opportunity NA
5. Calculate accuracy
```

### Recruiter Rank
```
RANK(Recruiter Accuracy, ORDER BY DESC)

Process:
1. Calculate accuracy for all recruiters
2. Sort by accuracy descending
3. Assign rank 1, 2, 3, ... N
4. Top 3 get medals: 🥇 🥈 🥉
```

### Performance Trend
```
Trend = Current Month Accuracy - Previous Month Accuracy

IF Trend > 0 THEN "Improving" ↑ (Green)
ELSE IF Trend < 0 THEN "Declining" ↓ (Red)
ELSE "Stable" → (Amber)
```

## 15.6 Monthly/Transactional Calculations

### Monthly Accuracy
```
Monthly Accuracy = (Monthly Opportunity Pass / (Monthly Opportunity Count - Monthly Opportunity NA)) × 100

Process:
1. Filter data for specific month
2. Sum Opportunity Pass for month
3. Sum Opportunity Count for month
4. Sum Opportunity NA for month
5. Calculate monthly accuracy
```

### Month-over-Month Change
```
MoM Change = ((Current Month Value - Previous Month Value) / Previous Month Value) × 100

Example:
Current = 95.5%, Previous = 92.3%
MoM Change = ((95.5 - 92.3) / 92.3) × 100 = +3.5%

Display:
Positive change: Green ↑ +3.5%
Negative change: Red ↓ -3.5%
```

## 15.7 Strategic Overview Calculations

### Overall Quality Score (Composite)
```
Overall Quality Score = (Accuracy % × 0.6) + (Sample % × 0.2) + ((100 - Error %) × 0.2)

Weights:
- Accuracy: 60% weight (most important)
- Sample Coverage: 20% weight
- Error Avoidance: 20% weight

Example:
Accuracy = 92.7%, Sample = 28.5%, Error = 6.9%
Quality Score = (92.7 × 0.6) + (28.5 × 0.2) + ((100 - 6.9) × 0.2)
              = 55.62 + 5.7 + 18.62
              = 79.94%
```

### Account Health Distribution
```
Excellent: COUNT(Accounts WHERE Accuracy >= 90%)
Good: COUNT(Accounts WHERE 75% <= Accuracy < 90%)
Fair: COUNT(Accounts WHERE 60% <= Accuracy < 75%)
Needs Attention: COUNT(Accounts WHERE Accuracy < 60%)

Percentages:
Each Category % = (Category Count / Total Accounts) × 100
```

## 15.8 Project Calculations

### Project Accuracy
```
Project Accuracy = (Project Opportunity Pass / (Project Opportunity Count - Project Opportunity NA)) × 100

Process:
1. Filter data WHERE Project = "Project Name"
2. Sum filtered Opportunity Pass
3. Sum filtered Opportunity Count
4. Sum filtered Opportunity NA
5. Calculate project accuracy
```

### Project Health Status
```
IF (Project Accuracy >= 90% AND Project Error % < 5%) THEN "Healthy" (Green)
ELSE IF (Project Accuracy >= 80% AND Project Error % < 10%) THEN "Moderate" (Amber)
ELSE "At Risk" (Red)
```

### Resource Efficiency
```
Efficiency Score = (Accuracy % × 0.7) + (Productivity × 0.3)

Where:
Productivity = (Audits per Team Member / Average Audits per Team Member) × 100

Example:
Project Accuracy = 92%
Project Audits = 500, Team Size = 10
Audits per Member = 500 / 10 = 50
Average across all projects = 45

Productivity = (50 / 45) × 100 = 111.1%
Efficiency = (92 × 0.7) + (111.1 × 0.3) = 64.4 + 33.3 = 97.7%
```

## 15.9 RCA/CAPA Calculations

### Case Age
```
For Open Cases:
Age = TODAY() - Raised Date (in days)

For Closed Cases:
Age = Closure Date - Raised Date (in days)

Example:
Raised: 2024-01-15
Today: 2024-02-20
Age = 36 days
```

### Priority Calculation
```
Logic:
IF (Impact Level = "Critical" OR Age > 30 days) THEN "Immediate"
ELSE IF (Impact Level = "High" OR Age > 15 days) THEN "High"
ELSE IF Impact Level = "Medium" THEN "Medium"
ELSE "Low"
```

### Average Closure Time
```
Avg Closure Time = SUM(Closure Age for all Closed Cases) / COUNT(Closed Cases)

Where:
Closure Age = Closure Date - Raised Date

Example:
Case 1: 25 days
Case 2: 30 days
Case 3: 20 days
Avg = (25 + 30 + 20) / 3 = 25 days
```

## 15.10 CSAT Calculations

### Top Box Percentages
```
Top 2 Box % = (COUNT(Ratings 6-7) / Total Responses) × 100
Top 3 Box % = (COUNT(Ratings 5-7) / Total Responses) × 100
Top 4 Box % = (COUNT(Ratings 4-7) / Total Responses) × 100

Scale: 1-7 (7 = Highly Satisfied)

Example:
Total Responses: 100
Ratings 6-7: 40 responses
Ratings 5-7: 65 responses
Ratings 4-7: 80 responses

Top 2 Box = (40 / 100) × 100 = 40%
Top 3 Box = (65 / 100) × 100 = 65%
Top 4 Box = (80 / 100) × 100 = 80%
```

### Overall Satisfaction Score
```
Overall Satisfaction = Average of all satisfaction ratings

Example:
Responses: 5, 6, 7, 6, 5, 7, 6, 5
Sum = 47
Count = 8
Overall Satisfaction = 47 / 8 = 5.88 out of 7
```

### Year-over-Year Change
```
YoY Change = Current Year Value - Previous Year Value

Example:
FY2024 Top 2 Box = 40%
FY2023 Top 2 Box = 62.5%
YoY Change = 40% - 62.5% = -22.5%

Display: ↓ -22.5% (Red for decline)
```

## 15.11 Competitive Intelligence Calculations

### Industry Adoption Rate
```
Industry Adoption Rate = (COUNT(Metrics WHERE Adherence = "YES") / Total Metrics) × 100

Example:
Total Metrics: 91
YES Status: 65
Adoption Rate = (65 / 91) × 100 = 71.4%
```

### Company Adoption Rate
```
Company Adoption Rate = (Company YES Count / Company Total Metrics) × 100

Example for Allegis:
Total Metrics: 25
YES Status: 15
Adoption Rate = (15 / 25) × 100 = 60%

Color Logic:
>= 50%: Green (High adoption)
25-49%: Amber (Moderate adoption)
< 25%: Gray (Low adoption)
```

### Gap Analysis
```
Gap % = (COUNT(Metrics WHERE Adherence = "NO") / Total Metrics) × 100

Represents: Opportunities for innovation or non-applicable metrics
```

## 15.12 SLA Calculations

### SLA Compliance
```
SLA Compliance % = (COUNT(Cases WHERE Actual TAT <= SLA TAT) / Total Cases) × 100

Example:
Total Cases: 1000
Cases within SLA: 950
Compliance = (950 / 1000) × 100 = 95%
```

### Average TAT
```
Avg TAT = SUM(Actual TAT for all cases) / COUNT(Cases)

Example:
Case 1: 5 hours
Case 2: 8 hours
Case 3: 6 hours
Avg TAT = (5 + 8 + 6) / 3 = 6.33 hours
```

### SLA Breach Count
```
SLA Breaches = COUNT(Cases WHERE Actual TAT > SLA TAT)

Example:
SLA TAT: 8 hours
Cases with TAT > 8 hours: 50
SLA Breaches = 50
```

## 15.13 Color Coding Standards

### Accuracy Ranges
```
>= 90%: Green (#10b981) - Excellent
75-89%: Amber (#f59e0b) - Good
60-74%: Yellow (#fbbf24) - Fair
< 60%: Red (#ef4444) - Needs Improvement
```

### Error Ranges
```
< 5%: Green (Low error)
5-10%: Amber (Moderate error)
> 10%: Red (High error)
```

### Trend Indicators
```
Positive Change: Green ↑
Negative Change: Red ↓
No Change: Amber →
```

### Status Colors
```
Active/Open/WIP: Blue (#3b82f6)
Completed/Closed: Green (#10b981)
On Hold/Paused: Gray (#9ca3af)
At Risk/Critical: Red (#ef4444)
```

---

## APPENDIX A: Data Sheet Structures

### A.1 Parameter_Audit_Count Sheet
**Required Columns:**
- Client (Account name)
- Parameter (Quality parameter name)
- Sub Parameter (Optional sub-category)
- Opportunity Pass (Count of passed audits)
- Opportunity Count (Total audits conducted)
- Opportunity Fail (Count of failed audits)
- Opportunity NA (Count of N/A audits)
- Total Population (Available population)
- Regional Head (Optional - for regional breakdown)
- Practice Head (Optional - for practice breakdown)

### A.2 Account_Summary Sheet
**Required Columns:**
- Client (Account name)
- Regional Head
- Practice Head
- BE SPOC (Business Excellence point of contact)
- Account Manager
- Status (Active/Inactive)

### A.3 Recruiter_Audit_Count Sheet
**Required Columns:**
- Recruiter Name
- Parameter
- Opportunity Pass
- Opportunity Count
- Opportunity Fail
- Opportunity NA
- Total Population
- Month (Optional - for trends)

### A.4 Transactional_Overview Sheet
**Required Columns:**
- Month (Apr, May, Jun, etc.)
- Opportunity Pass
- Opportunity Count
- Opportunity Fail
- Opportunity NA

### A.5 RCA_CAPA Sheet
**Required Columns:**
- Case ID
- Type (RCA/CAPA)
- Error Type
- Impact Level
- Status (Open/WIP/Closed)
- Raised Date
- Target Date
- Closure Date (if closed)
- Owner/Assigned To

### A.6 Projects Sheet
**Required Columns:**
- Project Name
- Status (Active/Completed/On Hold)
- Start Date
- Team Size
- Client (if project-specific)

### A.7 SLA Sheet
**Required Columns:**
- Process Name
- SLA Target (in hours)
- Actual TAT (in hours)
- Case ID
- Status (Met/Breached)

### A.8 CSAT Sheet
**Required Columns:**
- Financial Year (FY 2024, 2024, etc.)
- Parameter (Overall Satisfaction, Response Rate, etc.)
- Sub Parameter 1 (Additional details)
- Values (Numeric values or percentages)

### A.9 Benchmark/Company_Metrics Sheet
**Required Columns:**
- Category (Global RPO, Indian RPO, etc.)
- Company (Allegis, AMS, etc.)
- Metric Name
- Adherence Status (YES/NO/PARTIAL/NA)
- Taggd_Category (Metric grouping)
- Concise Description

---

## APPENDIX B: Dashboard URLs & Access

### Production Dashboard
- **URL:** https://3000-iiqzlm50w1twpgggr1553-82b888ba.sandbox.novita.ai
- **Password:** Excellence@2026
- **Access:** Password-protected web interface

### GitHub Repository
- **URL:** https://github.com/Businessexcellence/Quality-Dashboard
- **Branch:** main
- **Technology:** Hono framework, JavaScript, Chart.js

---

## APPENDIX C: Technical Specifications

### Browser Compatibility
- Chrome (Recommended)
- Firefox
- Edge
- Safari

### File Size Limits
- Max Excel file size: 5MB
- Recommended: Keep under 3MB for optimal performance

### Performance
- Data processing: < 5 seconds for typical file
- Chart rendering: < 2 seconds
- Tab switching: Instant

### Data Retention
- Dashboard stores data in browser session
- Data persists until new file is uploaded or page is refreshed
- No server-side storage

---

## Document End

**Version:** 1.0  
**Last Updated:** January 2025  
**Document Owner:** Quality Dashboard Team  
**For Support:** Contact dashboard administrator

---

This comprehensive documentation covers all aspects of the Quality Dashboard, including every tab, view, calculation, and formula used throughout the application.
