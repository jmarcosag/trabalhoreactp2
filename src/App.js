import Home from "./pages/home/Home";
import DetalheConteudo from "./pages/detalheconteudo/DetalheConteudo";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/detalhes" element={<DetalheConteudo/>}></Route>
            </Routes>
        </Router>
    )
}

export default App;