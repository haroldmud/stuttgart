

export default function Button(props){
  return(
    <button className={`bg-bluebtn text-white text-sm font-bold py-4  px-6 ${props.style}`}>
      {props.name}
    </button>
  )
}