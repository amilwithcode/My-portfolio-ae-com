'use client'

import Image1 from '@/src/assets/images/testimional-image/kamran-image.jpg';
import Image2 from '@/src/assets/images/testimional-image/kamran-image.jpg';
import { useTranslations } from 'next-intl';



interface Testimional {
    id: number,
    name: string,
    feedback: string,
    role: string,
    avatar: any
};


const useTestimonials = (): Testimional[] => {
    const t = useTranslations("HomePage")

    return [
        {
            id: 1,
            name: "Kamran Xəlilov",
            feedback:
                t("testimonials.opinion.men1"),
            role: "Developer",
            avatar: Image1,

        },
        {
            id: 2,
            name: "Nicat Əhmədov",
            feedback:
                t("testimonials.opinion.men2"),
            role: "Müştəri",
            avatar: Image2,

        }
    ]
}

export default useTestimonials;

