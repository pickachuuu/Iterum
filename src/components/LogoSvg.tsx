import type { SVGProps } from 'react'

type LogoSvgProps = SVGProps<SVGSVGElement>

export default function LogoSvg({ className = 'h-6 w-6', ...props }: LogoSvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Modern geometric infinity loop combined with a conversational bubble path */}
      <path d="M12 2A10 10 0 0 1 22 12c0 2.5-1 4.8-2.6 6.4L16 15c1-1 1.6-2.4 1.6-4a6 6 0 1 0-7.2 5.9l-1 3.5a10 10 0 1 1 2.6-18.4z" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  )
}
