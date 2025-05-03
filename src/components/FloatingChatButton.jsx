import { Link } from 'react-router-dom';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

function FloatingChatButton() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-8 bg-black text-white rounded-full p-4 shadow-lg hover:bg-gray-800 transition-colors duration-200 z-50"
      aria-label="Contact Us"
    >
      <ChatBubbleLeftIcon className="h-8 w-8" />
    </Link>
  );
}

export default FloatingChatButton; 