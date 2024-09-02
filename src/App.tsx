import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function App() {
  const [general, setGeneral] = useState({
    name: "John Doe",
    email: "example@example.com",
    phone: "(818) 231-3423",
  });

  const [education, setEducation] = useState({
    school: "MIT",
    study: "Computer Science",
    date: "March 12th, 2023",
  });

  const [practical, setPractical] = useState({
    company: "Google",
    title: "Junior Software Engineer",
    main: "Creating Microservices",
    start: "May 4th, 2023",
    end: "August 30th, 2024",
  });

  const handleGeneralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setGeneral((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEducationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setEducation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePracticalChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setPractical((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generalInputs = [
    { label: "Name", value: general.name, name: "name" },
    { label: "Email", value: general.email, name: "email" },
    { label: "Phone Number", value: general.phone, name: "phone" },
  ];

  const educationInputs = [
    { label: "School Name", value: education.school, name: "school" },
    { label: "Title of Study", value: education.study, name: "study" },
    { label: "Date of Completion", value: education.date, name: "date" },
  ];

  const practicalInputs = [
    { label: "Company Name", value: practical.company, name: "company" },
    { label: "Position Title", value: practical.title, name: "title" },
    { label: "Main Responsibilites", value: practical.main, name: "main" },
    { label: "Start Date", value: practical.start, name: "start" },
    { label: "End Date", value: practical.end, name: "end" },
  ];

  return (
    <div className="app-holder">
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="accord-ac"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>General Information</AccordionTrigger>
          <AccordionContent>
            {generalInputs.map((input) => (
              <div key={input.name}>
                <p>{input.label}</p>
                <Input
                  name={input.name}
                  value={input.value}
                  onChange={handleGeneralChange}
                />
                <br />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Educational Experience</AccordionTrigger>
          <AccordionContent>
            {educationInputs.map((input) => (
              <div key={input.name}>
                <p>{input.label}</p>
                <Input
                  name={input.name}
                  value={input.value}
                  onChange={handleEducationChange}
                />
                <br />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Practical Experience</AccordionTrigger>
          <AccordionContent>
            {practicalInputs.map((input) => (
              <div key={input.name}>
                <p>{input.label}</p>
                <Input
                  name={input.name}
                  value={input.value}
                  onChange={handlePracticalChange}
                />
                <br />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="cv-holder">
        <h1>{general.name}</h1>
        <div>
          {general.email} / {general.phone}
        </div>
        <span className="title">Educational Experience</span>
        <div>
          {education.school} - {education.study} - {education.date}
        </div>
        <span className="title">Practical Experience</span>
        <div>
          {practical.company} - {practical.title}
        </div>
        {practical.main}
        <div>
          {practical.start} - {practical.end}
        </div>
      </div>
    </div>
  );
}

export default App;
