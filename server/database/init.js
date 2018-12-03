import {User,Shop,Friend,Chat,Order,Good,OrderToGood} from './models'

const init =()=> {

    Shop.belongsToMany(User, {
        through: Friend,
    });
    User.belongsToMany(Shop, {
        through: Friend,
    });
    
    Shop.hasMany(Chat)
    User.hasMany(Chat)

    Shop.hasMany(Order);
    User.hasMany(Order);
  
    Order.belongsToMany(Good,{
        through:OrderToGood
    })

    Shop.hasMany(Good)
}

export default init