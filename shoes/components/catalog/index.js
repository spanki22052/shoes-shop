import classes from "../../styles/catalog.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu as close } from '../../modules/actions';

const Catalog = () => {
	const dispatch = useDispatch();
	const menuState = useSelector(state => state.menu.menuState);
	const closeMenu = () => {
		dispatch(close());
	}
	return (
		<div className={!menuState ? classes.wrapper : classes.wrapper + ' ' + classes.blur}
			onClick={() => {
				closeMenu();
				document.querySelector("body").classList.remove("lock")
			}}>
			<h1 className={classes.catalogText}>Каталог</h1>

<<<<<<< Updated upstream
			<div className={classes.photosHolder}>
				<div className={classes.photoBlock}>
					<img src="/man.jpg" alt="man" />
					<h1>Мужчинам</h1>
				</div>
				<div className={classes.photoBlock}>
					<img src="/woman.jpg" alt="man" />
					<h1>Женщинам</h1>
				</div>
				<div className={classes.photoBlock}>
					<img src="/kid.jpg" alt="man" />
					<h1>Детям</h1>
				</div>
			</div>
		</div>
	);
=======
      <div className={styles.photosHolder}>
        <div className={styles.photoBlock}>
          <img src="/man.jpg" alt="man" />
          <h1>МУЖЧИНАМ</h1>
        </div>
        <div className={styles.photoBlock}>
          <img src="/woman.jpg" alt="man" />
          <h1>ЖЕНЩИНАМ</h1>
        </div>
        <div className={styles.photoBlock}>
          <img src="/kid.jpg" alt="man" />
          <h1>ДЕТЯМ</h1>
        </div>
      </div>
    </div>
  );
>>>>>>> Stashed changes
};

export default Catalog;
