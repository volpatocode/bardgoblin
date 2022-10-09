export type UserFormData = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  photoURL?: string;
};

export type topicsData = {
  uid: string;
  section: string;
  topictitle: string;
  modules: [moduletitle: string, modulecontent: string];
  labels: [];
  userUID: any;
}[];

export type topicData = {
  uid: string;
  section: string;
  topictitle: string;
  modules: { moduletitle: string; modulecontent: string }[];
  labels: [];
  userUID: any;
};

export type usersData = {
  displayName?: string;
  email?: string;
  password?: string;
  photoURL?: string;
  uid: string;
}[];

export type userData = {
  displayName?: string;
  email?: string;
  password?: string;
  photoURL?: string;
  uid: string;
};

export type FormValues = {
  userUID: string;
  section: string;
  topictitle?: string;
  labels?: [];
  modules?: {
    moduletitle?: string;
    modulecontent?: string;
  }[];
};

export type sectionType = {
  section: "Builds" | "Side Quests" | "Characters" ;
};

export type browsingRefType = {
  text: "Builds" | "Side Quests" | "Characters";
};
