/**
 * Heading Component
 * A flexible heading component that supports multiple levels and visual variants
 * Uses fluid typography scale for responsive sizing
 */

import PropTypes from 'prop-types';

const variantStyles = {
    // Display/Hero variants
    hero: 'font-display text-[48px] md:text-[56px] font-medium leading-tight tracking-tight text-dark',
    'hero-white': 'font-display text-[48px] md:text-[56px] font-medium leading-tight tracking-tight text-white',

    // Section headings
    section: 'font-display text-[36px] md:text-[42px] font-medium leading-tight tracking-tight text-dark',
    'section-white': 'font-display text-[36px] md:text-[42px] font-medium leading-tight tracking-tight text-white',
    'section-gold': 'font-display text-[36px] md:text-[42px] font-medium leading-tight tracking-tight text-gold',

    // Card titles
    card: 'font-display text-[26px] md:text-[28px] font-medium leading-snug tracking-[0.5px] text-dark',
    'card-white': 'font-display text-[26px] md:text-[28px] font-medium leading-snug tracking-[0.5px] text-white',

    // Subtitles
    subtitle: 'font-display text-[20px] md:text-[22px] font-medium leading-snug tracking-normal text-dark',
    'subtitle-muted': 'font-display text-[20px] md:text-[22px] font-medium leading-snug tracking-normal text-text-muted',
    'subtitle-white': 'font-display text-[20px] md:text-[22px] font-medium leading-snug tracking-normal text-white',

    // Page titles
    page: 'font-display text-[42px] md:text-[48px] font-medium leading-tight tracking-tight text-dark',
    'page-white': 'font-display text-[42px] md:text-[48px] font-medium leading-tight tracking-tight text-white',
};

const levelSizes = {
    1: 'text-[48px] md:text-[56px]',
    2: 'text-[36px] md:text-[42px]',
    3: 'text-[26px] md:text-[28px]',
    4: 'text-[20px] md:text-[22px]',
    5: 'text-[16px] md:text-[18px]',
    6: 'text-[14px] md:text-[16px]',
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
