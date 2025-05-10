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
