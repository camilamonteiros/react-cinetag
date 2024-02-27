import { useFavoritoContext } from "../../contextos/Favoritos";
import styles from "./Cards.module.css";
import iconeFavoritar from "./unfavorite.png";
import iconeDesfavoritar from "./favorite.png";
import { Link } from "react-router-dom";

function Cards({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const eFavorito = favorito.some((fav) => fav.id === id);
  const icone = eFavorito ? iconeDesfavoritar : iconeFavoritar;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img
        src={icone}
        alt="Favoritar Filme"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}

export default Cards;
