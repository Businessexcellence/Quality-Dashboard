// ==========================================
// COMPREHENSIVE GUIDED TOUR SYSTEM
// Complete implementation with all tabs covered
// ==========================================

window.tourState = {
    active: false,
    currentStep: 0,
    currentTab: null,
    overlay: null,
    tooltip: null
};

// Comprehensive tour steps for ALL tabs
window.tourSteps = {
    'home': [
        {
            target: '.insight-carousel',
            title: '📊 Welcome to Business Excellence Dashboard',
            description: '<strong>Insight Cards:</strong> Dynamic insights carousel showing key metrics, trends, and highlights from your data.<br><br><em>💡 Tip: These cards auto-rotate to show you important information at a glance.</em>',
            position: 'bottom'
        },
        {
            target: '#topAccounts',
            title: '🏆 Top Performing Accounts',
            description: '<strong>High Performers:</strong> Accounts with 70%+ accuracy and 10+ audits, sorted by performance score.<br><br><strong>What to look for:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li>Accuracy percentages</li><li>Total audit counts</li><li>Consistent high performers</li></ul><em>💡 Click any account to view details.</em>',
            position: 'bottom'
        },
        {
            target: '#bottomAccounts',
            title: '⚠️ Accounts Needing Attention',
            description: '<strong>Improvement Focus:</strong> Accounts with lowest accuracy scores requiring immediate attention.<br><br><strong>Action items:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li>Review audit findings</li><li>Identify common issues</li><li>Plan corrective actions</li></ul><em>💡 Priority focus for quality improvement teams.</em>',
            position: 'top'
        }
    ],
    
    'journey-at-glance': [
        {
            target: '.tab-content#journey-at-glance > div:nth-child(1)',
            title: '🔍 Journey Filters Panel',
            description: '<strong>Filter Options:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li><strong>Search:</strong> Type account names to find specific clients</li><li><strong>Region:</strong> Filter by geographical location (North, South, East, West)</li><li><strong>Status:</strong> Active/Inactive accounts</li><li><strong>Audit:</strong> Filter by audit status (Yes/No/On Hold)</li><li><strong>Accuracy:</strong> Performance tiers (Excellent/Good/Fair/Poor)</li></ul><em>💡 All filters work together to refine your view.</em>',
            position: 'bottom'
        },
        {
            target: '#journeyStatsGrid',
            title: '📈 Key Performance Summary',
            description: '<strong>5 Critical Metrics:</strong><br><br><strong>1. TOTAL POPULATION (27,871):</strong> Total number of records available to conduct audits<br><br><strong>2. TOTAL OPPORTUNITY:</strong> Selected samples for audit performance<br><br><strong>3. ACCURACY %:</strong> Formula: (Opportunity Pass ÷ Total Opportunity) × 100<br>Excludes N/A cases for accurate calculation<br><br><strong>4. SAMPLE %:</strong> Formula: (Total Opportunity ÷ Total Population) × 100<br>Coverage indicator<br><br><strong>5. SLA COMPLIANCE %:</strong> Percentage of hiring activities meeting SLA targets<br><br><em>💡 These metrics update based on your filter selections.</em>',
            position: 'bottom'
        },
        {
            target: '#journeyAccountsGrid',
            title: '🏢 Individual Account Performance Cards',
            description: '<strong>Detailed Account View:</strong> Each card shows comprehensive metrics per account.<br><br><strong>Card Sections:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li><strong>7 KPI Cards:</strong> Parameters, Accuracy, Sample, Error, Audits, Critical/Non-Critical</li><li><strong>Transactional Overview:</strong> Audits Number (mirrors Total Population)</li><li><strong>Parameter Performance:</strong> High/Medium/Low breakdown</li><li><strong>RCA & CAPA:</strong> Open/Closed issues</li><li><strong>Customer Satisfaction:</strong> CSAT scores</li></ul><em>💡 Scroll to see all account cards with complete metrics.</em>',
            position: 'top'
        }
    ],
    
    'account-summary': [
        {
            target: '#accountFilters',
            title: '🎯 Account Filter System',
            description: '<strong>6 Dynamic Filters:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li><strong>Client Interaction:</strong> Yes/No engagement status</li><li><strong>Practice Head:</strong> Filter by practice leader</li><li><strong>Audit Status:</strong> Current audit state</li><li><strong>Audit Frequency:</strong> Monthly, Quarterly, etc.</li><li><strong>Region:</strong> Geographical location</li><li><strong>Regional Head:</strong> Regional leader name</li></ul><em>💡 Each filter shows count of matching records. Click to apply!</em>',
            position: 'bottom'
        },
        {
            target: 'div[style*="grid-template-columns: repeat(4, 1fr)"]',
            title: '📊 Key Performance Indicators',
            description: '<strong>4 Main KPIs:</strong><br><br><strong>1. Active Accounts (42):</strong> Total number of active client accounts<br><br><strong>2. Regional Heads (4):</strong> Number of regional leaders<br><br><strong>3. Client Interactions:</strong> Engagement statistics<br><br><strong>4. Audit Status:</strong> Current audit distribution<br><br><em>💡 Click any KPI card to filter the account table automatically!</em>',
            position: 'bottom'
        },
        {
            target: 'div#bespocAuditContainer',
            title: '👥 BE SPOC Distribution - Audit',
            description: '<strong>Business Excellence SPOC (Audit):</strong><br><br>Shows top SPOCs handling audits with Audit Status = "Yes".<br><br><strong>What you see:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li>SPOC names</li><li>Number of accounts handled</li><li>Clickable for instant filtering</li></ul><em>💡 Click any SPOC name to see their specific accounts in the table below!</em>',
            position: 'bottom'
        },
        {
            target: 'div#bespocSLAContainer',
            title: '📋 BE SPOC Distribution - SLAs/KPIs',
            description: '<strong>Business Excellence SPOC (SLAs/KPIs):</strong><br><br>Shows SPOC distribution for SLA and KPI management.<br><br><strong>Key features:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li>Top 5 SPOCs displayed</li><li>Account counts per SPOC</li><li>Click to filter table</li></ul><em>💡 Use this to understand workload distribution across the team.</em>',
            position: 'bottom'
        },
        {
            target: '#accountTableContainer',
            title: '📋 Comprehensive Account Table',
            description: '<strong>Complete Account Details:</strong><br><br><strong>Columns included:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li>#: Row number</li><li>Account: Client name</li><li>Practice Head: Responsible leader</li><li>Regional Head: Regional manager</li><li>Audit Status: Current state</li><li>Frequency: Audit schedule</li><li>Audit Start Date: When audit began</li><li>Audit End Date: Completion date</li><li>Agreed Sample %: Target sampling rate</li><li>Client Int.: Interaction status</li><li>SPOC Audit: Audit SPOC name</li><li>SPOC SLA: SLA SPOC name</li></ul><em>💡 Scroll horizontally to see all columns. Table updates based on filters!</em>',
            position: 'top'
        }
    ],
    
    'transactional': [
        {
            target: '#transactionalFilters',
            title: '🔍 Transactional Filters',
            description: '<strong>6 Drill-Down Filters:</strong><br><br>Filter transaction data by multiple dimensions:<ul style="margin: 8px 0; padding-left: 20px;"><li>Account/Client</li><li>Region</li><li>Practice Head</li><li>Financial Year</li><li>Month</li><li>Stage (Critical/Non-Critical)</li></ul><em>💡 Combine filters for precise data analysis!</em>',
            position: 'bottom'
        },
        {
            target: '#summaryContent',
            title: '📝 Transaction Summary',
            description: '<strong>Summary Section:</strong> Quick overview of filtered data showing:<ul style="margin: 8px 0; padding-left: 20px;"><li>Number of records</li><li>Date ranges</li><li>Key statistics</li><li>Filter descriptions</li></ul><em>💡 This updates dynamically as you apply filters.</em>',
            position: 'bottom'
        },
        {
            target: 'div[style*="grid-template-columns: repeat(6, 1fr)"]',
            title: '📊 Transaction KPI Cards',
            description: '<strong>6 Key Metrics:</strong><br><br><strong>1. ACCURACY:</strong> Overall accuracy percentage<br><strong>2. SAMPLE %:</strong> Sampling coverage<br><strong>3. ERROR %:</strong> Error rate<br><strong>4. OVERALL:</strong> Total audit count<br><strong>5. CRITICAL:</strong> Critical parameter count<br><strong>6. NON-CRITICAL:</strong> Non-critical count<br><br><em>💡 All metrics calculate from filtered data in real-time.</em>',
            position: 'bottom'
        },
        {
            target: '#transactionalChart',
            title: '📈 Transaction Trends Chart',
            description: '<strong>Visual Analytics:</strong> Interactive chart showing transaction patterns over time.<br><br><strong>Features:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li>Accuracy trends</li><li>Monthly comparisons</li><li>Regional breakdowns</li><li>Hover for details</li></ul><em>💡 Use this to identify trends and patterns in your audit data.</em>',
            position: 'top'
        }
    ],
    
    'audit-summary': [
        {
            target: '#parameterFiltersContainer',
            title: '🎯 Parameter Filters',
            description: '<strong>Filter Audit Parameters:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li><strong>Region:</strong> Geographic filter</li><li><strong>Practice Head:</strong> Leader filter</li><li><strong>Financial Year:</strong> Year selection</li><li><strong>Month:</strong> Monthly view</li><li><strong>Stage:</strong> Critical/Non-Critical</li><li><strong>Parameter:</strong> Specific parameter name</li></ul><em>💡 Filter combinations help drill down to specific audit areas.</em>',
            position: 'bottom'
        },
        {
            target: '#parameterKPIsContainer',
            title: '📊 Parameter Performance Metrics',
            description: '<strong>5 Core KPIs:</strong><br><br><strong>TOTAL PARAMETERS:</strong> Count of all audit parameters<br><br><strong>ACCURACY %:</strong> (Opportunity Pass ÷ Valid Opportunities) × 100<br><br><strong>SAMPLE %:</strong> (Valid Opportunities ÷ Total Opportunities) × 100<br><br><strong>ERROR %:</strong> (Opportunity Fail ÷ Valid Opportunities) × 100<br><br><strong>TOTAL AUDITS:</strong> Sum of all audit records<br><br><em>💡 These reflect your current filter selections.</em>',
            position: 'bottom'
        },
        {
            target: '#parameterChartContainer',
            title: '📈 Parameter Performance Chart',
            description: '<strong>Visual Performance Analysis:</strong><br><br>Interactive chart displaying:<ul style="margin: 8px 0; padding-left: 20px;"><li>Parameter accuracy trends</li><li>Month-over-month changes</li><li>Regional comparisons</li><li>Critical vs Non-Critical breakdown</li></ul><em>💡 Hover over data points for detailed information!</em>',
            position: 'bottom'
        },
        {
            target: '#parameterTableContainer',
            title: '📋 Detailed Parameter Table',
            description: '<strong>Complete Parameter Data:</strong><br><br>Table columns include:<ul style="margin: 8px 0; padding-left: 20px;"><li>Parameter name</li><li>Client/Account</li><li>Region & Practice Head</li><li>Stage (Critical/Non-Critical)</li><li>Total Population</li><li>Opportunity counts (Pass/Fail/NA)</li><li>Accuracy & Error percentages</li><li>Sample percentage</li></ul><em>💡 Sort by any column to analyze data different ways!</em>',
            position: 'top'
        }
    ],
    
    'recruiter': [
        {
            target: '#recruiterFiltersContainer',
            title: '🔍 Recruiter Filters',
            description: '<strong>Filter Recruiter Data:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li><strong>Recruiter Name:</strong> Individual recruiter</li><li><strong>Practice Head:</strong> Team leader</li><li><strong>Region:</strong> Geographic location</li><li><strong>Financial Year:</strong> Year selection</li><li><strong>Month:</strong> Monthly data</li><li><strong>Stage:</strong> Critical/Non-Critical</li></ul><em>💡 Analyze individual recruiter performance with these filters.</em>',
            position: 'bottom'
        },
        {
            target: '#recruiterKPIsContainer',
            title: '📊 Recruiter Performance Metrics',
            description: '<strong>Key Metrics:</strong><br><br><strong>TOTAL RECRUITERS:</strong> Unique recruiter count<br><br><strong>AVG ACCURACY:</strong> Average accuracy across all recruiters<br><br><strong>TOTAL AUDITS:</strong> Total number of recruiter audits performed<br><br><strong>HIGH PERFORMERS:</strong> Recruiters with 90%+ accuracy<br><br><strong>NEEDS ATTENTION:</strong> Recruiters below 75% accuracy<br><br><em>💡 Use these to identify training needs and best practices!</em>',
            position: 'bottom'
        },
        {
            target: '#recruiterChartContainer',
            title: '📈 Recruiter Performance Chart',
            description: '<strong>Visual Analytics:</strong><br><br>Charts showing:<ul style="margin: 8px 0; padding-left: 20px;"><li>Recruiter accuracy distributions</li><li>Top/Bottom performers</li><li>Regional comparisons</li><li>Month-over-month trends</li></ul><em>💡 Identify patterns and outliers quickly with visual data!</em>',
            position: 'bottom'
        },
        {
            target: '#recruiterTableContainer',
            title: '📋 Detailed Recruiter Table',
            description: '<strong>Complete Recruiter Data:</strong><br><br>Table shows:<ul style="margin: 8px 0; padding-left: 20px;"><li>Recruiter names</li><li>Program Managers</li><li>Client assignments</li><li>Parameter-level performance</li><li>Accuracy scores</li><li>Stage classifications</li><li>Regional data</li></ul><em>💡 Total of 27,871 recruiter audit records available!</em>',
            position: 'top'
        }
    ],
    
    'strategic': [
        {
            target: '#strategicFiltersContainer',
            title: '🎯 Strategic Filters',
            description: '<strong>High-Level Filters:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li>Financial Year</li><li>Quarter</li><li>Region</li><li>Practice Head</li><li>Account Category</li></ul><em>💡 Focus on strategic trends and executive-level metrics.</em>',
            position: 'bottom'
        },
        {
            target: '#strategicKPIsContainer',
            title: '📊 Strategic KPIs',
            description: '<strong>Executive Metrics:</strong><br><br><strong>OVERALL ACCURACY:</strong> Enterprise-wide accuracy<br><strong>TOTAL ACCOUNTS:</strong> Active client count<br><strong>TOTAL AUDITS:</strong> Audit volume<br><strong>SLA COMPLIANCE:</strong> SLA achievement rate<br><strong>CSAT SCORE:</strong> Customer satisfaction average<br><br><em>💡 High-level view for executive decision making!</em>',
            position: 'bottom'
        },
        {
            target: '#strategicChartsContainer',
            title: '📈 Strategic Dashboards',
            description: '<strong>Executive Visualizations:</strong><br><br>Multiple charts showing:<ul style="margin: 8px 0; padding-left: 20px;"><li>Accuracy trends over time</li><li>Regional performance comparison</li><li>Account growth metrics</li><li>SLA compliance trends</li><li>Quality improvement trajectory</li></ul><em>💡 Perfect for leadership presentations and reviews!</em>',
            position: 'top'
        }
    ],
    
    'projects': [
        {
            target: '#projectFiltersContainer',
            title: '🔍 Project Filters',
            description: '<strong>Filter Projects:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li><strong>Account:</strong> Client name</li><li><strong>Region:</strong> Geographic area</li><li><strong>Quarter:</strong> Q1/Q2/Q3/Q4</li><li><strong>Financial Year:</strong> Year selection</li><li><strong>Status:</strong> WIP/Closed</li><li><strong>Project Type:</strong> Category filter</li></ul><em>💡 Track ongoing and completed projects easily!</em>',
            position: 'bottom'
        },
        {
            target: '#projectKPIsContainer',
            title: '📊 Project Metrics',
            description: '<strong>Project Statistics:</strong><br><br><strong>TOTAL PROJECTS (23):</strong> All project records<br><br><strong>ONGOING PROJECTS (2):</strong> Status = WIP<br><br><strong>CLOSED PROJECTS (21):</strong> All other statuses<br><br><strong>SUCCESS RATE:</strong> % of successfully completed projects<br><br><em>💡 Example: M&M account shows 2 WIP projects.</em>',
            position: 'bottom'
        },
        {
            target: '#projectTableContainer',
            title: '📋 Project Details Table',
            description: '<strong>Complete Project Data:</strong><br><br>Columns include:<ul style="margin: 8px 0; padding-left: 20px;"><li>ID & Account</li><li>Opportunity Statement</li><li>Quarter & Financial Year</li><li>Sponsor & Status</li><li>Post Project Analysis</li><li>Region & Practice Head</li><li>Project Type</li></ul><em>💡 All 23 projects tracked with detailed information!</em>',
            position: 'top'
        }
    ],
    
    'rca-capa': [
        {
            target: '#rcaFiltersContainer',
            title: '🔍 RCA & CAPA Filters',
            description: '<strong>4 Smart Filters:</strong><br><br><strong>1. Practice Head (Column E):</strong> Filter by practice leader<br><strong>2. Financial Year (Column H):</strong> Year selection<br><strong>3. Region (Column J):</strong> Geographic filter<br><strong>4. Status (Column I):</strong> Open/Closed/Pending<br><br><em>💡 System intelligently detects column positions for robust filtering!</em>',
            position: 'bottom'
        },
        {
            target: '#rcaKPIsContainer',
            title: '📊 RCA & CAPA Metrics',
            description: '<strong>4 Key Metrics:</strong><br><br><strong>1. ERROR TYPE BREAKDOWN:</strong> Distribution by error categories<br><br><strong>2. IMPACT LEVELS:</strong> High/Medium/Low impact classification<br><br><strong>3. TOTAL COUNT (85):</strong> All RCA & CAPA records<br><br><strong>4. STATUS DISTRIBUTION:</strong> Currently all 85 records show "Closed" status<br><br><em>💡 Cards show counts and percentages for each category!</em>',
            position: 'bottom'
        },
        {
            target: '#rcaChartContainer',
            title: '📈 Region-wise RCA & CAPA Distribution',
            description: '<strong>Bar Chart Analysis:</strong><br><br>Visual representation showing:<ul style="margin: 8px 0; padding-left: 20px;"><li>RCA & CAPA count by region</li><li>Colorful bars for easy comparison</li><li>Regional trends at a glance</li><li>Identify high-issue areas</li></ul><em>💡 Helps prioritize quality initiatives by region!</em>',
            position: 'bottom'
        },
        {
            target: '#rcaDetailsContainer',
            title: '📋 Complete RCA & CAPA Records',
            description: '<strong>Detailed Information Panel:</strong><br><br>For each RCA & CAPA record:<ul style="margin: 8px 0; padding-left: 20px;"><li><strong>Problem Statement:</strong> Full description (first 5 words shown in dropdown)</li><li><strong>Error Type:</strong> Classification</li><li><strong>Impact:</strong> Severity level</li><li><strong>Practice Head:</strong> Responsible leader</li><li><strong>Account:</strong> Client name</li><li><strong>Region:</strong> Geographic location</li><li><strong>Root Cause:</strong> Analysis findings</li><li><strong>Corrective Action:</strong> Remediation steps</li><li><strong>Owner:</strong> Person responsible</li><li><strong>Due Date:</strong> Target completion</li></ul><em>💡 Click on any account dropdown to see full details!</em>',
            position: 'top'
        }
    ],
    
    'csat': [
        {
            target: '#csatFiltersContainer',
            title: '🔍 CSAT Filters',
            description: '<strong>Customer Satisfaction Filters:</strong><ul style="margin: 8px 0; padding-left: 20px;"><li><strong>Financial Year:</strong> Year selection</li><li><strong>Parameter:</strong> Satisfaction category</li><li><strong>Sub-Parameters:</strong> Detailed aspects</li><li><strong>Level:</strong> Rating tiers</li></ul><em>💡 Analyze customer feedback across different dimensions!</em>',
            position: 'bottom'
        },
        {
            target: '#csatKPIsContainer',
            title: '📊 CSAT Metrics',
            description: '<strong>Satisfaction Metrics:</strong><br><br><strong>AVG CSAT SCORE:</strong> Overall customer satisfaction average<br><br><strong>TOTAL RESPONSES (69):</strong> Number of satisfaction records<br><br><strong>HIGH SATISFACTION:</strong> Responses with scores 4-5<br><br><strong>LOW SATISFACTION:</strong> Responses with scores 1-2<br><br><em>💡 Track customer sentiment and identify improvement areas!</em>',
            position: 'bottom'
        },
        {
            target: '#csatChartContainer',
            title: '📈 CSAT Trends & Distribution',
            description: '<strong>Visual Analysis:</strong><br><br>Charts displaying:<ul style="margin: 8px 0; padding-left: 20px;"><li>Satisfaction score distribution</li><li>Trends over time</li><li>Category-wise breakdown</li><li>Level comparisons</li></ul><em>💡 Identify satisfaction patterns and focus areas!</em>',
            position: 'bottom'
        },
        {
            target: '#csatTableContainer',
            title: '📋 Detailed CSAT Data',
            description: '<strong>Complete Satisfaction Records:</strong><br><br>Table columns:<ul style="margin: 8px 0; padding-left: 20px;"><li>S.N. (Serial Number)</li><li>Financial Year</li><li>Parameter (Main category)</li><li>Sub Parameter 1 & 2</li><li>Level (Rating tier)</li><li>Values (Satisfaction scores)</li></ul><em>💡 All 69 customer satisfaction records with detailed ratings!</em>',
            position: 'top'
        }
    ]
};

