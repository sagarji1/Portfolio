import React, { useState } from 'react';
import { ShieldCheck, Play, Bot, Key, Database, CheckCircle2 } from 'lucide-react';

export default function ProjectPreviewAgentHub() {
  const [pipelineActive, setPipelineActive] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const runPipeline = () => {
    setPipelineActive(true);
    setActiveStep(1);
    setTimeout(() => setActiveStep(2), 700);
    setTimeout(() => setActiveStep(3), 1400);
    setTimeout(() => {
      setActiveStep(0);
      setPipelineActive(false);
    }, 2400);
  };

  return (
    <div className="w-full bg-[#18181B] text-slate-200 border border-[#27272A] rounded-xl overflow-hidden shadow-xs text-xs font-mono select-none">
      {/* Window Header */}
      <div className="bg-[#121214] px-4 py-2.5 border-b border-[#27272A] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
          <span className="ml-2 text-[11px] text-[#A1A1AA]">
            workflow-engine / pipeline-builder.json
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-emerald-950/70 text-emerald-400 border border-emerald-800">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            JWT Guard Active
          </span>
        </div>
      </div>

      {/* Editor Canvas Area */}
      <div className="p-4 bg-[#141416] relative overflow-hidden">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#52525B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Top Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#A1A1AA] text-[11px]">Workflow:</span>
            <span className="text-white font-semibold text-[11px] bg-[#27272A] px-2 py-0.5 rounded">
              Agent-Query-Router
            </span>
          </div>
          <button
            onClick={runPipeline}
            disabled={pipelineActive}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-lime-500 hover:bg-lime-400 text-neutral-950 font-sans font-semibold text-[11px] transition-all disabled:opacity-50"
          >
            <Play className={`w-3 h-3 ${pipelineActive ? 'animate-spin' : ''}`} />
            {pipelineActive ? 'Executing...' : 'Test Workflow'}
          </button>
        </div>

        {/* Workflow Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 relative z-10">
          {/* Node 1: Ingress & JWT Auth */}
          <div
            className={`p-3 rounded-lg border transition-all ${
              activeStep === 1
                ? 'border-lime-500 bg-[#1E241E] shadow-sm shadow-lime-500/20'
                : 'border-[#2E2E33] bg-[#1C1C20]'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-lime-400 font-semibold flex items-center gap-1">
                <Key className="w-3 h-3" /> 01. AUTH GATEWAY
              </span>
              {activeStep > 1 && (
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
              )}
            </div>
            <div className="text-white text-[11px] font-semibold font-sans mb-1">
              Bearer Token Verify
            </div>
            <div className="text-[10px] text-[#A1A1AA] space-y-0.5">
              <div>jwt.verify(token)</div>
              <div className="text-emerald-400/90">✓ Claims: valid</div>
            </div>
          </div>

          {/* Node 2: Agent Orchestration */}
          <div
            className={`p-3 rounded-lg border transition-all ${
              activeStep === 2
                ? 'border-cyan-400 bg-[#182326] shadow-sm shadow-cyan-400/20'
                : 'border-[#2E2E33] bg-[#1C1C20]'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-cyan-400 font-semibold flex items-center gap-1">
                <Bot className="w-3 h-3" /> 02. AGENT DISPATCH
              </span>
              {activeStep > 2 && (
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              )}
            </div>
            <div className="text-white text-[11px] font-semibold font-sans mb-1">
              Task Decomposition
            </div>
            <div className="text-[10px] text-[#A1A1AA] space-y-0.5">
              <div>agent_type: "CodeRefactor"</div>
              <div className="text-cyan-400/90">✓ Model: routing ready</div>
            </div>
          </div>

          {/* Node 3: Persistence & Logging */}
          <div
            className={`p-3 rounded-lg border transition-all ${
              activeStep === 3
                ? 'border-violet-400 bg-[#221B2B] shadow-sm shadow-violet-400/20'
                : 'border-[#2E2E33] bg-[#1C1C20]'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-violet-400 font-semibold flex items-center gap-1">
                <Database className="w-3 h-3" /> 03. DB AUDIT LOG
              </span>
              {activeStep === 3 && (
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
              )}
            </div>
            <div className="text-white text-[11px] font-semibold font-sans mb-1">
              MongoDB Session Store
            </div>
            <div className="text-[10px] text-[#A1A1AA] space-y-0.5">
              <div>sessions.insertOne(...)</div>
              <div className="text-violet-400/90">✓ Op latency: 12ms</div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Output Footer */}
      <div className="px-4 py-2 bg-[#101012] border-t border-[#27272A] flex items-center justify-between text-[11px] text-[#A1A1AA]">
        <div className="flex items-center gap-2 truncate">
          <span className="text-lime-400 font-bold">$</span>
          <span className="truncate">
            {pipelineActive
              ? `[step-${activeStep}] Processing authenticated workflow payload...`
              : 'Status: 200 OK · Auth middleware & DB queries running smoothly'}
          </span>
        </div>
        <span className="text-[10px] text-[#71717A] shrink-0 font-mono">REST / JWT</span>
      </div>
    </div>
  );
}
