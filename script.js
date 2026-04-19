// --- 1. Data (Simulated) - 24 Zones with Coordinate Mapping ---
const initialZonesData = [
    // Gates (Edges)
    { id: 'gate_north', name: 'North Gate', capacity: 1500, crowd_count: 1200, avg_service_time: 0.5, category: 'gate', trend: 3, isIndoor: false, hasVIP: true, amenities: ['ticket office'], accessible: true, staffingLevel: 1.0, location: 'North', x: 50, y: 10 },
    { id: 'gate_south', name: 'South Gate', capacity: 1500, crowd_count: 500, avg_service_time: 0.5, category: 'gate', trend: 1, isIndoor: false, hasVIP: false, amenities: ['info desk'], accessible: true, staffingLevel: 0.8, location: 'South', x: 50, y: 90 },
    { id: 'gate_vip', name: 'VIP Entrance', capacity: 300, crowd_count: 50, avg_service_time: 0.2, category: 'gate', trend: 0, isIndoor: true, hasVIP: true, amenities: ['valet'], accessible: true, staffingLevel: 1.0, location: 'West', x: 10, y: 30 },
    // Stages/Seating (Spread)
    { id: 'stage_alpha', name: 'Stage Alpha', capacity: 5000, crowd_count: 4500, avg_service_time: 0, category: 'stage', trend: 5, isIndoor: false, hasVIP: true, amenities: ['bar'], accessible: true, staffingLevel: 1.0, location: 'Center', x: 50, y: 50 },
    { id: 'stage_beta', name: 'Stage Beta', capacity: 3000, crowd_count: 1000, avg_service_time: 0, category: 'stage', trend: 2, isIndoor: false, hasVIP: false, amenities: [], accessible: true, staffingLevel: 0.8, location: 'East', x: 85, y: 50 },
    { id: 'lower_bowl_a', name: 'Lower Bowl A', capacity: 2000, crowd_count: 1800, avg_service_time: 0, category: 'stage', trend: 1, isIndoor: true, hasVIP: true, amenities: ['seat service'], accessible: true, staffingLevel: 1.0, location: 'North', x: 35, y: 30 },
    { id: 'lower_bowl_b', name: 'Lower Bowl B', capacity: 2000, crowd_count: 1900, avg_service_time: 0, category: 'stage', trend: 2, isIndoor: true, hasVIP: true, amenities: ['seat service'], accessible: true, staffingLevel: 1.0, location: 'South', x: 35, y: 70 },
    { id: 'upper_bowl_a', name: 'Upper Bowl A', capacity: 4000, crowd_count: 1200, avg_service_time: 0, category: 'stage', trend: -1, isIndoor: true, hasVIP: false, amenities: [], accessible: false, staffingLevel: 0.6, location: 'North', x: 65, y: 30 },
    { id: 'upper_bowl_b', name: 'Upper Bowl B', capacity: 4000, crowd_count: 1500, avg_service_time: 0, category: 'stage', trend: 0, isIndoor: true, hasVIP: false, amenities: [], accessible: false, staffingLevel: 0.6, location: 'South', x: 65, y: 70 },
    { id: 'vip_lounge', name: 'Skyline VIP Lounge', capacity: 200, crowd_count: 180, avg_service_time: 0, category: 'stage', trend: 1, isIndoor: true, hasVIP: true, amenities: ['alcohol', 'buffet', 'view'], accessible: true, staffingLevel: 1.0, location: 'Center', x: 50, y: 65 },
    { id: 'lawn', name: 'General Admission Lawn', capacity: 8000, crowd_count: 3000, avg_service_time: 0, category: 'stage', trend: 4, isIndoor: false, hasVIP: false, amenities: ['picnic'], accessible: true, staffingLevel: 0.5, location: 'East', x: 80, y: 80 },
    // Food & Beverage
    { id: 'food_north', name: 'North Food Court', capacity: 400, crowd_count: 380, avg_service_time: 4.0, category: 'food', trend: 2, isIndoor: true, hasVIP: false, amenities: ['burgers', 'vegan', 'alcohol'], accessible: true, staffingLevel: 0.9, location: 'North', x: 30, y: 15 },
    { id: 'food_south', name: 'South Food Court', capacity: 400, crowd_count: 120, avg_service_time: 3.0, category: 'food', trend: -1, isIndoor: true, hasVIP: false, amenities: ['pizza', 'tacos'], accessible: true, staffingLevel: 1.0, location: 'South', x: 70, y: 85 },
    { id: 'bar_center', name: 'Center Bar & Grill', capacity: 200, crowd_count: 195, avg_service_time: 5.0, category: 'food', trend: 3, isIndoor: true, hasVIP: true, amenities: ['alcohol', 'premium snacks'], accessible: true, staffingLevel: 0.8, location: 'Center', x: 40, y: 40 },
    { id: 'beer_garden', name: 'Outdoor Beer Garden', capacity: 600, crowd_count: 200, avg_service_time: 2.0, category: 'food', trend: 0, isIndoor: false, hasVIP: false, amenities: ['alcohol', 'craft beer'], accessible: true, staffingLevel: 1.0, location: 'West', x: 15, y: 75 },
    // Washrooms
    { id: 'wr_north', name: 'North Washroom', capacity: 60, crowd_count: 55, avg_service_time: 2.0, category: 'washroom', trend: 1, isIndoor: true, hasVIP: false, amenities: ['baby changing'], accessible: true, staffingLevel: 1.0, location: 'North', x: 70, y: 15 },
    { id: 'wr_south', name: 'South Washroom', capacity: 60, crowd_count: 20, avg_service_time: 2.0, category: 'washroom', trend: 0, isIndoor: true, hasVIP: false, amenities: [], accessible: false, staffingLevel: 1.0, location: 'South', x: 30, y: 85 },
    { id: 'wr_east', name: 'East Washroom', capacity: 40, crowd_count: 15, avg_service_time: 2.0, category: 'washroom', trend: 0, isIndoor: true, hasVIP: false, amenities: [], accessible: true, staffingLevel: 1.0, location: 'East', x: 90, y: 35 },
    { id: 'wr_vip', name: 'VIP Washroom', capacity: 20, crowd_count: 5, avg_service_time: 1.0, category: 'washroom', trend: 0, isIndoor: true, hasVIP: true, amenities: ['lounge'], accessible: true, staffingLevel: 1.0, location: 'Center', x: 45, y: 65 },
    // Shopping
    { id: 'merch_main', name: 'Main Team Store', capacity: 200, crowd_count: 190, avg_service_time: 5.0, category: 'shopping', trend: 2, isIndoor: true, hasVIP: true, amenities: ['apparel', 'jerseys'], accessible: true, staffingLevel: 0.8, location: 'North', x: 60, y: 20 },
    { id: 'merch_kiosk', name: 'East Merch Kiosk', capacity: 50, crowd_count: 10, avg_service_time: 2.0, category: 'shopping', trend: -1, isIndoor: false, hasVIP: false, amenities: ['hats'], accessible: true, staffingLevel: 1.0, location: 'East', x: 85, y: 65 },
    // Facilities & Others
    { id: 'medical', name: 'Medical Tent', capacity: 50, crowd_count: 5, avg_service_time: 15.0, category: 'facility', trend: 0, isIndoor: true, hasVIP: false, amenities: ['first aid'], accessible: true, staffingLevel: 1.0, location: 'West', x: 10, y: 50 },
    { id: 'parking_a', name: 'Parking Lot A', capacity: 5000, crowd_count: 4800, avg_service_time: 1.0, category: 'gate', trend: -5, isIndoor: false, hasVIP: false, amenities: ['shuttle'], accessible: true, staffingLevel: 0.5, location: 'North', x: 50, y: -10 },
    { id: 'parking_b', name: 'Parking Lot B', capacity: 5000, crowd_count: 2000, avg_service_time: 1.0, category: 'gate', trend: 2, isIndoor: false, hasVIP: false, amenities: [], accessible: true, staffingLevel: 0.5, location: 'South', x: 50, y: 110 }
];

