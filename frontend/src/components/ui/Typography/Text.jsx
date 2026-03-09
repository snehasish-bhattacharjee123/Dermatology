/**
 * Text Component
 * For body text, paragraphs, and general content
 * Supports multiple sizes, weights, and colors
 */

import PropTypes from 'prop-types';

const sizeStyles = {
    xs: 'text-[14px] leading-normal',
    sm: 'text-[14px] leading-relaxed',
    base: 'text-[16px] leading-normal',
    md: 'text-[16px] leading-[1.7]',
    lg: 'text-[18px] leading-[1.7]',
};

const weightStyles = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
};

const colorStyles = {
    default: 'text-text',
    muted: 'text-text-muted',
    light: 'text-text-light',
    white: 'text-white',
    'white-muted': 'text-white/75',
    gold: 'text-gold',
    error: 'text-error',
    success: 'text-success',
};

export function Text({
    children,
    size = 'base',
    weight = 'normal',
    color = 'default',
    className = '',
    as: Component = 'p',
    truncate = false,
    ...props
}) {
    const baseClasses = 'font-body';
    const sizeClass = sizeStyles[size] || sizeStyles.base;
    const weightClass = weightStyles[weight] || weightStyles.normal;
    const colorClass = colorStyles[color] || colorStyles.default;
    const truncateClass = truncate ? 'truncate' : '';

    return (
        <Component
            className={`${baseClasses} ${sizeClass} ${weightClass} ${colorClass} ${truncateClass} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'base', 'md', 'lg']),
    weight: PropTypes.oneOf(['light', 'normal', 'medium', 'semibold', 'bold']),
    color: PropTypes.oneOf(['default', 'muted', 'light', 'white', 'white-muted', 'gold', 'error', 'success']),
    className: PropTypes.string,
    as: PropTypes.elementType,
    truncate: PropTypes.bool,
};

export default Text;
