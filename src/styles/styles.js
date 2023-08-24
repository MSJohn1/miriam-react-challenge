import { makeStyles } from '@mui/styles';
 
const styles = () => {
  return {
    //class names for when injecting style into components
    box: {
      backgroundColor: "red"
    },
    root: {
    // minWidth: 275,
    // padding: "10px",
    boxShadow: "0 10px 20px -10px rgba(0,0,0,.75)",
    backgroundColor: '#252850',
    color: '#b3b8cd'
    },
    title: {
     color: "white",
    },
    text: {
      font: 'Roboto',
    }
  };
};
 
const useStyles = makeStyles(styles);
export default useStyles; 