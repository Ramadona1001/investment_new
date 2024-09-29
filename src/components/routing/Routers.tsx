import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Parent_About from "../about-us/Parent_About";
import Projects from "../project/Projects";
import OurProjects from "../projects/our-projects/OurProjects";
import Medical from "../medical/Medical";
import Honours from "../honours/Honours";
import Services from "../services/Services";
import News from "../news/News";
import New from "../news/New";
import Stories from "../inspiring-stories/Stories";
import Photos from "../photos-gallery/Photos";
import Videos from "../video-gallery/Videos";
import Gallery from "../folder-photo/page";
import Story from "../inspiring-stories/Story";
import Contact from "../contact-us/Contact";
import Employment from "../employment/Employment";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about-us" element={<Parent_About />} />
      <Route path="/project/:id" element={<Projects />} />
      <Route path="/our-projects" element={<OurProjects />} />
      <Route path="/projects/:category" element={<Medical />} />
      <Route path="/honours" element={<Honours />} />
      <Route path="/services" element={<Services />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<New />} />
      <Route path="/inspiring-stories" element={<Stories />} />
      <Route path="/inspiring-stories/:id" element={<Story />} />
      <Route path="/photos-gallery" element={<Photos />} />
      <Route path="/photos-gallery/:id" element={<Gallery />} />
      <Route path="/video-gallery" element={<Videos />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/employment" element={<Employment />} />
    </Routes>
  );
}
