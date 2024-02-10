import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const RootLayout = () => {
  return (
    <main className="min-h-screen w-full relative">
      <div className="w-full pl-64 fixed top-0 left-0 z-10 background-light900_dark300 light-border border shadow-light-200 dark:shadow-none">
        <Navbar />
      </div>
      <div className="flex">
        <div className="min-w-[240px] z-20">
          <Sidebar />
        </div>
        <section className="flex flex-1 w-full flex-col h-screen pt-24 px-6 sm:px-12 background-light900_dark200">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
