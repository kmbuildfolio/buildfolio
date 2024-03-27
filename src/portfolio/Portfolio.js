import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contacts from "./Contacts";
import Experience from "./Experience";
import Education from "./Education";
import Social from "./Social";
import { Grow } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { getPortfolioByUsername } from "../service/FormService";
import { useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import NotFound from "../components/NotFound";
import { sendMessage } from "../service/PersonService";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [userExist, setUserExist] = useState(true);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const userName = location.pathname.split("/").pop();

  const sendUserMessage = (userContact) =>{
    try{
      sendMessage(userContact,userName)
      .then(data =>{
        if(!data.success){
          toast.dismiss(data.message);
        }
      })
      .catch(err=>{
        toast.error("Something Went Wrong");
      })
    }
    catch(err){
      console.error(err);
    }
  }

  const ScrollGrowItem = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    return (
      <div ref={ref}>
        <Grow in={inView}>
          <div>{children}</div>
        </Grow>
      </div>
    );
  };

  useEffect(() => {
    try {
      setProgress(progress + 50);
      getPortfolioByUsername(userName)
        .then((data) => {
          setProgress(100);
          return data;
        })
        .then((data) => {
          if (data) {
            setPortfolio(data);
          } else {
            setUserExist(false);
          }
        })
        .catch((err) => {
          alert("Something Went Wrong");
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <LoadingBar
        color="#3498db"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {portfolio ? (
        <main className="text-gray-400 bg-gray-900 body-font">
          <ToastContainer position="top-center"/>
          <div>
            <Navbar portfolio={portfolio} />
            <ScrollGrowItem>
              <About personalInfo={portfolio.biodata} />
            </ScrollGrowItem>
            <ScrollGrowItem>
              <Social social={portfolio.biodata.socials} />
            </ScrollGrowItem>
            <ScrollGrowItem>
              {portfolio.experience[0] && (
                <Experience experience={portfolio.experience} />
              )}
            </ScrollGrowItem>
            <ScrollGrowItem>
              {portfolio.projects[0] && (
                <Projects projects={portfolio.projects} />
              )}
            </ScrollGrowItem>
            <ScrollGrowItem>
              <Skills skills={portfolio.skills} />
            </ScrollGrowItem>
            <ScrollGrowItem>
              {portfolio.education && (
                <Education education={portfolio.education} />
              )}
            </ScrollGrowItem>
            <ScrollGrowItem>
              <Contacts contact={portfolio.biodata} onSendMessage={sendUserMessage}/>
            </ScrollGrowItem>
          </div>
        </main>
      ) : userExist ? (
        <div></div>
      ) : (
        <div><NotFound/></div>
      )}
    </div>
  );
};

export default Portfolio;
