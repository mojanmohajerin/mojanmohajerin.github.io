import * as Yup from "yup";

export const getContactMeValidation = (language: "en" | "ja") =>
  Yup.object().shape({
    name: Yup.string().required(
      language === "ja" ? "名前を入力してください。" : "Please enter your name.",
    ),
    email: Yup.string()
      .email(
        language === "ja" ? "有効なメールアドレスを入力してください。" : "Invalid email address.",
      )
      .required(
        language === "ja"
          ? "メールアドレスを入力してください。"
          : "Please enter your email address.",
      ),
    message: Yup.string().required(
      language === "ja" ? "メッセージを入力してください！ :)" : "Please enter a message! :)",
    ),
  });
