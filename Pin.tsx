import { forwardRef } from "react";

export interface PinProps {
  children: number;
}
export const Pin = forwardRef<HTMLDivElement, PinProps>(
  ({ children = 0 }: PinProps, ref) => {
    return (
      <div
        ref={ref}
        style={{
          height: `100px`,
          width: `20px`,
          backgroundColor: "lightyellow",
        }}
      >
        {children}
      </div>
    );
  }
);
Pin.displayName = "Pin";
