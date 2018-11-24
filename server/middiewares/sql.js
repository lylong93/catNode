import {db} from '../config'

export default ()=> {
        db
        .authenticate()
        .then(() => {
            console.log('Connection mysql successfully.');
           
        })
        .catch(err => {
            console.error('connect mysql err:', err);
        
        });
}