// Start guided tour function with robust error handling
window.startGuidedTour = function() {
    console.log('🎯 Starting Comprehensive Guided Tour...');
    
    // Get current active tab with multiple fallback methods
    let activeTabContent = document.querySelector('.tab-content[style*="display: block"]');
    if (!activeTabContent) {
        activeTabContent = document.querySelector('.tab-content.active');
    }
    if (!activeTabContent) {
        activeTabContent = document.querySelector('.tab-content:not([style*="display: none"])');
    }
    
    if (!activeTabContent) {
        alert('⚠️ Could not detect current tab.\\n\\nPlease:\\n1. Navigate to a tab first\\n2. Wait for content to load\\n3. Try again');
        return;
    }
    
    const tabId = activeTabContent.id;
    console.log(`📍 Current tab detected: ${tabId}`);
    
    // Check if tour exists for this tab
    if (!window.tourSteps[tabId] || window.tourSteps[tabId].length === 0) {
        const availableTours = Object.keys(window.tourSteps).filter(key => window.tourSteps[key].length > 0);
        alert(`ℹ️ Tour not available for "${tabId}" tab yet.\\n\\n✅ Available tours:\\n${availableTours.map(t => '• ' + t.replace(/-/g, ' ').toUpperCase()).join('\\n')}\\n\\n💡 Navigate to one of these tabs and try again!`);
        return;
    }
    
    // Initialize tour state
    window.tourState.active = true;
    window.tourState.currentStep = 0;
    window.tourState.currentTab = tabId;
    
    console.log(`✅ Tour initialized for ${tabId} with ${window.tourSteps[tabId].length} steps`);
    
    // Create overlay and show first step
    createTourOverlay();
    showTourStep(0);
};

