export type UserFormData = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  photoURL?: string;
};

export type EditUserData = {
  username?: string;
  password?: string;
  email?: string;
};

export type FormValues = {
  topic: {
    userUID: string;
    topictitle?: string;
    labels?: [];
    modules?: {
      moduletitle?: string;
      modulecontent?: string;
    }[];
  };
};
