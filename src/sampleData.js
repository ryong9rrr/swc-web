export const data = [];

export const dataType1 = {
  projects: [
    {
      id: 1,
      title: "리액트할사람~",
      skill: "react",
    },
    {
      id: 2,
      title: "React할사람?",
      skill: "react",
    },
    {
      id: 3,
      title: "리액트공부 같이해요",
      skill: "react",
    },
    {
      id: 4,
      title: "리액트 프로젝트 같이해요~",
      skill: "react",
    },
    {
      id: 5,
      title: "장고할사람~",
      skill: "django",
    },
    {
      id: 6,
      title: "Django할사람?",
      skill: "django",
    },
    {
      id: 7,
      title: "장고 공부 같이해요",
      skill: "django",
    },
    {
      id: 8,
      title: "장고 프로젝트 같이해요~",
      skill: "django",
    },
    {
      id: 9,
      title: "스프링할사람~",
      skill: "spring",
    },
    {
      id: 10,
      title: "Spring할사람?",
      skill: "spring",
    },
    {
      id: 11,
      title: "스프링 공부 같이해요",
      skill: "spring",
    },
    {
      id: 12,
      title: "스프링 프로젝트 같이해요~",
      skill: "spring",
    },
    {
      id: 13,
      title: "Vue할사람~",
      skill: "vue",
    },
    {
      id: 14,
      title: "뷰 할사람~",
      skill: "vue",
    },
    {
      id: 15,
      title: "뷰 공부 같이해요",
      skill: "vue",
    },
    {
      id: 16,
      title: "뷰 프로젝트 같이해요~",
      skill: "vue",
    },
  ],
};

export const dataType2 = {
  projects: [
    {
      id: 1,
      title: "리액트할사람~",
      skill: {
        react: true,
        django: false,
        vue: false,
      },
    },
    {
      id: 2,
      title: "React할사람?",
      skill: {
        react: true,
        django: false,
        vue: false,
      },
    },
    {
      id: 3,
      title: "리액트공부 같이해요",
      skill: {
        react: true,
        django: false,
        vue: false,
      },
    },
  ],
};

/////////////////////////////////////////////////////////////////////

export const getSkills = {
  httpStatus: "OK",
  result: [
    {
      skillName: "react",
    },
    {
      skillName: "django",
    },
    {
      skillName: "spring",
    },
    {
      skillName: "swift",
    },
    {
      skillName: "kotlin",
    },
    {
      skillName: "php",
    },
    {
      skillName: "javascript",
    },
    {
      skillName: "figma",
    },
  ],
};

//pagination 가능
export const getAllProjects = {
  httpStatus: "OK",
  result: [
    {
      projectId: 1,
      title: "react 할 사람",
      founderId: 1,
      founderNickName: "용상윤",
      requiredSkills: "react javascript",
      recommendedCount: null,
      updatedAt: "2021-08-31T02:59:07.055",
    },
    {
      projectId: 2,
      title: "django 할 사람~?",
      founderId: 2,
      founderNickName: "김성중",
      requiredSkills: "django figma",
      recommendedCount: null,
      updatedAt: "2021-08-31T04:54:04.224",
    },
    {
      projectId: 3,
      title: "js 왕초보구함",
      founderId: 1,
      founderNickName: "용상윤",
      requiredSkills: "javascript",
      recommendedCount: null,
      updatedAt: "2021-08-31T12:47:41.329",
    },
  ],
};

export const getProject = {
  httpStatus: "OK",
  result: {
    projectId: 1,
    projectTitle: "react 할 사람",
    projectContent: "front-end",
    founderId: 1,
    founderEmail: "ysy@gmail.com",
    founderNickname: "용상윤",
    requiredSkills: "react javascript",
    updatedAt: "2021-08-31T02:59:07.055",
    participants: [
      {
        userId: 1,
        email: "ysy@gmail.com",
        nickname: "용상윤",
        phoneNumber: "12312313212312",
        skills: "react javascript",
      },
    ],
  },
};
