import { ElfsightWidget } from "react-elfsight-widget";
import { LatLngExpression } from "leaflet";
import style from "./Unit.module.scss";
import pin from "@/assets/images/pin.svg";
import { UnitMap } from "../UnitMap/UnitMap";
import { JSX } from "react/jsx-runtime";
import { useFeatureFlagEnabled } from "posthog-js/react";
import { GoogleReview } from "../GoogleReview/GoogleReview";

interface UnitProps {
  position: LatLngExpression;
  unitName: string;
  address: JSX.Element;
  contact: JSX.Element;
  hours: JSX.Element;
  googleScore: number;
  googleTotalCount: number;
  googleLinkToReview: string;
  elfsightGoogleReviewId: string;
}

export const Unit = ({
  position,
  unitName,
  address,
  contact,
  hours,
  googleScore,
  googleTotalCount,
  googleLinkToReview,
  elfsightGoogleReviewId,
}: UnitProps) => {
  const isElfsightWidgetEnabled = useFeatureFlagEnabled(
    "isElfsightWidgetEnabled",
  );

  return (
    <div className={style.unitContainer}>
      <UnitMap position={position} />
      <div className={style.unitName}>
        <img src={pin} alt="Pin" />
        <h3>{unitName}</h3>
      </div>
      <div className={style.unitInfo}>
        <div className={style.infoBlock}>
          <div className={style.unitInfoTitle}>Endereço</div>
          <div className={style.unitAddress}>{address}</div>
        </div>
        <div className={style.infoContainer}>
          <div className={style.infoLeftSide}>
            <div className={style.infoBlock}>
              <div className={style.unitInfoTitle}>Contato</div>
              <div className={style.unitAddress}>{contact}</div>
            </div>
            <div className={style.infoBlock} style={{ marginBottom: 0 }}>
              <div className={style.unitInfoTitle}>Horário</div>
              <div className={style.unitAddress}>{hours}</div>
            </div>
          </div>
        </div>
        <div className={style.infoBlock}>
          {/* <GoogleReview
            score={googleScore}
            totalCount={googleTotalCount}
            linkToReview={googleLinkToReview}
          /> */}
          {isElfsightWidgetEnabled && (
            <ElfsightWidget widgetId={elfsightGoogleReviewId} />
          )}
        </div>
      </div>
    </div>
  );
};
