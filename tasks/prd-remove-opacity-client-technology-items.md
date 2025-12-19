# PRD: Remove Opacity from Client and Technology Items

## Introduction/Overview

Currently, the website applies visual opacity effects to both client logos (in the "Our Clients" section) and technology logos (in the "Technologies" section). These opacity effects make the logos appear faded or semi-transparent in their default state. This PRD outlines the requirement to fully remove these opacity effects so that all logos display at full visibility and clarity.

**Problem:** The opacity effects reduce the visual prominence and clarity of client and technology logos, potentially making them less recognizable and professional-looking.

**Goal:** Remove all opacity effects from client and technology items so they display at full opacity (100% visibility) in their normal state.

## Goals

1. Remove default opacity from client logo items (`.clients__item`) so they display at full opacity
2. Remove opacity/grayscale effects from technology logo items so they display at full color and visibility
3. Ensure all logos are clearly visible and maintain professional appearance
4. Preserve any existing hover effects that enhance user interaction (if applicable)

## User Stories

1. **As a website visitor**, I want to see client logos at full visibility so that I can easily recognize and identify the companies we work with.
2. **As a website visitor**, I want to see technology logos in full color and clarity so that I can quickly identify the technologies used.
3. **As a business owner**, I want our client and technology logos to be prominently displayed without visual degradation so that our partnerships and expertise are clearly communicated.

## Functional Requirements

1. **Client Items Opacity Removal:**
   - FR1.1: Remove the `opacity: 0.5` CSS property from `.clients__item` elements in their normal (non-hover) state
   - FR1.2: Set `.clients__item` elements to `opacity: 1` (or remove opacity property entirely) to ensure full visibility
   - FR1.3: Ensure the change applies to both the container element and any child image elements
   - FR1.4: Verify that any existing hover effects (if they exist) continue to work correctly

2. **Technology Items Grayscale Removal:**
   - FR2.1: Completely remove the `filter: grayscale(100%)` CSS property from technology logo images (`.img-greyscaled` class)
   - FR2.2: Ensure technology logos display in full color without any grayscale or opacity effects
   - FR2.3: Remove the grayscale filter entirely (do not set to `grayscale(0)`, remove the property completely)

3. **Hover Effects:**
   - FR3.1: Add a smooth opacity transition effect on hover for client items (e.g., opacity transitions from 1 to a slightly reduced value, or vice versa)
   - FR3.2: Ensure hover effects use smooth transitions (e.g., `transition: opacity 0.3s ease`)
   - FR3.3: Hover effects should enhance interactivity without reducing default visibility

4. **CSS Implementation:**
   - FR4.1: Add CSS rules in `custom.css` to override opacity/grayscale effects from `main.css`
   - FR4.2: Ensure CSS specificity is sufficient to override existing styles
   - FR4.3: Test that changes work across all viewport sizes (mobile, tablet, desktop)

5. **Visual Verification:**
   - FR5.1: Verify client logos appear at full opacity on both English and German language versions
   - FR5.2: Verify technology logos appear in full color on both English and German language versions
   - FR5.3: Ensure no visual regressions occur in other sections of the website

## Non-Goals (Out of Scope)

1. **Animation Changes:** No changes to existing animations or transitions are required beyond the hover opacity effect.
2. **Other Sections:** This change only affects client and technology items. Other sections with opacity (if any) are out of scope.
3. **Logo Image Updates:** This PRD does not involve updating or replacing logo image files.

## Design Considerations

- **Current State:** Client items have `opacity: 0.5` in `main.css`, making them appear at 50% visibility
- **Current State:** Technology items use `filter: grayscale(100%)` in `custom.css`, making them appear in grayscale
- **Target State:** All logos should appear at full visibility and full color in their default state
- **Hover Effects:** Client items should have smooth opacity transition effects on hover (e.g., subtle opacity changes with smooth transitions)
- **Grayscale Removal:** Technology items should have the grayscale filter completely removed (not just set to 0)
- **CSS Override:** Since `main.css` is a minified Bootstrap file that shouldn't be edited directly, overrides should be placed in `custom.css` with appropriate specificity

## Technical Considerations

1. **CSS File Location:**
   - The opacity for client items is defined in `themes/raditian-free-hugo-theme-adjusted/static/css/main.css` (minified Bootstrap file)
   - Overrides should be added to `themes/raditian-free-hugo-theme-adjusted/static/css/custom.css`
   - The grayscale filter for technology items is in `custom.css` at `.img-greyscaled` class

2. **CSS Specificity:**
   - Override rules must have sufficient specificity to override styles from `main.css`
   - Use the same selectors (`.clients__item`, `.img-greyscaled`) or more specific selectors if needed

3. **Browser Compatibility:**
   - Ensure `opacity: 1` works across all modern browsers
   - Ensure removing the `filter` property works across all modern browsers
   - Ensure `transition: opacity` works across all modern browsers

4. **Hugo Build Process:**
   - Changes to `custom.css` will be automatically included in the Hugo build
   - Verify changes appear in the generated `public/css/custom.css` file after building

## Success Metrics

1. **Visual Verification:**
   - All client logos display at 100% opacity (no transparency)
   - All technology logos display in full color (no grayscale effect)
   - Logos are clearly visible and recognizable

2. **Technical Verification:**
   - CSS rules successfully override default opacity/grayscale styles
   - No console errors or CSS conflicts
   - Changes work on both English and German language versions

3. **Regression Testing:**
   - No visual regressions in other website sections
   - Hover effects work smoothly with opacity transitions
   - Website builds successfully without errors

