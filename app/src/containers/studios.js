import { connect } from 'react-redux';
import { StudiosComponent } from '../components/studios/studios';
import { fetchStudios } from '../actons';

const mapStateToProps = (state, ownProps) => {
    return {
        studios: state.studios.studios.sort((a, b) => a.price > b.price)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadStudios: (searchKeyWords) => {
            dispatch(fetchStudios(searchKeyWords));
        }
    }
}

export let Studios = connect(mapStateToProps, mapDispatchToProps)(StudiosComponent);