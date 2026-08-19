"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, ChevronRight, ChevronLeft, ArrowRight, Settings, 
  Smartphone, Monitor, Server, Shield, Brain, Users, Building, Database, ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- CONFIGURATION ---

const SOFTWARE_TYPES = [
  { id: "custom-crm", label: "Custom CRM", baseMin: 600000, baseMax: 1500000 },
  { id: "custom-erp", label: "Custom ERP", baseMin: 1000000, baseMax: 3000000 },
  { id: "pos", label: "POS Software", baseMin: 500000, baseMax: 1500000 },
  { id: "ecommerce", label: "Ecommerce Platform", baseMin: 800000, baseMax: 2000000 },
  { id: "saas-mvp", label: "SaaS Product (MVP)", baseMin: 800000, baseMax: 2000000 },
  { id: "saas-multi", label: "Multi-tenant SaaS", baseMin: 1500000, baseMax: 4000000 },
  { id: "hotel", label: "Hotel Management System", baseMin: 1000000, baseMax: 3000000 },
  { id: "booking", label: "Booking / Reservation", baseMin: 800000, baseMax: 2500000 },
  { id: "inventory", label: "Inventory Management", baseMin: 500000, baseMax: 1500000 },
  { id: "automation", label: "Business Automation", baseMin: 500000, baseMax: 1200000 },
  { id: "healthcare", label: "Healthcare Software", baseMin: 1200000, baseMax: 3500000 },
  { id: "education", label: "Education / School", baseMin: 800000, baseMax: 2000000 },
  { id: "realestate", label: "Real Estate Software", baseMin: 800000, baseMax: 2500000 },
  { id: "logistics", label: "Logistics / Fleet", baseMin: 1000000, baseMax: 3000000 },
  { id: "internal", label: "Custom Internal Software", baseMin: 300000, baseMax: 800000 },
  { id: "marketplace", label: "Marketplace Platform", baseMin: 1200000, baseMax: 3500000 },
  { id: "enterprise", label: "Enterprise Software", baseMin: 2500000, baseMax: 10000000 },
  { id: "other", label: "Other Custom Software", baseMin: 500000, baseMax: 1500000 },
];

const COMPLEXITY_LEVELS = [
  { id: "basic", label: "Basic", desc: "Simple workflows, limited modules, few integrations.", mult: 1, minMonths: 1, maxMonths: 2 },
  { id: "medium", label: "Medium", desc: "Multiple modules, user roles, automation and integrations.", mult: 1.3, minMonths: 2, maxMonths: 4 },
  { id: "advanced", label: "Advanced", desc: "Complex workflows, multiple modules, APIs, dashboards and automation.", mult: 1.7, minMonths: 4, maxMonths: 7 },
  { id: "enterprise", label: "Enterprise", desc: "Large-scale architecture, multiple branches, advanced security, integrations and scalability requirements.", mult: 2.5, minMonths: 6, maxMonths: 12 },
];

const FEATURES = [
  "Authentication & User Roles", "Admin Dashboard", "Customer Management", "CRM",
  "Inventory", "Orders", "Billing & Invoicing", "Payments", "Reports & Analytics",
  "Notifications", "Workflow Automation", "Multi-Branch", "Multi-Tenant",
  "Subscription Management", "Booking / Reservations", "POS", "Employee Management",
  "Document Management", "API Integrations", "AI Features", "Mobile App"
];

const USERS = [
  { id: "1-10", label: "1–10", mult: 1 },
  { id: "11-50", label: "11–50", mult: 1.1 },
  { id: "51-200", label: "51–200", mult: 1.25 },
  { id: "201-1000", label: "201–1000", mult: 1.5 },
  { id: "1000+", label: "1000+", mult: 2 },
];

const BRANCHES = [
  { id: "1", label: "1", mult: 1 },
  { id: "2-5", label: "2–5", mult: 1.1 },
  { id: "6-20", label: "6–20", mult: 1.3 },
  { id: "21-100", label: "21–100", mult: 1.6 },
  { id: "100+", label: "100+", mult: 2 },
];

