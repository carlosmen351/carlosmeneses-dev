# Changelog

## [Unreleased]

### Added
- **Agnostic D.S. Integration**: Connect Agnostic Design System deployed on Vercel with portfolio
  - Add custom SVG preview for Agnostic D.S. project
  - Update project URL to production deployment: `https://design-system-camedev.vercel.app/`
  - Replace placeholder image with specific design system preview

### Changed
- `src/lib/projects.js`: Update Agnostic D.S. project configuration
  - Image: `constuctionImage` → `agnosticPreview`
  - Link: `/projects` → `https://design-system-camedev.vercel.app/`

### Files Modified
- `src/lib/projects.js` - 3 lines changed
- `src/assets/agnostic-preview.svg` - New SVG file added

---

## Type: Feature
## Status: Ready for Production
## Impact: High (UX Improvement)
## Risk: Minimal