let zonesData = JSON.parse(JSON.stringify(initialZonesData));

// User Location & Analytics State
let userLocationId = 'gate_north'; 
const zoneHistoryMap = {}; 
let activeModalZoneId = null;

// --- 2. Agentic AI Logic & Dynamic Routing ---

class NavigationEngine {
    static calculateWalkTime(userZone, targetZone) {
        if (!userZone || !targetZone) return 0;
        if (userZone.id === targetZone.id) return 0;
        const dx = userZone.x - targetZone.x;
        const dy = userZone.y - targetZone.y;
        const distance = Math.sqrt(dx*dx + dy*dy);
        // Map 100 units of distance to approx 15 mins walking time
        return Math.max(1, Math.round(distance * 0.15));
    }
}

class CrowdAnalyzer {
    static analyze(zone) {
        const ratio = zone.crowd_count / zone.capacity;
        let status = 'low';
        if (ratio > 0.85) status = 'high';
        else if (ratio > 0.5) status = 'medium';
        const isUrgent = (status === 'high' && zone.trend > 1);
        return { status, ratio, isUrgent };
    }
}

class WaitTimePredictor {
    static predict(zone, status) {
        if (zone.avg_service_time === 0) return 0;
        let multiplier = 1;
        if (status === 'high') multiplier = 2.5;
        else if (status === 'medium') multiplier = 1.5;
        multiplier /= Math.max(0.3, zone.staffingLevel);
        if (zone.hasVIP) multiplier *= 0.9;
        const baseWait = (zone.crowd_count * zone.avg_service_time) / (zone.capacity * 0.1);
        return Math.max(1, Math.round(baseWait * multiplier));
    }
}

