"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps extends React.ComponentPropsWithoutRef<"div"> {
  defaultCollapsed?: boolean
  collapsed?: boolean
  toggled?: boolean
  collapsedSize?: number
  size?: number
  onCollapsedChange?: (collapsed: boolean) => void
}

interface SidebarHeaderProps extends React.ComponentPropsWithoutRef<"div"> {}
interface SidebarBodyProps extends React.ComponentPropsWithoutRef<"div"> {}
interface SidebarFooterProps extends React.ComponentPropsWithoutRef<"div"> {}
interface SidebarNavProps extends React.ComponentPropsWithoutRef<"nav"> {}
interface SidebarNavItemProps extends React.ComponentPropsWithoutRef<"a"> {
  active?: boolean
  danger?: boolean
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      children,
      defaultCollapsed = false,
      collapsed,
      collapsedSize = 4,
      size = 16,
      onCollapsedChange,
      ...props
    },
    ref
  ) => {
    const [isCollapsed, setIsCollapsed] = React.useState(
      collapsed ?? defaultCollapsed
    )

    React.useEffect(() => {
      if (collapsed !== undefined) {
        setIsCollapsed(collapsed)
      }
    }, [collapsed])

    const handleCollapsedChange = () => {
      if (collapsed === undefined) {
        setIsCollapsed(!isCollapsed)
      }
      onCollapsedChange?.(!isCollapsed)
    }

    return (
      <aside
        ref={ref}
        data-collapsed={isCollapsed}
        className={cn(
          "group relative flex flex-col border-r bg-background transition-[width]",
          isCollapsed
            ? `w-${collapsedSize} overflow-hidden`
            : `w-${size} h-screen overflow-hidden`,
          className
        )}
        {...props}
      >
        {children}
        <Button
          variant="secondary"
          size="sm"
          className={cn(
            "absolute -right-3 top-10 z-10 flex h-6 w-6 rotate-0 items-center justify-center rounded-full transition-all",
            isCollapsed && "rotate-180"
          )}
          onClick={handleCollapsedChange}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m15 6-6 6 6 6" />
          </svg>
          <span className="sr-only">
            {isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          </span>
        </Button>
      </aside>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        "flex h-[60px] items-center border-b px-4 group-[[data-collapsed=true]]:justify-center",
        className
      )}
      {...props}
    >
      {children}
    </header>
  )
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarBody = React.forwardRef<HTMLDivElement, SidebarBodyProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex-1 overflow-auto py-2 group-[[data-collapsed=true]]:px-2",
        className
      )}
      {...props}
    />
  )
)
SidebarBody.displayName = "SidebarBody"

const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn(
        "flex h-[60px] items-center border-t px-4 group-[[data-collapsed=true]]:justify-center",
        className
      )}
      {...props}
    />
  )
)
SidebarFooter.displayName = "SidebarFooter"

const SidebarNav = React.forwardRef<HTMLElement, SidebarNavProps>(
  ({ className, children, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(
        "group-[[data-collapsed=true]]:items-center flex flex-col gap-1",
        className
      )}
      {...props}
    >
      {children}
    </nav>
  )
)
SidebarNav.displayName = "SidebarNav"

const SidebarNavItem = React.forwardRef<HTMLAnchorElement, SidebarNavItemProps>(
  ({ className, children, active, danger, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
        "hover:bg-muted hover:text-foreground",
        active && "bg-muted text-foreground font-medium",
        danger && "text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20",
        "group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
)
SidebarNavItem.displayName = "SidebarNavItem"

export {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarFooter,
  SidebarNav,
  SidebarNavItem,
}
