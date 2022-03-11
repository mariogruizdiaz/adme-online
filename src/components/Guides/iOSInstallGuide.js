import React from "react";
import { connect } from "react-redux";

class iOSInstallGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        /**
         * Your ajax will goes here to get data then call setState
         */
    }

    render() {
        return (
            <React.Fragment>
                <div className="overflow-hidden">
                    <section id="createExpo" className="about-us ptb-100 background-shape-img position-relative">
                        <div className="animated-shape-wrap">
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                                <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                                    <div className="about-content-left">
                                        <h2>{this.props.dictionary.guides.ios.install.step1.title}</h2>
                                        <p>{this.props.dictionary.guides.ios.install.step1.subtitle}</p>
                                        <ul className="dot-circle pt-3">
                                            <li>{this.props.dictionary.guides.ios.install.step1.subSteps.a}<a href="https://expo.dev/signup" className="btn btn-brand-03 btn-rounded mr-3">Sign Up Expo</a></li>
                                            <li>{this.props.dictionary.guides.ios.install.step1.subSteps.b}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step1.subSteps.c}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step1.subSteps.d}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step1.subSteps.e}</li>
                                        </ul>
                                        <div className="action-btns mt-4">
                                            <a href="#installExpo" className="btn btn-brand-02 mr-3 page-scroll">{this.props.dictionary.guides.buttons.next}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-md-5 col-lg-4">
                                    <div className="about-content-right">
                                        <img src="assets/img/guides/ios/expoCreateAccount.jpeg" alt="about us" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="installExpo" className="about-us ptb-100 background-shape-img position-relative">
                        <div className="animated-shape-wrap">
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                        </div>    
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                                <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                                    <div className="about-content-left">
                                        <h2>{this.props.dictionary.guides.ios.install.step2.title}</h2>
                                        <p>{this.props.dictionary.guides.ios.install.step2.subtitle}</p>
                                        <ul className="dot-circle pt-3">
                                            <li>{this.props.dictionary.guides.ios.install.step2.subSteps.a}<a href="https://apps.apple.com/us/app/expo-go/id982107779" className="btn btn-brand-03 btn-rounded mr-3">Expo Go</a></li>
                                            <li>{this.props.dictionary.guides.ios.install.step2.subSteps.b}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step2.subSteps.c}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step2.subSteps.d}</li>
                                        </ul>
                                        <div className="action-btns mt-4">
                                            <a href="#expoPermission" className="btn btn-brand-02 mr-3 page-scroll">{this.props.dictionary.guides.buttons.next}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-md-5 col-lg-4">
                                    <div className="about-content-right">
                                        <img src="assets/img/guides/ios/expo.jpeg" alt="about us" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="expoPermission" className="about-us ptb-100 background-shape-img position-relative">
                        <div className="animated-shape-wrap">
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                        </div>    
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                                <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                                    <div className="about-content-left">
                                        <h2>{this.props.dictionary.guides.ios.install.step3.title}</h2>
                                        <p>{this.props.dictionary.guides.ios.install.step3.subtitle}</p>
                                        <ul className="dot-circle pt-3">
                                            <li>{this.props.dictionary.guides.ios.install.step3.subSteps.a}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step3.subSteps.b}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step3.subSteps.c}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step3.subSteps.d}</li>
                                        </ul>
                                        <div className="action-btns mt-4">
                                            <a href="#adme" className="btn btn-brand-02 mr-3 page-scroll">{this.props.dictionary.guides.buttons.next}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-md-5 col-lg-4">
                                    <div className="about-content-right">
                                        <img src="assets/img/guides/ios/joinMarioRuizDiaz.jpeg" alt="about us" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="adme" className="about-us ptb-100 background-shape-img position-relative">
                        <div className="animated-shape-wrap">
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                                <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                                    <div className="about-content-left">
                                        <h2>{this.props.dictionary.guides.ios.install.step4.title}</h2>
                                        <p>{this.props.dictionary.guides.ios.install.step4.subtitle}</p>
                                        <ul className="dot-circle pt-3">
                                            <li>{this.props.dictionary.guides.ios.install.step4.subSteps.a}  <a href="https://expo.io/@marioruizdiaz/adme-mobile?release-channel=qa" className="btn btn-brand-03 btn-rounded mr-3">{this.props.dictionary.guides.buttons.downloadNow} <i className="fas fa-cloud-download-alt pl-2"></i></a></li>
                                            <li>{this.props.dictionary.guides.ios.install.step4.subSteps.b}</li>
                                        </ul>
                                        <div className="action-btns mt-4">
                                            <a href="#adme-signup" className="btn btn-brand-02 mr-3 page-scroll">{this.props.dictionary.guides.buttons.next}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-md-5 col-lg-4">
                                    <div className="about-content-right">
                                        <img src="assets/img/guides/ios/login.jpeg" alt="about us" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="adme-signup" className="about-us ptb-100 background-shape-img position-relative">
                        <div className="animated-shape-wrap">
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                        </div>
                        <div className="container">

                            <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                                <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                                    <div className="about-content-left">
                                        <h2>{this.props.dictionary.guides.ios.install.step5.title}</h2>
                                        <p>{this.props.dictionary.guides.ios.install.step5.subtitle}</p>
                                        <ul className="dot-circle pt-3">
                                            <li>{this.props.dictionary.guides.ios.install.step5.subSteps.a}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step5.subSteps.b}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step5.subSteps.c}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step5.subSteps.d}</li>
                                        </ul>
                                        <div className="action-btns mt-4">
                                            <a href="#adme-fb-link" className="btn btn-brand-02 mr-3 page-scroll">{this.props.dictionary.guides.buttons.next}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-md-5 col-lg-4">
                                    <div className="about-content-right">
                                        <img src="assets/img/guides/ios/referentCode.jpeg" alt="about us" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="adme-fb-link" className="about-us ptb-100 background-shape-img position-relative">
                        <div className="animated-shape-wrap">
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                                <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                                    <div className="about-content-left">
                                        <h2>{this.props.dictionary.guides.ios.install.step6.title}</h2>
                                        <p>{this.props.dictionary.guides.ios.install.step6.subtitle}</p>
                                        <ul className="dot-circle pt-3">
                                            <li>{this.props.dictionary.guides.ios.install.step6.subSteps.a}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step6.subSteps.b}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step6.subSteps.c}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step6.subSteps.d}</li>
                                        </ul>
                                        <div className="action-btns mt-4">
                                            <a href="#adme-basics" className="btn btn-brand-02 mr-3 page-scroll">{this.props.dictionary.guides.buttons.next}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-md-5 col-lg-4">
                                    <div className="about-content-right">
                                        <img src="assets/img/guides/ios/link.jpeg" alt="about us" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="adme-basics" className="about-us ptb-100 background-shape-img position-relative">
                        <div className="animated-shape-wrap">
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                                <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                                    <div className="about-content-left">
                                        <h2>{this.props.dictionary.guides.ios.install.step7.title}</h2>
                                        <p>{this.props.dictionary.guides.ios.install.step7.subtitle}</p>
                                        <ul className="dot-circle pt-3">
                                            <li>{this.props.dictionary.guides.ios.install.step7.subSteps.a}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step7.subSteps.b}</li>
                                            <li>{this.props.dictionary.guides.ios.install.step7.subSteps.c}</li>
                                        </ul>
                                        <div className="action-btns mt-4">
                                            <a href="#adme-end" className="btn btn-brand-02 mr-3 page-scroll">{this.props.dictionary.guides.buttons.next}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-md-5 col-lg-4">
                                    <div className="about-content-right">
                                        <img src="assets/img/guides/ios/basics.jpeg" alt="about us" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="adme-end" className="about-us ptb-100 background-shape-img position-relative">
                        <div className="animated-shape-wrap">
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                                <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                                    <div className="about-content-left">
                                        <h2>{this.props.dictionary.guides.ios.install.step8.title}</h2>
                                        <p>{this.props.dictionary.guides.ios.install.step8.subtitle}</p>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-md-5 col-lg-4">
                                    <div className="about-content-right">
                                        <img src="assets/img/guides/ios/dashboard.jpeg" alt="about us" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    dictionary: state.i18n.dictionary
}))(iOSInstallGuide);
