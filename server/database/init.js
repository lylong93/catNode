import {User,Shop,Friend,UserMsg,ShopMsg,Chat,Order,SocketId} from './models'

const init =()=> {

    Shop.belongsToMany(User, {
        through: Friend,
        
    });
    User.belongsToMany(Shop, {
        through: Friend,
      
    });
    
    Shop.hasMany(Chat)
    User.hasMany(Chat)

    // Shop.belongsToMany(User, {through: Order});
    // User.belongsToMany(Shop, {through: Order});
   
}

export default init