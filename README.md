# FlowSense AI – Smart Event Command Center

## Problem Statement
Large venues face frequent congestion, long wait times, and weak attendee navigation support. FlowSense AI provides real-time zone intelligence and actionable routing guidance so users can avoid bottlenecks and move efficiently.

## Solution Summary
FlowSense AI is a dependency-free web application built with HTML, CSS, and vanilla JavaScript. It simulates live crowd behavior across 24 venue zones, predicts wait times, and provides recommendation-driven navigation through a chat assistant and interactive dashboard.

## Code Architecture
The application enforces strict separation of concerns in [script.js](script.js):

- DATA LAYER
- CONSTANTS
- UTILITY FUNCTIONS
- SECURITY LAYER
- CORE LOGIC
- UI HANDLERS
- INITIALIZATION

### Core Design Principles
- Pure functions for deterministic analytics:
  - `analyzeCrowd(crowd, capacity, trend)`
  - `predictWaitTime(crowd, capacity, serviceRate, status, staffingLevel, hasVIP)`
  - `generateRecommendations(zones)`
  - `sanitizeInput(input)`
  - `validateInput(input)`
- Defensive defaults for invalid inputs and edge cases.
- Minimal global state and explicit state accessor helpers.
- Reusable UI builders for cards, stats, timeline rows, and modal sections.

## Security Practices
FlowSense AI applies a defense-in-depth strategy:

- Input sanitization:
  - Removes `<` and `>` characters.
  - Removes risky script-related tokens (`script`, `javascript:`, inline-event strings).
  - Trims whitespace and clamps input length with `MAX_INPUT_LENGTH`.
- Input validation:
  - Rejects non-string values.
  - Rejects empty strings.
  - Enforces strict max length.
- Safe DOM rendering:
  - User input is always rendered with `textContent`.
  - Dynamic panels are rendered with explicit DOM node creation.
  - No `innerHTML` usage in runtime rendering paths.
- Secure Firebase interaction:
  - Chat payload is sanitized and validated before write.
  - Firestore writes are wrapped in `try/catch`.
  - Write failures are handled without breaking the UI flow.
- Reduced dependency risk:
  - Zero third-party package dependencies in core app logic.
- All Firebase writes enforce sanitized payload contracts before persistence

## Performance Optimization
FlowSense AI is lightweight and optimized for smooth runtime behavior.

- Lightweight footprint:
  - No build step.
  - No external runtime framework.
  - Total project size remains far below 10MB.
- Optimized update loop:
  - 4-second simulation tick with bounded math updates.
  - Trend normalization avoids unstable growth behavior.
- Efficient DOM updates:
  - Card-level dirty checking skips no-op renders.
  - Static UI shells are created once, dynamic fields are patched.
  - No full dashboard re-render on every update.
- Layout thrashing is avoided through batched DOM updates

## Reliability and Stability
- Critical paths use `try/catch`:
  - Prediction logic
  - Recommendation generation
  - Dashboard and map rendering
  - Chat response flow
  - Firebase logging
- Safe fallbacks ensure the app remains operational during errors.

## Google Services Integration
FlowSense AI includes Firebase Firestore logging for chat telemetry.

- Sanitized sender/message payloads
- Timestamped events
- Failure-tolerant writes

## Running the Application
No installation is required.

1. Open [index.html](index.html) in a modern browser.
2. Interact with the dashboard, simulations, virtual map, and AI assistant.
3. Optionally run diagnostics from the built-in System Diagnostics panel.

## Testing
The diagnostics suite in [test.js](test.js) verifies:

- Crowd classification behavior
- Wait-time prediction logic and multipliers
- Recommendation selection rules

This keeps core logic behavior predictable and regression-resistant.

## Scalability Considerations

- Architecture supports horizontal scaling of agent logic
- Firebase enables real-time multi-user interaction tracking
- System can integrate live sensor feeds or APIs for real deployment
- Designed to extend into distributed event intelligence platforms