class CrowdPredictor {
    static predictFuture(zone, minutesAhead) {
        let projectedCrowd = zone.crowd_count + (zone.trend * minutesAhead);
        projectedCrowd = Math.max(0, Math.min(zone.capacity, projectedCrowd));
        const ratio = projectedCrowd / zone.capacity;
        let status = 'low';
        if (ratio > 0.85) status = 'high';
        else if (ratio > 0.5) status = 'medium';
        return status;
    }
}

class SmartRecommendationEngine {
    static generateInsights(zones) {
        const userZone = zones.find(z => z.id === userLocationId);

        const processedZones = zones.map(z => {
            const analysis = CrowdAnalyzer.analyze(z);
            const waitTime = WaitTimePredictor.predict(z, analysis.status);
            const walkTime_mins = NavigationEngine.calculateWalkTime(userZone, z);
            const p10 = CrowdPredictor.predictFuture(z, 10);
            const p20 = CrowdPredictor.predictFuture(z, 20);
            const p30 = CrowdPredictor.predictFuture(z, 30);
            return { ...z, status: analysis.status, ratio: analysis.ratio, isUrgent: analysis.isUrgent, waitTime, walkTime_mins, predictions: [p10, p20, p30] };
        });

        const avoid = processedZones.filter(z => z.status === 'high' && z.id !== userLocationId).sort((a,b) => b.ratio - a.ratio)[0];
        
        let recommend = null;
        if (avoid && avoid.category === 'food') {
            recommend = processedZones.filter(z => z.category === 'food' && z.status !== 'high').sort((a,b) => a.waitTime - b.waitTime)[0];
        } else {
            recommend = processedZones.filter(z => z.status === 'low' && z.category !== 'gate').sort((a,b) => a.ratio - b.ratio)[0];
        }

        const rankedBest = processedZones
            .filter(z => z.category !== 'gate' && z.status !== 'high' && z.id !== userLocationId)
            .sort((a,b) => {
                const scoreA = a.waitTime + (a.ratio * 10) + a.walkTime_mins;
                const scoreB = b.waitTime + (b.ratio * 10) + b.walkTime_mins;
                return scoreA - scoreB;
            });

        return { avoid, recommend, processedZones, bestOption: rankedBest[0] || processedZones[0] };
    }
}

class RoutePlanner {
    static generateRoute(targetZone, zones) {
        if (!targetZone) return "Unable to calculate route.";
        const congested = zones.filter(z => z.status === 'high' && z.id !== targetZone.id && z.id !== userLocationId).sort((a,b) => b.ratio - a.ratio)[0];
        let directionStr = `Head towards the **${targetZone.location} Concourse**`;
        let avoidStr = congested ? `, making sure to bypass the congested **${congested.name}** along the way` : ``;
        let arrivalStr = `. You should arrive in about ${targetZone.walkTime_mins} mins.`;
        return `${directionStr}${avoidStr}${arrivalStr}`;
    }
}

