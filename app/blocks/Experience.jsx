import axios from "axios";
import { useEffect, useState } from "react";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);

  const fetchExperiences = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/experiences?populate=*"
      );
      setExperiences(response.data.data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  const fetcchProjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/projects?populate=*"
      );
      setProjects(response.data.data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  useEffect(() => {
    fetchExperiences();
    fetcchProjects();
  }, []);
  return (
    <div className="h-fit bg-white w-full text-black py-12">
      <div className="mx-auto container flex flex-col gap-12">
        <p className="font-crispy text-4xl">Experience</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 border border-gray-300 rounded-lg shadow-md h-fit p-2">
            {experiences.map((experience) => (
              <div key={experience.id} className="p-2 flex">
                <div className="p-2 flex flex-col items-center gap-2">
                  <svg
                    className="size-[25px] fill-red-700"
                    viewBox="0 0 512 512"
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path>
                  </svg>
                  <div className="h-full bg-red-700 w-[2px]"></div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-crispy text-gray-500">
                    {experience.attributes.company_name}
                  </h3>
                  <h3 className="text-xl font-crispy">
                    {experience.attributes.position}
                  </h3>
                  <p className="text-gray-600">
                    {experience.attributes.company} -{" "}
                    {new Date(experience.attributes.from).toLocaleDateString()}{" "}
                    to {new Date(experience.attributes.to).toLocaleDateString()}
                  </p>
                  <p className="mt-2">{experience.attributes.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 border border-gray-300 rounded-lg shadow-md h-fit p-2">
            {projects.map((experience) => (
              <div key={experience.id} className="p-2 flex ">
                <div className="p-2 flex flex-col items-center gap-2">
                  <svg
                    className="size-[25px] fill-red-700"
                    viewBox="0 0 512 512"
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path>
                  </svg>
                  <div className="h-full bg-red-700 w-[2px]"></div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-crispy text-gray-500">
                    {experience.attributes.company_name}
                  </h3>
                  <h3 className="text-xl font-crispy">
                    {experience.attributes.title}
                  </h3>
                  <p className="text-gray-600">
                    {experience.attributes.company} -{" "}
                    {new Date(experience.attributes.from).toLocaleDateString()}{" "}
                    to {new Date(experience.attributes.to).toLocaleDateString()}
                  </p>
                  <p className="mt-2">{experience.attributes.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
