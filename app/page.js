"use client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/projects?populate=*")
      .then((response) => {
        setProjects(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div className="">
      {/* {projects?.map((item, index) => {
        console.log(item?.attributes?.images?.data);
        return (
          <div className="" key={index}>
            {item?.attributes?.images?.data?.map((image, imgIndex) => {
              return (
                <div key={imgIndex}>
                  <img
                    src={`http://localhost:1337${image?.attributes?.url}`}
                    alt={item?.attributes?.title}
                    className="w-full h-auto"
                  />
                </div>
              );
            })}
          </div>
        );
      })} */}
      1 asdasd asdasdasdasd
      <div className="">1231231</div>
    </div>
  );
}
