import { Category } from "@/payload-types";
import { CategoryDropDown } from "./category-dropdown";

interface Props {
  data: any; // Replace 'any' with the actual type of data if known
}

export const Categories = ({ data }: Props) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {data.map((category: Category) => (
          <CategoryDropDown
            key={category.id}
            category={category}
            isActive={false} // Replace with actual logic if needed
            isNavigationHovered={false} // Replace with actual logic if needed
          />
        ))}
      </div>
    </div>
  );
};
