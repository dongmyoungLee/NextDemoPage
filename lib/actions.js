'use server';
import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";


function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));


    const meal  = {
        title : formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    };

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        return {
            message: 'Invalid input'
        };
    }

    await saveMeal(meal);
    // 중첩된 모든 페이지 유효성 재 검사
    // revalidatePath('/meals', 'layout');

    revalidatePath('/meals');
    redirect('/meals');
}