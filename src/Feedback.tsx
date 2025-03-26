import React from "react";

const feedbacks = [
  { id: 1, name: "John Doe", comment: "Great service and user-friendly app!" },
  { id: 2, name: "Alice Smith", comment: "Fast and reliable. Highly recommended!" },
  { id: 3, name: "Mark Wilson", comment: "Smooth experience. I love it!" },
  { id: 4, name: "Emily Johnson", comment: "Easy to use and very convenient." },
  { id: 5, name: "Michael Brown", comment: "Fantastic app! Saves me a lot of time." },
];

const FeedbackSection = () => {
  return (
    <div className="bg-white py-10 flex justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center gap-6">
        {/* First Row (3 Cards) */}
        <div className="flex gap-6">
          {feedbacks.slice(0, 3).map((feedback) => (
            <div key={feedback.id} className="bg-gray-100 p-4 rounded-xl shadow-md w-72">
              <h3 className="font-semibold text-lg">{feedback.name}</h3>
              <p className="text-gray-600">{feedback.comment}</p>
            </div>
          ))}
        </div>
        {/* Second Row (2 Cards) */}
        <div className="flex gap-6">
          {feedbacks.slice(3, 5).map((feedback) => (
            <div key={feedback.id} className="bg-gray-100 p-4 rounded-xl shadow-md w-72">
              <h3 className="font-semibold text-lg">{feedback.name}</h3>
              <p className="text-gray-600">{feedback.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
