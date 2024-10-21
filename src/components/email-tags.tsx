import { useState } from 'react';

const EmailInput = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleKeyDown = (e:any) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      if (validateEmail(input)) {
        setEmails([...emails, input]);
        setInput('');
      }
    }
  };

  const handleRemoveEmail = (index : any) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const validateEmail = (email : string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="border p-4 rounded">
      <div className="flex flex-wrap gap-2 mb-2">
        {emails.map((email, index) => (
          <div key={index} className="bg-gray-200 p-1 rounded flex items-center">
            {email}
            <button
              onClick={() => handleRemoveEmail(index)}
              className="ml-2 text-red-500 font-bold"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter email"
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

export default EmailInput;
