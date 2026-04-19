// ==================== DATA LAYER ====================

const initialZonesData = [
    { id: 'gate_north', name: 'North Gate', capacity: 1500, crowd_count: 1200, avg_service_time: 0.5, category: 'gate', trend: 3, isIndoor: false, hasVIP: true, amenities: ['ticket office'], accessible: true, staffingLevel: 1.0, location: 'North', x: 50, y: 10 },
    { id: 'gate_south', name: 'South Gate', capacity: 1500, crowd_count: 500, avg_service_time: 0.5, category: 'gate', trend: 1, isIndoor: false, hasVIP: false, amenities: ['info desk'], accessible: true, staffingLevel: 0.8, location: 'South', x: 50, y: 90 },
    { id: 'gate_vip', name: 'VIP Entrance', capacity: 300, crowd_count: 50, avg_service_time: 0.2, category: 'gate', trend: 0, isIndoor: true, hasVIP: true, amenities: ['valet'], accessible: true, staffingLevel: 1.0, location: 'West', x: 10, y: 30 },
    { id: 'stage_alpha', name: 'Stage Alpha', capacity: 5000, crowd_count: 4500, avg_service_time: 0, category: 'stage', trend: 5, isIndoor: false, hasVIP: true, amenities: ['bar'], accessible: true, staffingLevel: 1.0, location: 'Center', x: 50, y: 50 },
    { id: 'stage_beta', name: 'Stage Beta', capacity: 3000, crowd_count: 1000, avg_service_time: 0, category: 'stage', trend: 2, isIndoor: false, hasVIP: false, amenities: [], accessible: true, staffingLevel: 0.8, location: 'East', x: 85, y: 50 },
    { id: 'lower_bowl_a', name: 'Lower Bowl A', capacity: 2000, crowd_count: 1800, avg_service_time: 0, category: 'stage', trend: 1, isIndoor: true, hasVIP: true, amenities: ['seat service'], accessible: true, staffingLevel: 1.0, location: 'North', x: 35, y: 30 },
    { id: 'lower_bowl_b', name: 'Lower Bowl B', capacity: 2000, crowd_count: 1900, avg_service_time: 0, category: 'stage', trend: 2, isIndoor: true, hasVIP: true, amenities: ['seat service'], accessible: true, staffingLevel: 1.0, location: 'South', x: 35, y: 70 },
    { id: 'upper_bowl_a', name: 'Upper Bowl A', capacity: 4000, crowd_count: 1200, avg_service_time: 0, category: 'stage', trend: -1, isIndoor: true, hasVIP: false, amenities: [], accessible: false, staffingLevel: 0.6, location: 'North', x: 65, y: 30 },
    { id: 'upper_bowl_b', name: 'Upper Bowl B', capacity: 4000, crowd_count: 1500, avg_service_time: 0, category: 'stage', trend: 0, isIndoor: true, hasVIP: false, amenities: [], accessible: false, staffingLevel: 0.6, location: 'South', x: 65, y: 70 },
    { id: 'vip_lounge', name: 'Skyline VIP Lounge', capacity: 200, crowd_count: 180, avg_service_time: 0, category: 'stage', trend: 1, isIndoor: true, hasVIP: true, amenities: ['alcohol', 'buffet', 'view'], accessible: true, staffingLevel: 1.0, location: 'Center', x: 50, y: 65 },
    { id: 'lawn', name: 'General Admission Lawn', capacity: 8000, crowd_count: 3000, avg_service_time: 0, category: 'stage', trend: 4, isIndoor: false, hasVIP: false, amenities: ['picnic'], accessible: true, staffingLevel: 0.5, location: 'East', x: 80, y: 80 },
    { id: 'food_north', name: 'North Food Court', capacity: 400, crowd_count: 380, avg_service_time: 4.0, category: 'food', trend: 2, isIndoor: true, hasVIP: false, amenities: ['burgers', 'vegan', 'alcohol'], accessible: true, staffingLevel: 0.9, location: 'North', x: 30, y: 15 },
    { id: 'food_south', name: 'South Food Court', capacity: 400, crowd_count: 120, avg_service_time: 3.0, category: 'food', trend: -1, isIndoor: true, hasVIP: false, amenities: ['pizza', 'tacos'], accessible: true, staffingLevel: 1.0, location: 'South', x: 70, y: 85 },
    { id: 'bar_center', name: 'Center Bar & Grill', capacity: 200, crowd_count: 195, avg_service_time: 5.0, category: 'food', trend: 3, isIndoor: true, hasVIP: true, amenities: ['alcohol', 'premium snacks'], accessible: true, staffingLevel: 0.8, location: 'Center', x: 40, y: 40 },
    { id: 'beer_garden', name: 'Outdoor Beer Garden', capacity: 600, crowd_count: 200, avg_service_time: 2.0, category: 'food', trend: 0, isIndoor: false, hasVIP: false, amenities: ['alcohol', 'craft beer'], accessible: true, staffingLevel: 1.0, location: 'West', x: 15, y: 75 },
    { id: 'wr_north', name: 'North Washroom', capacity: 60, crowd_count: 55, avg_service_time: 2.0, category: 'washroom', trend: 1, isIndoor: true, hasVIP: false, amenities: ['baby changing'], accessible: true, staffingLevel: 1.0, location: 'North', x: 70, y: 15 },
    { id: 'wr_south', name: 'South Washroom', capacity: 60, crowd_count: 20, avg_service_time: 2.0, category: 'washroom', trend: 0, isIndoor: true, hasVIP: false, amenities: [], accessible: false, staffingLevel: 1.0, location: 'South', x: 30, y: 85 },
    { id: 'wr_east', name: 'East Washroom', capacity: 40, crowd_count: 15, avg_service_time: 2.0, category: 'washroom', trend: 0, isIndoor: true, hasVIP: false, amenities: [], accessible: true, staffingLevel: 1.0, location: 'East', x: 90, y: 35 },
    { id: 'wr_vip', name: 'VIP Washroom', capacity: 20, crowd_count: 5, avg_service_time: 1.0, category: 'washroom', trend: 0, isIndoor: true, hasVIP: true, amenities: ['lounge'], accessible: true, staffingLevel: 1.0, location: 'Center', x: 45, y: 65 },
    { id: 'merch_main', name: 'Main Team Store', capacity: 200, crowd_count: 190, avg_service_time: 5.0, category: 'shopping', trend: 2, isIndoor: true, hasVIP: true, amenities: ['apparel', 'jerseys'], accessible: true, staffingLevel: 0.8, location: 'North', x: 60, y: 20 },
    { id: 'merch_kiosk', name: 'East Merch Kiosk', capacity: 50, crowd_count: 10, avg_service_time: 2.0, category: 'shopping', trend: -1, isIndoor: false, hasVIP: false, amenities: ['hats'], accessible: true, staffingLevel: 1.0, location: 'East', x: 85, y: 65 },
    { id: 'medical', name: 'Medical Tent', capacity: 50, crowd_count: 5, avg_service_time: 15.0, category: 'facility', trend: 0, isIndoor: true, hasVIP: false, amenities: ['first aid'], accessible: true, staffingLevel: 1.0, location: 'West', x: 10, y: 50 },
    { id: 'parking_a', name: 'Parking Lot A', capacity: 5000, crowd_count: 4800, avg_service_time: 1.0, category: 'gate', trend: -5, isIndoor: false, hasVIP: false, amenities: ['shuttle'], accessible: true, staffingLevel: 0.5, location: 'North', x: 50, y: -10 },
    { id: 'parking_b', name: 'Parking Lot B', capacity: 5000, crowd_count: 2000, avg_service_time: 1.0, category: 'gate', trend: 2, isIndoor: false, hasVIP: false, amenities: [], accessible: true, staffingLevel: 0.5, location: 'South', x: 50, y: 110 }
];

