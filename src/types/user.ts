export type UserFormData = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  photoURL?: string;
};

export type topicFullType = {
  topic: {
    topictitle: string;
    modules: [moduletitle: string, modulecontent: string];
    labels: [];
    uid: string;
  };
  user: {
    displayName?: string;
    email?: string;
    password?: string;
    photoURL?: string;
    uid: string;
  }
}[];

export type topicData = {
  topic: {
    topictitle: string;
    modules: [moduletitle: string, modulecontent: string];
    labels: [];
  };
  uid: string;
  userUID: any;
}[];

export type userData = {
  displayName?: string;
  email?: string;
  password?: string;
  photoURL?: string;
  uid: string;
}[];

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
