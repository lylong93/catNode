import User from './user'
import Chat from './chat'
import Shop from './shop'
import Order from './order'
import Test from './test'
import Ttt from './ttt'
// import Chat from './chat'

const init =()=> {
    console.log('init le')
    // User.hasMany(Chat); 
    // Chat.belongsTo(User);

    Shop.belongsToMany(User, {through: Test,foreignKey: 'from'});
    User.belongsToMany(Shop, {through: Test,foreignKey: 'to'});

    Shop.belongsToMany(User, {through: Ttt,foreignKey: 'to'});
    User.belongsToMany(Shop, {through: Ttt,foreignKey: 'from'});

    Chat.belongsTo(Test)
    Chat.belongsTo(Ttt)

    Test.hasMany(Chat)
    Ttt.hasMany(Chat)


    Shop.belongsToMany(User, {through: Order});
    User.belongsToMany(Shop, {through: Order});
   
}

export default init