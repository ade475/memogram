import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  heading: {
    color: 'purple',
    fontSize: '2rem',
    fontFamily: 'cursive',
    fontWeight: 'bold',
  },
  image: {
    marginLeft: '25px',
  },
}));
