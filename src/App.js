import "./App.css";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Home from "./component/page/Navigation/NavBar";
import About from "./component/page/About/About";
import ContactUs from "./component/page/Contact/Contact";
import Service from "./component/page/Service/Service"


import Form1 from './component/page/Service/SubService/LegalForm/LegalForm'
import Form2 from './component/page/Service/SubService/GovermentForm/Gform'
import Form3 from './component/page/Service/SubService/StampForm/Stamp'
import Form4 from './component/page/Service/SubService/Lawer/Lawer'
import Form5 from './component/page/Service/SubService/Bank/Bank'


function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}
					/>
          <Route
						path="/service"
						element={<Service/>}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/contact"
						element={<ContactUs />}
					/>
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
          <Route
						path="/form1"
						element={<Form1/>}
					/>
          <Route
						path="/form1"
						element={<Form1/>}
					/>
          <Route
						path="/form2"
						element={<Form2/>}
					/>
          <Route
						path="/form3"
						element={<Form3/>}
					/>
          <Route
						path="/form4"
						element={<Form4/>}
					/>
          <Route
						path="/form5"
						element={<Form5/>}
					/>
				</Routes>

        
			</Router>
		</>
	);
}

export default App;
