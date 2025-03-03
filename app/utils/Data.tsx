export interface ProgrammingLanguage {
  id: string;
  name: string;
  icon: string;
  library: string;
}

export enum IconLibrary {
  fontAwesome = "FontAwesome",
  fontAwesome6 = "FontAwesome6",
  fontisto = "Fontisto",
  materialCommunityIcons = "MaterialCommunityIcons",
  foundation = "Foundation",
  entypo = "Entypo",
  ionicons = "Ionicons",
}

const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: "1",
    name: "Swift",
    icon: "swift",
    library: IconLibrary.fontisto, //FontAwesome6
  },
  {
    id: "2",
    name: "Javascript",
    icon: "square-js",
    library: IconLibrary.fontAwesome6,
  },
  {
    id: "3",
    name: "Typescript",
    icon: "language-typescript",
    library: IconLibrary.materialCommunityIcons,
  },
  {
    id: "4",
    name: "HTML",
    icon: "html5",
    library: IconLibrary.fontAwesome6,
  },
  {
    id: "5",
    name: "CSS",
    icon: "css3",
    library: IconLibrary.fontAwesome6,
  },
  {
    id: "6",
    name: "Python",
    icon: "python",
    library: IconLibrary.fontAwesome6,
  },
  {
    id: "7",
    name: "Assembly!",
    icon: "state-machine",
    library: IconLibrary.materialCommunityIcons,
  },
  {
    id: "8",
    name: "C#",
    icon: "free-code-camp",
    library: IconLibrary.fontAwesome,
  },
  {
    id: "9",
    name: "C++",
    icon: "digital-ocean",
    library: IconLibrary.fontAwesome6,
  },
  {
    id: "10",
    name: "C",
    icon: "code-array",
    library: IconLibrary.materialCommunityIcons,
  },
  {
    id: "11",
    name: "Scala",
    icon: "database",
    library: IconLibrary.fontAwesome6,
  },
  {
    id: "12",
    name: "Objective-C",
    icon: "old-mobile",
    library: IconLibrary.entypo,
  },
  {
    id: "13",
    name: "Matlab",
    icon: "math-integral",
    library: IconLibrary.materialCommunityIcons,
  },
  {
    id: "14",
    name: "SQL",
    icon: "mysql",
    library: IconLibrary.fontisto,
  },
  {
    id: "15",
    name: "Visual Basic (VB)",
    icon: "microsoft-visual-studio-code",
    library: IconLibrary.materialCommunityIcons,
  },
  {
    id: "16",
    name: "php",
    icon: "php",
    library: IconLibrary.fontAwesome6,
  },
  {
    id: "17",
    name: "OpenCV",
    icon: "game-controller-outline",
    library: IconLibrary.ionicons,
  },
  {
    id: "18",
    name: "NI Multism",
    icon: "microchip",
    library: IconLibrary.fontAwesome6,
  },
  {
    id: "19",
    name: "java",
    icon: "java",
    library: IconLibrary.fontAwesome6,
  },
];

const aboutMyself = `Hi!, My name is Reshal. I am an iOS mobile app developer with about 6 years of experience.

Over the weekends, you'll find me catching up with my friends, where we go to different kinds of places in JHB.

When my social batteries run low, you'll find me in a quiet place, recharging by reading.

I am a huge fan of self development. Sometimes things get too stressful and in those cases, you'll find me gaming online.
Currently, I am on xbox and my favourite games are Call of duty and Fortnite.

Semantically speaking, my skillset is centered around iOS, however, I have always wondered if there was a way to create an app for both Android and iOS.
React Native is one of the solutions for this. It allows me to develop an app for both platforms, enabling me to create a bigger impact and reach a larger target audience.

This app is written in React Native, and by clicking on the button below, you'll be taken to a screen which highlights, all the languages that I have programmed in over my time in IT. Enjoy!`;

export const Data = {
  name: "Reshal Luchman",
  email: "Reshal.luchman2@mtn.com",
  secondaryEmail: "luchmanreshal@gmail.com",
  phone: "+27713453720",
  profession: "Work in progress - React Native Developer!",
  aboutMyself: aboutMyself,
  programmingLanguages: programmingLanguages,
  jobApplication: "React Native Developer Application",
  jobProposal:
    "Thank you for your interest in the following developer role: React Native. We are here to inform you that your application is [insert result here]. ",
};
