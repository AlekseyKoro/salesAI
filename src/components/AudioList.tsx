import React from 'react';
import { File, PlayCircle, AlertCircle } from 'lucide-react';

type AudioFile = {
  id: string;
  name: string;
  duration: string;
  status: 'analyzing' | 'completed' | 'error';
};

export function AudioList({ files }: { files: AudioFile[] }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Загруженные файлы</h2>
      <div className="space-y-3">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <File className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-gray-500">{file.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {file.status === 'analyzing' && (
                <span className="text-yellow-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  Анализируется
                </span>
              )}
              {file.status === 'completed' && (
                <PlayCircle className="w-6 h-6 text-blue-500 cursor-pointer" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}