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
          height: "100px",
          width: "20px",
          backgroundColor: "white",
          border: "1px solid silver",
          borderRadius: "5px",
          textAlign: "center"
        }}
      >
        {children}
      </div>
    );
  }
);
Pin.displayName = "Pin";
