import { useRouteError } from "react-router";
import styles from './styles.module.scss'
export default function ErrorPage () {
    const error = useRouteError();
    return (
        <div className={styles.ErrorPage}>
            <img src="https://media.gqitalia.it/photos/5f1714a942cc1b3dc50d2821/master/w_2066,h_3105,c_limit/GettyImages-1087224896.jpg" alt="boldi" />
            <h4>OPS... PAGINA NON TROVATA</h4>
        </div>
    )
}