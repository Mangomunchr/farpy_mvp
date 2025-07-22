import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore();

const FeedbackButton = () => {
  const [sent, setSent] = useState(false);

  const submitFeedback = async () => {
    await addDoc(collection(db, 'feedback'), {
      timestamp: Date.now(),
      type: 'general',
      page: window.location.pathname
    });
    setSent(true);
  };

  return sent ? (
    <div className="text-xs text-green-400">✅ Feedback sent</div>
  ) : (
    <button onClick={submitFeedback} className="text-xs text-yellow-400 underline">
      Send Feedback
    </button>
  );
};

export default FeedbackButton;
