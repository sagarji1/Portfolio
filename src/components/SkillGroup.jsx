import React from 'react';

export default function SkillGroup({ title, skills, icon: Icon }) {
  return (
    <div className="p-5 sm:p-6 rounded-xl bg-[#FFFFFF] border border-[#E8E8E2] shadow-xs hover:border-[#D1D1C7] transition-all duration-200">
      <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#EFEFEA]">
        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-[#F3F3EF] flex items-center justify-center text-[#121316]">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <h3 className="font-bold text-sm sm:text-base text-[#121316] tracking-tight">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F8F8F5] border border-[#E5E5DF] text-xs font-medium text-[#27272A] hover:bg-[#F0F0EB] transition-colors"
          >
            <span>{skill.name}</span>
            <span className="text-[10px] font-mono text-[#71717A] bg-[#EDEDE8] px-1.5 py-0.5 rounded">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
