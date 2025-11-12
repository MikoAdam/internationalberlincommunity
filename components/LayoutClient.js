"use client";

import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import NextTopLoader from "nextjs-toploader";
import config from "@/config";
import { LanguageProvider } from "./LanguageContext";

const ClientLayout = ({ children }) => {
  return (
    <>
      <NextTopLoader color={config.colors.main} showSpinner={false} />
      <LanguageProvider>
        {children}
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
        <Tooltip
          id="tooltip"
          className="z-[60] !opacity-100 max-w-sm break-words"
        />
      </LanguageProvider>
    </>
  );
};

export default ClientLayout;
