import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { MenuPage } from "./pages/MenuPage";
import { CategoryPage } from "./pages/CategoryPage";
import { GuildPrefixPage } from "./pages/GuildPrefixPage";
import { WelcomeMessagePage } from "./pages/WelcomeMessagePage";
import { GuildContext } from "./utils/contexts/GuildContext";
import { AppBar } from "./components/appBar";
import { useFetchUser } from './utils/hooks/useFetchUser';
import { Spinner } from './components/spinner';
import { ClimbingBoxLoader } from "react-spinners";

function App() {
  const [guildId, setGuildId] = useState("");
  const {user, loading, error} = useFetchUser();
  const updateGuildId = (id: string) => setGuildId(id);

  if (loading) return <Spinner children={<ClimbingBoxLoader color="white" size="15"/>}/>;

  return (
    <GuildContext.Provider value={{ guildId, updateGuildId }}>
      {user && !error ? (
        <>
          <Routes>
            <Route path="/dashboard/*" element={<AppBar />} />
          </Routes>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/menu" element={<MenuPage />} />
            {/*<Route path="/dashboard" element={<HomePage />} />*/}
            <Route path="/dashboard/categories" element={<CategoryPage />} />
            <Route path="/dashboard/prefix" element={<GuildPrefixPage />} />
            <Route path="/dashboard/message" element={<WelcomeMessagePage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<div> Not Found </div>} />
        </Routes>
      )}
    </GuildContext.Provider>
  );
}

export default App;
