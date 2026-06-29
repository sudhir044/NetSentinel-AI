import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PasswordInput from "./PasswordInput";

import useAuth from "../../hooks/useAuth";

export default function LoginForm() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const submit = async (e) => {

        e.preventDefault();

        try {

            await login(email, password);

            navigate("/dashboard");

        }

        catch {

            alert("Invalid Credentials");

        }

    };

    return (

        <form
            onSubmit={submit}
            className="space-y-5"
        >

            <input

                className="w-full p-3 rounded-lg bg-slate-800 text-white"

                placeholder="Email"

                value={email}

                onChange={(e) =>
                    setEmail(e.target.value)
                }

            />

            <PasswordInput

                value={password}

                onChange={(e) =>
                    setPassword(e.target.value)
                }

            />

            <button

                className="w-full bg-cyan-500 p-3 rounded-lg font-semibold"

            >

                Login

            </button>

        </form>

    );

}