# D'CosMedis Clinic - Typography System Documentation

## Overview

This document outlines the typography system for the D'CosMedis Clinic website, designed to establish a clear visual hierarchy, improve readability, and maintain consistency across all interface components.

## Design Principles

1. **Fluid Typography**: All font sizes use CSS `clamp()` for smooth scaling between mobile and desktop viewports
2. **Type Scale**: Based on a 1.25 Major Third ratio for harmonious proportions
3. **Accessibility**: Minimum 16px body text with sufficient line height for readability
4. **Brand Identity**: Cormorant Garamond (serif) for elegance, Inter (sans-serif) for clarity

## Font Families

| Token | Font | Usage |
|-------|------|-------|
| `--font-display` | Cormorant Garamond | Headings, display text, elegant accents |
| `--font-body` | Inter | Body text, UI elements, navigation |
| `--font-mono` | Fira Code | Code snippets, technical data (rare) |

## Fluid Type Scale

All sizes use `clamp(min, preferred, max)` for responsive scaling:

| Token | Mobile | Desktop | Usage |
|-------|--------|---------|-------|
| `--text-xs` | 10px | 11px | Captions, badges, metadata |
| `--text-sm` | 13px | 15px | Secondary text, labels |
| `--text-base` | 14px | 16px | **Primary body text** |
| `--text-md` | 16px | 19px | Lead paragraphs |
| `--text-lg` | 18px | 22px | Large body, quotes |
| `--text-xl` | 20px | 26px | Small headings |
| `--text-2xl` | 24px | 32px | Card titles |
| `--text-3xl` | 28px | 40px | Section headings |
| `--text-4xl` | 32px | 48px | Page titles |
| `--text-5xl` | 40px | 64px | Hero headings |
| `--text-6xl` | 48px | 80px | Display/hero large |

## Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--leading-tight` | 1.2 | Headlines, display text |
| `--leading-snug` | 1.35 | Subheadings, card titles |
| `--leading-normal` | 1.6 | Body text |
| `--leading-relaxed` | 1.75 | Long-form content |

## Typography Components

### Heading Component

```jsx
import { Heading } from '@/components/ui/Typography';

// Hero heading
<Heading variant="hero">Reveal Your Most Radiant Self</Heading>

// Section heading
<Heading variant="section">Our Treatments</Heading>

// Card title
<Heading variant="card">Glass Skin Facial</Heading>

// Subtitle
<Heading variant="subtitle">Advanced Dermatology</Heading>

// Page title
<Heading variant="page">About D'CosMedis</Heading>

// White variant for dark backgrounds
<Heading variant="section-white">What Our Patients Say</Heading>
```

### Text Component

```jsx
import { Text } from '@/components/ui/Typography';

// Body text (default)
<Text>Experience world-class skin treatments...</Text>

// Large body
<Text size="lg" weight="medium">Leading dermatology clinic in Delhi</Text>

// Small/muted text
<Text size="sm" color="muted">Last updated: January 2025</Text>

// White text on dark backgrounds
<Text color="white">Your journey to beautiful skin begins here</Text>

// Error message
<Text size="sm" color="error">Please enter a valid email address</Text>
```

### Caption Component

```jsx
import { Caption } from '@/components/ui/Typography';

// Section overline
<Caption variant="overline">Our Expertise</Caption>

// Form label
<Caption variant="label">Full Name *</Caption>

// Badge
<Caption variant="badge">New Launch</Caption>

// Caption
<Caption variant="caption">Dr. Dolly Gupta, Founder</Caption>
```

## Usage Guidelines

### Do's

- Use `Heading` component for all headings (h1-h6)
- Use `Text` component for all body content
- Use `Caption` for labels, overlines, and metadata
- Maintain hierarchy: Hero → Section → Card → Body
- Use appropriate color contrast (4.5:1 minimum for body text)

### Don'ts

- Don't use arbitrary font sizes (use the type scale)
- Don't use inline `style={{}}` for typography
- Don't skip heading levels (h1 → h2 → h3, not h1 → h3)
- Don't use font sizes below 14px for body text
- Don't use all caps for body text (use Caption component)

## Migration Guide

### From Inline Styles

```jsx
// Before (inline styles)
<h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Title</h1>

// After (Typography component)
<Heading variant="section">Title</Heading>
```

### From Tailwind Classes

```jsx
// Before (Tailwind classes)
<p className="text-sm text-gray-600 leading-relaxed">Text</p>

// After (Typography component)
<Text size="sm" color="muted">Text</Text>
```

## Performance

- Fonts use `font-display: swap` to prevent FOIT (Flash of Invisible Text)
- Preconnect hints reduce font loading time
- Fluid typography reduces layout shift during resize

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13.1+
- Edge 80+

The `clamp()` function is supported in all modern browsers.
