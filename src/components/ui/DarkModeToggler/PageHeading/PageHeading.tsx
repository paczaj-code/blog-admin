import { FC } from "react";
interface IPageHeadingProps {
    title:string
    entity_name?:string
};

 const PageHeading: FC<IPageHeadingProps> = ({title, entity_name}) => {
    return (
        <div className="border-b-2 border-dotted border-[rgba(100,100,138,0.78)]">
            <h1 className="text-4xl pb-0 font-bold [text-shadow:2px_2px_5px_black]">{title}</h1>
            
        </div>
    );
}

export default PageHeading;