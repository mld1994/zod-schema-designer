import React from 'react'

export const Input = React.forwardRef(({ className = '', ...props }, ref) => (
  <input ref={ref} className={`border px-2 py-1 rounded ${className}`} {...props} />
))

Input.displayName = 'Input'
