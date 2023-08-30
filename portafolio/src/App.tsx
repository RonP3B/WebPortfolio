import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello world</h1>} />
    </Routes>
  );
};

export default App;
