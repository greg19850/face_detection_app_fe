function Stats({ loggedUser }) {
  return (
    <div className="white f2">
      {`${loggedUser.name}, your current number of scanned images is: ${loggedUser.entries}`}
    </div>
  );
}

export default Stats;