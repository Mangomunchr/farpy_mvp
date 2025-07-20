
import React, { useEffect, useState } from 'react';

function SubmitSuccessToast({ show }) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-green-700 text-white p-3 rounded-lg shadow-lg text-sm z-50">
      ✅ Job submitted successfully!
    </div>
  );
}

export default SubmitSuccessToast;
