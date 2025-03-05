import classes from './page.module.css';
import Image from "next/image";
import {getMeal} from "@/lib/meals";
import {Meal} from "@/interfaces/interfaces";
import {notFound} from "next/navigation";

export async function generateMetadata({params} : any) {
    const { mealSlug } = await params;
    const meal: Meal  = await getMeal(mealSlug);

    if (!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary
    };
}

// any -> 이 부분 타입이 뭘로 빠지는 지 모르겠음 build 시 자꾸 에러..
export default async function MealDetailPage({ params } : any) {
    // Next.js App Router에서 동적 라우팅 파라미터(params)는 서버 컴포넌트에서 비동기적으로 제공됩니다.
    const { mealSlug } = await params;
    const meal: Meal  = await getMeal(mealSlug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} fill alt="meal_image" />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>
                        {meal.summary}
                    </p>
                </div>
            </header>
            <main>
                {/* innerHTML 이랑 같음 하지만 XSS 대응가능 */}
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }}>

                </p>
            </main>
        </>
    );
}