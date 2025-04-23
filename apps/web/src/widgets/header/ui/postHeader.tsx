import { ArrowLeft, Home } from "lucide-react";

export const PostHeader = () => {
  const handleGoBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  const handleGoHome = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  return (
    <header className="flex items-center">
      <button className="text-gray-600" onClick={handleGoBack}>
        <ArrowLeft size={24} />
      </button>

      <button className="p-3 text-gray-600" onClick={handleGoHome}>
        <Home size={24} />
      </button>
    </header>
  );
};
