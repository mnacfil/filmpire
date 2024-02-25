import React from "react";
import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im";

// number of full star = (rating/10) * 5 (star)

type Props = {
  rating: number;
};

const MAX_RATING = 10;
const SIZE = 22;

const Rating = ({ rating }: Props) => {
  const numOfFullStar = (rating / MAX_RATING) * 5;
  let [whole, excess] = numOfFullStar.toString().split(".");

  return (
    <div className="flex items-center justify-center space-x-2">
      {Array.from({ length: 5 }, (_, i) => {
        if (parseInt(whole) >= i + 1) {
          return <ImStarFull size={SIZE} className="text-yellow-500" />;
        }
        if (parseInt(whole) !== i + 1 && parseInt(excess) >= 0.5) {
          excess = "0";
          return <ImStarHalf size={SIZE} className="text-yellow-500" />;
        }
        return <ImStarEmpty size={SIZE} className="text-gray-500" />;
      })}
    </div>
  );
};

export default Rating;
