"use client";

import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import Link from "next/link";

const EXPERIENCES_QUERY = `*[_type == "experience"]{_id, company_name, position, company, from, to, description}`;
const PROJECTS_QUERY = `*[_type == "project"]{_id,link, company_name, title, company, from, to, description}`;

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
    <div className="h-fit bg-white w-full text-black py-12 lg:px-0">
      <div className="custom-container flex flex-col gap-12">
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
                  {/* <svg
                    className="size-[25px] fill-red-700"
                    viewBox="0 0 512 512"
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path>
                  </svg> */}
                  {project?.link ? (
                    <Link href={project?.link} target="_blank">
                      <svg
                        className="size-[20px] fill-red-700"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <path
                            d="M312.453 199.601a116.167 116.167 0 0 0-20.053-16.128 119.472 119.472 0 0 0-64.427-18.859 118.952 118.952 0 0 0-84.48 34.987L34.949 308.23a119.466 119.466 0 0 0-34.91 84.318c-.042 65.98 53.41 119.501 119.39 119.543a118.7 118.7 0 0 0 84.395-34.816l89.6-89.6a8.534 8.534 0 0 0-6.059-14.592h-3.413a143.626 143.626 0 0 1-54.613-10.581 8.533 8.533 0 0 0-9.301 1.877l-64.427 64.512c-20.006 20.006-52.442 20.006-72.448 0-20.006-20.006-20.006-52.442 0-72.448l108.971-108.885c19.99-19.965 52.373-19.965 72.363 0 13.472 12.679 34.486 12.679 47.957 0a34.134 34.134 0 0 0 9.899-21.675 34.137 34.137 0 0 0-9.9-26.282z"
                            fill="#ff0000"
                            opacity="1"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M477.061 34.993c-46.657-46.657-122.303-46.657-168.96 0l-89.515 89.429a8.533 8.533 0 0 0-1.792 9.387 8.532 8.532 0 0 0 8.021 5.205h3.157a143.357 143.357 0 0 1 54.528 10.667 8.533 8.533 0 0 0 9.301-1.877l64.256-64.171c20.006-20.006 52.442-20.006 72.448 0 20.006 20.006 20.006 52.442 0 72.448l-80.043 79.957-.683.768-27.989 27.819c-19.99 19.965-52.373 19.965-72.363 0-13.472-12.679-34.486-12.679-47.957 0a34.139 34.139 0 0 0-9.899 21.845 34.137 34.137 0 0 0 9.899 26.283 118.447 118.447 0 0 0 34.133 23.893c1.792.853 3.584 1.536 5.376 2.304 1.792.768 3.669 1.365 5.461 2.048a67.799 67.799 0 0 0 5.461 1.792l5.035 1.365c3.413.853 6.827 1.536 10.325 2.133 4.214.626 8.458 1.025 12.715 1.195H284.461l5.12-.597c1.877-.085 3.84-.512 6.059-.512h2.901l5.888-.853 2.731-.512 4.949-1.024h.939a119.456 119.456 0 0 0 55.381-31.403l108.629-108.629c46.66-46.657 46.66-122.303.003-168.96z"
                            fill="#ff0000"
                            opacity="1"
                            data-original="#000000"
                          ></path>
                        </g>
                      </svg>
                    </Link>
                  ) : (
                    <svg
                      className="size-[20px] fill-red-900"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path
                          d="M312.453 199.601a116.167 116.167 0 0 0-20.053-16.128 119.472 119.472 0 0 0-64.427-18.859 118.952 118.952 0 0 0-84.48 34.987L34.949 308.23a119.466 119.466 0 0 0-34.91 84.318c-.042 65.98 53.41 119.501 119.39 119.543a118.7 118.7 0 0 0 84.395-34.816l89.6-89.6a8.534 8.534 0 0 0-6.059-14.592h-3.413a143.626 143.626 0 0 1-54.613-10.581 8.533 8.533 0 0 0-9.301 1.877l-64.427 64.512c-20.006 20.006-52.442 20.006-72.448 0-20.006-20.006-20.006-52.442 0-72.448l108.971-108.885c19.99-19.965 52.373-19.965 72.363 0 13.472 12.679 34.486 12.679 47.957 0a34.134 34.134 0 0 0 9.899-21.675 34.137 34.137 0 0 0-9.9-26.282z"
                          fill="#ff0000"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M477.061 34.993c-46.657-46.657-122.303-46.657-168.96 0l-89.515 89.429a8.533 8.533 0 0 0-1.792 9.387 8.532 8.532 0 0 0 8.021 5.205h3.157a143.357 143.357 0 0 1 54.528 10.667 8.533 8.533 0 0 0 9.301-1.877l64.256-64.171c20.006-20.006 52.442-20.006 72.448 0 20.006 20.006 20.006 52.442 0 72.448l-80.043 79.957-.683.768-27.989 27.819c-19.99 19.965-52.373 19.965-72.363 0-13.472-12.679-34.486-12.679-47.957 0a34.139 34.139 0 0 0-9.899 21.845 34.137 34.137 0 0 0 9.899 26.283 118.447 118.447 0 0 0 34.133 23.893c1.792.853 3.584 1.536 5.376 2.304 1.792.768 3.669 1.365 5.461 2.048a67.799 67.799 0 0 0 5.461 1.792l5.035 1.365c3.413.853 6.827 1.536 10.325 2.133 4.214.626 8.458 1.025 12.715 1.195H284.461l5.12-.597c1.877-.085 3.84-.512 6.059-.512h2.901l5.888-.853 2.731-.512 4.949-1.024h.939a119.456 119.456 0 0 0 55.381-31.403l108.629-108.629c46.66-46.657 46.66-122.303.003-168.96z"
                          fill="#ff0000"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  )}
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
