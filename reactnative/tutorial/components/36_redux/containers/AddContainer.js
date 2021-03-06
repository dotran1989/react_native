import AddComponent from '../components/AddComponent';
import { addNewTask } from '../actions';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);