let zonesData = JSON.parse(JSON.stringify(initialZonesData));
let currentInsights = null;
let isFocusMode = false;
let activeModalZoneId = null;

// Keep in sync with diagnostics and any external scripts.
window.userLocationId = 'gate_north';
const zoneHistoryMap = {};

// ==================== CONSTANTS ====================

const LOW_THRESHOLD = 0.5;
const MEDIUM_THRESHOLD = 0.85;
const MAX_INPUT_LENGTH = 100;
const STAFFING_MIN_FACTOR = 0.3;
const VIP_MULTIPLIER = 0.9;
const HIGH_MULTIPLIER = 2.5;
const MEDIUM_MULTIPLIER = 1.5;
const WALK_TIME_FACTOR = 0.15;
const MIN_WALK_TIME = 1;
const UPDATE_INTERVAL_MS = 4000;
const CHAT_RESPONSE_DELAY_MS = 1200;
const OPTIMIZE_RESPONSE_DELAY_MS = 1500;
const FOCUS_MODE_DURATION_MS = 8000;
const HISTORY_WINDOW_SIZE = 30;
const HISTORY_GRID_LINES = 4;
const SURGE_TREND_THRESHOLD = 6;

// ==================== UTILITY FUNCTIONS ====================

/**
 * Returns the current user location id.
 * @returns {string}
 */
function getUserLocationId() {
    return window.userLocationId || 'gate_north';
}

/**
 * Safely updates the current user location id.
 * @param {string} zoneId
 * @returns {void}
 */
function setUserLocationId(zoneId) {
    window.userLocationId = typeof zoneId === 'string' ? zoneId : getUserLocationId();
}

/**
 * Creates a bounded number between min and max.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function clamp(value, min, max) {
    if (!Number.isFinite(value)) {
        return min;
    }
    return Math.max(min, Math.min(max, value));
}

/**
 * Returns true when the value is a non-empty string.
 * @param {unknown} input
 * @returns {boolean}
 */
function isString(input) {
    return typeof input === 'string';
}

// ==================== SECURITY LAYER ====================
// - Input sanitization
// - Input validation
// - Safe rendering

/**
 * Sanitizes raw input by stripping unsafe tokens and dangerous keywords.
 * @param {unknown} input
 * @returns {string}
 */
function sanitizeInput(input) {
    if (!isString(input)) {
        return '';
    }

    const stripped = input
        .replace(/[<>]/g, '')
        .replace(/script/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/onerror/gi, '')
        .replace(/onload/gi, '')
        .replace(/iframe/gi, '')
        .trim();

    return stripped.slice(0, MAX_INPUT_LENGTH);
}

/**
 * Validates sanitized user input.
 * @param {unknown} input
 * @returns {boolean}
 */
function validateInput(input) {
    if (!isString(input)) {
        return false;
    }

    const normalized = input.trim();
    if (!normalized) {
        return false;
    }

    return normalized.length <= MAX_INPUT_LENGTH;
}

/**
 * Sets text content defensively.
 * @param {HTMLElement|null} el
 * @param {string} value
 * @returns {void}
 */
function safeSetText(el, value) {
    if (!el) {
        return;
    }
    el.textContent = value;
}

/**
 * Sanitizes and validates chat payload before cloud logging.
 * @param {string} sender
 * @param {string} message
 * @returns {{ sender: string, message: string } | null}
 */
function buildSafeChatLogPayload(sender, message) {
    const safeSender = sanitizeInput(sender);
    const safeMessage = sanitizeInput(message);

    if (!validateInput(safeSender) || !validateInput(safeMessage)) {
        return null;
    }

    return { sender: safeSender, message: safeMessage };
}

/**
 * Attempts to log chat message through Firebase integration safely.
 * @param {string} sender
 * @param {string} message
 * @returns {Promise<void>}
 */
async function logMessageSafely(sender, message) {
    try {
        if (typeof globalThis.logChatMessage !== 'function') {
            return;
        }

        const payload = buildSafeChatLogPayload(sender, message);
        if (!payload) {
            return;
        }

        await globalThis.logChatMessage(payload.sender, payload.message);
    } catch (error) {
        console.error('Safe Firebase logging failed:', error);
    }
}

// ==================== CORE LOGIC ====================

class NavigationEngine {
    /**
     * Calculates walking time between user and target zones.
     * @param {{id:string,x:number,y:number}|undefined} userZone
     * @param {{id:string,x:number,y:number}|undefined} targetZone
     * @returns {number}
     */
    static calculateWalkTime(userZone, targetZone) {
        if (!userZone || !targetZone || userZone.id === targetZone.id) {
            return 0;
        }

        const dx = userZone.x - targetZone.x;
        const dy = userZone.y - targetZone.y;
        const distance = Math.sqrt((dx * dx) + (dy * dy));
        return Math.max(MIN_WALK_TIME, Math.round(distance * WALK_TIME_FACTOR));
    }
}

/**
 * Determines crowd level based on occupancy ratio.
 * @param {number} crowd
 * @param {number} capacity
 * @param {number} trend
 * @returns {{status:'low'|'medium'|'high', ratio:number, isUrgent:boolean}}
 */
function analyzeCrowd(crowd, capacity, trend = 0) {
    const safeCapacity = Number.isFinite(capacity) ? capacity : 0;
    const safeCrowd = Number.isFinite(crowd) ? crowd : 0;

    if (safeCapacity <= 0) {
        return { status: 'low', ratio: 0, isUrgent: false };
    }

    const ratio = safeCrowd / safeCapacity;
    let status = 'low';

    if (ratio > MEDIUM_THRESHOLD) {
        status = 'high';
    } else if (ratio > LOW_THRESHOLD) {
        status = 'medium';
    }

    return {
        status,
        ratio,
        isUrgent: status === 'high' && trend > 1
    };
}

/**
 * Estimates wait time based on crowd and service throughput.
 * @param {number} crowd
 * @param {number} capacity
 * @param {number} serviceRate
 * @param {'low'|'medium'|'high'} status
 * @param {number} staffingLevel
 * @param {boolean} hasVIP
 * @returns {number}
 */
