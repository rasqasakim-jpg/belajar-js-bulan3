import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  const base =
    "px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
  const variants = {
    default:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-gray-800 dark:hover:bg-gray-700",
    outline:
      "border border-gray-300 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800",
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {props.children}
    </button>
  )
}
