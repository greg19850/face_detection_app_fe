function Stats({ loggedUser }) {
  return (
    <div className="white f3">
      {`${loggedUser.name}, you scanned ${loggedUser.entries} faces`}
    </div>
  );
}

export default Stats;