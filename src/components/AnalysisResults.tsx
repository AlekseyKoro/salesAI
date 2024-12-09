import React from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

type Analysis = {
  score: number;
  strengths: string[];
  improvements: string[];
  recommendations: string[];
};

export function AnalysisResults({ analysis }: { analysis: Analysis }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Результаты анализа</h2>
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold">{analysis.score}%</div>
          <div className="text-sm text-gray-500">общая эффективность</div>
        </div>
      </div>

      <div className="space-y-6">
        <Section
          title="Сильные стороны"
          items={analysis.strengths}
          icon={CheckCircle}
          iconColor="text-green-500"
        />
        <Section
          title="Требует улучшения"
          items={analysis.improvements}
          icon={XCircle}
          iconColor="text-red-500"
        />
        <Section
          title="Рекомендации"
          items={analysis.recommendations}
          icon={AlertTriangle}
          iconColor="text-yellow-500"
        />
      </div>
    </div>
  );
}

function Section({ title, items, icon: Icon, iconColor }: {
  title: string;
  items: string[];
  icon: React.ElementType;
  iconColor: string;
}) {
  return (
    <div>
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Icon className={`w-5 h-5 ${iconColor}`} />
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 pl-7">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}