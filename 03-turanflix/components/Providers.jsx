"use client";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
