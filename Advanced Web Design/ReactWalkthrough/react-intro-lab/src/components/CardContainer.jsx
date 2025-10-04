//const ........ = (props) =>{
// return ();}

const CardContainer = ({children}) => {
    return (
        <div style={{
            border: '2px solid',
            padding: '20px',
        }}>
            {children}
        </div>);
}
//export default UserCard;
export default CardContainer;
