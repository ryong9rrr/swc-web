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
