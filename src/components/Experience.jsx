import { experienceList } from "./experienceList";

export const Experience = () => {
    return (
        <>
            <section className="experience" id="Experience">
                <h2 className="section-title">Experience</h2>
                <div className="container experience__container">
                    <ExperienceItem />
                </div>
            </section>
        </>
    )
}

const ExperienceItem = () => {
    const experienceItem = experienceList.map(item => {

        return (
            <div className="experience__item" key={`${item.id}`}>
                <div className="experience__date">{`${item.date}`}</div>
                <div className="experience__title">{`${item.title}`} </div>
                <div className="experience__company">{`${item.company}`}</div>
                {/* <div className="experience__text">{`${item.description}`}</div> */}
            </div>
        )
    })

    return experienceItem
}