export type UserFormData = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type EditUserData = {
  username?: string;
  password?: string;
  email?: string;
};

export type CreateTopicData = {
  topictitle: string;
  labels: string[];
  modules: {
    moduletitle: string;
    modulecontent: string;
  };
};

export type FormValues = {
  topictitle?: string;
  modules?: {
    moduletitle?: string;
    modulecontent?: string;
  }[];
};
