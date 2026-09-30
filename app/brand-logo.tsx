"use client";
import { cmsText } from "./lib/cms-store";
import { useCms } from "./components/cms-live";
type BrandLogoProps = {
  href: string;
  className?: string;
  inverse?: boolean;
  ariaLabel?: string;
};

export function BrandLogo({
  href,
  className,
  inverse = false,
  ariaLabel = "mono/dev",
}: BrandLogoProps) {
  useCms();
  const classes = ["brand-logo", inverse && "brand-logo--inverse", className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} href={href} aria-label={ariaLabel}>
      <svg className="brand-logo-mark" viewBox="0 0 108 88" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M0 3Q0 0 3 2L50 28 24 45V87H0Z" />
        <path d="M30 49 104 2Q108 0 108 4V87H81V44L30 75Z" />
      </svg>
      <span className="logo-mono" aria-hidden="true">{cmsText("brand-logo", "literal-d7de34b17b4691aa", "mono")}</span>
      <span className="logo-dev" aria-hidden="true">{cmsText("brand-logo", "literal-938b99e3330802a9", "dev")}</span>
      <small className="brand-logo-tagline">WEB · APLICAȚII · AUTOMATIZĂRI</small>
    </a>
  );
}
