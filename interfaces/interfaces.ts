// interfaces.ts
import { StaticImageData } from 'next/image';

export interface Meal {
    id: number; // id는 숫자입니다.
    title: string;
    slug: string;
    image: string; // StaticImageData 제거
    summary: string;
    creator: string;
    creator_email: string; // creator_email 추가
    instructions: string; // instructions 추가
}


export interface MealsGridProps {
    meals: Meal[];
}