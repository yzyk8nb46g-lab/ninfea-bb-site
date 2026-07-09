import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function ButtonLink({ to, href, children, variant = "primary", className = "" }) {
  const classes = `btn btn-${variant} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {variant === "primary" && <ChevronRight size={18} />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} to={to || "/"}>
      {content}
    </Link>
  );
}
