import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../Actions/Actions';
import Home from '../Pages/Home';


//map states to props
const mapStateToProps = (state) => {
    return {
        appState: state.appReducer,
    }
}

//map actions to props
const mapDispatchToProps = (dispatchActions) => {

    //bind action creator to dispatch
    return {
        appActions: bindActionCreators(appActions, dispatchActions)
    }
}

const containerCreater = connect(mapStateToProps, mapDispatchToProps)

//  campaign builder container(main)
export const HomeContainer = containerCreater(Home);


