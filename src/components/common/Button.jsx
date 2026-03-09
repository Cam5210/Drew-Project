function Button({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-gold/40'

  const variantClasses = {
    primary: 'bg-brand-gold text-white hover:bg-brand-gold/90',
    secondary: 'bg-white text-brand-dark border border-brand-border hover:bg-brand-light',
    ghost: 'bg-transparent text-brand-dark hover:bg-brand-dark/5',
  }

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant] ?? variantClasses.primary} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