function predictWaitTime(crowd, capacity, serviceRate, status, staffingLevel = 1.0, hasVIP = false) {
    try {
        const safeServiceRate = Number.isFinite(serviceRate) ? serviceRate : 0;
        const safeCapacity = Number.isFinite(capacity) ? capacity : 0;
        const safeCrowd = Number.isFinite(crowd) ? crowd : 0;

        if (safeServiceRate <= 0 || safeCapacity <= 0) {
            return 0;
        }

        let multiplier = 1;
        if (status === 'high') {
            multiplier = HIGH_MULTIPLIER;
        } else if (status === 'medium') {
            multiplier = MEDIUM_MULTIPLIER;
        }

        const normalizedStaffing = Math.max(STAFFING_MIN_FACTOR, Number.isFinite(staffingLevel) ? staffingLevel : 1);
        multiplier = multiplier / normalizedStaffing;
        if (hasVIP) {
            multiplier = multiplier * VIP_MULTIPLIER;
        }

        const baseWait = (safeCrowd * safeServiceRate) / (safeCapacity * 0.1);
        return Math.max(1, Math.round(baseWait * multiplier));
    } catch (error) {
        console.error('Wait-time prediction failed:', error);
        return 0;
    }
}

class CrowdPredictor {
    /**
     * Projects future crowd status.
     * @param {{crowd_count:number, trend:number, capacity:number}} zone
     * @param {number} minutesAhead
     * @returns {'low'|'medium'|'high'}
     */
    static predictFuture(zone, minutesAhead) {
        try {
            const projectedCrowd = clamp(zone.crowd_count + (zone.trend * minutesAhead), 0, zone.capacity);
            return analyzeCrowd(projectedCrowd, zone.capacity, zone.trend).status;
        } catch (error) {
            console.error('Future crowd prediction failed:', error);
            return 'low';
        }
    }
}

/**
 * Computes processed zone analytics and recommendations.
 * @param {Array<object>} zones
 * @returns {{avoid: object|null, recommend: object|null, processedZones: Array<object>, bestOption: object|null}}
 */
function generateRecommendations(zones) {
    try {
        if (!Array.isArray(zones) || zones.length === 0) {
            return { avoid: null, recommend: null, processedZones: [], bestOption: null };
        }

        const locationId = getUserLocationId();
        const userZone = zones.find((z) => z.id === locationId);

        const processedZones = zones.map((zone) => {
            const analysis = analyzeCrowd(zone.crowd_count, zone.capacity, zone.trend);
            const waitTime = predictWaitTime(
                zone.crowd_count,
                zone.capacity,
                zone.avg_service_time,
                analysis.status,
                zone.staffingLevel,
                zone.hasVIP
            );

            return {
                ...zone,
                status: analysis.status,
                ratio: analysis.ratio,
                isUrgent: analysis.isUrgent,
                waitTime,
                walkTime_mins: NavigationEngine.calculateWalkTime(userZone, zone),
                predictions: [
                    CrowdPredictor.predictFuture(zone, 10),
                    CrowdPredictor.predictFuture(zone, 20),
                    CrowdPredictor.predictFuture(zone, 30)
                ]
            };
        });

        const avoid = processedZones
            .filter((z) => z.status === 'high' && z.id !== locationId)
            .sort((a, b) => b.ratio - a.ratio)[0] || null;

        let recommend = null;
        if (avoid && avoid.category === 'food') {
            recommend = processedZones
                .filter((z) => z.category === 'food' && z.status !== 'high')
                .sort((a, b) => a.waitTime - b.waitTime)[0] || null;
        } else {
            recommend = processedZones
                .filter((z) => z.status === 'low' && z.category !== 'gate')
                .sort((a, b) => a.ratio - b.ratio)[0] || null;
        }

        const rankedBest = processedZones
            .filter((z) => z.category !== 'gate' && z.status !== 'high' && z.id !== locationId)
            .sort((a, b) => {
                const scoreA = a.waitTime + (a.ratio * 10) + a.walkTime_mins;
                const scoreB = b.waitTime + (b.ratio * 10) + b.walkTime_mins;
                return scoreA - scoreB;
            });

        return {
            avoid,
            recommend,
            processedZones,
            bestOption: rankedBest[0] || processedZones[0] || null
        };
    } catch (error) {
        console.error('Recommendation generation failed:', error);
        return { avoid: null, recommend: null, processedZones: [], bestOption: null };
    }
}

class RoutePlanner {
    /**
     * Builds plain-text route instructions.
     * @param {object|null} targetZone
     * @param {Array<object>} zones
     * @returns {string}
     */
    static generateRoute(targetZone, zones) {
        if (!targetZone) {
            return 'Unable to calculate route.';
        }

        const locationId = getUserLocationId();
        const congested = zones
            .filter((z) => z.status === 'high' && z.id !== targetZone.id && z.id !== locationId)
            .sort((a, b) => b.ratio - a.ratio)[0];

        const direction = `Head towards the ${targetZone.location} Concourse`;
        const avoid = congested ? `, making sure to bypass the congested ${congested.name} along the way` : '';
        const arrival = `. You should arrive in about ${targetZone.walkTime_mins} mins.`;

        return `${direction}${avoid}${arrival}`;
    }
}

class ConversationalAssistant {
    /**
     * Classifies user intent from free text.
     * @param {string} query
     * @returns {string}
     */
    static classifyIntent(query) {
        const q = sanitizeInput(query).toLowerCase();

        if (
            q.includes('what to do') || q.includes('what should i do') || q.includes('where to go') ||
            q.includes('recommend') || q.includes('suggest') || q.includes('bored') ||
            q.includes('now') || q.includes('best option') || q.includes('optimize') ||
            q.includes('help me') || q.includes("what's next") || q.includes('where should i go')
        ) {
            return 'optimize';
        }

        if (q.includes('15 minutes') || q.includes('quick') || q.includes('fast')) return 'quick';
        if (q.includes('food') || q.includes('eat') || q.includes('hungry') || q.includes('burger') || q.includes('pizza') || q.includes('snack')) return 'food';
        if (q.includes('drink') || q.includes('alcohol') || q.includes('beer') || q.includes('water')) return 'drink';
        if (q.includes('washroom') || q.includes('bathroom') || q.includes('toilet') || q.includes('rest room')) return 'washroom';
        if (q.includes('stage') || q.includes('music') || q.includes('concert') || q.includes('view') || q.includes('watch') || q.includes('bowl') || q.includes('lawn')) return 'view';
        if (q.includes('merch') || q.includes('shopping') || q.includes('buy') || q.includes('shirt') || q.includes('hat')) return 'merch';
        if (q.includes('entry') || q.includes('enter') || q.includes('gate')) return 'entry';
        if (q.includes('exit') || q.includes('leave') || q.includes('home') || q.includes('taxi') || q.includes('park')) return 'exit';
        if (q.includes('vip') || q.includes('premium')) return 'vip';
        if (q.includes('wheelchair') || q.includes('accessible') || q.includes('access') || q.includes('medical')) return 'accessible';
        if (q.includes('crowded') || q.includes('busy')) return 'crowded';
        if (q.includes('where am i') || q.includes('location')) return 'location';

        return 'other';
    }

