import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import {
  DiCss3,
  DiVisualstudio,
  DiGoogleCloudPlatform,
  DiRedis,
  DiJenkins,
} from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact, FaNode } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandDjango,
  TbBrandPython,
  TbBrandAngular,
  TbBrandMysql,
  TbBrandMongodb,
  TbBrandAws,
  TbBrandDocker,
} from 'react-icons/tb';
import JiraIcon from 'public/assets/svg/jira.svg';
import FlaskIcon from 'public/assets/svg/flask.svg';
import FirestoreIcon from 'public/assets/svg/firestore.svg';
import DatadogIcon from 'public/assets/svg/datadog.svg';

export const TECHNOLOGIES = [
  {
    category: 'Front-end',
    items: [
      { name: 'HTML', icon: <AiFillHtml5 size={32} /> },
      { name: 'CSS', icon: <DiCss3 size={32} /> },
      { name: 'JS', icon: <IoLogoJavascript size={32} /> },
      { name: 'React', icon: <FaReact size={32} /> },
      { name: 'Angular', icon: <TbBrandAngular size={32} /> },
      { name: 'Next', icon: <TbBrandNextjs size={32} /> },
      { name: 'Tailwind CSS', icon: <TbBrandTailwind size={32} /> },
      { name: 'Bootstrap', icon: <BsBootstrap size={32} /> },
    ],
  },
  {
    category: 'Back-end',
    items: [
      { name: 'Python', icon: <TbBrandPython size={32} /> },
      { name: 'Django', icon: <TbBrandDjango size={32} /> },
      { name: 'Flask', icon: <FlaskIcon height={32} width={32} /> },
      { name: 'NodeJS', icon: <FaNode size={32} /> },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', icon: <TbBrandMysql size={32} /> },
      { name: 'MongoDB', icon: <TbBrandMongodb size={32} /> },
      { name: 'Redis', icon: <DiRedis size={32} /> },
      { name: 'Firestore', icon: <FirestoreIcon /> },
    ],
  },
  {
    category: 'Other tools',
    items: [
      { name: 'Github', icon: <AiFillGithub size={32} /> },
      { name: 'AWS', icon: <TbBrandAws size={32} /> },
      { name: 'Google Cloud', icon: <DiGoogleCloudPlatform size={32} /> },
      { name: 'Docker', icon: <TbBrandDocker size={32} /> },
      { name: 'Jenkins', icon: <DiJenkins strokeWidth={1} size={32} /> },
      { name: 'Datadog', icon: <DatadogIcon height={32} width={32} /> },
      { name: 'Jira', icon: <JiraIcon width={32} /> },
      { name: 'VsCode', icon: <DiVisualstudio size={32} /> },
    ],
  },
];
