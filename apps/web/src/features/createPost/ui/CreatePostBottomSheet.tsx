import { BottomSheet } from "@/widgets/bottomSheet/ui/BottomSheet";
import { useCreatePostStore } from "../model/createPostStore";
import { useState } from "react";

export const CreatePostBottomSheet = () => {
  const { isOpen, close } = useCreatePostStore();
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [isRegionPickerOpen, setIsRegionPickerOpen] = useState<boolean>(false);
  const [isTopicPickerOpen, setIsTopicPickerOpen] = useState<boolean>(false);

  return (
    <BottomSheet open={isOpen} onClose={close}>
      <div className="space-y-4">
        {!isRegionPickerOpen && !isTopicPickerOpen && (
          <>
            <h2 className="text-m font-semibold">내용</h2>
            <textarea
              className="w-full h-60 p-2 mt-2 resize-none"
              placeholder="여행 질문이나, 정보를 공유해보세요!"
            />
            <div className="border-t border-gray-100">
              <button
                className="w-full p-2 mt-2 text-left"
                onClick={() => setIsRegionPickerOpen(true)}
              >
                {selectedRegion || "지역을 선택해주세요"}
              </button>
            </div>
            <div className="border-t border-gray-100">
              <button
                className="w-full p-2 mt-2 text-left"
                onClick={() => setIsTopicPickerOpen(true)}
              >
                {selectedTopic || "주제를 선택해주세요"}
              </button>
            </div>
            <div className="flex gap-6">
              <button className="bg-gray-200 text-white font-medium px-4 py-3 rounded-xl mt-4 w-full">
                임시 저장
              </button>
              <button className="bg-gray-200 text-white font-medium px-4 py-3 rounded-xl mt-4 w-full">
                포스트 작성 완료
              </button>
            </div>
          </>
        )}

        {/* 지역 선택 */}
        {isRegionPickerOpen && (
          <CategoryPicker
            onSelect={(region) => {
              setSelectedRegion(region);
              setIsRegionPickerOpen(false);
            }}
          />
        )}

        {/* 주제 선택 */}
        {isTopicPickerOpen && (
          <TopicPicker
            onSelect={(topic) => {
              setSelectedTopic(topic);
              setIsTopicPickerOpen(false);
            }}
          />
        )}
      </div>
    </BottomSheet>
  );
};

export const CategoryPicker = ({
  onSelect,
}: {
  onSelect: (region: string) => void;
}) => {
  const regions = ["서울", "부산", "대구", "인천"];
  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-2 gap-4">
        {regions.map((region, index) => (
          <button
            key={index}
            className="w-full p-5 text-center bg-gray-100 rounded-lg transition-colors duration-300"
            onClick={() => onSelect(region)}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
};

export const TopicPicker = ({
  onSelect,
}: {
  onSelect: (topic: string) => void;
}) => {
  const topics = ["질문", "정보", "후기", "추천", "거래", "정보"];

  return (
    <div className="space-y-4 mt-4">
      <div className="space-y-2">
        {topics.map((topic, index) => (
          <button
            key={index}
            className="w-full p-3 text-left"
            onClick={() => onSelect(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};