    /**
    * Creates a structured response for chat output.
     * @param {string} query
     * @param {{processedZones:Array<object>, bestOption:object|null, avoid:object|null}} insights
    * @returns {{text:string}}
     */
    static respond(query, insights) {
        try {
            const intent = this.classifyIntent(query);
            const zones = Array.isArray(insights?.processedZones) ? insights.processedZones : [];
            const locationId = getUserLocationId();

            let target = null;
            let text = '';

            if (intent === 'location') {
                const current = zones.find((z) => z.id === locationId);
                const currentName = current ? current.name : 'Unknown Zone';
                text = `You are currently located at ${currentName}. To change your location, click a zone on the Virtual Map and select Set As My Location.`;
                return { text };
            }

            switch (intent) {
                case 'optimize': {
                    target = insights.bestOption;
                    if (!target) {
                        text = 'No optimization target is currently available. Please try again shortly.';
                        return { text };
                    }
                    text = `Right now, your absolute best move is ${target.name}. `;
                    break;
                }
                case 'quick': {
                    const quickOptions = zones
                        .filter((z) => z.waitTime > 0 && z.waitTime < 15 && z.id !== locationId)
                        .sort((a, b) => a.waitTime - b.waitTime);

                    if (quickOptions.length === 0) {
                        text = 'Everywhere is busy. I suggest waiting out the rush at an open stage area.';
                        return { text };
                    }

                    target = quickOptions[0];
                    text = `If you're in a hurry, check out ${target.name} (Wait: ${target.waitTime}m). `;
                    break;
                }
                case 'food': {
                    const foods = zones
                        .filter((z) => z.category === 'food' && z.id !== locationId)
                        .sort((a, b) => (a.waitTime + a.walkTime_mins) - (b.waitTime + b.walkTime_mins));

                    target = foods[0] || null;
                    if (!target) {
                        text = 'I could not find food locations right now.';
                        return { text };
                    }

                    text = `I recommend heading to ${target.name}. It's currently ${target.status} traffic with an estimated wait of ${target.waitTime} mins. `;
                    break;
                }
                case 'drink': {
                    const drinks = zones
                        .filter((z) => z.amenities.some((a) => ['alcohol', 'bar', 'drinks'].includes(String(a).toLowerCase())) && z.id !== locationId)
                        .sort((a, b) => (a.waitTime + a.walkTime_mins) - (b.waitTime + b.walkTime_mins));

                    if (drinks.length === 0) {
                        text = 'I could not find any locations serving drinks nearby.';
                        return { text };
                    }

                    target = drinks[0];
                    text = `Grab a drink at ${target.name} (Wait: ${target.waitTime}m). `;
                    break;
                }
                case 'washroom': {
                    const washrooms = zones
                        .filter((z) => z.category === 'washroom' && z.id !== locationId)
                        .sort((a, b) => (a.waitTime + a.walkTime_mins) - (b.waitTime + b.walkTime_mins));

                    target = washrooms[0] || null;
                    if (!target) {
                        text = 'No washroom recommendation is currently available.';
                        return { text };
                    }

                    text = `Closest washroom is ${target.name} (${target.waitTime} min wait). `;
                    break;
                }
                case 'view': {
                    const stages = zones
                        .filter((z) => z.category === 'stage' && z.id !== locationId)
                        .sort((a, b) => a.ratio - b.ratio);

                    target = stages[0] || null;
                    if (!target) {
                        text = 'No stage recommendation is currently available.';
                        return { text };
                    }

                    text = `${target.name} currently has more space available for a good view. `;
                    break;
                }
                case 'merch': {
                    const merch = zones
                        .filter((z) => z.category === 'shopping' && z.id !== locationId)
                        .sort((a, b) => (a.waitTime + a.walkTime_mins) - (b.waitTime + b.walkTime_mins));

                    if (merch.length === 0) {
                        text = 'Merch stands are currently unavailable.';
                        return { text };
                    }

                    target = merch[0];
                    text = `Check out ${target.name} for merch (Wait: ${target.waitTime}m). `;
                    break;
                }
                case 'entry':
                case 'exit': {
                    const gates = zones
                        .filter((z) => (z.id.includes('entry') || z.id.includes('gate') || z.id.includes('parking')) && z.id !== locationId)
                        .sort((a, b) => (a.waitTime + a.walkTime_mins) - (b.waitTime + b.walkTime_mins));

                    if (gates.length === 0) {
                        text = 'No gates found.';
                        return { text };
                    }

                    target = gates[0];
                    text = `Your best path is via ${target.name}. `;
                    break;
                }
                case 'vip': {
                    const vipZones = zones
                        .filter((z) => z.hasVIP && z.id !== locationId)
                        .sort((a, b) => a.waitTime - b.waitTime);

                    if (vipZones.length === 0) {
                        text = 'No VIP lanes are currently active.';
                        return { text };
                    }

                    target = vipZones[0];
                    text = `VIP lanes are open at ${target.name}. `;
                    break;
                }
                case 'accessible': {
                    const accessible = zones.filter((z) => z.accessible).map((z) => z.name);
                    text = `Accessible zones include: ${accessible.slice(0, 3).join(', ')}.`;
                    return { text };
                }
                case 'crowded': {
                    const high = zones.filter((z) => z.status === 'high').map((z) => z.name);
                    if (high.length > 0) {
                        text = `Currently, the busiest areas are: ${high.slice(0, 3).join(', ')}. Try to avoid these if possible.`;
                    } else {
                        text = 'Good news! No areas are currently heavily crowded.';
                    }
                    return { text };
                }
                default: {
                    text = 'Hey there! I am your AI venue buddy. I can help you find food, buy merch, locate VIP areas, or map your perfect route. Try asking: What should I do right now?';
                    return { text };
                }
            }

            if (!target) {
                return { text };
            }

            const route = RoutePlanner.generateRoute(target, zones);
            const fullText = `${text}\n\nNav: ${route}`;
            return { text: fullText };
        } catch (error) {
            console.error('Assistant response failed:', error);
            const fallback = 'I am sorry, I encountered a system error processing your request.';
            return { text: fallback };
        }
    }
}

// ==================== UI HANDLERS ====================

/**
 * Creates the static zone card shell once.
 * @param {object} zone
 * @returns {HTMLElement}
 */
function createZoneCard(zone) {
    const card = document.createElement('div');
    card.id = `zone-card-${zone.id}`;

    const header = document.createElement('div');
    header.className = 'zone-header';

    const titleRow = document.createElement('div');
    titleRow.className = 'title-row';

    const title = document.createElement('span');
    title.className = 'zone-title';
    title.id = `title-${zone.id}`;

    const status = document.createElement('span');
    status.className = 'zone-status';
    status.id = `status-${zone.id}`;

    titleRow.appendChild(title);
    titleRow.appendChild(status);

    const badges = document.createElement('div');
    badges.className = 'zone-badges';
    badges.id = `badges-${zone.id}`;

    header.appendChild(titleRow);
    header.appendChild(badges);

    const stats = document.createElement('div');
    stats.className = 'zone-stats';

    const crowdRow = buildStatRow('Crowd', `crowd-${zone.id}`);
    const waitRow = buildWaitRow(zone.id);
    const walkRow = buildStatRow('Walk Time', `walk-${zone.id}`);

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    progressFill.id = `prog-${zone.id}`;
    progressBar.appendChild(progressFill);

    const timeline = document.createElement('div');
    timeline.className = 'predictive-timeline';
    timeline.appendChild(buildTimelinePoint('+10m', `p10-${zone.id}`));
    timeline.appendChild(buildTimelinePoint('+20m', `p20-${zone.id}`));
    timeline.appendChild(buildTimelinePoint('+30m', `p30-${zone.id}`));

    const amenities = document.createElement('div');
    amenities.id = `amenities-${zone.id}`;

    stats.appendChild(crowdRow);
    stats.appendChild(waitRow);
    stats.appendChild(walkRow);
    stats.appendChild(progressBar);
    stats.appendChild(timeline);
    stats.appendChild(amenities);

    card.appendChild(header);
    card.appendChild(stats);

    card.addEventListener('click', () => {
        try {
            const latestInsights = generateRecommendations(zonesData);
            const updatedZone = latestInsights.processedZones.find((z) => z.id === zone.id);
            if (updatedZone) {
                openZoneModal(updatedZone);
            }
        } catch (error) {
            console.error('Zone card click handling failed:', error);
        }
    });

    return card;
}

