import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function BottomNavbar() {
  function getCategories() {
    let res = axios.get(
      "https://api.ashyo.fullstackdev.uz/categories/all?limit=100"
    );
    return res;
  }

  let { data } = useQuery({
    queryKey: ["users"],
    queryFn: getCategories,
  });

  return (
    <div className="mb-[29px] hidden desktop:block">
      <div className="container">
        <div className="flex items-center justify-between">
          {data?.data.map((category: any) => {
            return (
              <p
                className="font-Roboto font-[400] text-[16px] text-[#545D6A]"
                key={category.id}
              >
                {category.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
