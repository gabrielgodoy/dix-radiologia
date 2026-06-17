import { GoogleIconContainer } from "./components/GoogleIconContainer/GoogleIconContainer";
import { RatingStar } from "./components/RatingStar/RatingStar";
import style from "./GoogleReview.module.scss";

export const GoogleReview = ({
  score,
  totalCount,
  linkToReview,
}: {
  score: number;
  totalCount: number;
  linkToReview: string;
}) => {
  const getStarRating = (starIndex: number) => {
    const parts = score.toString().split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1];

    if (starIndex <= Number(integerPart)) {
      return 0;
    }

    const nextStarAfterIntegerPart = Number(integerPart) + 1;
    if (decimalPart && starIndex === nextStarAfterIntegerPart) {
      return 100 - Number(decimalPart) * 10;
    }
    return 100;
  };

  return (
    <div className={style.headerComponentTop}>
      <div className={style.headerContainerInner}>
        <div className={style.headerInfoContainer}>
          <div className={style.headerHeadingContainer}>
            <GoogleIconContainer />
            <div
              className={`${style.headerHeadingText} es-header-heading-text`}
              style={{ textTransform: "capitalize" }}
            >
              reviews
            </div>
          </div>
          <div
            className={`${style.headerRatingContainer} es-header-rating-container`}
          >
            <div
              className={`${style.ratingContainer} es-header-rating-container`}
              role="img"
            >
              <div className={`${style.ratingValue} es-rating-value`}>
                {score}
              </div>
              <div
                aria-hidden="true"
                className={`${style.ratingBarContainer} es-rating-bar-container`}
              >
                {[...Array(5)].map((_, index) => {
                  return (
                    <RatingStar
                      key={index}
                      unfilledProgress={getStarRating(index + 1)}
                    />
                  );
                })}
              </div>
            </div>
            <span
              className={`${style.reviewsCount} es-header-rating-reviews-count`}
            >
              ({totalCount})
            </span>
          </div>
        </div>
        <div className={style.headerWriteReviewButton}>
          <a
            href={linkToReview}
            target="_blank"
            rel="noopener noreferrer"
            className="my-button-style"
          >
            <span
              className="ButtonBase__Overlay-sc-ed4e232d-4 gmZpOB es-button-base-overlay"
              style={{
                padding: "7px 19px",
                borderRadius: "calc(22px)",
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              <span className="ButtonBase__Ellipsis-sc-ed4e232d-5 koIdAr es-button-base-ellipsis">
                Nos avalie no Google
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
