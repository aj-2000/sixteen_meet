import React from "react";
import JoinMeet from "../components/JoinMeet";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const JoinMeetPage = () => {
  return (
    <div className="flex flex-col gap-y-px h-[100vh]">
      <Header />
      <JoinMeet />
      <Footer />
    </div>
  );
};

export default JoinMeetPage;
