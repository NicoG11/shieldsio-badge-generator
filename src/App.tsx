import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/custom.scss";

function App() {
	return (
		<div className="app">
			<Header />
			<main>
				<Home />
			</main>
			<Footer />
		</div>
	);
}

export default App;