class ConversationalAssistant {
    static classifyIntent(query) {
        const q = query.toLowerCase();
        
        // General / Advice (Maps to 'optimize')
        if (q.includes('what to do') || q.includes('what should i do') || q.includes('where to go') || 
            q.includes('recommend') || q.includes('suggest') || q.includes('bored') || 
            q.includes('now') || q.includes('best option') || q.includes('optimize') ||
            q.includes('help me') || q.includes('what\'s next') || q.includes('where should i go')) return 'optimize';

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

    static respond(query, insights) {
        const intent = this.classifyIntent(query);
        const zones = insights.processedZones;
        let target = null;
        let response = '';

        if (intent === 'location') {
            const current = zones.find(z => z.id === userLocationId);
            return `You are currently located at **${current.name}**. To change your location, click a zone on the Virtual Map and select "Set As My Location".`;
        }

        switch (intent) {
            case 'optimize':
                target = insights.bestOption;
                response = `Right now, your absolute best move is **${target.name}**. `;
                break;
            case 'quick':
                const quickOptions = zones.filter(z => z.waitTime > 0 && z.waitTime < 15 && z.id !== userLocationId).sort((a,b) => a.waitTime - b.waitTime);
                if(quickOptions.length > 0) {
                    target = quickOptions[0];
                    response = `If you're in a hurry, check out **${target.name}** (Wait: ${target.waitTime}m). `;
                } else return `Everywhere is busy. I suggest waiting out the rush at an open stage area.`;
                break;
            case 'food':
                const foods = zones.filter(z => z.category === 'food' && z.id !== userLocationId).sort((a,b) => (a.waitTime + a.walkTime_mins) - (b.waitTime + b.walkTime_mins));
                target = foods[0];
                response = `I recommend heading to **${target.name}**. It's currently ${target.status} traffic with an estimated wait of ${target.waitTime} mins. `;
                break;
            case 'drink':
                const drinks = zones.filter(z => z.amenities.some(a => ['alcohol', 'bar', 'drinks'].includes(a.toLowerCase())) && z.id !== userLocationId).sort((a,b) => (a.waitTime + a.walkTime_mins) - (b.waitTime + b.walkTime_mins));
                if(drinks.length > 0) {
                    target = drinks[0];
                    response = `Grab a drink at **${target.name}** (Wait: ${target.waitTime}m). `;
                } else return `I couldn't find any locations serving drinks nearby.`;
                break;
            case 'washroom':
                const washrooms = zones.filter(z => z.category === 'washroom' && z.id !== userLocationId).sort((a,b) => (a.waitTime + a.walkTime_mins) - (b.waitTime + b.walkTime_mins));
                target = washrooms[0];
                response = `Closest washroom is **${target.name}** (${target.waitTime} min wait). `;
                break;
            case 'view':
                const stages = zones.filter(z => z.category === 'stage' && z.id !== userLocationId).sort((a,b) => a.ratio - b.ratio);
                target = stages[0];
                response = `**${target.name}** currently has more space available for a good view! `;
                break;
            case 'merch':
                const merch = zones.filter(z => z.category === 'shopping' && z.id !== userLocationId).sort((a,b) => (a.waitTime + a.walkTime_mins) - (b.waitTime + b.walkTime_mins));
                if(merch.length > 0) {
                    target = merch[0];
                    response = `Check out **${target.name}** for merch (Wait: ${target.waitTime}m). `;
                } else return `Merch stands are currently unavailable.`;
                break;
            case 'entry':
            case 'exit':
                const gates = zones.filter(z => (z.id.includes('entry') || z.id.includes('gate') || z.id.includes('parking')) && z.id !== userLocationId).sort((a,b) => (a.waitTime + a.walkTime_mins) - (b.waitTime + b.walkTime_mins));
                if(gates.length > 0) {
                    target = gates[0];
                    response = `Your best path is via **${target.name}**. `;
                } else return `No gates found.`;
                break;
            case 'vip':
                const vipZones = zones.filter(z => z.hasVIP && z.id !== userLocationId).sort((a,b) => a.waitTime - b.waitTime);
                if(vipZones.length > 0) {
                    target = vipZones[0];
                    response = `VIP lanes are open at **${target.name}**. `;
                } else return `No VIP lanes are currently active.`;
                break;
            case 'accessible':
                const accessible = zones.filter(z => z.accessible).map(z => z.name);
                return `Accessible zones include: ${accessible.slice(0, 3).join(', ')}.`;
            case 'crowded':
                const high = zones.filter(z => z.status === 'high').map(z => z.name);
                if (high.length > 0) return `Currently, the busiest areas are: ${high.slice(0,3).join(', ')}. Try to avoid these if possible.`;
                return "Good news! No areas are currently heavily crowded.";
            case 'other':
            default:
                return `Hey there! 👋 I'm your AI venue buddy. I can help you find food, buy merch, locate VIP areas, or map your perfect route. Try asking me something like: *"What should I do right now?"* or *"Where is the nearest food?"*`;
        }

        if (target) {
            const route = RoutePlanner.generateRoute(target, zones);
            response += `<br/><br/>📍 <strong>Nav:</strong> ${route}`;
        }
        
        return response;
    }
}

// --- 3. UI Decision Engine & DOM Manipulation ---

let currentInsights = null;
let isFocusMode = false;

function renderDashboard() {
    const container = document.getElementById('zones-container');
    
    currentInsights = SmartRecommendationEngine.generateInsights(zonesData);
    
    currentInsights.processedZones.forEach(zone => {
        let card = document.getElementById(`zone-card-${zone.id}`);
        const isNew = !card;
        
        if (isNew) {
            card = document.createElement('div');
            card.id = `zone-card-${zone.id}`;
            card.addEventListener('click', () => {
                const latestInsights = SmartRecommendationEngine.generateInsights(zonesData);
                const updatedZone = latestInsights.processedZones.find(z => z.id === zone.id);
                if (updatedZone) openZoneModal(updatedZone);
            });
            
            // Build static structure once
            card.innerHTML = `
                <div class="zone-header">
                    <div class="title-row">
                        <span class="zone-title" id="title-${zone.id}"></span>
                        <span class="zone-status" id="status-${zone.id}"></span>
                    </div>
                    <div class="zone-badges" id="badges-${zone.id}"></div>
                </div>
                <div class="zone-stats">
                    <div class="stat-row">
                        <span>Crowd</span>
                        <span class="stat-value" id="crowd-${zone.id}"></span>
                    </div>
                    <div class="stat-row" id="wait-row-${zone.id}">
                        <span>Est. Wait Time</span>
                        <span class="stat-value wait-time">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            <span id="wait-val-${zone.id}"></span>
                        </span>
                    </div>
                    <div class="stat-row">
                        <span>Walk Time</span>
                        <span class="stat-value" id="walk-${zone.id}"></span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="prog-${zone.id}"></div>
                    </div>
                    <div class="predictive-timeline">
                        <div class="timeline-point">
                            <span>+10m</span>
                            <div class="time-bar" id="p10-${zone.id}"></div>
                        </div>
                        <div class="timeline-point">
                            <span>+20m</span>
                            <div class="time-bar" id="p20-${zone.id}"></div>
                        </div>
                        <div class="timeline-point">
                            <span>+30m</span>
                            <div class="time-bar" id="p30-${zone.id}"></div>
                        </div>
                    </div>
                    <div id="amenities-${zone.id}"></div>
                </div>
            `;
            container.appendChild(card);
        }
        
        // Update Dynamic Properties
        card.className = `card zone-card status-${zone.status}-glow`;
        if (isFocusMode && currentInsights.bestOption.id !== zone.id) {
            card.classList.add('dimmed');
        } else {
            card.classList.remove('dimmed');
        }
        
        const capacityPercent = Math.round(zone.ratio * 100);
        let urgencyIcon = zone.isUrgent ? '<span class="urgency-indicator">🔥</span>' : '';
        let locationIcon = zone.id === userLocationId ? '<span title="You are here" style="margin-left:5px">📍</span>' : '';

        let badgesHtml = '';
        if (zone.hasVIP) badgesHtml += `<span class="badge vip" title="VIP Lane Available">🌟 VIP</span>`;
        if (zone.isIndoor) badgesHtml += `<span class="badge" title="Indoor">🏠 Indoor</span>`;
        else badgesHtml += `<span class="badge" title="Outdoor">☀️ Outdoor</span>`;
        if (zone.accessible) badgesHtml += `<span class="badge" title="Wheelchair Accessible">♿ Access</span>`;

        document.getElementById(`title-${zone.id}`).innerHTML = `${zone.name} ${locationIcon} ${urgencyIcon}`;
        
        const statusEl = document.getElementById(`status-${zone.id}`);
        statusEl.className = `zone-status status-${zone.status}`;
        statusEl.innerText = zone.status;
        
        document.getElementById(`badges-${zone.id}`).innerHTML = badgesHtml;
        document.getElementById(`crowd-${zone.id}`).innerText = `${zone.crowd_count} / ${zone.capacity}`;
        
        const waitRow = document.getElementById(`wait-row-${zone.id}`);
        if (zone.waitTime > 0) {
            waitRow.style.display = 'flex';
            document.getElementById(`wait-val-${zone.id}`).innerText = `${zone.waitTime} mins`;
        } else {
            waitRow.style.display = 'none';
        }
        
        document.getElementById(`walk-${zone.id}`).innerText = `🏃 ${zone.walkTime_mins} mins`;
        
        const progEl = document.getElementById(`prog-${zone.id}`);
        progEl.className = `progress-fill ${zone.status}`;
        progEl.style.width = `${Math.min(100, capacityPercent)}%`;
        
        document.getElementById(`p10-${zone.id}`).className = `time-bar ${zone.predictions[0]}`;
        document.getElementById(`p20-${zone.id}`).className = `time-bar ${zone.predictions[1]}`;
        document.getElementById(`p30-${zone.id}`).className = `time-bar ${zone.predictions[2]}`;
        
        const amenitiesEl = document.getElementById(`amenities-${zone.id}`);
        amenitiesEl.innerHTML = zone.amenities.length > 0 
            ? `<div class="amenities-list" style="margin-top:1rem">${zone.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join('')}</div>` 
            : '';
    });

    renderRecommendations();
    checkAlerts();
    renderVirtualMap();
    
    if (activeModalZoneId) {
        const updatedZone = currentInsights.processedZones.find(z => z.id === activeModalZoneId);
        if (updatedZone) openZoneModal(updatedZone, false); 
    }
}

function renderVirtualMap() {
    const mapContainer = document.getElementById('virtual-map');
    if (!mapContainer) return;

    // Update User Beacon
    let beacon = document.getElementById('map-user-beacon');
    if (!beacon) {
        beacon = document.createElement('div');
        beacon.id = 'map-user-beacon';
        beacon.className = 'user-beacon';
        mapContainer.appendChild(beacon);
    }
    
    const userZone = currentInsights.processedZones.find(z => z.id === userLocationId);
    if (userZone) {
        beacon.style.left = `${userZone.x}%`;
        beacon.style.top = `${userZone.y}%`;
        beacon.style.display = 'block';
    } else {
        beacon.style.display = 'none';
    }

    // Update Nodes
    currentInsights.processedZones.forEach(zone => {
        let node = document.getElementById(`map-node-${zone.id}`);
        
        if (!node) {
            node = document.createElement('div');
            node.id = `map-node-${zone.id}`;
            node.innerHTML = `<span class="node-label">${zone.name}</span>`;
            node.addEventListener('click', () => {
                const latestInsights = SmartRecommendationEngine.generateInsights(zonesData);
                const updatedZone = latestInsights.processedZones.find(z => z.id === zone.id);
                if (updatedZone) openZoneModal(updatedZone);
            });
            mapContainer.appendChild(node);
        }
        
        node.className = `map-node status-${zone.status}`;
        
        const safeX = Math.max(3, Math.min(97, zone.x));
        const safeY = Math.max(5, Math.min(95, zone.y));

        node.style.left = `${safeX}%`;
        node.style.top = `${safeY}%`;
    });
}

// --- Zone Modal Logic ---

function openZoneModal(zone, initialOpen = true) {
    activeModalZoneId = zone.id;
    const overlay = document.getElementById('zone-modal-overlay');
    
    document.getElementById('modal-title').innerHTML = `${zone.name} <span class="zone-status status-${zone.status}" style="font-size:0.8rem; vertical-align:middle; margin-left:10px;">${zone.status}</span>`;
    
    let badgesHtml = `<span class="badge" style="border-color:var(--accent-blue); color:var(--accent-blue); background:rgba(0,240,255,0.1)">📍 ${zone.location} Area</span>`;
    if (zone.hasVIP) badgesHtml += `<span class="badge vip">🌟 VIP</span>`;
    if (zone.isIndoor) badgesHtml += `<span class="badge">🏠 Indoor</span>`;
    else badgesHtml += `<span class="badge">☀️ Outdoor</span>`;
    if (zone.accessible) badgesHtml += `<span class="badge">♿ Access</span>`;
    document.getElementById('modal-badges').innerHTML = badgesHtml;
    
    document.getElementById('modal-current-stats').innerHTML = `
        <div class="stat-row" style="margin-bottom: 0.5rem">
            <span>Capacity</span>
            <span class="stat-value">${zone.crowd_count} / ${zone.capacity}</span>
        </div>
        <div class="stat-row" style="margin-bottom: 0.5rem">
            <span>Wait Time</span>
            <span class="stat-value wait-time">${zone.waitTime} mins</span>
        </div>
        <div class="stat-row" style="margin-bottom: 0.5rem">
            <span>Walk Time</span>
            <span class="stat-value">🏃 ${zone.walkTime_mins} mins</span>
        </div>
        <div class="stat-row">
            <span>Staffing Efficiency</span>
            <span class="stat-value">${Math.round(zone.staffingLevel * 100)}%</span>
        </div>
    `;

    document.getElementById('modal-future-stats').innerHTML = `
        <div class="timeline-point">
            <span>+10m Prediction</span>
            <div class="time-bar ${zone.predictions[0]}"></div>
        </div>
        <div class="timeline-point">
            <span>+20m Prediction</span>
            <div class="time-bar ${zone.predictions[1]}"></div>
        </div>
        <div class="timeline-point">
            <span>+30m Prediction</span>
            <div class="time-bar ${zone.predictions[2]}"></div>
        </div>
    `;

    // Setup Location Button
    const setBtn = document.getElementById('set-location-btn');
    if (zone.id === userLocationId) {
        setBtn.style.display = 'none';
    } else {
        setBtn.style.display = 'block';
        setBtn.onclick = () => {
            userLocationId = zone.id;
            addChatMessage(`Current location set to: **${zone.name}**. Walking times recalculated.`, 'user');
            overlay.classList.add('hidden');
            activeModalZoneId = null;
            renderDashboard();
        };
    }

    drawZoneChart(zone.id);

    if (initialOpen) {
        overlay.classList.remove('hidden');
    }
}

document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('zone-modal-overlay').classList.add('hidden');
    activeModalZoneId = null;
});