const PLATFORMS = [
  { id: "web", label: "Web Application", costMin: 0, costMax: 0 },
  { id: "admin", label: "Admin Panel", costMin: 150000, costMax: 300000 },
  { id: "mobile", label: "Mobile App (iOS & Android)", costMin: 300000, costMax: 800000 },
  { id: "customer", label: "Customer Portal", costMin: 150000, costMax: 400000 },
  { id: "employee", label: "Employee Portal", costMin: 150000, costMax: 350000 },
  { id: "api", label: "API / Backend Only", costMin: 200000, costMax: 500000 },
  { id: "desktop", label: "Desktop Application", costMin: 300000, costMax: 700000 },
];

const INTEGRATIONS_LIST = [
  "Payment Gateway", "WhatsApp", "Email / SMS", "Google APIs", 
  "Accounting Software", "CRM / ERP", "Third-party APIs", 
  "Shipping / Logistics", "Booking / OTA APIs", "Social Media APIs", "Cloud Storage"
];

const AI_LEVELS = [
  { id: "none", label: "No AI", mult: 1 },
  { id: "basic", label: "Basic AI features", mult: 1.15 },
  { id: "automation", label: "AI automation", mult: 1.3 },
  { id: "assistant", label: "AI assistant / chatbot", mult: 1.4 },
  { id: "recommendations", label: "AI recommendations", mult: 1.35 },
  { id: "advanced", label: "Advanced AI / ML", mult: 1.8 },
];

const SECURITY_LEVELS = [
  { id: "standard", label: "Standard", desc: "Basic authentication, authorization and secure deployment.", mult: 1 },
  { id: "business", label: "Business", desc: "Role-based access, audit logs, backups and stronger security controls.", mult: 1.15 },
  { id: "advanced", label: "Advanced", desc: "Advanced permissions, encryption, monitoring, compliance considerations.", mult: 1.35 },
  { id: "enterprise", label: "Enterprise", desc: "Advanced security architecture, auditability, high availability and compliance.", mult: 1.6 },
];

const UI_LEVELS = [
  { id: "standard", label: "Standard UI", mult: 1 },
  { id: "custom", label: "Custom UI", mult: 1.15 },
  { id: "premium", label: "Premium UX", mult: 1.3 },
  { id: "highly", label: "Highly customized product experience", mult: 1.5 },
];

