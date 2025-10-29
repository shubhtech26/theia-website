import React from 'react';
import { AnimatedBackground } from "./components/AnimatedBackground";
import { FuturisticNavigation } from "./components/FuturisticNavigation";
import { ProductStoryHero } from "./components/ProductStoryHero";
import { TrustedBy } from "./components/TrustedBy";
import { KPIMetrics } from "./components/KPIMetrics";
import { AnimatedFeatures } from "./components/AnimatedFeatures";
import { TheiaAIOrb } from "./components/TheiaAIOrb";
import { DashboardShowcase } from "./components/DashboardShowcase";
import { UseCases } from "./components/UseCases";
import { SLAEnforcement } from "./components/SLAEnforcement";
import { FiberSecurity } from "./components/FiberSecurity";
import { Compliance } from "./components/Compliance";
import { FuturisticDemoForm } from "./components/FuturisticDemoForm";
import { FuturisticFooter } from "./components/FuturisticFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e27] overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <FuturisticNavigation />
        <ProductStoryHero />
        <TrustedBy />
        <KPIMetrics />
        <AnimatedFeatures />
        <TheiaAIOrb />
        <DashboardShowcase />
        <UseCases />
        <SLAEnforcement />
        <FiberSecurity />
        <Compliance />
        <FuturisticDemoForm />
        <FuturisticFooter />
      </div>
    </div>
  );
}