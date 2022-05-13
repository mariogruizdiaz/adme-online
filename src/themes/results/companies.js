import React, { Component } from "react";
import { connect } from "react-redux";
import { genericAction } from "../../state/actions";
import { bindActionCreators } from "redux";

import HeaderTeam from "../../components/Header/headerTeam";
import HeroSection from "../../components/Results/HeroSectionCompaniesPage";
import Breadcrumb from "../../components/Results/CompaniesGridBreadcrumb";
import DefaultGiudeGrid from "../../components/Results/CompaniesGrid";
import Footer from "../../components/Footer/FooterAdmeBrands";
import { actionTypes } from "../../state/actionTypes";
// import * as globalModels from "adme-models";


class Companies extends Component {
    componentDidMount() {
        this.props.genericAction(actionTypes.FETCH_COMPANIES, {});
    }
    render() {
        return (
            <React.Fragment>
                <HeaderTeam />
                <div className="main">
                    <HeroSection
                        pageTitle={this.props.dictionary.results.companies.hero.title}
                        pageSubtitle={this.props.dictionary.results.companies.hero.subtitle}
                        />
                    <Breadcrumb CompanyName={this.props.dictionary.results.companies.hero.subtitle} />
                    <DefaultGiudeGrid />
                </div>
                <Footer withoutNewsletter={true} />
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        dictionary: state.i18n.dictionary,
        selectedComany: state.companies.selectedCompany
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericAction: bindActionCreators(genericAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Companies);
