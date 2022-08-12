export type UserFormData = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  photoURL?: string;
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
