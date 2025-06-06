"use client";

import { useEffect, useState } from "react";
import { client } from "../sanity/client";

const EXPERIENCES_QUERY = `*[_type == "experience"]{_id, company_name, position, company, from, to, description}`;
const PROJECTS_QUERY = `*[_type == "project"]{_id, company_name, title, company, from, to, description}`;

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedExperiences = await client.fetch(EXPERIENCES_QUERY);
        setExperiences(fetchedExperiences);

        const fetchedProjects = await client.fetch(PROJECTS_QUERY);
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="h-fit bg-white w-full text-black py-12 px-6 lg:px-0">
      <div className="mx-auto container flex flex-col gap-12">
        <p className="font-crispy text-4xl">Experience</p>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 border border-gray-300 rounded-lg shadow-md h-fit p-2">
            {experiences.map((experience) => (
              <div key={experience._id} className="p-2 flex">
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
                    {experience.company_name}
                  </h3>
                  <h3 className="text-xl font-crispy">{experience.position}</h3>
                  <p className="text-gray-600">
                    {experience.company} -{" "}
                    {new Date(experience.from).toLocaleDateString()} to{" "}
                    {new Date(experience.to).toLocaleDateString()}
                  </p>
                  <p className="mt-2">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 border border-gray-300 rounded-lg shadow-md h-fit p-2">
            {projects.map((project) => (
              <div key={project._id} className="p-2 flex">
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
                    {project.company_name}
                  </h3>
                  <h3 className="text-xl font-crispy">{project.title}</h3>
                  <p className="text-gray-600">
                    {project.company} -{" "}
                    {new Date(project.from).toLocaleDateString()} to{" "}
                    {new Date(project.to).toLocaleDateString()}
                  </p>
                  <p className="mt-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}