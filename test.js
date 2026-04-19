/**
 * Lightweight Test Framework for FlowSense AI
 * Runs diagnostics on core prediction and recommendation logic.
 */

const TEST_STEP_DELAY_MS = 200;

class SystemDiagnostics {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
    }

    test(name, fn) {
        this.tests.push({ name, fn });
    }

    assert(condition, message) {
        if (!condition) {
            throw new Error(message || "Assertion failed");
        }
    }

    assertEquals(actual, expected, message) {
        if (actual !== expected) {
            throw new Error(message || `Expected ${expected}, but got ${actual}`);
        }
    }

    async runAll() {
        this.passed = 0;
        this.failed = 0;
        const logEl = document.getElementById('test-log');
        const healthEl = document.getElementById('health-status');
        const panelEl = document.getElementById('system-diagnostics-panel');
        
        if (!logEl || !healthEl || !panelEl) return;

        logEl.textContent = '';
        logEl.classList.remove('hidden');
        healthEl.textContent = 'Running...';
        healthEl.className = 'status-badge running';
        panelEl.classList.remove('all-passed', 'has-failures');

        for (const t of this.tests) {
            const li = document.createElement('li');
            li.className = 'test-item';
            try {
                t.fn();
                this.passed++;
                li.classList.add('pass');
                li.appendChild(this._createResultLabel(t.name, '✅ PASS'));
            } catch (err) {
                this.failed++;
                li.classList.add('fail');
                li.appendChild(this._createResultLabel(t.name, `❌ FAIL: ${err.message}`));
            }
            logEl.appendChild(li);
            
            // Add a small delay for subtle animation effect
            await new Promise(r => setTimeout(r, TEST_STEP_DELAY_MS));
        }

        if (this.failed === 0) {
            healthEl.textContent = 'Optimal (All Tests Passed)';
            healthEl.className = 'status-badge pass';
            panelEl.classList.add('all-passed');
        } else {
            healthEl.textContent = `Critical (${this.failed} Failures)`;
            healthEl.className = 'status-badge fail';
            panelEl.classList.add('has-failures');
        }
    }

    _createResultLabel(name, statusText) {
        const wrapper = document.createElement('div');
        const nameSpan = document.createElement('span');
        const statusSpan = document.createElement('span');

        nameSpan.textContent = name;
        statusSpan.textContent = statusText;

        wrapper.appendChild(nameSpan);
        wrapper.appendChild(document.createTextNode(' '));
        wrapper.appendChild(statusSpan);

        return wrapper;
    }
}

// Initialize Diagnostics
const diagnostics = new SystemDiagnostics();

// Test 1: Crowd Classification Logic
diagnostics.test('analyzeCrowd: Classifies high capacity correctly', () => {
    const result = analyzeCrowd(90, 100, 2);
    diagnostics.assertEquals(result.status, 'high', 'Status should be high');
    diagnostics.assert(result.isUrgent === true, 'Should be urgent if trend > 1');
});

diagnostics.test('analyzeCrowd: Classifies low capacity correctly', () => {
    const result = analyzeCrowd(30, 100, 0);
    diagnostics.assertEquals(result.status, 'low', 'Status should be low');
});

// Test 2: Wait Time Calculation
diagnostics.test('predictWaitTime: Base calculation and multipliers', () => {
    // baseWait = (50 * 2) / (100 * 0.1) = 100 / 10 = 10. multiplier = 1 (low status). result = 10.
    const wait = predictWaitTime(50, 100, 2, 'low', 1.0, false);
    diagnostics.assertEquals(wait, 10, 'Base wait time should be 10 mins');
});

diagnostics.test('predictWaitTime: VIP and Staffing Multipliers', () => {
    // baseWait = 10. status='high' -> multiplier 2.5
    // multiplier / 0.5 = 5.0
    // VIP: 5.0 * 0.9 = 4.5
    // wait = 10 * 4.5 = 45
    const wait = predictWaitTime(50, 100, 2, 'high', 0.5, true);
    diagnostics.assertEquals(wait, 45, 'Wait time should adjust for staff and VIP');
});

// Test 3: Security Helpers
diagnostics.test('sanitizeInput: Removes script tokens and brackets', () => {
    const sanitized = sanitizeInput('  <script>alert(1)</script>  ');
    diagnostics.assert(!sanitized.includes('<'), 'Should remove <');
    diagnostics.assert(!sanitized.includes('>'), 'Should remove >');
    diagnostics.assert(!sanitized.toLowerCase().includes('script'), 'Should strip script token');
});

diagnostics.test('validateInput: Rejects empty and non-string values', () => {
    diagnostics.assertEquals(validateInput('   '), false, 'Empty input should fail');
    diagnostics.assertEquals(validateInput(123), false, 'Non-string input should fail');
});

// Test 4: Recommendation Engine Output
diagnostics.test('generateRecommendations: Avoids highly congested zones', () => {
    // Need a minimal list of zones
    const mockZones = [
        { id: 'z1', category: 'food', capacity: 100, crowd_count: 90, trend: 2, avg_service_time: 2, staffingLevel: 1.0, hasVIP: false, x: 10, y: 10 },
        { id: 'z2', category: 'food', capacity: 100, crowd_count: 20, trend: 0, avg_service_time: 2, staffingLevel: 1.0, hasVIP: false, x: 20, y: 20 },
        { id: 'z3', category: 'gate', capacity: 100, crowd_count: 10, trend: 0, avg_service_time: 0, staffingLevel: 1.0, hasVIP: false, x: 0, y: 0 }
    ];
    
    // Temporarily mock userLocationId
    const originalUserLoc = window.userLocationId;
    window.userLocationId = 'z3';
    
    const insights = generateRecommendations(mockZones);
    diagnostics.assertEquals(insights.avoid.id, 'z1', 'Should recommend avoiding highly crowded zone');
    diagnostics.assertEquals(insights.recommend.id, 'z2', 'Should recommend low crowded food zone');
    
    window.userLocationId = originalUserLoc;
});

// Event Listener Integration
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-tests-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            diagnostics.runAll();
        });
    }
});
