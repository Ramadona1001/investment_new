import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { postData } from "../../request/gteData";
import { toast } from "sonner";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";

export default function Form() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  const handleFormSubmit = async (data: any) => {
    setLoading(true);

    const contactData = {
      name: data.name,
      email: data.email,
      subject: data.sub,
      description: data.msg,
      phone: data.phone,
    };

    await postData("contact-us", contactData)
      .then(() => {
        toast.success("contact has been sent");
        setLoading(false);
        reset();
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <h3 className="text-lg font-cairo font-bold w-40 pb-2 border-b-2 border-[#223525]">
        {t("contact_us")}
      </h3>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-5 w-full">
        <div className="flex flex-col xs:flex-row gap-7 w-full">
          <div className="w-full">
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-teal-500 placeholder:text-black pb-3 bg-transparent"
              type="text"
              {...register("name", { required: true })}
              placeholder={t("user")}
            />
            {errors.name && (
              <p className="text-red-500 mt-2 text-xs">{t("required")}</p>
            )}
          </div>
          <div className="w-full">
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-teal-500 placeholder:text-black pb-3 bg-transparent"
              type="text"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.com)+$/,
                  message: t("invalid_email"),
                },
              })}
              placeholder={t("email")}
            />
            {errors.email && (
              <p className="text-red-500 mt-2 text-xs">{t("required")}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col xs:flex-row gap-7 w-full mt-5">
          <div className="w-full">
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-teal-500 placeholder:text-black pb-3 bg-transparent"
              type="text"
              {...register("phone", {
                required: true,
                pattern: {
                  value:
                    /^\+?(\d{1,9})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                  message: "Enter phone number",
                },
              })}
              placeholder={t("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 mt-2 text-xs">{t("valid_phone")}</p>
            )}
          </div>
          <div className="w-full">
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-teal-500 placeholder:text-black pb-3 bg-transparent"
              type="text"
              {...register("sub", {
                required: true,
              })}
              placeholder={t("sub")}
            />
            {errors.sub && (
              <p className="text-red-500 mt-2 text-xs">{t("required")}</p>
            )}
          </div>
        </div>
        <div className="mt-5 w-full">
          <textarea
            cols={2}
            rows={8}
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-teal-500 placeholder:text-black pb-3 bg-transparent resize-none"
            {...register("msg", { required: true })}
            placeholder={t("message")}
          ></textarea>
          {errors.msg && (
            <p className="text-red-500 mt-2 text-xs">{t("required")}</p>
          )}
        </div>
        <div className="mt-5">
          {loading ? (
            <div className="flex justify-center ">
              <PacmanLoader color="green" />
            </div>
          ) : (
            <button className="px-6 py-2 bg-[#223525] text-white rounded-lg duration-500 hover:scale-105 w-full">
              {t("send")}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
