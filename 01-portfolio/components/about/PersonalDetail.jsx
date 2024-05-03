// ** Constants
import { personalData } from "@/mocks/aboutData";

const PersonalDetail = () => {
  return (
    <div className="h-full flex items-start">
      <div className="grid grid-cols-2 gap-4 w-full">
        {personalData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center space-x-2 text-[#fe6d59] text-basis md:text-lg"
            >
              {item.icon}
              <p className="text-gray-600 tracking-wide">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalDetail;
