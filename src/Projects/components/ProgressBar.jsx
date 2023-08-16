export const ProgressBar = ({bgColor, completed}) => {
  const containerStyles = {
    height:25,
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
    with:"100%",
    textAlign: 'right',
    transition:"width 1s ease-in-out",


  }

  const fillerStyles = {
    backgroundColor: bgColor,
    height:"100%",
    width:`${completed}%`,
    borderRadius: "inherit",


  }

  const labelStyles = {
    padding: 15,
    margin: 10,
    color: '#fff',
    fontWaight: 'bold',

  }
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span stile={labelStyles}>
          {`${completed}%`}
        </span>
      </div>
    </div>
  )
}
