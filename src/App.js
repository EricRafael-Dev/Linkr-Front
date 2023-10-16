import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signIn/SignInPage.js";
import SignUpPage from "./pages/signup/SignUpPage.js";
import Timeline from "./pages/timeline/TimelinePage.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/timeline" element={<Timeline/>} />

      </Routes>
    </BrowserRouter>
  );
}
