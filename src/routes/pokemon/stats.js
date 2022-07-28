const Stats = ({lists}) => {

    const bag = (name) => {
        return `bag bag-${name}`
      }


  return (
    <div className="list-unstyled">
      <div className="d-flex">
        <div className="w-50">#{lists.id}</div>
        {lists.types &&
          lists.types.map((types, index) => (
            <div className={bag(types.type.name)}  key={index}>
              {types.type.name}
            </div>
          ))}
      </div>
      {lists.stats &&
        lists.stats.map((stat, index) => (
          <div key={index} className="d-flex my-2">
            <div className="align-items-start w-75">{stat.stat.name}</div>
            <progress value={stat.base_stat} max="200">
              {stat.base_stat}
            </progress>
            {stat.base_stat}
          </div>
        ))}
    </div>
  );
};

export default Stats;
