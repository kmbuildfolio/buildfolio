import React, { useEffect } from "react";
import { useState } from "react";
import PersonalDetails from "./personalDetails/PersonalDetails";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Achievements from "./achievements/Achievements";
import Education from "./education/Education";
import Header from "./Header";
import { Card } from "@mui/material";
import "./form.css";
import { Button } from "@mui/material";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import img from "../assets/intro-bg.jpg";
import {
  getPortfolio,
  savePortfolioForm,
  updatePortfolio,
} from "../service/FormService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser } from "../authService/auth";
import Loading from "../components/Loading";

const PortfolioForm = () => {
  const navigate = useNavigate();
  const [isPortfolio, setIsPortfolio] = useState(null);
  const [currFormNum, setCurrFormNum] = useState(1);
  const [loading, setLoading] = useState(null);
  const [person, setPerson] = useState(null);
  const hostname = window.location.hostname;
  const [biodata, setBiodata] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    socials: [{ key: "", value: "" }],
    description: "",
  });

  const [experience, setExperience] = useState([
    {
      company: "",
      role: "",
      location: "",
      from: "",
      to: "",
      description: "",
    },
  ]);

  const [skills, setSkills] = useState([""]);

  const [education, setEducation] = useState([
    {
      course: "",
      university: "",
      institution: "",
      location: "",
      to: "",
      from: "",
    },
  ]);

  const [projects, setProjects] = useState([
    { name: "", tech: "", url: "", image: "", code: "", description: "" },
  ]);

  const [achievements, setAchievements] = useState([
    { name: "", description: "" },
  ]);
  const heading = [
    "Biodata",
    "Experience",
    "Projects",
    "Skills",
    "Education",
    "Achievements",
  ];

  const onSubmit = () => {
    setLoading("Uploading...");
    const portfolio = {
      biodata: biodata,
      experience: experience,
      skills: skills,
      education: education,
      projects: projects,
      achievements: achievements,
    };
    savePortfolioForm(portfolio)
      .then((data) => {
        toast.info("See Your Portfolio on : https://"+hostname+"/"+person.userName);
        navigate(`/${person.userName}`);
        setLoading(null);
      })
      .catch((err) => {
        toast.error("Something Went Wrong");
        setLoading(null);
      });
  };

  const onUpdate = () => {
    setLoading("Updating...");
    const portfolio = {
      biodata: biodata,
      experience: experience,
      skills: skills,
      education: education,
      projects: projects,
      achievements: achievements,
    };
    try {
      updatePortfolio(portfolio)
        .then((data) => {
          if (data.success) {
            toast.info("See Your Portfolio on : https://"+hostname+"/"+person.userName);
          }
          setLoading(null);
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
          setLoading(null);
        });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    try {
      getPortfolio()
        .then((data) => {
          if (data) {
            setBiodata(data.biodata);
            setExperience(data.experience);
            setSkills(data.skills);
            setEducation(data.education);
            setProjects(data.projects);
            setAchievements(data.achievements);
            setIsPortfolio(true);
            setPerson(getUser());
          }
          setLoading(null);
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <div style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
        <ToastContainer position="top-center"/>
        <NavBar />
        <div className="relative">
          {loading && <Loading content={loading}/>}
          <div className="flex justify-around h-[calc(100vh-50px)] px-1 w-full" style={{filter:(loading ? "blur(0.8px)" : "")}}>
            <div className="w-1/2 md:flex hidden">
              <div className="flex flex-col items-center justify-center p-6 lg:p-12">
                <div className="space-y-4 text-center lg:w-3/4 xl:space-y-6 xl:w-2/3">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold">
                      Welcome To Portfolio Builder!
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      Enter your information to build your portfolio
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">
                      How To Get Portfolio Link?
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      After Submiting the form you will redirect with new page
                      where you get atual portfolio link you can also share this
                      as you want to share
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">
                      Update your portfolio
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      To Update portfolio you will simply change the filled
                      information on form and click on submit it will reflect on
                      your portfolio.
                    </p>
                  </div>
                  {!isPortfolio ? (
                    <Button
                      className="w-full lg:w-auto text-black"
                      variant="outlined"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Go Home
                    </Button>
                  ) : (
                    <div className="py-2">
                      {" "}
                      See Your Portfolio :{" "}
                      <a href={`/${person.userName}`} className="text-blue-500">
                        https://{hostname}/{person.userName}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Card
              key="1"
              className="w-full md:w-2/5  mx-1 my-4 h-[calc(100%-2rem)]"
              style={{ boxShadow: "none", borderRadius:"0" }}
            >
              <Header name={heading[currFormNum - 1]} />
              <div className="overflow-auto h-[calc(100%-2rem-4rem)]">
                {currFormNum === 1 ? (
                  <PersonalDetails
                    setCurrFormNum={setCurrFormNum}
                    data={biodata}
                    setBio={(data) => setBiodata(data)}
                  />
                ) : currFormNum === 2 ? (
                  <Experience
                    setCurrFormNum={setCurrFormNum}
                    data={experience}
                    setExperience={setExperience}
                  />
                ) : currFormNum === 3 ? (
                  <Projects
                    setCurrFormNum={setCurrFormNum}
                    data={projects}
                    setProjects={setProjects}
                  />
                ) : currFormNum === 4 ? (
                  <Skills
                    setCurrFormNum={setCurrFormNum}
                    data={skills}
                    setSkills={setSkills}
                  />
                ) : currFormNum === 5 ? (
                  <Education
                    setCurrFormNum={setCurrFormNum}
                    data={education}
                    setEducation={setEducation}
                  />
                ) : (
                  <Achievements
                    setCurrFormNum={setCurrFormNum}
                    data={achievements}
                    setAchievements={setAchievements}
                    onSubmit={onSubmit}
                    onUpdate={isPortfolio ? onUpdate : null}
                  />
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioForm;
