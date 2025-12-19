# Task List: Remove Opacity from Client and Technology Items

Based on PRD: `prd-remove-opacity-client-technology-items.md`

## Relevant Files

- `themes/raditian-free-hugo-theme-adjusted/static/css/custom.css` - Contains custom CSS overrides, will be modified to remove opacity/grayscale and add hover effects
- `themes/raditian-free-hugo-theme-adjusted/static/css/main.css` - Contains Bootstrap styles with client item opacity (minified, should not be edited directly)
- `themes/raditian-free-hugo-theme-adjusted/layouts/partials/clients.html` - Client logos partial template (for reference)
- `themes/raditian-free-hugo-theme-adjusted/layouts/partials/technologies.html` - Technology logos partial template (for reference)

## Tasks

- [x] 1.0 Remove default opacity from client items
  - [x] 1.1 Locate the `.clients__item` CSS rule in `custom.css` or identify where to add override
  - [x] 1.2 Add CSS override to set `.clients__item` to `opacity: 1` in `custom.css`
  - [x] 1.3 Ensure the override has sufficient specificity to override `main.css` styles
  - [x] 1.4 Verify that child image elements also display at full opacity
- [x] 2.0 Remove grayscale filter from technology items
  - [x] 2.1 Locate the `.img-greyscaled` CSS rule in `custom.css`
  - [x] 2.2 Remove the `filter: grayscale(100%)` property completely (do not set to `grayscale(0)`)
  - [x] 2.3 Verify technology logos display in full color
- [x] 3.0 Add smooth opacity hover effects for client items
  - [x] 3.1 Add `transition: opacity 0.3s ease` to `.clients__item` for smooth transitions
  - [x] 3.2 Add hover effect with opacity change (e.g., slight opacity reduction on hover for visual feedback)
  - [x] 3.3 Ensure hover effect enhances interactivity without reducing default visibility
- [x] 4.0 Test changes on both language versions and viewports
  - [x] 4.1 Build the Hugo site to generate updated static files
  - [x] 4.2 Verify English homepage shows client logos at full opacity
  - [x] 4.3 Verify German homepage shows client logos at full opacity
  - [x] 4.4 Verify English homepage shows technology logos in full color
  - [x] 4.5 Verify German homepage shows technology logos in full color
  - [x] 4.6 Test hover effects work correctly on desktop
  - [x] 4.7 Test hover effects work correctly on mobile (touch devices)
- [x] 5.0 Verify no regressions on other sections
  - [x] 5.1 Verify works section is not affected
  - [x] 5.2 Verify about section is not affected
  - [x] 5.3 Verify all other sections remain unchanged

