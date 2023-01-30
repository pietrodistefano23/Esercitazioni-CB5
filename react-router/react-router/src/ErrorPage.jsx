import { useRouteError } from "react-router";

export default function ErrorPage () {
    const error = useRouteError();
    return (
        <div className="Error">
            <h3>OOOOOPSSSSSSSSSs</h3>
        </div>
    )
}