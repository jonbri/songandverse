import {
  useEffect,
  useState,
  useCallback,
  forwardRef,
  ReactNode,
  CSSProperties,
} from "react";

const defaultColor = "orange";

const useBallStyle = () => {
  return {
    borderRadius: "50%",
    textAlign: "center" as const,
  };
};

const roundTo = (n: number, factor: number) => Math.ceil(n / factor) * factor;
const roundTo20 = (n: number) => roundTo(n, 20);
const randomNumberBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const occasionallyByFactor = (factor: number) =>
  randomNumberBetween(0, factor) === factor;

interface BallProps {
  children?: ReactNode;
  style: CSSProperties;
}
const Ball = forwardRef<HTMLDivElement, BallProps>(
  ({ children, style }, ref) => {
    const ballStyle = useBallStyle();
    return (
      <div
        ref={ref}
        style={{
          ...ballStyle,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
);

Ball.displayName = "Ball";

export interface BowlingBallProps {
  index?: number;
  jump?: boolean;
  onJump?: (newHeight: number) => void;
  initiallyRandom?: boolean;
  rate?: number;
  defaultHeight?: number;
  width?: string;
  minHeight?: number;
  maxHeight?: number;
  occasionalityFactor?: number;
}
export const BowlingBall = forwardRef<HTMLDivElement, BowlingBallProps>(
  (
    {
      index = 0,
      jump = true,
      initiallyRandom = false,
      onJump,
      rate = 2000,
      defaultHeight = 50,
      width = "100px",
      minHeight = 30,
      maxHeight = 120,
      occasionalityFactor = 3,
    }: BowlingBallProps,
    ref
  ) => {
    const getRandomHeight = useCallback(
      () => roundTo20(randomNumberBetween(minHeight, maxHeight)),
      [maxHeight, minHeight]
    );
    const occasionally = useCallback(
      () => occasionallyByFactor(occasionalityFactor),
      [occasionalityFactor]
    );
    const [height, setHeight] = useState(
      initiallyRandom ? getRandomHeight() : defaultHeight
    );

    useEffect(() => {
      const intervalId = window.setInterval(() => {
        if (jump && occasionally()) {
          const newHeight = getRandomHeight();
          setHeight(newHeight);
          onJump?.(newHeight);
        }
      }, rate);
      return () => window.clearInterval(intervalId);
    }, [getRandomHeight, jump, occasionally, onJump, rate]);

    return (
      <Ball
        ref={ref}
        style={{
          height: `${height}px`,
          width,
          backgroundColor: index % 2 === 0 ? defaultColor : "lightgreen",
        }}
      >
        <strong>{index}</strong>
      </Ball>
    );
  }
);
BowlingBall.displayName = "BowlingBall";
