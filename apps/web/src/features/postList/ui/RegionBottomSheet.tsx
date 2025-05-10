"use client";

import { BottomSheet } from "@/widgets/bottomSheet/ui/BottomSheet";

interface RegionBottomSheetProps {
  open: boolean;
  onSelect: (region: string) => void;
  onClose: () => void;
}

export const RegionBottomSheet = ({
  open,
  onSelect,
  onClose,
}: RegionBottomSheetProps) => {
  const REGION_OPTIONS = ["전체", "대한민국", "일본", "태국"];

  return (
    <BottomSheet open={open} onClose={onClose}>
      <div className="space-y-4 mt-4">
        <div className="space-y-2">
          {REGION_OPTIONS.map((region, index) => (
            <button
              key={index}
              className="w-full p-3 text-left"
              onClick={() => {
                onSelect(region);
                onClose();
              }}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </BottomSheet>
  );
};