/**
 * Builds a standard stat row.
 * @param {string} label
 * @param {string} valueId
 * @returns {HTMLElement}
 */
function buildStatRow(label, valueId) {
    const row = document.createElement('div');
    row.className = 'stat-row';

    const key = document.createElement('span');
    key.textContent = label;

    const value = document.createElement('span');
    value.className = 'stat-value';
    value.id = valueId;

    row.appendChild(key);
    row.appendChild(value);
    return row;
}

/**
 * Builds the wait row with icon.
 * @param {string} zoneId
 * @returns {HTMLElement}
 */
function buildWaitRow(zoneId) {
    const row = document.createElement('div');
    row.className = 'stat-row';
    row.id = `wait-row-${zoneId}`;

    const key = document.createElement('span');
    key.textContent = 'Est. Wait Time';

    const value = document.createElement('span');
    value.className = 'stat-value wait-time';

    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('width', '14');
    icon.setAttribute('height', '14');
    icon.setAttribute('stroke', 'currentColor');
    icon.setAttribute('stroke-width', '2');
    icon.setAttribute('fill', 'none');
    icon.setAttribute('stroke-linecap', 'round');
    icon.setAttribute('stroke-linejoin', 'round');

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('r', '10');

    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.setAttribute('points', '12 6 12 12 16 14');

    icon.appendChild(circle);
    icon.appendChild(polyline);

    const waitValue = document.createElement('span');
    waitValue.id = `wait-val-${zoneId}`;

    value.appendChild(icon);
    value.appendChild(waitValue);

    row.appendChild(key);
    row.appendChild(value);
    return row;
}

/**
 * Builds a timeline point component.
 * @param {string} label
 * @param {string} barId
 * @returns {HTMLElement}
 */
function buildTimelinePoint(label, barId) {
    const point = document.createElement('div');
    point.className = 'timeline-point';

    const title = document.createElement('span');
    title.textContent = label;

    const bar = document.createElement('div');
    bar.className = 'time-bar';
    bar.id = barId;

    point.appendChild(title);
    point.appendChild(bar);
    return point;
}

/**
 * Generates badges for card view.
 * @param {object} zone
 * @returns {DocumentFragment}
 */
function buildZoneBadges(zone) {
    const fragment = document.createDocumentFragment();

    if (zone.hasVIP) {
        const vip = document.createElement('span');
        vip.className = 'badge vip';
        vip.title = 'VIP Lane Available';
        vip.textContent = '🌟 VIP';
        fragment.appendChild(vip);
    }

    const indoor = document.createElement('span');
    indoor.className = 'badge';
    indoor.title = zone.isIndoor ? 'Indoor' : 'Outdoor';
    indoor.textContent = zone.isIndoor ? '🏠 Indoor' : '☀️ Outdoor';
    fragment.appendChild(indoor);

    if (zone.accessible) {
        const access = document.createElement('span');
        access.className = 'badge';
        access.title = 'Wheelchair Accessible';
        access.textContent = '♿ Access';
        fragment.appendChild(access);
    }

    return fragment;
}

/**
 * Generates a safe title fragment with location and urgency indicators.
 * @param {object} zone
 * @returns {DocumentFragment}
 */
function buildZoneTitle(zone) {
    const fragment = document.createDocumentFragment();

    const text = document.createTextNode(zone.name);
    fragment.appendChild(text);

    if (zone.id === getUserLocationId()) {
        const pin = document.createElement('span');
        pin.title = 'You are here';
        pin.style.marginLeft = '5px';
        pin.textContent = '📍';
        fragment.appendChild(pin);
    }

    if (zone.isUrgent) {
        const urgent = document.createElement('span');
        urgent.className = 'urgency-indicator';
        urgent.textContent = '🔥';
        fragment.appendChild(document.createTextNode(' '));
        fragment.appendChild(urgent);
    }

    return fragment;
}

/**
 * Updates one zone card with latest computed values.
 * @param {object} zone
 * @param {HTMLElement} card
 * @returns {void}
 */
function updateZoneCard(zone, card) {
    const currentDataHash = `${zone.crowd_count}-${zone.trend}-${isFocusMode}-${getUserLocationId()}`;
    if (card.dataset.hash === currentDataHash) {
        return;
    }

    card.dataset.hash = currentDataHash;
    card.className = `card zone-card status-${zone.status}-glow`;

    if (isFocusMode && currentInsights?.bestOption?.id !== zone.id) {
        card.classList.add('dimmed');
    }

    const titleEl = document.getElementById(`title-${zone.id}`);
    if (titleEl) {
        titleEl.textContent = '';
        titleEl.appendChild(buildZoneTitle(zone));
    }

    const statusEl = document.getElementById(`status-${zone.id}`);
    if (statusEl) {
        statusEl.className = `zone-status status-${zone.status}`;
        safeSetText(statusEl, zone.status);
    }

    const badgesEl = document.getElementById(`badges-${zone.id}`);
    if (badgesEl) {
        badgesEl.textContent = '';
        badgesEl.appendChild(buildZoneBadges(zone));
    }

    safeSetText(document.getElementById(`crowd-${zone.id}`), `${zone.crowd_count} / ${zone.capacity}`);

    const waitRow = document.getElementById(`wait-row-${zone.id}`);
    if (waitRow) {
        waitRow.style.display = zone.waitTime > 0 ? 'flex' : 'none';
    }

    safeSetText(document.getElementById(`wait-val-${zone.id}`), `${zone.waitTime} mins`);
    safeSetText(document.getElementById(`walk-${zone.id}`), `🏃 ${zone.walkTime_mins} mins`);

    const progress = document.getElementById(`prog-${zone.id}`);
    if (progress) {
        const capacityPercent = Math.round(zone.ratio * 100);
        progress.className = `progress-fill ${zone.status}`;
        progress.style.width = `${Math.min(100, capacityPercent)}%`;
    }

    const p10 = document.getElementById(`p10-${zone.id}`);
    const p20 = document.getElementById(`p20-${zone.id}`);
    const p30 = document.getElementById(`p30-${zone.id}`);

    if (p10) p10.className = `time-bar ${zone.predictions[0]}`;
    if (p20) p20.className = `time-bar ${zone.predictions[1]}`;
    if (p30) p30.className = `time-bar ${zone.predictions[2]}`;

    const amenitiesEl = document.getElementById(`amenities-${zone.id}`);
    if (amenitiesEl) {
        amenitiesEl.textContent = '';
        if (Array.isArray(zone.amenities) && zone.amenities.length > 0) {
            const list = document.createElement('div');
            list.className = 'amenities-list';
            list.style.marginTop = '1rem';
            zone.amenities.forEach((item) => {
                const tag = document.createElement('span');
                tag.className = 'amenity-tag';
                tag.textContent = String(item);
                list.appendChild(tag);
            });
            amenitiesEl.appendChild(list);
        }
    }
}

