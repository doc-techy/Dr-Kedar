interface SectionBackgroundProps {
  variant?: 'default' | 'gradient' | 'minimal'
  className?: string
}

export default function SectionBackground({ variant = 'default', className = '' }: SectionBackgroundProps) {
  if (variant === 'minimal') {
    return (
      <div className={`absolute inset-0 opacity-30 ${className}`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      </div>
    )
  }

  if (variant === 'gradient') {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft"></div>
      </div>
    )
  }

  // Default variant
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft"></div>
    </div>
  )
}
