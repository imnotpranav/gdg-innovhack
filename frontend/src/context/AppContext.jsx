import { createContext, useEffect, useState } from "react";
import { getJobs } from "../api/jobs";
import api from "../api/axios"; // 👈 axios instance

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });
  const [isSearched, setIsSearched] = useState(false);

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

// ✅ fetch jobs from backend with proper loading state
const fetchJobs = async () => {
  try {
    setLoading(true);
    const jobs = await getJobs();
    setJobs(jobs.jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchJobs();
  }, []);

  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    loading, // optional but useful
    showRecruiterLogin,
    setShowRecruiterLogin,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
