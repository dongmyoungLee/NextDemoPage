import classes from './meals-grid.module.css';
import MealItem from "@/components/meals/meals-item";
import {MealsGridProps} from "@/interfaces/interfaces";

export default function MealsGrid({ meals } : MealsGridProps) {
    return (
        <ul children={classes.meals}>
            {meals.map(meal => <li key={meal.id + ' MealsGrid'}>
                <MealItem {...meal} />
            </li>)}
        </ul>
    )
}