function drawZoneChart(zoneId) {
    const canvas = document.getElementById('zoneChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const history = zoneHistoryMap[zoneId];
    if (!history) return;

    const zone = zonesData.find(z => z.id === zoneId);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const maxVal = zone.capacity;
    const padding = 20;
    const width = canvas.width - (padding * 2);
    const height = canvas.height - (padding * 2);
    const step = width / (history.length - 1);
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 0; i <= 4; i++) {
        const y = padding + (height / 4) * i;
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
    }
    ctx.stroke();

    // Line Path
    ctx.beginPath();
    for (let i = 0; i < history.length; i++) {
        const val = history[i];
        const x = padding + (i * step);
        const y = canvas.height - padding - ((val / maxVal) * height);
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }

    // Neon Gradient Map (Green -> Yellow -> Red)
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
    ctx.globalAlpha = 1.0;
    ctx.stroke();
}


// --- Utility / UI ---

function checkAlerts() {
    const banner = document.getElementById('global-alert-banner');
    const bannerText = document.getElementById('global-alert-text');
    
    const surgingZones = zonesData.filter(z => z.trend >= 6);
    if (surgingZones.length > 0) {
        bannerText.innerText = `🔥 CROWD SURGE DETECTED: High traffic moving towards ${surgingZones[0].name}`;
        banner.classList.remove('hidden');
    } else {
        banner.classList.add('hidden');
    }
}

