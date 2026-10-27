import React from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  meta?: React.ReactNode;
  metaAlign?: "left" | "right";
  align?: "left" | "center";
  className?: string;
};

const SectionHeader = ({
  eyebrow,
  title,
  description,
  meta,
  metaAlign = "left",
  align = "left",
  className = "",
}: SectionHeaderProps) => {
  const alignmentClasses = align === "center" ? "text-center items-center mx-auto" : "";
  const descriptionWidth = align === "center" ? "max-w-2xl" : "max-w-3xl";
  const metaClasses = metaAlign === "right" ? "md:self-end" : "";

  return (
    <div className={`flex flex-col gap-4 ${alignmentClasses} ${className}`}>
      <div className="flex flex-col gap-3">
        {eyebrow && (
          <p className="text-xs tracking-[0.4em] uppercase text-brand-border">
            {eyebrow}
          </p>
        )}
        <h2 className="text-4xl sm:text-5xl font-serif text-brand-deep">
          {title}
        </h2>
        {description && (
          <p className={`text-base text-brand-deep/70 leading-relaxed ${descriptionWidth}`}>
            {description}
          </p>
        )}
      </div>
      {meta && (
        <span className={`text-[11px] font-mono uppercase tracking-[0.4em] text-primary ${metaClasses}`}>
          {meta}
        </span>
      )}
    </div>
  );
};

export default SectionHeader;
