import Image1 from '@/src/assets/images/testimional-image/kamran-image.jpg';
import Image2 from '@/src/assets/images/testimional-image/kamran-image.jpg';
import portfolio from '@/src/assets/images/testimional-image/kamran-image.jpg';

const Testimonials = [
    {
        id: 1,
        name: "Kamran Xəlilov",
        feedback:
            "Working with Amil has been an inspiring experience. Amil approaches every task with dedication and creativity, consistently striving to improve. His focus, determination, and attention to detail make his work truly stand out.",
        role: "Developer",
        avatar: Image1,

    },
    {
        id: 2,
        name: "Nicat Əhmədov",
        feedback:
            "Təcrübəm çox müsbət idi. Çox peşəkar və vaxtında xidmət göstərildi.",
        role: "Müştəri",
        avatar: Image2,

    },
    {
        id: 3,
        name: "Elnur Həsənov",
        feedback: "Hər şey mükəmməl idi. Çox təşəkkür edirəm!",
        role: "Müştəri",
        avatar: portfolio,

    },
];

export default Testimonials;

