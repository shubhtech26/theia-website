import { AnimatedBackground } from "./components/AnimatedBackground";
import { FuturisticNavigation } from "./components/FuturisticNavigation";
import { ProductStoryHero } from "./components/ProductStoryHero";
import { AnimatedFeatures } from "./components/AnimatedFeatures";
import { TheiaAIOrb } from "./components/TheiaAIOrb";
import { DashboardShowcase } from "./components/DashboardShowcase";
import { SLAEnforcement } from "./components/SLAEnforcement";
import { FiberSecurity } from "./components/FiberSecurity";
import { FuturisticDemoForm } from "./components/FuturisticDemoForm";
import { FuturisticFooter } from "./components/FuturisticFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e27] overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <FuturisticNavigation />
        <ProductStoryHero />
        <AnimatedFeatures />
        <TheiaAIOrb />
        <DashboardShowcase />
        <SLAEnforcement />
        <FiberSecurity />
        <FuturisticDemoForm />
        <FuturisticFooter />
      </div>
    </div>
  );
}