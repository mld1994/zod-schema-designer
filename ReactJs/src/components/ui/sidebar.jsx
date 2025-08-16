'use client'
import React from 'react'

export const SidebarProvider = ({ children }) => <div>{children}</div>
export const Sidebar = ({ children, className }) => <aside className={className}>{children}</aside>
export const SidebarContent = ({ children, className }) => <div className={className}>{children}</div>
export const SidebarHeader = ({ children }) => <div>{children}</div>
export const SidebarTrigger = () => <button aria-label="Toggle sidebar">☰</button>
export const SidebarMenu = ({ children }) => <ul>{children}</ul>
export const SidebarMenuItem = ({ children }) => <li>{children}</li>
export const SidebarMenuButton = ({ children, ...props }) => <button {...props}>{children}</button>

export default Sidebar
