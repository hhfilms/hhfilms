import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";

import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({children}) => {
  return (
    <div className="flex flex-col w-full h-screen prose-headings:font-assistant">
      <Header />
      <AppRouterCacheProvider>
        <main className="flex-grow overflow-y-auto">{children}</main>
      </AppRouterCacheProvider>

      <Footer />
    </div>
  );
};

export default MainLayout;
