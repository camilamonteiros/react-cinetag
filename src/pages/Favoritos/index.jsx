import Banner from '../../components/Banner';
import Cards from '../../components/Cards';
import Titulo from '../../components/Titulo';
import { useFavoritoContext } from '../../contextos/Favoritos';
import styles from './Favoritos.module.css';

function Favoritos(){
    const { favorito } = useFavoritoContext();
    return(
        <>
            <Banner imagem='favoritos'/>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Cards {...fav} key={fav.id}/>
                })}
            </section>
        </>
    );
}

export default Favoritos;