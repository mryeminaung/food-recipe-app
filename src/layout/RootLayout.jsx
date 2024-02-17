import { Outlet } from "react-router-dom";
import RecipeNavbar from "../components/navbar/RecipeNavbar";
import RecipeFooter from "../components/footer/RecipeFooter";

const RootLayout = () => {
  return (
    <div className="">
      <RecipeNavbar />
      <main className="mt-24 mb-10 p-4 md:px-5 mx-auto lg:container">
        <Outlet />
      </main>
      <RecipeFooter />
    </div>
  );
};

export default RootLayout;
