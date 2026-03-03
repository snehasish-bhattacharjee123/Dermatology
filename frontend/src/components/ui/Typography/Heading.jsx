/**
 * Heading Component
 * A flexible heading component that supports multiple levels and visual variants
 * Uses fluid typography scale for responsive sizing
 */

import PropTypes from 'prop-types';

const variantStyles = {
    // Display/Hero variants
    hero: 'font-display text-5xl md:text-6xl font-medium leading-tight tracking-tight text-dark',
    'hero-white': 'font-display text-5xl md:text-6xl font-medium leading-tight tracking-tight text-white',

    // Section headings
    section: 'font-display text-3xl md:text-4xl font-medium leading-tight tracking-tight text-dark',
    'section-white': 'font-display text-3xl md:text-4xl font-medium leading-tight tracking-tight text-white',
    'section-gold': 'font-display text-3xl md:text-4xl font-medium leading-tight tracking-tight text-gold',

    // Card titles
    card: 'font-display text-xl md:text-2xl font-medium leading-snug tracking-normal text-dark',
    'card-white': 'font-display text-xl md:text-2xl font-medium leading-snug tracking-normal text-white',

    // Subtitles
    subtitle: 'font-display text-lg md:text-xl font-medium leading-snug tracking-normal text-dark',
    'subtitle-muted': 'font-display text-lg md:text-xl font-medium leading-snug tracking-normal text-text-muted',
    'subtitle-white': 'font-display text-lg md:text-xl font-medium leading-snug tracking-normal text-white',

    // Page titles
    page: 'font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-dark',
    'page-white': 'font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-white',
};

const levelSizes = {
    1: 'text-5xl md:text-6xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-xl md:text-2xl',
    4: 'text-lg md:text-xl',
    5: 'text-base md:text-lg',
    6: 'text-sm md:text-base',
};

export function Heading({
    level = 1,
    variant = 'section',
    children,
    className = '',
    as: Component = `h${level}`,
    ...props
}) {
    const variantClass = variantStyles[variant] || variantStyles.section;

    // If variant is specified, use it; otherwise apply level-based sizing
    const sizeClass = variantStyles[variant]
        ? ''
        : `font-display font-medium leading-tight tracking-tight text-dark ${levelSizes[level]}`;

    return (
        <Component
            className={`${variant ? variantClass : sizeClass} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
}

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    variant: PropTypes.oneOf([
        'hero', 'hero-white',
        'section', 'section-white', 'section-gold',
        'card', 'card-white',
        'subtitle', 'subtitle-muted', 'subtitle-white',
        'page', 'page-white'
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    as: PropTypes.elementType,
};

export default Heading;
