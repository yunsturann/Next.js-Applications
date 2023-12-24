import { aboutSkillsData } from "@/mocks/aboutData";

const Skills = () => {
  return (
    <div className="h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 gap-x-6 lg:gap-4 lg:gap-x-10">
        {aboutSkillsData.map((item, index) => (
          <div key={index} className="space-y-1 md:space-y-2">
            <div className="flex justify-between items-center text-basis sm:text-lg ">
              <p className="first-letter:uppercase">{item.title}</p>
              <p>{item.ratio}%</p>
            </div>
            <div className="h-2 sm:h-3 bg-gray-300 w-full rounded-lg">
              <div
                className={"h-full bg-blue-400 rounded-lg"}
                style={{ width: item.ratio + "%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
