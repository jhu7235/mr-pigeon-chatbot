import React, { useState } from 'react';

interface RoleSelectorProps {
  role: string;
  setRole: (role: string) => void;
}

type RoleOption = {
  value: string;
  label: string;
  description: string;
};

const fixedRoles: readonly RoleOption[] = [
  {
    value: 'Software Engineer',
    label: '🧑🏻‍💻 Software Engineer',
    description:
      'In the role of a software engineer, Mr. Pigeon will help you discuss and come up with code',
  },
  {
    value: 'Cover Letter Writer',
    label: '📝 Cover Letter Writer',
    description:
      'In the role of a cover letter writer, Mr. Pigeon will help you write a cover letter for a job application.',
  },
  {
    value: 'Learning Assistant',
    label: '📚 Learning Assistant',
    description:
      'In the role of learning assistants, Mr. Pigeon will help you explore new subjects, clarify concepts, and provide interactive learning experiences tailored to individual needs.',
  },
  {
    value: 'Language Tutor',
    label: '🌍 Language Tutor',
    description:
      'In the role of a language tutor, Mr. Pigeon will help you practice conversations, vocabulary building, and grammar assistance to help users learn new languages.',
  },
  {
    value: 'custom',
    label: 'Custom…',
    description: '',
  },
];

export function RoleSelector({ role, setRole }: RoleSelectorProps) {
  const [customRole, setCustomRole] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    if (selected === 'custom') {
      setRole(customRole || '');
    } else {
      setRole(selected);
    }
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomRole(e.target.value);
    setRole(e.target.value);
  };

  const isCustom = !fixedRoles.some((r) => r.value === role);

  return (
    <div className="mb-2">
      <label htmlFor="ai-role" className="block text-sm font-medium mb-1">
        AI Role
      </label>
      <select
        className="w-full rounded-lg border px-3 py-2 text-base bg-muted dark:border-zinc-700"
        value={isCustom ? 'custom' : role}
        onChange={handleChange}
      >
        {fixedRoles.map((r) => (
          <option key={r.value} value={r.value}>
            {r.label}
          </option>
        ))}
      </select>
      {(role === 'custom' || isCustom) && (
        <input
          className="w-full mt-2 rounded-lg border px-3 py-2 text-base bg-muted dark:border-zinc-700"
          placeholder="Enter custom role..."
          value={customRole}
          onChange={handleCustomChange}
        />
      )}
      <div className="text-xs text-muted-foreground mt-1">
        {(() => {
          const found = fixedRoles.find((r) => r.value === role);
          if (found?.description) return found.description;
          if (isCustom && customRole) return customRole;
          return '';
        })()}
      </div>
    </div>
  );
}
