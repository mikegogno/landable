import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group">
      <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
}