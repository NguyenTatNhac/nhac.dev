import React from 'react';

interface WorkExperienceProps {
  title: string;
  company: string;
  location: string;
  date: string;
  logoUrl?: string;
  children: React.ReactNode;
}

const WorkExperience = ({
  title,
  company,
  location,
  date,
  logoUrl,
  children,
}: WorkExperienceProps) => (
  <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow duration-200">
    <div className="flex items-center gap-4 mb-2">
      {logoUrl && (
        <img
          src={logoUrl}
          alt={company + ' logo'}
          className="w-12 h-12 rounded-md object-contain border border-border bg-white dark:bg-background"
        />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span className="text-lg font-bold text-foreground">{title}</span>
          <span className="text-xs text-muted-foreground font-mono sm:text-right">
            {date}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span className="text-muted-foreground text-sm">{company}</span>
          <span className="text-xs text-muted-foreground sm:text-right">
            {location}
          </span>
        </div>
      </div>
    </div>
    <ul className="list-disc mt-4 pl-5 text-muted-foreground text-sm space-y-1">
      {children}
    </ul>
  </div>
);

export default WorkExperience;
