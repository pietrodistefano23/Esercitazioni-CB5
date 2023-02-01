import Link from "next/link";
import { useRouter } from "next/router";
const user = () => {

const router = useRouter();
console.log(router)
    return (
        <div className="user">
            <h3>{router.query.id}</h3>
            <Link href='/'>Home</Link>
        </div>
    )
}

export default user;