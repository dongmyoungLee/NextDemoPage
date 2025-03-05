'use client';

import {FormStatusNotPending, FormStatusPending, useFormStatus} from "react-dom";

export default function MealsFormSubmit() {
    const { pending } : FormStatusPending | FormStatusNotPending = useFormStatus();

    return  <button disabled={pending} type="submit">{pending ? 'Submitting...' : 'Share Meal'}</button>;
}