import "./Input.scss";

interface InputProps {
    type?: "text";
    name: string;
    labelText: string;
}

const Input = ({ type="text", name, labelText }: InputProps) => {
  return (
    <div className="input-control">
        <label htmlFor={ name }>
            { labelText }
        </label>
        <input
            type={ type }
            id={ name }
            name= { name }
        />
    </div>
  )
}

export { Input }