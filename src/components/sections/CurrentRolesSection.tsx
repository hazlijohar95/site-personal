
import React from 'react';
import { useRoles } from '@/hooks/useRoles';

const CurrentRolesSection: React.FC = () => {
  const { data: roles, isLoading } = useRoles();

  if (isLoading) {
    return (
      <section className="space-y-6">
        <h2 className="text-lg font-medium">Current</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="simple-card">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse w-48"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-medium">Current</h2>
      
      <div className="space-y-4">
        {roles?.map((role) => (
          <div key={role.id} className="simple-card">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-sm">{role.title}</h3>
                <span className="w-2 h-2 bg-primary rounded-full"></span>
              </div>
              <p className="text-sm text-muted-foreground">{role.company}</p>
              <p className="text-xs text-muted-foreground/80">{role.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentRolesSection;