function renderRecommendations() {
    const container = document.getElementById('ai-recommendation-content');
    let html = '';
    
    if (currentInsights.avoid) {
        html += `<div class="recommendation-item avoid"><strong>⚠️ AVOID:</strong> ${currentInsights.avoid.name} is overwhelmed. Expect ${currentInsights.avoid.waitTime}m wait.</div>`;
    }
    
    if (currentInsights.recommend) {
        html += `<div class="recommendation-item"><strong>💡 SYSTEM OPTIMUM:</strong> Route to ${currentInsights.recommend.name} for minimal delays.</div>`;
    }

    const fastFood = currentInsights.processedZones.filter(z => z.category === 'food' && z.id !== userLocationId).sort((a,b) => a.waitTime - b.waitTime)[0];
    if (fastFood) {
        html += `<div class="recommendation-item"><strong>🍔 FAST FOOD:</strong> ${fastFood.name} currently has only a ${fastFood.waitTime}m wait.</div>`;
    }

    const closeWr = currentInsights.processedZones.filter(z => z.category === 'washroom' && z.id !== userLocationId).sort((a,b) => a.walkTime_mins - b.walkTime_mins)[0];
    if (closeWr) {
        html += `<div class="recommendation-item"><strong>🚻 CLOSEST WASHROOM:</strong> ${closeWr.name} is a ${closeWr.walkTime_mins}m walk away.</div>`;
    }

    const surging = currentInsights.processedZones.filter(z => z.trend >= 2).sort((a,b) => b.trend - a.trend)[0];
    if (surging) {
        html += `<div class="recommendation-item"><strong>📈 SURGING:</strong> Crowd is rapidly increasing at ${surging.name}.</div>`;
    }

    if (!html) {
        html += `<div class="recommendation-item">All systems nominal. Traffic evenly distributed.</div>`;
    }
    container.innerHTML = html;
}

