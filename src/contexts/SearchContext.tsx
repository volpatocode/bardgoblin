import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  collection,
  where,
  getDocs,
  query as fireQuery,
} from "firebase/firestore";

import { db } from "../config/firebaseConfig";
import { topicsData, usersData } from "../types/user";
import { UserContext } from "./UserContext";

type SearchContextProps = {
  children: ReactNode;
};

type SearchContextType = {
  usersData: usersData;
  setUsersData: (data: topicsData) => void;
  setQuestsData: (data: topicsData) => void;
  questsData: topicsData;
  setBuildsData: (data: topicsData) => void;
  buildsData: topicsData;
  setCharactersData: (data: topicsData) => void;
  charactersData: topicsData;
  query: string;
  setQuery: (data: string) => void;
  keys: string[];
  sectionLinks: {};
  sectionData: {};
  search: (data) => void;
};

export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);

export const SearchContextProvider = ({ children }: SearchContextProps) => {
  const { setIsLoading } = useContext(UserContext);
  const [buildsData, setBuildsData] = useState([] as topicsData);
  const [questsData, setQuestsData] = useState([] as topicsData);
  const [charactersData, setCharactersData] = useState([] as topicsData);
  const [usersData, setUsersData] = useState([] as usersData);
  const [query, setQuery] = useState("");

  const keys = ["topictitle"];

  const sectionLinks = {
    "Side Quests": "sidequests",
    Builds: "builds",
    Characters: "characters",
  };

  const sectionData = {
    "Side Quests": questsData,
    Builds: buildsData,
    Characters: charactersData,
  };

  useEffect(() => {
    const fetchQuestsData = async () => {
      let questsList = [];
      try {
        setIsLoading(true);
        const queryQuestsData = await getDocs(
          fireQuery(
            collection(db, "topics"),
            where("section", "==", "Side Quests")
          )
        );
        queryQuestsData.forEach(async (doc) => {
          questsList.push({ uid: doc?.id, ...doc.data() });
        });
        setQuestsData(questsList);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchQuestsData();
  }, []);

  useEffect(() => {
    const fetchBuildsData = async () => {
      let buildsList = [];
      try {
        setIsLoading(true);
        const queryBuildsData = await getDocs(
          fireQuery(collection(db, "topics"), where("section", "==", "Builds"))
        );
        queryBuildsData.forEach(async (doc) => {
          buildsList.push({ uid: doc?.id, ...doc.data() });
        });
        setBuildsData(buildsList);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchBuildsData();
  }, []);

  useEffect(() => {
    const fetchCharactersData = async () => {
      let charactersList = [];
      try {
        setIsLoading(true);
        const queryCharactersData = await getDocs(
          fireQuery(
            collection(db, "topics"),
            where("section", "==", "Characters")
          )
        );
        queryCharactersData.forEach(async (doc) => {
          charactersList.push({ uid: doc?.id, ...doc.data() });
        });
        setCharactersData(charactersList);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchCharactersData();
  }, []);

  useEffect(() => {
    const fetchUsersData = async () => {
      let usersList = [];
      try {
        setIsLoading(true);
        const queryUsersData = await getDocs(collection(db, "users"));
        queryUsersData.forEach((doc) => {
          usersList.push({ ...doc.data() });
        });
        setUsersData(usersList);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchUsersData();
  }, []);

  const search = (data: topicsData) => {
    return data?.filter((topic) =>
      keys.some((key) => topic[key].toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <SearchContext.Provider
      value={{
        usersData,
        setUsersData,
        query,
        setQuery,
        keys,
        search,
        sectionLinks,
        sectionData,
        buildsData,
        charactersData,
        questsData,
        setBuildsData,
        setCharactersData,
        setQuestsData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
