import Chat from './chat'
import User from './user'

const init =()=> {
    Chat.belongsTo(User)
    User.hasMany(Chat);
}

export default init