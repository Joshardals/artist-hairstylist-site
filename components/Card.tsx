import { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export default function Card({
  children,
  hover = false,
  className = "",
  ...props
}: CardProps) {
  const hoverStyles = hover
    ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    : "";

  return (
    <div
      className={`bg-white rounded-xl shadow-md transition-all duration-300 ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
