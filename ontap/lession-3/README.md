# Nội dung buổi số 3

-   Cài đặt Nodejs
-   Tạo project bằng Vitejs
-   Chạy dự án Reactjs
-   Cài đặt tailwindcss cho project

## Cài đặt nodejs

-   Truy cập `nodejs.org`
-   Tải phiên bản mới nhất
-   Kiểm tra xem thành công chưa:

```bash
node -v
```

## Tạo project bằng Vitejs

-   Gõ câu lệnh sau:

```bash
npm create vite@latest my-app -- --template react
```

-   Truy cập vào thư mục dự án

```bash
cd my-app
code .
```

-   Cài đặt các package và chạy dự án

```bash
npm i
npm run dev
```

## Cài đặt tailwindcss

-   Truy cập https://tailwindcss.com/docs/guides/vite
-   Copy câu lệnh cài đặt tailwindcss

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

-   Chỉnh sửa file `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

-   Chỉnh sửa file `style.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

-   Chạy lại câu lệnh:

```bash
npm run dev
```
