// components/ui/CtaButton.tsx
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

// Define the component's props
type CtaButtonProps = {
  children: React.ReactNode;
  color?: "blue" | "green";
  href?: string; // Optional href for link behavior
  fontSize?: string;
  // --- Add new props for padding ---
  py?: string; // Vertical padding
  px?: string; // Horizontal padding
  arrowBoxSize?: string; // New prop for arrow size
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
);

export const CtaButton = ({
  children,
  color = "blue",
  className,
  href,
  fontSize,
  // --- Destructure new props with default values ---
  py = "1", // Default vertical padding (py-2)
  px = "2", // Default horizontal padding (px-3)
  arrowBoxSize = "5", // Default arrow box size (w-5 h-5)
  ...props
}: CtaButtonProps) => {
  // Define the base styles that apply to all variants
  const baseStyles =
    "group inline-flex items-center transform font-bricolage-grotesque-condensed font-extrabold transition-all duration-200 hover:scale-[1.02] transition-colors duration-200";

  // Define styles that change based on the color prop
  const colorStyles = {
    blue: "bg-[#003CE9] text-[#B4FC28] hover:bg-[#002bb3]",
    green: "bg-[#B4FC28] text-[#003CE9] hover:bg-[#9CFF00]",
  };

  // --- Dynamically generate spacing styles using py and px props ---
  const spacingStyles = `py-${py} px-${px} gap-2 lg:gap-4`;

  // Default text sizes: mobile & tablet identical; desktop scales up
  const defaultTextSize =
    "text-2xl sm:text-xl md:text-3xl lg:text-2xl xl:text-3xl";
  const textSizeStyles = fontSize ?? defaultTextSize;

  // Determine the correct arrow image source based on the color
  const arrowSrc =
    color === "green"
      ? "/assets/ui/arrow-right-blue.svg" // Blue arrow for green button
      : "/assets/ui/arrow-right-green.svg"; // Green arrow for blue button (matches original)

  // --- Generate arrow box size styles dynamically ---
  const arrowBoxStyles = `w-${arrowBoxSize} h-${arrowBoxSize} lg:w-6 lg:h-6 xl:w-7 xl:h-7`;

  // Combined className
  const combinedClassName = clsx(
    baseStyles,
    colorStyles[color],
    spacingStyles,
    textSizeStyles,
    className
  );

  // Arrow component to reuse
  const Arrow = () => (
    <div
      className={`${arrowBoxStyles} transition-transform group-hover:translate-x-1`}
    >
      <Image
        src={arrowSrc}
        alt="Arrow Right"
        width={28}
        height={28}
        className="w-full h-full"
      />
    </div>
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        <Arrow />
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      className={combinedClassName}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
      <Arrow />
    </button>
  );
};
