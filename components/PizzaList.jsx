import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"

const PizzaList =({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
         Le Lorem Ipsum est le faux texte standard de 

        </p>
        <div className={styles.wrapper}>
        {
            pizzaList.map((pizza) => 
                <PizzaCard key={pizza._id} pizza={pizza} />
            )}
        </div>
    </div>
  )
}

export default PizzaList