/**
 * Caption Component
 * For labels, metadata, overlines, and small text
 * Uses uppercase tracking for UI elements
 */

import PropTypes from 'prop-types';

const variantStyles = {
    // Labels (form labels, card labels)
    label: 'font-body text-[12px] font-semibold tracking-[1.5px] uppercase text-text-muted',
    'label-white': 'font-body text-[12px] font-semibold tracking-[1.5px] uppercase text-white',
    'label-gold': 'font-body text-[12px] font-semibold tracking-[1.5px] uppercase text-gold',

    // Overlines (section overlines)
    overline: 'font-body text-[12px] font-semibold tracking-[1.5px] uppercase text-gold',
    'overline-white': 'font-body text-[12px] font-semibold tracking-[1.5px] uppercase text-white',
    'overline-muted': 'font-body text-[12px] font-semibold tracking-[1.5px] uppercase text-text-muted',

    // Captions (image captions, metadata)
    caption: 'font-body text-[14px] font-medium tracking-wide text-text-light',
    'caption-white': 'font-body text-[14px] font-medium tracking-wide text-white/75',

    // Badges/Tags
    badge: 'font-body text-[12px] font-semibold tracking-[1.5px] uppercase text-white bg-gold px-3 py-1 rounded-full',
    'badge-outline': 'font-body text-[12px] font-semibold tracking-[1.5px] uppercase text-dark border border-dark px-3 py-1 rounded-full',
};

export function Caption({
    children,
    variant = 'caption',
    className = '',
    as: Component = 'span',
    ...props
}) {
    const baseClass = variantStyles[variant] || variantStyles.caption;

    return (
        <Component
            className={`${baseClass} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
}

Caption.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf([
        'label', 'label-white', 'label-gold',
        'overline', 'overline-white', 'overline-muted',
        'caption', 'caption-white',
        'badge', 'badge-outline'
    ]),
    className: PropTypes.string,
    as: PropTypes.elementType,
};

export default Caption;
