import './Button.css';

function Button({ children, variant = 'primary', size, href, onClick, type = 'button', disabled = false }) {
  const className = [
    'btn',
    variant === 'primary' ? 'btn-primary' : 'btn-secondary',
    size === 'lg' ? 'btn-lg' : '',
    disabled ? 'btn-disabled' : '',
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={disabled ? undefined : href} className={className} onClick={disabled ? (e) => e.preventDefault() : onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
