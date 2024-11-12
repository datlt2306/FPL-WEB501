## Cài đặt thư viện react-router-dom:

```bash
npm i react-router-dom
```

## Truy cập vào file main.jsx

```jsx
import { BrowerRouter } from "react-router-dom";
ReactDOM.render(
    <BrowerRouter>
        <App />
    </BrowerRouter>
);
```

## Truy cập vào file App.jsx, khai báo Route

```jsx
 import { Routes, Route} from 'react-router-dom';
<Routes>
<Route path="duong_dan" element={component} />
</Route>

```

## Cài đặt extension React để tạo component nhanh

-   Truy cập cài đặt extension VSC : tìm và cài đặt `ES7+ React/Redux/React-Native snippets`
-   Sử dụng `rafce` để tạo component nhanh

## Cài extension `html to jsx`

-   Sử dụng bằng cách bôi đen code html và chuột chọn `convert html to jsx`