function addChatMessage(text, sender, isHtml = false) {
    const window = document.getElementById('chat-window');
    const typingInd = document.getElementById('typing-ind');
    if (typingInd) typingInd.remove();
    const msg = document.createElement('div');
    msg.className = `message ${sender}`;
    if(isHtml) msg.innerHTML = text;
    else msg.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    window.appendChild(msg);
    window.scrollTop = window.scrollHeight;
}

function showTypingIndicator() {
    const window = document.getElementById('chat-window');
    const msg = document.createElement('div');
    msg.id = 'typing-ind';
    msg.className = 'typing-indicator';
    msg.innerHTML = `AI is analyzing <span></span><span></span><span></span>`;
    window.appendChild(msg);
    window.scrollTop = window.scrollHeight;
}

function handleChat() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;
    addChatMessage(text, 'user');
    input.value = '';
    showTypingIndicator();
    setTimeout(() => {
        const response = ConversationalAssistant.respond(text, currentInsights);
        addChatMessage(response, 'ai', true);
    }, 1200);
}

// --- 4. Events & Interactions ---

document.getElementById('chat-fab').addEventListener('click', () => {
    document.getElementById('chat-widget').classList.remove('hidden');
    document.getElementById('chat-input').focus();
});

document.getElementById('close-chat-btn').addEventListener('click', () => {
    document.getElementById('chat-widget').classList.add('hidden');
});

