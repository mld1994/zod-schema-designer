'use client'
import * as React from 'react'

export const Dialog = ({ children, open, onOpenChange }) => {
  return <div>{children}</div>
}
export const DialogTrigger = ({ children }) => children
export const DialogContent = ({ children }) => <div>{children}</div>
export const DialogHeader = ({ children }) => <div>{children}</div>
export const DialogTitle = ({ children }) => <h3>{children}</h3>
export const DialogFooter = ({ children }) => <div>{children}</div>
