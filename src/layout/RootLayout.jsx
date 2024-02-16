import { Outlet } from "react-router-dom";
import RecipeNavbar from "../components/navbar/RecipeNavbar";
import RecipeFooter from "../components/footer/RecipeFooter";

const RootLayout = () => {
  return (
    <>
      <RecipeNavbar />
      <main className="mt-24 mb-10 mx-auto container">
        <Outlet />
      </main>
      <RecipeFooter />
    </>
  );
};

export default RootLayout;