document.getElementById('send-btn').addEventListener('click', handleChat);
document.getElementById('chat-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChat();
});

document.getElementById('btn-optimize').addEventListener('click', () => {
    document.getElementById('chat-widget').classList.remove('hidden');
    const best = currentInsights.bestOption;
    const avoid = currentInsights.avoid ? currentInsights.avoid.name : "None";
    addChatMessage("✨ Execute optimization protocol", 'user');
    showTypingIndicator();
    isFocusMode = true;
    renderDashboard();
    
    setTimeout(() => {
        let aiMsg = `<strong>[SYSTEM OVERRIDE SUCCESS]</strong><br/><br/>`;
        aiMsg += `✅ <strong>Optimal Route:</strong> ${best.name} (Wait: ${best.waitTime}m, Walk: ${best.walkTime_mins}m).<br/><br/>`;
        if (currentInsights.avoid) aiMsg += `❌ <strong>Zone Restricted:</strong> ${avoid} is currently overwhelmed.<br/><br/>`;
        aiMsg += `📍 <strong>Nav:</strong> ${RoutePlanner.generateRoute(best, currentInsights.processedZones)}<br/><br/>`;
        aiMsg += `<span style="color:var(--accent-pink)"><em>Dashboard focus mode activated. Highlighting target zone.</em></span>`;
        addChatMessage(aiMsg, 'ai', true);
        setTimeout(() => {
            isFocusMode = false;
            renderDashboard();
        }, 8000);
    }, 1500);
});

// Simulation Controls
document.getElementById('sim-rush').addEventListener('click', () => {
    zonesData.forEach(z => {
        if(z.id.includes('gate') || z.id.includes('parking')) { z.crowd_count = Math.min(z.capacity, z.crowd_count + 1500); z.trend = 15; }
        if(z.category === 'stage') { z.crowd_count = Math.max(0, z.crowd_count - 2000); z.trend = -10; }
    });
    renderDashboard();
});

document.getElementById('sim-rain').addEventListener('click', () => {
    zonesData.forEach(z => {
        if(z.isIndoor) { z.crowd_count = Math.min(z.capacity, z.crowd_count + 500); z.trend = 12; } 
        else { z.crowd_count = Math.max(0, Math.floor(z.crowd_count * 0.2)); z.trend = -15; }
    });
    renderDashboard();
});

document.getElementById('sim-entry').addEventListener('click', () => {
    zonesData.forEach(z => {
        if(z.id.includes('gate_north')) { z.crowd_count = Math.min(z.capacity, 1400); z.trend = 15; }
        if(z.category === 'shopping' || z.category === 'food') { z.crowd_count = Math.min(z.capacity, z.crowd_count + 100); z.trend = 5; }
    });
    renderDashboard();
});

document.getElementById('sim-reset').addEventListener('click', () => {
    zonesData = JSON.parse(JSON.stringify(initialZonesData));
    isFocusMode = false;
    userLocationId = 'gate_north'; // Reset location
    renderDashboard();
});

// Initialization & Simulation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize per-zone history with baseline data
    initialZonesData.forEach(zone => {
        zoneHistoryMap[zone.id] = Array(30).fill(zone.crowd_count);
    });
    
    renderDashboard();
    
    setInterval(() => {
        zonesData.forEach(z => {
            const variance = (Math.random() * 20) - 10;
            z.crowd_count = Math.max(0, Math.min(z.capacity, Math.round(z.crowd_count + z.trend + variance)));
            if (z.trend > 0) z.trend -= 0.5;
            if (z.trend < 0) z.trend += 0.5;
            
            // Log history
            zoneHistoryMap[z.id].push(z.crowd_count);
            zoneHistoryMap[z.id].shift();
        });
        
        renderDashboard();
    }, 4000);
});
