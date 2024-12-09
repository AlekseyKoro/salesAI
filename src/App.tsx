import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { AudioUploader } from './components/AudioUploader';
import { AudioList } from './components/AudioList';
import { AnalysisResults } from './components/AnalysisResults';

// Mock data for demonstration
const mockAnalysis = {
  score: 85,
  strengths: [
    'Четкое представление продукта',
    'Активное слушание',
    'Позитивный тон общения'
  ],
  improvements: [
    'Работа с возражениями',
    'Скорость речи'
  ],
  recommendations: [
    'Использовать больше открытых вопросов',
    'Делать паузы после важных утверждений',
    'Уточнять потребности клиента'
  ]
};

function App() {
  const [files, setFiles] = useState([
    { id: '1', name: 'Звонок_001.mp3', duration: '5:23', status: 'completed' as const },
    { id: '2', name: 'Звонок_002.mp3', duration: '3:45', status: 'analyzing' as const }
  ]);

  const handleFilesSelected = (newFiles: File[]) => {
    const newAudioFiles = newFiles.map((file, index) => ({
      id: Date.now() + index.toString(),
      name: file.name,
      duration: '0:00',
      status: 'analyzing' as const
    }));
    setFiles([...files, ...newAudioFiles]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">Анализ звонков</h1>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <AudioUploader onFilesSelected={handleFilesSelected} />
              <AudioList files={files} />
            </div>
            
            <div>
              <AnalysisResults analysis={mockAnalysis} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;