import { Button } from "./Button"
const email = <i className="fa-solid fa-envelope"></i>

export const AboutHome = () => {

    return (
        <>
            <section className="about" id="About">
                <div className="container">
                    <div className="about__description">
                        <div className="about__description__title">
                            <h1>Iv&aacute;n Ch&aacute;vez</h1>
                            <h5 className="text-gradient-clip">Designer & Web Developer</h5>
                        </div>
                        <div className="about__description__text">
                            <p>Soy un diseñador gráfico enfocado en el diseño y desarrollo front-end. Cuento con más de 7 años de experiencia en el área de diseño y 4 en el área del desarrollo web con una fuerte base técnica en HTML, CSS y Javascript. Me encanta trabajar en proyectos desafiantes y estoy constantemente buscando nuevas formas de mejorar mis habilidades y conocimientos. </p>
                        </div>

                        <div className="about__contact">
                            <div className="socialLinks">
                                <p> {email} contacto.ivanchr@gmail.com</p>
                                <ul>
                                    <ContactIcons />
                                </ul>
                            </div>
                            <Button className="btn" text="Descarga Mi CV" />
                        </div>

                    </div>
                    <div className="about__image">
                        <img src="./images/image_home_masked.png" /* src="./images/ivan_photo_about.jpg" */ alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}


export function ContactIcons() {

    const icons = [
        {
            id: 1,
            name: "artstation",
            icon: <i className="fa-brands fa-artstation"></i>
        },
        {
            id: 2,
            name: "linkedin",
            icon: <i className="fa-brands fa-linkedin"></i>
        },
        {
            id: 3,
            name: "behance",
            icon: <i className="fa-brands fa-square-behance"></i>
        },
        {
            id: 4,
            name: "github",
            icon: <i className="fa-brands fa-github"></i>
        },
        {
            id: 5,
            name: "instagram",
            icon: <i className="fa-brands fa-instagram"></i>
        }
    ]

    const listIconContact = icons.map(icon => {
        return (
            <li key={icon.name} className={`contact__icons ${icon.name}`}>{icon.icon}</li>
        )

    })

    return listIconContact

}