import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordInput({

    value,

    onChange,

}) {

    const [show, setShow] = useState(false);

    return (

        <div className="relative">

            <input

                className="w-full p-3 rounded-lg bg-slate-800 text-white"

                type={show ? "text" : "password"}

                value={value}

                onChange={onChange}

                placeholder="Password"

            />

            <button

                type="button"

                onClick={() => setShow(!show)}

                className="absolute right-3 top-3"

            >

                {

                    show

                        ? <EyeOff size={18} />

                        : <Eye size={18} />

                }

            </button>

        </div>

    );

}