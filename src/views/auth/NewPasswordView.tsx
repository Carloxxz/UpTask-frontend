import NewPasswordToken from "@/components/auth/NewPasswordToken"
import NewPasswordForm from "@/components/auth/NewPasswordForm"
import { useState } from "react"
import { ConfirmToken } from "@/types/index"

export default function NewPasswordView() {
  const [token, setToken] = useState<ConfirmToken['token']>('')
  const [isValidToken, setIsValidToken] = useState(false)

  return (
    <>
      <div className="text-5xl font-black text-white">Restablecer Password</div>
      <p className="text-2xl font-light text-white mt-5">
        Ingresa el código que recibiste por email {''}
        <span className="text-fuchsia-500 font-bold">por email</span>
      </p>
      {!isValidToken
        ? <NewPasswordToken token={token} setToken={setToken} setIsValidToken={setIsValidToken} />
        : <NewPasswordForm token={token} />}
    </>
  )
}
