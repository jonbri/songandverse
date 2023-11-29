import { forwardRef, ReactNode } from "react";

export interface PinsProps {
  children: ReactNode;
}
export const Pin = forwardRef<HTMLDivElement, PinsProps>(
  ({ children }: PinsProps, ref) => {
    return (
      <div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {children}
      </div>
    );
  }
);
Pins.displayName = "Pins";
