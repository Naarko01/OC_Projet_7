import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import ErrorPage from "./pages/ErrorPage";
import "./styles/Global.scss";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/housing/:id" element={<Housing />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</Router>
	</StrictMode>
);
