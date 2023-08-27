export const Skills = () => {

    return (
        <>
            <section className="skills" id="Skills">
                <h2 className="section-title">Skills</h2>
                <div className="container skills__container">
                    <div className="tech__skills">
                        <div className="design__skills">
                            <h3 className="text-gradient-clip" >Design</h3>
                            <div className="design__icons">
                                <ul>
                                    <li className="icons design__icons__item">
                                        <img src="./images/Photoshop-logo.svg" alt="" />
                                    </li>
                                    <li className="icons design__icons__item">
                                        <img src="./images/Illustrator-logo.svg" alt="" />
                                    </li>
                                    <li className="icons design__icons__item">
                                        <img src="./images/AfterEffects-logo.svg" alt="" />
                                    </li>
                                    <li className="icons design__icons__item">
                                        <img src="./images/Affinity-logo.svg" alt="" />
                                    </li>
                                    <li className="icons design__icons__item">
                                        <img src="./images/figma-logo.svg" alt="" />
                                    </li>
                                    <li className="icons design__icons__item">
                                        <img src="./images/maya-logo.svg" alt="" />
                                    </li>
                                    <li className="icons design__icons__item">
                                        <img src="./images/zbrush-white-logo.png" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="dev__skills">
                            <h3 className="text-gradient-clip">Tech skills</h3>
                            <div className="tech__icons">
                                <ul>
                                    <li className="icons tech__icons__item">
                                        <img src="./images/html.svg" alt="" />
                                    </li>
                                    <li className="icons tech__icons__item">
                                        <img src="./images/css.svg" alt="" />
                                    </li>
                                    <li className="icons tech__icons__item">
                                        <img src="./images/javascript.svg" alt="" />
                                    </li>
                                    <li className="icons tech__icons__item">
                                        <img src="./images/bootstrap.svg" alt="" />
                                    </li>
                                    <li className="icons tech__icons__item">
                                        <img src="./images/react.svg" alt="" />
                                    </li>
                                    <li className="icons tech__icons__item">
                                        <img src="./images/git-icon.svg" alt="" />
                                    </li>
                                    <li className="icons tech__icons__item">
                                        <img src="./images/github-icon-white.svg" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="soft__skills">
                        <div className="soft__skills__text">
                            <h3 className="text-gradient-clip">Soft Skills</h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti numquam beatae, nemo saepe, rem vel molestias quasi perspiciatis, aut maiores architecto tempora ut minima vitae! Consequatur magnam ex delectus beatae! </p>
                        </div>

                        <div className="soft__skills__icons">
                            <ul>
                                <li className="icons softskills__icons__item">
                                    <i className="fas fa-folder"></i>
                                    <p>Organizado </p>
                                </li>
                                <li className="icons softskills__icons__item">
                                    <i className="fa-solid fa-calendar-check"></i>
                                    <p>Manejo del tiempo </p>
                                </li>
                                <li className="icons softskills__icons__item">
                                    <i className="fa-solid fa-users"></i>
                                    <p>Trabajo en equipo </p>
                                </li>
                                <li className="icons softskills__icons__item">
                                    <i className="fa-solid fa-user-tie"></i>
                                    <p>Responsable </p>
                                </li>
                                <li className="icons softskills__icons__item">
                                    <i className="fas fa-brain"></i>
                                    <p>Pensamiento cr&iacute;tico </p>
                                </li>
                                <li className="icons softskills__icons__item">
                                    <i className="fas fa-user-cog"></i>
                                    <p>Resoluci&oacute;n de problemas </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}