import {RxCheck} from "react-icons/rx";

const Check = ({isCompleted}) => {
    return (
        <div className={`border-2 rounded-lg border-pink-500 ${isCompleted ? 'bg-pink-500' : ''} w-6 h-6 mr-3 flex items-center justify-center`}>
            {isCompleted &&
                <RxCheck size={24} className="text-gray-900"/>
            }
        </div>
    )
}

export default Check;