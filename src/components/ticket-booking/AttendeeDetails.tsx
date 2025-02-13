import React, { useState, useCallback } from "react";
import { Upload, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { StepIndicator } from "./StepIndicator";

interface AttendeeDetailsProps {
  formData: {
    name: string;
    email: string;
    avatarUrl: string;
  };
  setFormData: (data: any) => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const AttendeeDetails = ({ formData, setFormData, onBack, onSubmit }: AttendeeDetailsProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>(formData.avatarUrl);
  const { toast } = useToast();

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      handleFile(file);
    },
    [setFormData]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewUrl(result);
      setFormData({ ...formData, avatarUrl: result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6 animate-fadeIn">
      <StepIndicator currentStep={2} title="Attendee Details" />

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">Upload Profile Photo</label>
          <div
            className={`relative group cursor-pointer ${
              previewUrl ? "hover:opacity-90" : ""
            }`}
            onDragEnter={handleDragEnter}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileInput}
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className={`flex items-center justify-center w-full h-32 border-2 ${
                isDragging ? "border-teal-400" : "border-teal-400/20"
              } border-dashed rounded-lg transition-all duration-200 group-hover:border-teal-400/40 bg-[#0A2A2F] overflow-hidden`}
            >
              {previewUrl ? (
                <div className="relative w-full h-full">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Upload className="h-8 w-8 text-white" />
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-teal-400/50" />
                  <span className="mt-2 block text-sm text-teal-400/50">
                    Drag & drop or click to upload
                  </span>
                </div>
              )}
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">Enter your name</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-[#0A2A2F] border-teal-400/20 focus:border-teal-400/40"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">Enter your email*</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-400/50" />
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#0A2A2F] border-teal-400/20 focus:border-teal-400/40 pl-10"
              placeholder="hello@example.io"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">About project</label>
          <Textarea
            className="bg-[#0A2A2F] border-teal-400/20 focus:border-teal-400/40 min-h-[100px]"
            placeholder="Tell us about your project..."
          />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onBack} 
          className="border-teal-400/20 hover:bg-teal-400/20"
        >
          Back
        </Button>
        <Button 
          type="submit" 
          className="bg-teal-400 text-black hover:bg-teal-400/90"
        >
          Get My Free Ticket
        </Button>
      </div>
    </form>
  );
};
