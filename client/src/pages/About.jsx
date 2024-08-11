import React, { useState } from "react";

const AboutPage = () => {
  const [isReadMore, setReadMore] = useState(false);
  const text = ` 
The Department of Computer Engineering in the College of Engineering, College of Engineering and Environmental Studies Ibogun Campus of Olabisi Onabanjo University was formally commissioned in November 2003 by the Ogun State Government. It has the responsibility for the needs, training and services in Computer Engineering and Technology.
The Technological developments have brought about revolution in our society. The revolution has the effect on our thinking and social norms.  In recognition of these facts, the position of the Department of Computer Engineering is to offer the very highest quality that can ever be achieved in field of Computer Engineering and Technology.
The curriculum of the Department of Computer Engineering is designed to provide the student the opportunity to prepare him/her for specialized professional career. This curriculum leads to the honours degree of Bachelor of Science normally at the end of five years. The programme also provides solid academic bases upon which to build more advanced degrees if so desired. The department places much emphasis on the project and the industrial trainings for proper exposure.
The Department offered degree in Computer Engineering.  The departmental decision extract at various meetings concluded that the degree may later be splited in to two specialize areas namely Computer Hardware Engineering and Computer Software Engineering. The strength of the Computer Engineering Training is in the practical exposure of the students, thus the College provided the following laboratory for the use of the students: Digital Electronics Laboratory- equipped with the latest Electronic Digital Devices for better understanding of instrumentation and measurement, Computer Engineering Laboratory- equipped with Hardware Devices for Identification and necessary repair that could be done on them, Mechanical Work Shop- equipped with the latest Machines for Shop Floor uses, and Computer Programming Laboratory- equipped with Computer Systems.  They are networked for the use of the student and research purposes.
May 16, 2018
<h1>PHILOSOPHY AND OBJECTIVE</h1>
The aim of the Computer Engineering programme is to produce graduates who can fill the role of engineering practitioners in the computer industry within the global market. This requires that such graduates should be:
<li>Well-grounded in the general area of digital electronic engineering</li>
<li>Capable to undertake the design, construction and maintenance of digital computers.</li>
<li>Versatile in computer and system programming techniques.</li>
<li>Able to adopt and adapt exogenous computer technologies for the solution of local problems.</li>
<li>Able to undertake independent or research studies in the field of computer technology and applications.</li>
The curriculum of the department of Computer Engineering is therefore designed to provide the students the opportunity to prepare for specialized professional career. This curriculum leads to the honours degree of Bachelor of Science normally at the end of five years.
May 16, 2018
Graduation Requirements
All prescribed 100L science courses. Direct entry candidates may however be exempted from some specified courses – (33 units)</p>
General courses in College of Engineering 'FEG courses' – 23 units
General courses outside Computer Engineering
MEG courses –23 units
EEG courses –15 units
Compulsory Computer Engineering courses
200L–1 credit, 300L– 26 units, 400L–12 units, 500L–27 unit
Electives Departmental Restricted – 4 units
Electives Free/College Restricted – 4 units
University requirement: General studies courses GNS – 10 units
Industrial Experience SIWES – 6 units
${" "}`;
  const limitedText = isReadMore ? text : text.slice(0, 500) + "...";

  return (
    <div className=" container relative justify-center mx-auto align-middle">
      <img src="images/download.jpeg" alt="Banner" className="mx-auto object-cover" />
        <div style={{ maxHeight: '70%' }} className="overflow-hidden"></div>
        <a href="#">
    <h5 class="mb-2 text-2xl font-sans tracking-tight font-extrabold text-blue-700 dark:text-white">ABOUT DEPARTMENT</h5></a>
    <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400"><span class="italic">History of the Department Computer Engineering</span></p>
      <p className="justify-center font-sans mb-3 text-clip text-gray-600 dark:text-grey-300"><span class='italic'></span>{limitedText}</p>
      <ReadMoreButton isReadMore={isReadMore} setReadMore={setReadMore} />
    </div>
  );
};

const ReadMoreButton = ({ isReadMore, setReadMore }) => {
  return (
    <button
      onClick={() => setReadMore(!isReadMore)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {isReadMore ? "Show Less" : "Read More"}
    </button>
  );
};

export default AboutPage;
