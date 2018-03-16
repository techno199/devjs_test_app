import { connect } from 'react-redux';
import { SearchBarComponent } from '../components/search-bar/search-bar';
import { addSearchKeyword, deleteSearchKeyword } from '../actons';

const mapStateToProps = (state) => {
    return {
        studios: state.studios.studios,
        keyWords: state.search.keyWords
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addKeyWord: (kw) => {
            dispatch(addSearchKeyword(kw));
        },
        deleteKeyWord: (kw) => {
            dispatch(deleteSearchKeyword(kw));
        }
    }
}

export let SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);