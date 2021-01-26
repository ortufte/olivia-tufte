
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Arrow = (props) => {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <ArrowBackIosIcon color="primary" fontSize="large" /> : <ArrowForwardIosIcon  color="primary" fontSize="large" />;

    return <div onClick={clickFunction} >{icon}</div>;
}

export default Arrow;