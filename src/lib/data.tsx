'use client'

import Image1 from '@/assets/images/testimional-image/kamran-image.jpg';
import Image2 from '@/assets/images/testimional-image/kamran-image.jpg';
import { useTranslations } from 'next-intl';



interface Testimional {
    id: number,
    name: string,
    feedback: string,
    role: string,
    avatar: string
};


const useTestimonials = (): Testimional[] => {
    const t = useTranslations("HomePage")

    return [
        {
            id: 1,
            name: "Kamran Xəlilov",
            feedback:t("testimonials.opinion.men1"),
            role: t("testimonials.role.men1"),
            avatar: `${Image1}`,

        },
        {
            id: 2,
            name: "Nicat Əhmədov",
            feedback:t("testimonials.opinion.men2"),
            role:t("testimonials.role.men2"),
            avatar: `${Image2}`,

        }
    ]
}

export default useTestimonials;