export default function CustomSoftwareEstimator() {
  const [step, setStep] = useState(1);
  
  // State
  const [type, setType] = useState<string>("");
  const [complexity, setComplexity] = useState<string>("");
  const [features, setFeatures] = useState<string[]>([]);
  const [users, setUsers] = useState<string>("1-10");
  const [branches, setBranches] = useState<string>("1");
  const [platforms, setPlatforms] = useState<string[]>(["web"]);
  const [integrations, setIntegrations] = useState<string[]>([]);
  const [ai, setAi] = useState<string>("none");
  const [security, setSecurity] = useState<string>("standard");
  const [uiUx, setUiUx] = useState<string>("standard");

  const totalSteps = 5;

  const handleNext = () => setStep(s => Math.min(totalSteps, s + 1));
  const handleBack = () => setStep(s => Math.max(1, s - 1));

  const isNextDisabled = () => {
    if (step === 1) return !type || !complexity;
    if (step === 2) return platforms.length === 0 || features.length === 0;
    if (step === 3) return !users || !branches || integrations.length === 0;
    if (step === 4) return !ai || !security || !uiUx;
    return false;
  };

  const estimate = useMemo(() => {
    if (!type) return { min: 0, max: 0, monthsMin: 0, monthsMax: 0, explanation: "" };
    
    const base = SOFTWARE_TYPES.find(t => t.id === type) || SOFTWARE_TYPES[0];
    const comp = COMPLEXITY_LEVELS.find(c => c.id === (complexity || "basic"))!;
    const userScale = USERS.find(u => u.id === users)!.mult;
    const branchScale = BRANCHES.find(b => b.id === branches)!.mult;
    const aiScale = AI_LEVELS.find(a => a.id === ai)!.mult;
    const secScale = SECURITY_LEVELS.find(s => s.id === security)!.mult;
    const uiScale = UI_LEVELS.find(u => u.id === uiUx)!.mult;

    // Base calculation with complexity
    let minCost = base.baseMin * comp.mult;
    let maxCost = base.baseMax * comp.mult;

    // Add feature cost
    const featureCount = features.length;
    minCost += featureCount * 30000;
    maxCost += featureCount * 80000;

    // Add platform costs
    platforms.forEach(pId => {
      if (pId !== "web") {
        const p = PLATFORMS.find(pl => pl.id === pId);
        if (p) {
          minCost += p.costMin;
          maxCost += p.costMax;
        }
      }
    });

    // Add integrations cost
    const intCount = integrations.length;
    minCost += intCount * 25000;
    maxCost += intCount * 75000;

    // Apply global scales
    const finalScale = userScale * branchScale * aiScale * secScale * uiScale;
    minCost *= finalScale;
    maxCost *= finalScale;

    // Rounding
    minCost = Math.round(minCost / 10000) * 10000;
    maxCost = Math.round(maxCost / 10000) * 10000;

    // Formatting as Lakhs/Cr
    const formatINR = (val: number) => {
      if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)}Cr`;
      if (val >= 100000) return `₹${Math.floor(val / 100000)}L`;
      return `₹${(val / 1000).toFixed(0)}k`;
    };

    let explanation = `Your estimate is higher than a basic application because you've selected `;
    let reasons = [];
    if (comp.id !== "basic") reasons.push(`a ${comp.label.toLowerCase()} complexity level`);
    if (featureCount > 5) reasons.push(`${featureCount} features`);
    if (platforms.length > 1) reasons.push(`multiple platforms`);
    if (integrations.length > 2) reasons.push(`${integrations.length} integrations`);
    if (ai !== "none") reasons.push(`AI requirements`);
    if (security === "enterprise" || security === "advanced") reasons.push(`high security requirements`);
    
    if (reasons.length > 0) {
      explanation += reasons.join(", ").replace(/, ([^,]*)$/, " and $1") + ".";
    } else {
      explanation = "Your estimate reflects a straightforward application with standard requirements.";
    }

    return {
      minStr: formatINR(minCost),
      maxStr: formatINR(maxCost),
      monthsMin: comp.minMonths,
      monthsMax: comp.maxMonths,
      complexityLabel: comp.label,
      explanation
    };
  }, [type, complexity, features, users, branches, platforms, integrations, ai, security, uiUx]);

  const progress = (step / totalSteps) * 100;

  return (
    <div className="my-10 border border-neutral-200 rounded-2xl bg-white shadow-xl overflow-hidden max-w-4xl mx-auto font-sans">
      {/* Header */}
      <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-neutral-900">Custom Software Cost Estimator</h3>
          <p className="text-xs text-neutral-500">Find out how much your app will cost in India (2026)</p>
        </div>
        <div className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Step {step} of {totalSteps}
        </div>
      </div>
      
      {/* Progress */}
      <div className="h-1 bg-neutral-100 w-full">
        <motion.div 
          className="h-full bg-blue-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-6 md:p-8 min-h-[400px]">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Core Concept */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-neutral-900">What are you building?</h2>
                  <p className="text-sm text-neutral-500">Select the type of software that closest matches your vision.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {SOFTWARE_TYPES.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setType(t.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        type === t.id 
                        ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600" 
                        : "border-neutral-200 bg-white hover:border-blue-300 hover:bg-neutral-50"
                      }`}
                    >
                      <span className={`text-sm font-semibold block ${type === t.id ? "text-blue-900" : "text-neutral-700"}`}>
                        {t.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-neutral-100">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-neutral-900">How complex is it?</h2>
                  <p className="text-sm text-neutral-500">Choose the architectural depth of your application.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {COMPLEXITY_LEVELS.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setComplexity(c.id)}
                      className={`p-5 rounded-xl border text-left transition-all flex flex-col gap-2 ${
                        complexity === c.id 
                        ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600" 
                        : "border-neutral-200 bg-white hover:border-blue-300 hover:bg-neutral-50"
                      }`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className={`text-lg font-bold ${complexity === c.id ? "text-blue-900" : "text-neutral-900"}`}>
                          {c.label}
                        </span>
                        {complexity === c.id && <Check className="w-5 h-5 text-blue-600" />}
                      </div>
                      <span className="text-sm text-neutral-600 leading-relaxed">{c.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Features & Platforms */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-neutral-900">What platforms?</h2>
                  <p className="text-sm text-neutral-500">More platforms generally mean more development scope.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {PLATFORMS.map(p => {
                    const isSelected = platforms.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        onClick={() => {
                          setPlatforms(prev => isSelected && prev.length > 1 ? prev.filter(x => x !== p.id) : !isSelected ? [...prev, p.id] : prev)
                        }}
                        className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${
                          isSelected 
                          ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600" 
                          : "border-neutral-200 bg-white hover:border-blue-300 hover:bg-neutral-50"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${isSelected ? "bg-blue-600 border-blue-600" : "border-neutral-300"}`}>
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className={`text-sm font-semibold ${isSelected ? "text-blue-900" : "text-neutral-700"}`}>
                          {p.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-neutral-100">
                <div className="space-y-2 flex justify-between items-end">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900">What features do you need?</h2>
                    <p className="text-sm text-neutral-500">Select all major modules required.</p>
                  </div>
                  <div className="text-xs font-mono text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                    {features.length} selected
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {FEATURES.map(f => {
                    const isSelected = features.includes(f);
                    return (
                      <button
                        key={f}
                        onClick={() => {
                          setFeatures(prev => isSelected ? prev.filter(x => x !== f) : [...prev, f])
                        }}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                          isSelected 
                          ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200" 
                          : "border-neutral-200 bg-white text-neutral-700 hover:border-blue-400"
                        }`}
                      >
                        {f}
                      </button>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Scale & Integrations */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-neutral-900">Scale & Usage</h2>
                  <p className="text-sm text-neutral-500">How many people and locations will use this?</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600"/> Number of Users
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {USERS.map(u => (
                        <button
                          key={u.id}
                          onClick={() => setUsers(u.id)}
                          className={`px-4 py-2 rounded-lg border font-medium transition-all text-sm ${
                            users === u.id ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600" : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                          }`}
                        >
                          {u.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                      <Building className="w-4 h-4 text-blue-600"/> Branches / Locations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {BRANCHES.map(b => (
                        <button
                          key={b.id}
                          onClick={() => setBranches(b.id)}
                          className={`px-4 py-2 rounded-lg border font-medium transition-all text-sm ${
                            branches === b.id ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600" : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                          }`}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-neutral-100">
                <div className="space-y-2 flex justify-between items-end">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900">Third-Party Integrations</h2>
                    <p className="text-sm text-neutral-500">Select external services you need to connect with.</p>
                  </div>
                  <div className="text-xs font-mono text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                    {integrations.length} selected
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {INTEGRATIONS_LIST.map(i => {
                    const isSelected = integrations.includes(i);
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setIntegrations(prev => isSelected ? prev.filter(x => x !== i) : [...prev, i])
                        }}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                          isSelected 
                          ? "border-neutral-900 bg-neutral-900 text-white" 
                          : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                        }`}
                      >
                        {i}
                      </button>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: AI & Security */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-neutral-900">AI, Security & UI</h2>
                <p className="text-sm text-neutral-500">Fine-tune the technical requirements.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* AI */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-purple-600"/> AI Requirements
                  </h3>
                  <div className="flex flex-col gap-2">
                    {AI_LEVELS.map(a => (
                      <button
                        key={a.id}
                        onClick={() => setAi(a.id)}
                        className={`px-4 py-3 rounded-lg border text-left text-sm font-medium transition-all flex justify-between items-center ${
                          ai === a.id ? "border-purple-600 bg-purple-50 text-purple-900 ring-1 ring-purple-600" : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                        }`}
                      >
                        {a.label}
                        {ai === a.id && <Check className="w-4 h-4 text-purple-600"/>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Security */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600"/> Security & Compliance
                  </h3>
                  <div className="flex flex-col gap-2">
                    {SECURITY_LEVELS.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setSecurity(s.id)}
                        className={`px-4 py-3 rounded-lg border text-left text-sm font-medium transition-all flex justify-between items-center ${
                          security === s.id ? "border-green-600 bg-green-50 text-green-900 ring-1 ring-green-600" : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                        }`}
                      >
                        {s.label}
                        {security === s.id && <Check className="w-4 h-4 text-green-600"/>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* UI/UX */}
              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-blue-600"/> UI / UX Complexity
                </h3>
                <div className="flex flex-wrap gap-3">
                  {UI_LEVELS.map(u => (
                    <button
                      key={u.id}
                      onClick={() => setUiUx(u.id)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        uiUx === u.id ? "border-blue-600 bg-blue-50 text-blue-900 ring-1 ring-blue-600" : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                      }`}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 5: Result */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="text-center space-y-2 mb-8">
                <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-500 font-bold">Your Estimated Development Range</h2>
                <div className="text-4xl md:text-6xl font-extrabold text-blue-600 tracking-tight">
                  {estimate.minStr} – {estimate.maxStr}<span className="text-2xl text-blue-400">+</span>
                </div>
                <p className="text-sm text-neutral-500 max-w-md mx-auto pt-2">
                  Indicative development cost. Final pricing depends on detailed requirements, exact features, and UI/UX scope.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">Timeline</div>
                  <div className="text-lg font-bold text-neutral-900">{estimate.monthsMin}–{estimate.monthsMax} months</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">Complexity</div>
                  <div className="text-lg font-bold text-neutral-900">{estimate.complexityLabel}</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">Features</div>
                  <div className="text-lg font-bold text-neutral-900">{features.length} selected</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">Platforms</div>
                  <div className="text-lg font-bold text-neutral-900">{platforms.length} selected</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 flex gap-4 text-blue-900">
                <Settings className="w-5 h-5 shrink-0 mt-0.5 text-blue-600" />
                <p className="text-sm leading-relaxed">
                  {estimate.explanation} Pricing includes Product Development, UI/UX, Backend & APIs, Integrations, Testing & Deployment.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-200 space-y-5 text-center">
                <h3 className="text-xl font-bold text-neutral-900">Want a more accurate estimate?</h3>
                <p className="text-sm text-neutral-600 max-w-lg mx-auto">
                  Share your requirements with our team and get a project-specific estimate based on your exact workflows, features and integrations.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-blue-200 group">
                      Get a Detailed Estimate
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto border-neutral-300 text-neutral-700 hover:bg-neutral-50 font-bold px-8 py-6 text-base rounded-xl">
                      Talk to a Software Expert
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Nav */}
      {step < totalSteps && (
        <div className="bg-neutral-50 p-4 md:px-6 border-t border-neutral-200 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={step === 1}
            className="text-neutral-600 hover:text-neutral-900 font-medium"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={isNextDisabled()}
            className="bg-neutral-900 hover:bg-black text-white font-semibold px-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === totalSteps - 1 ? "Calculate Estimate" : "Next Step"} <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      )}
      
      {step === totalSteps && (
        <div className="bg-neutral-50 p-4 md:px-6 border-t border-neutral-200 flex items-center justify-center">
          <Button
            variant="ghost"
            onClick={() => setStep(1)}
            className="text-neutral-500 hover:text-neutral-900 text-xs font-mono tracking-wider uppercase"
          >
            Start Over
          </Button>
        </div>
      )}

    </div>
  );
}
