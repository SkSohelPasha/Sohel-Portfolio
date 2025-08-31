import React from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  showScrollTop: boolean;
  scrollToTop: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showScrollTop, scrollToTop }) => {
  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;