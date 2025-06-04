import React, { RefObject } from "react";

export const useDropDownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
  const getDropDownPosition = () => {
    if (!ref.current) return { top: 0, left: 0 };

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240; // Example width of the dropdown

    // Calculate the position of the dropdown
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    // Check if the dropdown goes beyond the viewport width
    if (left + dropdownWidth > window.innerWidth) {
      left = rect.right + window.scrollX - dropdownWidth;

      //   if still off-screen, align to the right edge
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }
    }

    //  Ensure dropdown doesn't go off the left edge of the screen
    if (left < 0) {
      left = 16; // 16px padding from the left edge
    }
    return { top, left };
  };
  return { getDropDownPosition };
};
