export default function Detail(props) {
    return (
        <div className="py-8 px-2 w-4/5 shadow-2xl rounded-2xl bg-gradient-to-r from-blue-700  hover:scale-125 duration-300" >
            <h1 className="text-center text-2xl text-gray-300">{props.name}</h1>
            <p className="mt-3 text-center text-xl text-gray-400">{props.val} {props.unit}</p>
        </div>
    );
}