// Create overlay with proper z-index management
function createTourOverlay() {
    // Remove any existing overlay first
    const existingOverlay = document.getElementById('tourOverlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }
    
    // Create new overlay
    const overlay = document.createElement('div');
    overlay.id = 'tourOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9998;
        backdrop-filter: blur(2px);
        animation: fadeIn 0.3s ease;
    `;
    document.body.appendChild(overlay);
    window.tourState.overlay = overlay;
    
    // Close tour on overlay click
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeTour();
        }
    });
}

// Show specific tour step with comprehensive error handling
function showTourStep(stepIndex) {
    const steps = window.tourSteps[window.tourState.currentTab];
    
    // Validate step index
    if (!steps || stepIndex < 0 || stepIndex >= steps.length) {
        console.log('✅ Tour completed or invalid step');
        closeTour();
        return;
    }
    
    const step = steps[stepIndex];
    window.tourState.currentStep = stepIndex;
    
    console.log(`📍 Showing step ${stepIndex + 1}/${steps.length}: ${step.title}`);
    
    // Remove existing tooltip
    if (window.tourState.tooltip) {
        window.tourState.tooltip.remove();
        window.tourState.tooltip = null;
    }
    
    // Clear previous highlights
    clearTourHighlights();
    
    // Find target element with multiple selector fallbacks
    let target = document.querySelector(step.target);
    
    // If target not found, try alternative selectors
    if (!target && step.target.includes('#')) {
        const id = step.target.replace('#', '');
        target = document.getElementById(id);
    }
    
    // If still not found, try finding by partial match
    if (!target) {
        console.warn(`⚠️ Tour target not found: ${step.target}`);
        console.log('🔄 Attempting to find alternative target...');
        
        // Try to find any visible container in current tab
        const tabContent = document.getElementById(window.tourState.currentTab);
        if (tabContent) {
            const visibleContainers = tabContent.querySelectorAll('div[style*="display: grid"], div[style*="display: flex"], .widget-card, div[id], div[class]');
            if (visibleContainers.length > 0) {
                target = visibleContainers[Math.min(stepIndex, visibleContainers.length - 1)];
                console.log('✅ Found alternative target');
            }
        }
    }
    
    // If still no target, skip to next step
    if (!target) {
        console.warn(`❌ Could not find target for step ${stepIndex + 1}, skipping...`);
        setTimeout(() => showTourStep(stepIndex + 1), 500);
        return;
    }
    
    // Highlight target element - visible above overlay
    target.style.position = 'relative';
    target.style.zIndex = '10000'; // Above overlay (9998)
    target.style.boxShadow = '0 0 0 4px rgba(245, 158, 11, 0.6), 0 0 30px rgba(245, 158, 11, 0.4)';
    target.style.borderRadius = '8px';
    target.style.transition = 'all 0.3s ease';
    
    // Scroll to target - bring to upper third of viewport for better tooltip placement
    setTimeout(() => {
        const rect = target.getBoundingClientRect();
        const targetY = rect.top + window.scrollY;
        const offsetY = window.innerHeight / 3; // Position at top third of viewport
        
        window.scrollTo({
            top: targetY - offsetY,
            behavior: 'smooth'
        });
    }, 100);
    
    // Create tooltip
    createTooltip(step, target, stepIndex, steps.length);
}

// Create tooltip with improved positioning
function createTooltip(step, target, stepIndex, totalSteps) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tour-tooltip';
    tooltip.style.cssText = `
        position: fixed;
        z-index: 10001;
        max-width: 450px;
        max-height: 90vh;
        overflow-y: auto;
        animation: slideIn 0.3s ease;
    `;
    
    tooltip.innerHTML = `
        <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); position: relative;">
            <button onclick="closeTour()" style="position: absolute; top: 12px; right: 12px; background: none; border: none; font-size: 24px; color: #9CA3AF; cursor: pointer; padding: 4px 8px; line-height: 1; transition: color 0.2s;" onmouseover="this.style.color='#F59E0B'" onmouseout="this.style.color='#9CA3AF'">&times;</button>
            
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                <div style="background: linear-gradient(135deg, #F59E0B 0%, #F97316 100%); min-width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);">
                    <i class="fas fa-lightbulb" style="color: white; font-size: 20px;"></i>
                </div>
                <div style="font-size: 19px; font-weight: 700; color: #111827; line-height: 1.3; flex: 1; padding-right: 30px;">${step.title}</div>
            </div>
            
            <div style="font-size: 14px; color: #4B5563; line-height: 1.8; margin-bottom: 20px;">
                ${step.description}
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 2px solid #E5E7EB;">
                <div style="font-size: 13px; color: #9CA3AF; font-weight: 600;">
                    Step ${stepIndex + 1} of ${totalSteps}
                </div>
                <div style="display: flex; gap: 8px;">
                    ${stepIndex > 0 ? 
                        '<button onclick="previousTourStep()" style="padding: 10px 18px; background: #F3F4F6; border: none; border-radius: 8px; color: #374151; font-weight: 600; cursor: pointer; font-size: 13px; transition: all 0.2s;" onmouseover="this.style.background=\'#E5E7EB\'" onmouseout="this.style.background=\'#F3F4F6\'"><i class="fas fa-arrow-left"></i> Previous</button>' : 
                        ''
                    }
                    ${stepIndex < totalSteps - 1 ? 
                        '<button onclick="nextTourStep()" style="padding: 10px 18px; background: linear-gradient(135deg, #F59E0B 0%, #F97316 100%); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer; font-size: 13px; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3); transition: all 0.2s;" onmouseover="this.style.transform=\'translateY(-2px)\'; this.style.boxShadow=\'0 6px 16px rgba(245, 158, 11, 0.4)\'" onmouseout="this.style.transform=\'translateY(0)\'; this.style.boxShadow=\'0 4px 12px rgba(245, 158, 11, 0.3)\'">Next <i class="fas fa-arrow-right"></i></button>' :
                        '<button onclick="closeTour()" style="padding: 10px 18px; background: linear-gradient(135deg, #10B981 0%, #059669 100%); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer; font-size: 13px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3); transition: all 0.2s;" onmouseover="this.style.transform=\'translateY(-2px)\'; this.style.boxShadow=\'0 6px 16px rgba(16, 185, 129, 0.4)\'" onmouseout="this.style.transform=\'translateY(0)\'; this.style.boxShadow=\'0 4px 12px rgba(16, 185, 129, 0.3)\'">Finish Tour ✓</button>'
                    }
                    <button onclick="closeTour()" style="padding: 10px 18px; background: transparent; border: 2px solid #D1D5DB; border-radius: 8px; color: #6B7280; font-weight: 600; cursor: pointer; font-size: 13px; transition: all 0.2s;" onmouseover="this.style.borderColor=\'#F59E0B\'; this.style.color=\'#F59E0B\'" onmouseout="this.style.borderColor=\'#D1D5DB\'; this.style.color=\'#6B7280\'">Skip Tour</button>
                </div>
            </div>
        </div>
    `;
    
    // Position tooltip NEAR target - ALWAYS FULLY VISIBLE within viewport
    const rect = target.getBoundingClientRect();
    const tooltipHeight = Math.min(500, window.innerHeight * 0.9); // Max 90% of viewport
    const tooltipWidth = 450; // max-width
    const padding = 30; // Increased padding for safety
    
    // Calculate available space in all directions
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const spaceRight = window.innerWidth - rect.right;
    const spaceLeft = rect.left;
    
    // Calculate target element's vertical center
    const targetCenterY = rect.top + (rect.height / 2);
    
    let finalLeft = 0;
    let finalTop = 0;
    let finalRight = 'auto';
    let finalBottom = 'auto';
    
    // STRATEGY: Try each position, ensure FULL visibility
    
    // Priority 1: RIGHT side of target
    if (spaceRight > tooltipWidth + padding * 2) {
        finalLeft = Math.min(rect.right + padding, window.innerWidth - tooltipWidth - padding);
        // Vertically center on target, but constrain to viewport
        finalTop = Math.max(padding, Math.min(
            targetCenterY - tooltipHeight / 2, 
            window.innerHeight - tooltipHeight - padding
        ));
        finalRight = 'auto';
        finalBottom = 'auto';
    }
    // Priority 2: LEFT side of target
    else if (spaceLeft > tooltipWidth + padding * 2) {
        finalLeft = Math.max(padding, rect.left - tooltipWidth - padding);
        // Vertically center on target, but constrain to viewport
        finalTop = Math.max(padding, Math.min(
            targetCenterY - tooltipHeight / 2,
            window.innerHeight - tooltipHeight - padding
        ));
        finalRight = 'auto';
        finalBottom = 'auto';
    }
    // Priority 3: BELOW target (if enough space)
    else if (spaceBelow > tooltipHeight + padding * 2) {
        finalTop = rect.bottom + padding;
        // Center horizontally on target, but constrain to viewport
        const idealLeft = rect.left + (rect.width / 2) - (tooltipWidth / 2);
        finalLeft = Math.max(padding, Math.min(idealLeft, window.innerWidth - tooltipWidth - padding));
        finalRight = 'auto';
        finalBottom = 'auto';
    }
    // Priority 4: ABOVE target (if enough space)
    else if (spaceAbove > tooltipHeight + padding * 2) {
        finalTop = Math.max(padding, rect.top - tooltipHeight - padding);
        // Center horizontally on target, but constrain to viewport
        const idealLeft = rect.left + (rect.width / 2) - (tooltipWidth / 2);
        finalLeft = Math.max(padding, Math.min(idealLeft, window.innerWidth - tooltipWidth - padding));
        finalRight = 'auto';
        finalBottom = 'auto';
    }
    // FALLBACK: Center of viewport (ALWAYS fully visible)
    else {
        // Center the tooltip in the middle of the viewport
        finalLeft = Math.max(padding, (window.innerWidth - tooltipWidth) / 2);
        finalTop = Math.max(padding, (window.innerHeight - tooltipHeight) / 2);
        finalRight = 'auto';
        finalBottom = 'auto';
    }
    
    // Apply the calculated position
    tooltip.style.left = `${finalLeft}px`;
    tooltip.style.top = `${finalTop}px`;
    tooltip.style.right = finalRight;
    tooltip.style.bottom = finalBottom;
    tooltip.style.transform = 'none';
    
    // Ensure tooltip is never cut off - force within viewport
    setTimeout(() => {
        const tooltipRect = tooltip.getBoundingClientRect();
        
        // Check if tooltip is cut off on right
        if (tooltipRect.right > window.innerWidth - padding) {
            tooltip.style.left = `${window.innerWidth - tooltipRect.width - padding}px`;
        }
        
        // Check if tooltip is cut off on bottom
        if (tooltipRect.bottom > window.innerHeight - padding) {
            tooltip.style.top = `${window.innerHeight - tooltipRect.height - padding}px`;
        }
        
        // Check if tooltip is cut off on left
        if (tooltipRect.left < padding) {
            tooltip.style.left = `${padding}px`;
        }
        
        // Check if tooltip is cut off on top
        if (tooltipRect.top < padding) {
            tooltip.style.top = `${padding}px`;
        }
    }, 50);
    
    document.body.appendChild(tooltip);
    window.tourState.tooltip = tooltip;
}

// Navigation functions
window.nextTourStep = function() {
    console.log('➡️ Next step');
    clearTourHighlights();
    showTourStep(window.tourState.currentStep + 1);
};

window.previousTourStep = function() {
    console.log('⬅️ Previous step');
    clearTourHighlights();
    showTourStep(window.tourState.currentStep - 1);
};

// Clear highlights from all steps
function clearTourHighlights() {
    const steps = window.tourSteps[window.tourState.currentTab];
    if (steps) {
        steps.forEach(step => {
            const target = document.querySelector(step.target);
            if (target) {
                target.style.zIndex = '';
                target.style.boxShadow = '';
                target.style.position = '';
            }
        });
    }
}

// Close tour and cleanup
window.closeTour = function() {
    console.log('🛑 Closing tour');
    
    // Clear highlights
    clearTourHighlights();
    
    // Remove overlay
    if (window.tourState.overlay) {
        window.tourState.overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (window.tourState.overlay) {
                window.tourState.overlay.remove();
                window.tourState.overlay = null;
            }
        }, 300);
    }
    
    // Remove tooltip
    if (window.tourState.tooltip) {
        window.tourState.tooltip.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (window.tourState.tooltip) {
                window.tourState.tooltip.remove();
                window.tourState.tooltip = null;
            }
        }, 300);
    }
    
    // Reset state
    window.tourState.active = false;
    window.tourState.currentStep = 0;
    window.tourState.currentTab = null;
    
    console.log('✅ Tour closed successfully');
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    @keyframes slideIn {
        from { 
            opacity: 0;
            transform: translateY(-20px);
        }
        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// KEYBOARD NAVIGATION SUPPORT
// ==========================================

// Handle keyboard shortcuts for tour navigation
document.addEventListener('keydown', function(e) {
    // Only handle keys if tour is active
    if (!window.tourState.active) return;
    
    switch(e.key) {
        case 'Escape':
            // ESC to close tour
            e.preventDefault();
            console.log('⌨️ ESC pressed - Closing tour');
            window.closeTour();
            break;
            
        case 'ArrowRight':
        case 'ArrowDown':
            // Right/Down arrow for Next step
            e.preventDefault();
            console.log('⌨️ Arrow key pressed - Next step');
            window.nextTourStep();
            break;
            
        case 'ArrowLeft':
        case 'ArrowUp':
            // Left/Up arrow for Previous step (if not first step)
            if (window.tourState.currentStep > 0) {
                e.preventDefault();
                console.log('⌨️ Arrow key pressed - Previous step');
                window.previousTourStep();
            }
            break;
    }
});

console.log('✅ Comprehensive Guided Tour System Loaded');
console.log(`📊 Total tours available: ${Object.keys(window.tourSteps).length}`);
console.log(`📍 Total tour steps: ${Object.values(window.tourSteps).reduce((sum, steps) => sum + steps.length, 0)}`);
console.log('⌨️ Keyboard shortcuts: ESC (close), Arrow keys (navigate)');