/**
 * Renders main dashboard and keeps modal/map in sync.
 * @returns {void}
 */
function renderDashboard() {
    try {
        const container = document.getElementById('zones-container');
        if (!container) {
            return;
        }

        currentInsights = generateRecommendations(zonesData);
        if (!currentInsights || !Array.isArray(currentInsights.processedZones)) {
            return;
        }

        currentInsights.processedZones.forEach((zone) => {
            let card = document.getElementById(`zone-card-${zone.id}`);
            if (!card) {
                card = createZoneCard(zone);
                container.appendChild(card);
            }
            updateZoneCard(zone, card);
        });

        renderRecommendations();
        checkAlerts();
        renderVirtualMap();

        if (activeModalZoneId) {
            const updatedZone = currentInsights.processedZones.find((z) => z.id === activeModalZoneId);
            if (updatedZone) {
                openZoneModal(updatedZone, false);
            }
        }
    } catch (error) {
        console.error('Dashboard render failed:', error);
    }
}

/**
 * Renders and updates interactive map nodes.
 * @returns {void}
 */
function renderVirtualMap() {
    try {
        const mapContainer = document.getElementById('virtual-map');
        if (!mapContainer || !currentInsights) {
            return;
        }

        let beacon = document.getElementById('map-user-beacon');
        if (!beacon) {
            beacon = document.createElement('div');
            beacon.id = 'map-user-beacon';
            beacon.className = 'user-beacon';
            mapContainer.appendChild(beacon);
        }

        const userZone = currentInsights.processedZones.find((z) => z.id === getUserLocationId());
        if (userZone) {
            beacon.style.left = `${userZone.x}%`;
            beacon.style.top = `${userZone.y}%`;
            beacon.style.display = 'block';
        } else {
            beacon.style.display = 'none';
        }

        currentInsights.processedZones.forEach((zone) => {
            let node = document.getElementById(`map-node-${zone.id}`);
            if (!node) {
                node = document.createElement('div');
                node.id = `map-node-${zone.id}`;

                const label = document.createElement('span');
                label.className = 'node-label';
                label.textContent = zone.name;
                node.appendChild(label);

                node.addEventListener('click', () => {
                    const latestInsights = generateRecommendations(zonesData);
                    const updatedZone = latestInsights.processedZones.find((z) => z.id === zone.id);
                    if (updatedZone) {
                        openZoneModal(updatedZone);
                    }
                });

                mapContainer.appendChild(node);
            }

            node.className = `map-node status-${zone.status}`;
            node.style.left = `${clamp(zone.x, 3, 97)}%`;
            node.style.top = `${clamp(zone.y, 5, 95)}%`;
        });
    } catch (error) {
        console.error('Virtual map render failed:', error);
    }
}

/**
 * Opens modal for a selected zone.
 * @param {object} zone
 * @param {boolean} initialOpen
 * @returns {void}
 */
