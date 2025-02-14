import { Route, Routes } from "react-router-dom";
import LayoutWebsite from "./components/LayoutWebsite";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/posts/list";
import LayoutAdmin from "./components/LayoutAdmin";
import PostDetailPage from "./pages/posts/show";
function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="posts" element={<PostsPage />} />
                    <Route path="posts/:id" element={<PostDetailPage />} />
                </Route>
                <Route path="admin" element={<LayoutAdmin />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
}

export default App;
