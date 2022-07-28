const Profile = ({lists}) => {
  return (
    <div>
      <h3 className="text-center bg-info p-2">Profile</h3>
      <div className="mt-4 mx-5">
        <div>Height: {lists.height}</div>
        <div>Weight: {lists.weight}</div>
        <div>
          Abilities:
          <ul>
            {lists.abilities &&
              lists.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
