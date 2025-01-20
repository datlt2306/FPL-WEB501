import { createRoot } from "react-dom/client";

const profile = {
    name: "Đạt",
    age: 30,
    address: "Hà Nội",
    isMarried: true,
};
type ShowNameProps = {
    profile: {
        name: string;
        age: number;
        address: string;
        isMarried: boolean;
    };
};

function ShowName(props: ShowNameProps) {
    return (
        <>
            <div>{props.name}</div>
        </>
    );
}

createRoot(document.getElementById("root")!).render(
    <div>
        <ShowName profile={profile} />
    </div>
);

// Root Component
// Parent Component
// Children Component
