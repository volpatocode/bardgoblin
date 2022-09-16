import { collection, getDocs } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "../config/firebaseConfig";
import { topicsData, usersData } from "../types/user";
import { UserContext } from "./UserContext";

type SearchContextProps = {
  children: ReactNode;
};

type SearchContextType = {
  topicsData: topicsData;
  setTopicsData: (data: topicsData) => void;
  usersData: usersData;
  setUsersData: (data: usersData) => void;
  query: string;
  setQuery: (data: string) => void;
  keys: string[];
  sections: {};
  search: (data: topicsData) => void;
};

export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);

export const SearchContextProvider = ({ children }: SearchContextProps) => {
  const { setIsLoading } = useContext(UserContext);
  const [topicsData, setTopicsData] = useState([] as topicsData);
  const [usersData, setUsersData] = useState([] as usersData);
  const [query, setQuery] = useState("");

  const keys = ["topictitle"];

  const sections = {
    "Side Quests": "sidequests",
    Builds: "builds",
    Characters: "characters",
  };

  useEffect(() => {
    const fetchTopicsData = async () => {
      let topicList = [];
      try {
        setIsLoading(true);
        const queryTopicsData = await getDocs(collection(db, "topics"));
        queryTopicsData.forEach(async (doc) => {
          topicList.push({ uid: doc?.id, ...doc.data() });
        });
        setTopicsData(topicList);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchTopicsData();
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

  const search = (data:topicsData) => {
    return data?.filter((topic) =>
      keys.some((key) =>  topic[key].toLowerCase().includes(query.toLowerCase()))
    );
  };


  return (
    <SearchContext.Provider
      value={{
        topicsData,
        setTopicsData,
        usersData,
        setUsersData,
        query,
        setQuery,
        keys,
        search,
        sections,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
