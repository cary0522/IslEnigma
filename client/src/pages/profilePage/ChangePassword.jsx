import { useForm } from "react-hook-form"
import { useChangePwd } from "../../hooks/useChangePwd"

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const { mutate: changePwd, isLoading } = useChangePwd()

  const onSubmit = (data) => {
    changePwd(data, {
      onSuccess: () => {
        reset()
      },
    })
  }

  return (
    <div id="changePasswordContent">
      <form className="password-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="oldPassword">舊密碼</label>
          <input
            type="password"
            className={`memberInput-field ${
              errors.oldPassword ? "memberInputError" : ""
            }`}
            id="oldPassword"
            {...register("oldPassword", { required: "舊密碼不可為空" })}
          />
          {errors.oldPassword && (
            <p className="memberInputError-message">
              {errors.oldPassword.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="newPassword">新密碼</label>
          <input
            type="password"
            className={`memberInput-field ${
              errors.newPassword ? "memberInputError" : ""
            }`}
            id="newPassword"
            {...register("newPassword", {
              required: "新密碼不可為空",
              minLength: {
                value: 6,
                message: "新密碼至少需為6位數",
              },
            })}
          />
          {errors.newPassword && (
            <p className="memberInputError-message">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">確認密碼</label>
          <input
            type="password"
            className={`memberInput-field ${
              errors.confirmPassword ? "memberInputError" : ""
            }`}
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "確認密碼不可為空",
              minLength: {
                value: 6,
                message: "確認密碼至少需為6位數",
              },
            })}
          />
          {errors.confirmPassword && (
            <p className="memberInputError-message">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button type="submit" className="submit-btn">
          確認更改
        </button>
      </form>
    </div>
  )
}

export default ChangePassword
