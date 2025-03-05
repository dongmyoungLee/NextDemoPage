// interfaces.ts
import { StaticImageData } from 'next/image';

export interface Meal {
    id: number;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
    creator_email: string;
    instructions: string;
}

export interface ImagePickerProps {
    label: string;
    name: string;
}

export interface MealsGridProps {
    meals: Meal[];
}

export interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export interface MealDetailPageProps {
    params: {
        mealSlug: string;
    };
}

export interface RootLayoutProps {
    children: React.ReactNode;
}