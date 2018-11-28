import {User,Shop,Friend,Usermsg,Shopmsg,Chat,Order} from './models'

const init =()=> {
    Shop.belongsToMany(User, {through: Friend});
    User.belongsToMany(Shop, {through: Friend});
    
    Shop.belongsToMany(User, {through: Shopmsg,foreignKey: 'from'});
    User.belongsToMany(Shop, {through: Shopmsg,foreignKey: 'to'});

    User.belongsToMany(Shop, {through: Usermsg,foreignKey: 'from'});
    Shop.belongsToMany(User, {through: Usermsg,foreignKey: 'to'});
    
    Usermsg.hasMany(Chat)
    Shopmsg.hasMany(Chat)

    Shop.belongsToMany(User, {through: Order});
    User.belongsToMany(Shop, {through: Order});
   
}

export default init