function openZoneModal(zone, initialOpen = true) {
    try {
        activeModalZoneId = zone.id;

        const overlay = document.getElementById('zone-modal-overlay');
        const titleEl = document.getElementById('modal-title');
        const badgesEl = document.getElementById('modal-badges');
        const currentStats = document.getElementById('modal-current-stats');
        const futureStats = document.getElementById('modal-future-stats');
        const setBtn = document.getElementById('set-location-btn');

        if (!overlay || !titleEl || !badgesEl || !currentStats || !futureStats || !setBtn) {
            return;
        }

        titleEl.textContent = zone.name;

        const statusPill = document.createElement('span');
        statusPill.className = `zone-status status-${zone.status}`;
        statusPill.style.fontSize = '0.8rem';
        statusPill.style.verticalAlign = 'middle';
        statusPill.style.marginLeft = '10px';
        statusPill.textContent = zone.status;
        titleEl.appendChild(statusPill);

        badgesEl.textContent = '';
        const locationBadge = document.createElement('span');
        locationBadge.className = 'badge';
        locationBadge.style.borderColor = 'var(--accent-blue)';
        locationBadge.style.color = 'var(--accent-blue)';
        locationBadge.style.background = 'rgba(0,240,255,0.1)';
        locationBadge.textContent = `📍 ${zone.location} Area`;
        badgesEl.appendChild(locationBadge);

        if (zone.hasVIP) {
            const vip = document.createElement('span');
            vip.className = 'badge vip';
            vip.textContent = '🌟 VIP';
            badgesEl.appendChild(vip);
        }

        const indoor = document.createElement('span');
        indoor.className = 'badge';
        indoor.textContent = zone.isIndoor ? '🏠 Indoor' : '☀️ Outdoor';
        badgesEl.appendChild(indoor);

        if (zone.accessible) {
            const access = document.createElement('span');
            access.className = 'badge';
            access.textContent = '♿ Access';
            badgesEl.appendChild(access);
        }

        currentStats.textContent = '';
        currentStats.appendChild(buildModalStatRow('Capacity', `${zone.crowd_count} / ${zone.capacity}`));
        currentStats.appendChild(buildModalStatRow('Wait Time', `${zone.waitTime} mins`, 'stat-value wait-time'));
        currentStats.appendChild(buildModalStatRow('Walk Time', `🏃 ${zone.walkTime_mins} mins`));
        currentStats.appendChild(buildModalStatRow('Staffing Efficiency', `${Math.round(zone.staffingLevel * 100)}%`));

        futureStats.textContent = '';
        futureStats.appendChild(buildTimelinePoint('+10m Prediction', `modal-p10-${zone.id}`));
        futureStats.appendChild(buildTimelinePoint('+20m Prediction', `modal-p20-${zone.id}`));
        futureStats.appendChild(buildTimelinePoint('+30m Prediction', `modal-p30-${zone.id}`));

        const modalP10 = document.getElementById(`modal-p10-${zone.id}`);
        const modalP20 = document.getElementById(`modal-p20-${zone.id}`);
        const modalP30 = document.getElementById(`modal-p30-${zone.id}`);
        if (modalP10) modalP10.className = `time-bar ${zone.predictions[0]}`;
        if (modalP20) modalP20.className = `time-bar ${zone.predictions[1]}`;
        if (modalP30) modalP30.className = `time-bar ${zone.predictions[2]}`;

        if (zone.id === getUserLocationId()) {
            setBtn.style.display = 'none';
        } else {
            setBtn.style.display = 'block';
            setBtn.onclick = () => {
                setUserLocationId(zone.id);
                addChatMessage(`Current location set to: ${zone.name}. Walking times recalculated.`, 'user');
                overlay.classList.add('hidden');
                activeModalZoneId = null;
                renderDashboard();
            };
        }

        drawZoneChart(zone.id);

        if (initialOpen) {
            overlay.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Zone modal update failed:', error);
    }
}

/**
 * Builds stat row for modal panel.
 * @param {string} label
 * @param {string} value
 * @param {string} valueClass
 * @returns {HTMLElement}
 */
function buildModalStatRow(label, value, valueClass = 'stat-value') {
    const row = document.createElement('div');
    row.className = 'stat-row';
    row.style.marginBottom = '0.5rem';

    const key = document.createElement('span');
    key.textContent = label;

    const val = document.createElement('span');
    val.className = valueClass;
    val.textContent = value;

    row.appendChild(key);
    row.appendChild(val);
    return row;
}

/**
 * Draws historical crowd trend on canvas.
 * @param {string} zoneId
 * @returns {void}
 */
function drawZoneChart(zoneId) {
    try {
        const canvas = document.getElementById('zoneChart');
        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext('2d');
        const history = zoneHistoryMap[zoneId];
        const zone = zonesData.find((z) => z.id === zoneId);

        if (!ctx || !history || !zone) {
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const maxVal = zone.capacity;
        const padding = 20;
        const width = canvas.width - (padding * 2);
        const height = canvas.height - (padding * 2);
        const step = width / Math.max(1, history.length - 1);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i <= HISTORY_GRID_LINES; i += 1) {
            const y = padding + (height / HISTORY_GRID_LINES) * i;
            ctx.moveTo(padding, y);
            ctx.lineTo(canvas.width - padding, y);
        }
        ctx.stroke();

        ctx.beginPath();
        history.forEach((val, i) => {
            const x = padding + (i * step);
            const y = canvas.height - padding - ((val / maxVal) * height);
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        const gradient = ctx.createLinearGradient(0, canvas.height - padding, 0, padding);
        gradient.addColorStop(0, '#00ff88');
        gradient.addColorStop(0.5, '#00ff88');
        gradient.addColorStop(0.501, '#ffb800');
        gradient.addColorStop(0.85, '#ffb800');
        gradient.addColorStop(0.851, '#ff003c');
        gradient.addColorStop(1, '#ff003c');

        ctx.strokeStyle = gradient;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        ctx.lineWidth = 15;
        ctx.globalAlpha = 0.15;
        ctx.stroke();

        ctx.lineWidth = 8;
        ctx.globalAlpha = 0.3;
        ctx.stroke();

        ctx.lineWidth = 4;
        ctx.globalAlpha = 1;
        ctx.stroke();
    } catch (error) {
        console.error('Zone chart rendering failed:', error);
    }
}

/**
 * Shows global surge alert when trend threshold is exceeded.
 * @returns {void}
 */
function checkAlerts() {
    try {
        const banner = document.getElementById('global-alert-banner');
        const bannerText = document.getElementById('global-alert-text');
        if (!banner || !bannerText) {
            return;
        }

        const surgingZones = zonesData.filter((z) => z.trend >= SURGE_TREND_THRESHOLD);
        if (surgingZones.length > 0) {
            safeSetText(bannerText, `🔥 CROWD SURGE DETECTED: High traffic moving towards ${surgingZones[0].name}`);
            banner.classList.remove('hidden');
        } else {
            banner.classList.add('hidden');
        }
    } catch (error) {
        console.error('Alert handling failed:', error);
    }
}

/**
 * Renders recommendations panel with safe DOM nodes.
 * @returns {void}
 */
function renderRecommendations() {
    try {
        const container = document.getElementById('ai-recommendation-content');
        if (!container || !currentInsights) {
            return;
        }

        container.textContent = '';
        const rows = [];

        if (currentInsights.avoid) {
            rows.push({
                className: 'recommendation-item avoid',
                label: '⚠️ AVOID:',
                text: `${currentInsights.avoid.name} is overwhelmed. Expect ${currentInsights.avoid.waitTime}m wait.`
            });
        }

        if (currentInsights.recommend) {
            rows.push({
                className: 'recommendation-item',
                label: '💡 SYSTEM OPTIMUM:',
                text: `Route to ${currentInsights.recommend.name} for minimal delays.`
            });
        }

        const locationId = getUserLocationId();
        const fastFood = currentInsights.processedZones
            .filter((z) => z.category === 'food' && z.id !== locationId)
            .sort((a, b) => a.waitTime - b.waitTime)[0];

        if (fastFood) {
            rows.push({
                className: 'recommendation-item',
                label: '🍔 FAST FOOD:',
                text: `${fastFood.name} currently has only a ${fastFood.waitTime}m wait.`
            });
        }

        const closeWr = currentInsights.processedZones
            .filter((z) => z.category === 'washroom' && z.id !== locationId)
            .sort((a, b) => a.walkTime_mins - b.walkTime_mins)[0];

        if (closeWr) {
            rows.push({
                className: 'recommendation-item',
                label: '🚻 CLOSEST WASHROOM:',
                text: `${closeWr.name} is a ${closeWr.walkTime_mins}m walk away.`
            });
        }

        const surging = currentInsights.processedZones
            .filter((z) => z.trend >= 2)
            .sort((a, b) => b.trend - a.trend)[0];

        if (surging) {
            rows.push({
                className: 'recommendation-item',
                label: '📈 SURGING:',
                text: `Crowd is rapidly increasing at ${surging.name}.`
            });
        }

        if (rows.length === 0) {
            const neutral = document.createElement('div');
            neutral.className = 'recommendation-item';
            neutral.textContent = 'All systems nominal. Traffic evenly distributed.';
            container.appendChild(neutral);
            return;
        }

        rows.forEach((item) => {
            const row = document.createElement('div');
            row.className = item.className;

            const strong = document.createElement('strong');
            strong.textContent = `${item.label} `;

            row.appendChild(strong);
            row.appendChild(document.createTextNode(item.text));
            container.appendChild(row);
        });
    } catch (error) {
        console.error('Recommendations rendering failed:', error);
    }
}

/**
 * Adds a user or AI chat message to the chat window.
 * @param {string} text
 * @param {'user'|'ai'} sender
 * @returns {void}
 */
function addChatMessage(text, sender) {
    try {
        const chatWindow = document.getElementById('chat-window');
        if (!chatWindow) {
            return;
        }

        const typingIndicator = document.getElementById('typing-ind');
        if (typingIndicator) {
            typingIndicator.remove();
        }

        const msg = document.createElement('div');
        msg.className = `message ${sender}`;
        msg.style.whiteSpace = 'pre-line';
        msg.textContent = text;

        chatWindow.appendChild(msg);
        chatWindow.scrollTop = chatWindow.scrollHeight;

        void logMessageSafely(sender, msg.textContent || '');
    } catch (error) {
        console.error('Chat message render failed:', error);
    }
}

/**
 * Displays temporary typing indicator bubble.
 * @returns {void}
 */
function showTypingIndicator() {
    try {
        const chatWindow = document.getElementById('chat-window');
        if (!chatWindow) {
            return;
        }

        const msg = document.createElement('div');
        msg.id = 'typing-ind';
        msg.className = 'typing-indicator';
        msg.textContent = 'AI is analyzing';

        const dot1 = document.createElement('span');
        const dot2 = document.createElement('span');
        const dot3 = document.createElement('span');
        msg.appendChild(dot1);
        msg.appendChild(dot2);
        msg.appendChild(dot3);

        chatWindow.appendChild(msg);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    } catch (error) {
        console.error('Typing indicator failed:', error);
    }
}

/**
 * Handles chat input submission with validation and sanitization.
 * @returns {void}
 */
function handleChat() {
    try {
        const input = document.getElementById('chat-input');
        if (!input) {
            return;
        }

        const rawText = input.value;
        const sanitizedText = sanitizeInput(rawText);
        if (!validateInput(sanitizedText)) {
            return;
        }

        addChatMessage(sanitizedText, 'user');
        input.value = '';
        showTypingIndicator();

        setTimeout(() => {
            try {
                const response = ConversationalAssistant.respond(sanitizedText, currentInsights || { processedZones: [] });
                addChatMessage(response.text, 'ai');
            } catch (error) {
                console.error('Chat response flow failed:', error);
                addChatMessage('I am sorry, I encountered a system error processing your request.', 'ai');
            }
        }, CHAT_RESPONSE_DELAY_MS);
    } catch (error) {
        console.error('Chat handler failed:', error);
    }
}

/**
 * Applies simulation scenario updates.
 * @param {'rush'|'rain'|'entry'|'reset'} scenario
 * @returns {void}
 */
function runSimulation(scenario) {
    try {
        if (scenario === 'reset') {
            zonesData = JSON.parse(JSON.stringify(initialZonesData));
            isFocusMode = false;
            setUserLocationId('gate_north');
            renderDashboard();
            return;
        }

        zonesData.forEach((zone) => {
            if (scenario === 'rush') {
                if (zone.id.includes('gate') || zone.id.includes('parking')) {
                    zone.crowd_count = Math.min(zone.capacity, zone.crowd_count + 1500);
                    zone.trend = 15;
                }
                if (zone.category === 'stage') {
                    zone.crowd_count = Math.max(0, zone.crowd_count - 2000);
                    zone.trend = -10;
                }
            }

            if (scenario === 'rain') {
                if (zone.isIndoor) {
                    zone.crowd_count = Math.min(zone.capacity, zone.crowd_count + 500);
                    zone.trend = 12;
                } else {
                    zone.crowd_count = Math.max(0, Math.floor(zone.crowd_count * 0.2));
                    zone.trend = -15;
                }
            }

            if (scenario === 'entry') {
                if (zone.id.includes('gate_north')) {
                    zone.crowd_count = Math.min(zone.capacity, 1400);
                    zone.trend = 15;
                }
                if (zone.category === 'shopping' || zone.category === 'food') {
                    zone.crowd_count = Math.min(zone.capacity, zone.crowd_count + 100);
                    zone.trend = 5;
                }
            }
        });

        renderDashboard();
    } catch (error) {
        console.error('Simulation failed:', error);
    }
}

/**
 * Executes one simulation tick.
 * @returns {void}
 */
function runSimulationTick() {
    try {
        zonesData.forEach((zone) => {
            const variance = (Math.random() * 20) - 10;
            zone.crowd_count = Math.round(clamp(zone.crowd_count + zone.trend + variance, 0, zone.capacity));

            if (zone.trend > 0) {
                zone.trend = zone.trend - 0.5;
            } else if (zone.trend < 0) {
                zone.trend = zone.trend + 0.5;
            }

            zoneHistoryMap[zone.id].push(zone.crowd_count);
            zoneHistoryMap[zone.id].shift();
        });

        renderDashboard();
    } catch (error) {
        console.error('Simulation tick failed:', error);
    }
}

// ==================== INITIALIZATION ====================

/**
 * Binds all UI event handlers.
 * @returns {void}
 */
function bindUiEvents() {
    const chatFab = document.getElementById('chat-fab');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const optimizeBtn = document.getElementById('btn-optimize');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (chatFab) {
        chatFab.addEventListener('click', () => {
            const widget = document.getElementById('chat-widget');
            if (widget) {
                widget.classList.remove('hidden');
            }
            if (chatInput) {
                chatInput.focus();
            }
        });
    }

    if (closeChatBtn) {
        closeChatBtn.addEventListener('click', () => {
            const widget = document.getElementById('chat-widget');
            if (widget) {
                widget.classList.add('hidden');
            }
        });
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', handleChat);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                handleChat();
            }
        });
    }

    if (optimizeBtn) {
        optimizeBtn.addEventListener('click', () => {
            try {
                const widget = document.getElementById('chat-widget');
                if (widget) {
                    widget.classList.remove('hidden');
                }

                const best = currentInsights?.bestOption;
                const avoidName = currentInsights?.avoid ? currentInsights.avoid.name : 'None';

                addChatMessage('✨ Execute optimization protocol', 'user');
                showTypingIndicator();

                isFocusMode = true;
                renderDashboard();

                setTimeout(() => {
                    if (!best) {
                        addChatMessage('Optimization target is temporarily unavailable.', 'ai');
                        isFocusMode = false;
                        renderDashboard();
                        return;
                    }

                    let aiText = '[SYSTEM OVERRIDE SUCCESS]\n\n';
                    aiText += `✅ Optimal Route: ${best.name} (Wait: ${best.waitTime}m, Walk: ${best.walkTime_mins}m).\n\n`;
                    if (currentInsights?.avoid) {
                        aiText += `❌ Zone Restricted: ${avoidName} is currently overwhelmed.\n\n`;
                    }
                    aiText += `📍 Nav: ${RoutePlanner.generateRoute(best, currentInsights.processedZones)}\n\n`;
                    aiText += 'Dashboard focus mode activated. Highlighting target zone.';

                    addChatMessage(aiText, 'ai');

                    setTimeout(() => {
                        isFocusMode = false;
                        renderDashboard();
                    }, FOCUS_MODE_DURATION_MS);
                }, OPTIMIZE_RESPONSE_DELAY_MS);
            } catch (error) {
                console.error('Optimize flow failed:', error);
            }
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            const overlay = document.getElementById('zone-modal-overlay');
            if (overlay) {
                overlay.classList.add('hidden');
            }
            activeModalZoneId = null;
        });
    }

    const simRush = document.getElementById('sim-rush');
    const simRain = document.getElementById('sim-rain');
    const simEntry = document.getElementById('sim-entry');
    const simReset = document.getElementById('sim-reset');

    if (simRush) simRush.addEventListener('click', () => runSimulation('rush'));
    if (simRain) simRain.addEventListener('click', () => runSimulation('rain'));
    if (simEntry) simEntry.addEventListener('click', () => runSimulation('entry'));
    if (simReset) simReset.addEventListener('click', () => runSimulation('reset'));
}

/**
 * Initializes state and starts update loops.
 * @returns {void}
 */
function initializeApp() {
    try {
        initialZonesData.forEach((zone) => {
            zoneHistoryMap[zone.id] = Array(HISTORY_WINDOW_SIZE).fill(zone.crowd_count);
        });

        bindUiEvents();
        renderDashboard();
        setInterval(runSimulationTick, UPDATE_INTERVAL_MS);
    } catch (error) {
        console.error('Application initialization failed:', error);
    }
}

// Expose core pure functions for diagnostics and maintainability.
window.analyzeCrowd = analyzeCrowd;
window.predictWaitTime = predictWaitTime;
window.generateRecommendations = generateRecommendations;
window.sanitizeInput = sanitizeInput;
window.validateInput = validateInput;

document.addEventListener('DOMContentLoaded', initializeApp);
