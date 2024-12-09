import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

export function AudioUploader({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('audio/'));
    onFilesSelected(files);
  }, [onFilesSelected]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    onFilesSelected(files);
  }, [onFilesSelected]);

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
      <h3 className="text-lg font-medium mb-2">Загрузите аудио файлы</h3>
      <p className="text-gray-500 mb-4">Перетащите файлы сюда или нажмите для выбора</p>
      <input
        type="file"
        multiple
        accept="audio/*"
        onChange={handleFileInput}
        className="hidden"
        id="audio-input"
      />
      <label
        htmlFor="audio-input"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
      >
        Выбрать файлы
      </label>
    </div>
  );
}