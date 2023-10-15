

function SelectOptionForm(props)
{
    return (
      <div>
        <select 
          value = {props.selectPoz} 
          onChange={props.onChange}
        >
          <option value="all">Все</option>
          <option value="profitable">Только прибыльные</option>
          <option value="unProfitable">Только убыточные</option>
        </select>
      </div>
    );
}

export default SelectOptionForm;
