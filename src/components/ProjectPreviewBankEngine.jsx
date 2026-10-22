import React, { useState } from 'react';
import { Landmark, ArrowDownLeft, ArrowUpRight, Lock, Shield, RefreshCw } from 'lucide-react';

export default function ProjectPreviewBankEngine() {
  const [accountStatus, setAccountStatus] = useState('ACTIVE');
  const [balance, setBalance] = useState(24500);
  const [recentAction, setRecentAction] = useState('Account initialized with ACTIVE status');

  const statusColors = {
    ACTIVE: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    FROZEN: 'bg-amber-100 text-amber-900 border-amber-300',
    CLOSED: 'bg-rose-100 text-rose-900 border-rose-300',
  };

  const handleStatusChange = (newStatus) => {
    setAccountStatus(newStatus);
    setRecentAction(`Lifecycle state transitioned: ${newStatus}`);
  };

  const handleDeposit = () => {
    if (accountStatus === 'FROZEN') {
      setRecentAction('DENIED: Account is FROZEN. Transactions blocked.');
      return;
    }
    if (accountStatus === 'CLOSED') {
      setRecentAction('DENIED: Account is CLOSED. Operation invalid.');
      return;
    }
    setBalance((prev) => prev + 1500);
    setRecentAction('SUCCESS: Deposit ₹1,500 processed via atomic update');
  };

  return (
    <div className="w-full bg-[#FBFBF9] text-[#121316] border border-[#E5E5DF] rounded-xl overflow-hidden shadow-xs text-xs font-sans select-none">
      {/* Top Header */}
      <div className="bg-[#F0F0EB] px-4 py-2.5 border-b border-[#E5E5DF] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Landmark className="w-4 h-4 text-slate-700" />
          <span className="font-mono text-[11px] font-semibold text-slate-800">
            bank-engine / core-ledger
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-slate-200 text-slate-800 border border-slate-300">
            <Lock className="w-2.5 h-2.5" />
            bcrypt · JWT verified
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {/* Account Balance Card */}
          <div className="p-3.5 rounded-lg border border-[#EAEAE5] bg-[#FCFCFB]">
            <div className="flex items-center justify-between mb-1 text-[11px] text-[#71717A]">
              <span>Account #8492-3021</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${statusColors[accountStatus]}`}>
                {accountStatus}
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-[#121316]">
              ₹{balance.toLocaleString('en-IN')}.00
            </div>
            <div className="mt-2 flex items-center gap-2 text-[10px] text-[#71717A]">
              <span>Type: Savings</span>
              <span>•</span>
              <span>Currency: INR</span>
            </div>
          </div>

          {/* Account Lifecycle Controls */}
          <div className="p-3.5 rounded-lg border border-[#EAEAE5] bg-[#FCFCFB] flex flex-col justify-between">
            <div className="text-[11px] font-semibold text-[#121316] mb-1.5 flex items-center justify-between">
              <span>Account Lifecycle Controls</span>
              <Shield className="w-3.5 h-3.5 text-slate-500" />
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {(['ACTIVE', 'FROZEN', 'CLOSED']).map((status) => (
                <button
                  key={status}
                  onClick={() => handleStatusChange(status)}
                  className={`py-1 px-1.5 text-center text-[10px] font-mono font-semibold rounded border transition-all ${
                    accountStatus === status
                      ? 'bg-[#121316] text-white border-[#121316]'
                      : 'bg-white text-[#52525B] border-[#E2E2DC] hover:border-slate-400'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <button
                onClick={handleDeposit}
                className="w-full py-1 px-2 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-[11px] font-medium flex items-center justify-center gap-1 transition-all"
              >
                <ArrowDownLeft className="w-3 h-3 text-emerald-700" />
                Test Deposit (+₹1,500)
              </button>
            </div>
          </div>
        </div>

        {/* Ledger Transaction Log */}
        <div className="border border-[#EAEAE5] rounded-lg overflow-hidden">
          <div className="bg-[#F8F8F5] px-3 py-1.5 border-b border-[#EAEAE5] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
            <span>AUDIT TRAIL &amp; LEDGER TRANSACTIONS</span>
            <span className="flex items-center gap-1">
              <RefreshCw className="w-2.5 h-2.5" /> Real-time
            </span>
          </div>
          <div className="divide-y divide-[#EAEAE5] text-[11px]">
            <div className="px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-emerald-50 text-emerald-700">
                  <ArrowDownLeft className="w-3 h-3" />
                </span>
                <div>
                  <div className="font-semibold text-[#18181B]">NEFT Inward Credit</div>
                  <div className="text-[10px] text-[#71717A]">Ref: TXN-89218201 · Cleared</div>
                </div>
              </div>
              <span className="font-mono font-semibold text-emerald-700">+₹5,000.00</span>
            </div>

            <div className="px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-rose-50 text-rose-700">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
                <div>
                  <div className="font-semibold text-[#18181B]">Merchant Payment</div>
                  <div className="text-[10px] text-[#71717A]">POS Terminal #412 · Authenticated</div>
                </div>
              </div>
              <span className="font-mono font-semibold text-[#18181B]">-₹1,250.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Backend Status Bar */}
      <div className="px-4 py-2 bg-[#F0F0EB] border-t border-[#E5E5DF] flex items-center justify-between font-mono text-[10px] text-[#52525B]">
        <span className="truncate">
          Log: <span className="text-[#121316] font-semibold">{recentAction}</span>
        </span>
        <span className="shrink-0 text-slate-600 font-medium ml-2">Node.js · Express · MongoDB</span>
      </div>
    </div>
  );
}
