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
