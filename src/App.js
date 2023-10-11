import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signIn/SignInPage.js";
import SignUpPage from "./pages/signup/SignUpPage.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}
