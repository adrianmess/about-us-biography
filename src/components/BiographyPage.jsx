import React from 'react';
import Biography from './Biography';
import Header from './Header';

import anthony from '../assets/images/anthony.jpg';
import andrew from '../assets/images/andrew.jpg';
import courtenay from '../assets/images/courtenay.jpg';
import david from '../assets/images/david.jpg';
import john from '../assets/images/john.jpg';
import kinjil from '../assets/images/kinjil.jpg';
import kris from '../assets/images/kris.jpg';
import nicole from '../assets/images/nicole.jpg';
import raphael from '../assets/images/raphael.jpg';
import ami from '../assets/images/ami.jpeg';

const biographyList = [
  {
    name: 'Anthony Casalena',
    img: anthony,
    title: 'founder & chief executive officer',
    bio: 'Anthony Casalena is the Founder and CEO of Squarespace, which he started from his dorm room in 2003. During the company’s early years, Anthony acted as the sole engineer, designer, and support representative for the entire Squarespace platform. In addition to running the company and setting overall product strategy, he remains actively involved in many departments of the company that he had previously run himself. Anthony holds a Bachelor of Science in Computer Science from the University of Maryland.',
  },
  {
    name: 'Nicole Anasenes',
    img: nicole,
    title: 'Chief Financial Officer & Operating Officer',
    bio: 'Nicole brings to Squarespace 20 years of experience building new businesses and transforming legacy business models. Most recently, she served as Chief Financial Officer at Infor, one of the largest providers of enterprise applications in the world. Prior to Infor, Nicole spent 17 years in various operational and financial leadership positions within IBM’s Cloud Computing, Global Services, and Software organizations. She holds an MBA from The Wharton School of the University of Pennsylvania and a Bachelor’s degree from New York University.',
  },
  {
    name: 'Andrew Bartholomew',
    img: andrew,
    title: 'Senior Vice President, Strategy',
    bio: 'As the leader of Squarespace’s Strategy division, Andrew is responsible for developing the analytical frameworks that shape the company’s business. Since joining Squarespace, he has grown the division into a team that covers everything from business strategy and customer insights to analytics and data science. Prior to Squarespace, Andrew worked at the New York County District Attorney’s Office helping to shape the office’s new data-driven approach to fighting crime. Andrew graduated from Yale, where he majored in Psychology and was an editor at the Yale Daily News.',
  },
  {
    name: 'John Colton',
    img: john,
    title: 'Senior Vice President, Engineering',
    bio: 'John Colton, SVP of Engineering, oversees Squarespace’s vast engineering organization which drives the core programming for the company. Before joining Squarespace, John served in senior leadership roles at a number of organizations including database security vendor Application Security, business and service assurance vendor Micromuse, and videoconferencing vendor VisualScape. John began his engineering career at Cap Gemini America where he developed network management products for AT&T Network Systems. He received his B.S. in Computer Engineering from Lehigh University.',
  },
  {
    name: 'Raphael Fontes',
    img: raphael,
    title: 'Vice President, Customer Operations',
    bio: 'Rapha leads Squarespace Ireland and oversees the company’s global Customer Operations teams that support millions of Squarespace users. Prior to this role, Raphael spent eight years at Google developing and managing different operations teams in Brazil, Argentina, Poland and Ireland. A Brazil native, he has 20+ years of experience in the tech world, working in a number of marketing and strategy positions in multinational companies such as FCBi, BellSouth, and Realmedia 24/7. Raphael is a mechanical engineer by trade with an MBA in Marketing.',
  },
  {
    name: 'David leader',
    img: david,
    title: 'Chief Creative Officer',
    bio: 'As the Chief Creative Officer of Squarespace, David Lee leads the company’s award-winning creative team, whose work encapsulates all brand creative, web design, and product design efforts for the company. In 2017, he was named one of the Most Creative People in Business by Fast Company. Since joining Squarespace, David has master minded five Super Bowl campaigns. Prior to Squarespace, David served as Worldwide Digital Executive Creative Director of TBWA Worldwide and as a Creative Director at Wieden+Kennedy and AKQA. He graduated from RISD with a BFA in graphic design.',
  },
  {
    name: 'Kinjil Mathur',
    img: kinjil,
    title: 'Chief Marketing Officer',
    bio: 'As the Chief Marketing Officer of Squarespace, Kinjil leads the company’s world-class marketing and PR teams. Before Squarespace, Kinjil served as CMO at Foursquare where she successfully repositioned the company’s brand to accelerate growth in both the consumer and enterprise location intelligence businesses. Kinjil spent the previous decade building technology competencies for retail giants, most notably as Vice President of Digital Marketing for Saks Fifth Avenue. She holds a bachelor’s degree with Honors from the University of Texas at Austin in Management of Information Systems and Finance.',
  },
  {
    name: 'Courtney O\'Conner',
    img: courtenay,
    title: 'General Counsel',
    bio: 'As General Counsel of Squarespace, Courtenay oversees the company’s global legal activities and policies across all aspects of the business. Prior to Squarespace, she served as Deputy General Counsel of Gizmodo Media Group, LLC where she led the legal department and provided counsel on a number of areas including editorial content, product, advertising, litigation, and corporate transactions. Earlier in her career, Courtenay was Counsel for The Hearst Corporation, a law clerk in the Eastern District of New York, and an associate at Simpson Thacher & Bartlett LLP. She holds a J.D. from The University of Michigan Law School and a B.A. from Wellesley College.',
  },
  {
    name: 'Kris Passet',
    img: kris,
    title: 'Vice President, People',
    bio: 'As the Vice President of People, Kris Passet’s focus lies in the development and optimization of talent retention and acquisition initiatives. Since joining Squarespace, Kris has overseen the company’s meteoric growth while protecting and scaling its uniquely creative and entrepreneurial culture, and is responsible for leading all areas of Squarespace’s People operations. Prior to joining Squarespace, Kris worked at SecondMarket where she began her career in HR. She received her B.A. in Communication from Fordham University and although she has spent 15 years in New York City, she still calls Agana Springs, Guam, home.',
  },
  {
    name: 'Ami Cooper',
    img: ami,
    title: 'BOSS',
    bio: 'Keeps yo ass in check. As a BOSS, Ami is responsible for implementing strategies that help the company increase pure pownage, generate and gather the tears of our enemies, and acquire new technoligies that make our opponents ponder why they even bother competing with us.. \"Why do we even try competing with this shit, they are so out of our league...\"',
  },
];

function BiographyList(){

  return(
    <div>
      <Header/>
      <hr/>
      {biographyList.map((biography, index) =>
      <Biography name={biography.name}
        img={biography.img}
        title={biography.title}
        bio={biography.bio}
        key={index}/>
    )}
    </div>
  );
}
export default BiographyList;
