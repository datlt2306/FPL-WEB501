import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./components/LayoutAdmin";
import DashboardPage from "./pages/admin/Dashboard";
import ListPostPage from "./pages/admin/post/list";
import CreatePostPage from "./pages/admin/post/create";
import EditPostPage from "./pages/admin/post/edit";

function App() {
    return (
        <>
            <Routes>
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="posts" element={<ListPostPage />} />
                    <Route path="posts/create" element={<CreatePostPage />} />
                    <Route path="posts/:id/edit" element={<EditPostPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
