"use client";
import { ReactGoogleReviews } from "react-google-reviews";

export const GoogleReviewBadge = () => {
  const featurableWidgetId = "0faa6e85-75ff-4d38-9681-5a11ad9694f5";

  return (
    <div className="reviews-container">
      <ReactGoogleReviews layout="badge" featurableId={featurableWidgetId} />
    </div>
  );
};
