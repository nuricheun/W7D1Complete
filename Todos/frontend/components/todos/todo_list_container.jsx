
import allTodos from './reducers/selectors';

module.exports = () => (
    <>
    {allTodos.map(el=>{
        <ul>
            <li>el.title</li>
            <li>el.body</li>
        </ul>    
    })}
    </>
)