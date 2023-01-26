import {useState} from "react";

export interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    country?: Country;
    friends: string[];
}

export enum Country {
    France = "France",
    Uk = "Uk",
    Germany = "Germany"
}

export const Person = (props:Props) => {
    const [name, setName] = useState<string>("");

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This person {props.isMarried ? "is" : "is not"} married</h1>

            <h1>Country: {props.country}</h1>

            {props.friends.map((friend) => (
                <h1>{friend}</h1>
            ))}
        </div>
    );
}