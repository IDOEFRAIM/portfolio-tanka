"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Reveal from "./motion/Reveal";

export default function PricingSection() {
  const t = useTranslations("Pricing");

  const tiers = [
    {
      id: "tier_1",
      name: t("tier_1_name"),
      price: t("tier_1_price"),
      desc: t("tier_1_desc"),
      features: t("tier_1_features").split(","),
      cta: t("tier_1_cta"),
    },
    {
      id: "tier_2",
      name: t("tier_2_name"),
      price: t("tier_2_price"),
      desc: t("tier_2_desc"),
      features: t("tier_2_features").split(","),
      cta: t("tier_2_cta"),
      featured: true,
    },
    {
      id: "tier_3",
      name: t("tier_3_name"),
      price: t("tier_3_price"),
      desc: t("tier_3_desc"),
      features: t("tier_3_features").split(","),
      cta: t("tier_3_cta"),
    },
  ];

  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-y-0 left-6 hidden w-px bg-brand-cream/10 sm:block" aria-hidden="true" />
      <div className="absolute left-[19px] top-24 hidden h-4 w-4 rounded-full border border-brand-cream/40 bg-brand-ink sm:block" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 sm:pl-16">
        <Reveal className="flex flex-col gap-4 border-b border-brand-cream/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-brand-cream/45">
              06 — {t('title')}
            </p>
            <h3 className="mt-4 font-serif text-4xl leading-tight text-brand-cream sm:text-5xl">
              {t('subtitle')}
            </h3>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-cream/40">
            Rates — 2026
          </span>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal key={tier.id} delay={index * 0.1}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  tier.featured
                    ? "border-brand-mint/40 bg-brand-mint/[0.05] hover:border-brand-mint/70"
                    : "border-brand-cream/10 bg-brand-cream/[0.03] hover:border-brand-mint/30"
                }`}
              >
                <span className="mb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-brand-cream/45">
                  {tier.name}
                </span>

                <div className="mb-6">
                  <span className="font-serif text-4xl text-brand-cream">{tier.price}</span>
                </div>

                <p className="mb-10 min-h-[60px] text-sm leading-relaxed text-brand-cream/60">
                  {tier.desc}
                </p>

                <ul className="mb-12 flex-grow space-y-3.5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-brand-cream/65"
                    >
                      <span className="h-1 w-1 rounded-full bg-brand-mint" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-full py-4 font-mono text-[10px] uppercase tracking-[0.3em] transition-opacity hover:opacity-85 ${
                    tier.featured ? "bg-brand-mint text-brand-ink" : "bg-brand-cream text-brand-ink"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
