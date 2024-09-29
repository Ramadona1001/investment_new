import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { PacmanLoader } from "react-spinners";
import { postData } from "../../request/gteData";
import { toast } from "sonner";

export default function Employment_form() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  const handleEmployment = async (data: any) => {
    setLoading(true);
    const employment = {
      first_name: data?.first_name,
      last_name: data.last_name,
      phone: data.phone,
      email: data.email,
      country_key: data.key,
      required_sepcialization: data.specialization,
      nationality: data.nationality,
      desired_location: data.desired,
      current_salary: data.total,
      expected_salary: data.expected,
      cv: data.cv[0],
      expected_join_time: data.time,
      languages: data.time,
      gender: data.gender,
    };

    await postData("apply-job", employment)
      .then(() => {
        setLoading(false);
        reset();
        toast.success(t("application"));
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleEmployment)}>
      <div className="grid grid-cols-1  gap-5 w-full">
        <div className="w-full">
          <label className="font-cairo text-sm text-gray-500">
            {t("first")} *
          </label>
          <input
            {...register("first_name", { required: true })}
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.first_name && "border-red-500"
            }`}
          />
        </div>
        <div className="w-full">
          <label className="font-cairo text-sm text-gray-500">
            {t("last")} *
          </label>
          <input
            {...register("last_name", { required: true })}
            type="text"
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.last_name && "border-red-500"
            }`}
          />
        </div>
        <div className="w-full">
          <label className="font-cairo text-sm text-gray-500">
            {t("email")} *
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t("invalid_email"),
              },
            })}
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.email && "border-red-500"
            }`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1  gap-5 w-full mt-7">
        <div className="w-full">
          <label className="font-cairo text-sm text-gray-500">
            {t("key")} *
          </label>
          <input
            {...register("key", { required: true })}
            type="number"
            min={0}
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.key && "border-red-500"
            }`}
          />
        </div>
        <div className="w-full">
          <label className="font-cairo text-sm text-gray-500">
            {t("call")} *
          </label>
          <input
            {...register("phone", {
              required: true,
              pattern: {
                value:
                  /^\+?(\d{1,9})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                message: t("invalid_phone"),
              },
            })}
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.phone && "border-red-500"
            }`}
            type="text"
          />
        </div>
        <div className="w-full">
          <label className="font-cairo text-sm text-gray-500">
            {t("specialization")} *
          </label>
          <input
            {...register("specialization", { required: true })}
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.specialization && "border-red-500"
            }`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1  gap-5 w-full mt-7">
        <div className="w-full">
          <label className="font-cairo text-sm text-gray-500">
            {t("nationality")} *
          </label>

          <select
            {...register("nationality", { required: true })}
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.nationality && "border-red-500"
            }`}
            name="nationality"
          >
            <option value="">-- select one --</option>
            <option value="afghan">Afghan</option>
            <option value="albanian">Albanian</option>
            <option value="algerian">Algerian</option>
            <option value="american">American</option>
            <option value="andorran">Andorran</option>
            <option value="angolan">Angolan</option>
            <option value="antiguans">Antiguans</option>
            <option value="argentinean">Argentinean</option>
            <option value="armenian">Armenian</option>
            <option value="australian">Australian</option>
            <option value="austrian">Austrian</option>
            <option value="azerbaijani">Azerbaijani</option>
            <option value="bahamian">Bahamian</option>
            <option value="bahraini">Bahraini</option>
            <option value="bangladeshi">Bangladeshi</option>
            <option value="barbadian">Barbadian</option>
            <option value="barbudans">Barbudans</option>
            <option value="batswana">Batswana</option>
            <option value="belarusian">Belarusian</option>
            <option value="belgian">Belgian</option>
            <option value="belizean">Belizean</option>
            <option value="beninese">Beninese</option>
            <option value="bhutanese">Bhutanese</option>
            <option value="bolivian">Bolivian</option>
            <option value="bosnian">Bosnian</option>
            <option value="brazilian">Brazilian</option>
            <option value="british">British</option>
            <option value="bruneian">Bruneian</option>
            <option value="bulgarian">Bulgarian</option>
            <option value="burkinabe">Burkinabe</option>
            <option value="burmese">Burmese</option>
            <option value="burundian">Burundian</option>
            <option value="cambodian">Cambodian</option>
            <option value="cameroonian">Cameroonian</option>
            <option value="canadian">Canadian</option>
            <option value="cape verdean">Cape Verdean</option>
            <option value="central african">Central African</option>
            <option value="chadian">Chadian</option>
            <option value="chilean">Chilean</option>
            <option value="chinese">Chinese</option>
            <option value="colombian">Colombian</option>
            <option value="comoran">Comoran</option>
            <option value="congolese">Congolese</option>
            <option value="costa rican">Costa Rican</option>
            <option value="croatian">Croatian</option>
            <option value="cuban">Cuban</option>
            <option value="cypriot">Cypriot</option>
            <option value="czech">Czech</option>
            <option value="danish">Danish</option>
            <option value="djibouti">Djibouti</option>
            <option value="dominican">Dominican</option>
            <option value="dutch">Dutch</option>
            <option value="east timorese">East Timorese</option>
            <option value="ecuadorean">Ecuadorean</option>
            <option value="egyptian">Egyptian</option>
            <option value="emirian">Emirian</option>
            <option value="equatorial guinean">Equatorial Guinean</option>
            <option value="eritrean">Eritrean</option>
            <option value="estonian">Estonian</option>
            <option value="ethiopian">Ethiopian</option>
            <option value="fijian">Fijian</option>
            <option value="filipino">Filipino</option>
            <option value="finnish">Finnish</option>
            <option value="french">French</option>
            <option value="gabonese">Gabonese</option>
            <option value="gambian">Gambian</option>
            <option value="georgian">Georgian</option>
            <option value="german">German</option>
            <option value="ghanaian">Ghanaian</option>
            <option value="greek">Greek</option>
            <option value="grenadian">Grenadian</option>
            <option value="guatemalan">Guatemalan</option>
            <option value="guinea-bissauan">Guinea-Bissauan</option>
            <option value="guinean">Guinean</option>
            <option value="guyanese">Guyanese</option>
            <option value="haitian">Haitian</option>
            <option value="herzegovinian">Herzegovinian</option>
            <option value="honduran">Honduran</option>
            <option value="hungarian">Hungarian</option>
            <option value="icelander">Icelander</option>
            <option value="indian">Indian</option>
            <option value="indonesian">Indonesian</option>
            <option value="iranian">Iranian</option>
            <option value="iraqi">Iraqi</option>
            <option value="irish">Irish</option>
            <option value="israeli">Israeli</option>
            <option value="italian">Italian</option>
            <option value="ivorian">Ivorian</option>
            <option value="jamaican">Jamaican</option>
            <option value="japanese">Japanese</option>
            <option value="jordanian">Jordanian</option>
            <option value="kazakhstani">Kazakhstani</option>
            <option value="kenyan">Kenyan</option>
            <option value="kittian and nevisian">Kittian and Nevisian</option>
            <option value="kuwaiti">Kuwaiti</option>
            <option value="kyrgyz">Kyrgyz</option>
            <option value="laotian">Laotian</option>
            <option value="latvian">Latvian</option>
            <option value="lebanese">Lebanese</option>
            <option value="liberian">Liberian</option>
            <option value="libyan">Libyan</option>
            <option value="liechtensteiner">Liechtensteiner</option>
            <option value="lithuanian">Lithuanian</option>
            <option value="luxembourger">Luxembourger</option>
            <option value="macedonian">Macedonian</option>
            <option value="malagasy">Malagasy</option>
            <option value="malawian">Malawian</option>
            <option value="malaysian">Malaysian</option>
            <option value="maldivan">Maldivan</option>
            <option value="malian">Malian</option>
            <option value="maltese">Maltese</option>
            <option value="marshallese">Marshallese</option>
            <option value="mauritanian">Mauritanian</option>
            <option value="mauritian">Mauritian</option>
            <option value="mexican">Mexican</option>
            <option value="micronesian">Micronesian</option>
            <option value="moldovan">Moldovan</option>
            <option value="monacan">Monacan</option>
            <option value="mongolian">Mongolian</option>
            <option value="moroccan">Moroccan</option>
            <option value="mosotho">Mosotho</option>
            <option value="motswana">Motswana</option>
            <option value="mozambican">Mozambican</option>
            <option value="namibian">Namibian</option>
            <option value="nauruan">Nauruan</option>
            <option value="nepalese">Nepalese</option>
            <option value="new zealander">New Zealander</option>
            <option value="ni-vanuatu">Ni-Vanuatu</option>
            <option value="nicaraguan">Nicaraguan</option>
            <option value="nigerien">Nigerien</option>
            <option value="north korean">North Korean</option>
            <option value="northern irish">Northern Irish</option>
            <option value="norwegian">Norwegian</option>
            <option value="omani">Omani</option>
            <option value="pakistani">Pakistani</option>
            <option value="palauan">Palauan</option>
            <option value="panamanian">Panamanian</option>
            <option value="papua new guinean">Papua New Guinean</option>
            <option value="paraguayan">Paraguayan</option>
            <option value="peruvian">Peruvian</option>
            <option value="polish">Polish</option>
            <option value="portuguese">Portuguese</option>
            <option value="qatari">Qatari</option>
            <option value="romanian">Romanian</option>
            <option value="russian">Russian</option>
            <option value="rwandan">Rwandan</option>
            <option value="saint lucian">Saint Lucian</option>
            <option value="salvadoran">Salvadoran</option>
            <option value="samoan">Samoan</option>
            <option value="san marinese">San Marinese</option>
            <option value="sao tomean">Sao Tomean</option>
            <option value="saudi">Saudi</option>
            <option value="scottish">Scottish</option>
            <option value="senegalese">Senegalese</option>
            <option value="serbian">Serbian</option>
            <option value="seychellois">Seychellois</option>
            <option value="sierra leonean">Sierra Leonean</option>
            <option value="singaporean">Singaporean</option>
            <option value="slovakian">Slovakian</option>
            <option value="slovenian">Slovenian</option>
            <option value="solomon islander">Solomon Islander</option>
            <option value="somali">Somali</option>
            <option value="south african">South African</option>
            <option value="south korean">South Korean</option>
            <option value="spanish">Spanish</option>
            <option value="sri lankan">Sri Lankan</option>
            <option value="sudanese">Sudanese</option>
            <option value="surinamer">Surinamer</option>
            <option value="swazi">Swazi</option>
            <option value="swedish">Swedish</option>
            <option value="swiss">Swiss</option>
            <option value="syrian">Syrian</option>
            <option value="taiwanese">Taiwanese</option>
            <option value="tajik">Tajik</option>
            <option value="tanzanian">Tanzanian</option>
            <option value="thai">Thai</option>
            <option value="togolese">Togolese</option>
            <option value="tongan">Tongan</option>
            <option value="trinidadian or tobagonian">
              Trinidadian or Tobagonian
            </option>
            <option value="tunisian">Tunisian</option>
            <option value="turkish">Turkish</option>
            <option value="tuvaluan">Tuvaluan</option>
            <option value="ugandan">Ugandan</option>
            <option value="ukrainian">Ukrainian</option>
            <option value="uruguayan">Uruguayan</option>
            <option value="uzbekistani">Uzbekistani</option>
            <option value="venezuelan">Venezuelan</option>
            <option value="vietnamese">Vietnamese</option>
            <option value="welsh">Welsh</option>
            <option value="yemenite">Yemenite</option>
            <option value="zambian">Zambian</option>
            <option value="zimbabwean">Zimbabwean</option>
          </select>
        </div>
        <div className="w-full">
          <label className="font-cairo text-sm text-gray-500">
            {t("desired")} *
          </label>
          <input
            {...register("desired", { required: true })}
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.desired && "border-red-500"
            }`}
          />
        </div>
        <div className="w-full">
          <label className="font-cairo text-sm text-gray-500">
            {t("total")} *
          </label>
          <input
            {...register("total", { required: true })}
            type="number"
            min={0}
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.total && "border-red-500"
            }`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1  gap-5 w-full mt-7">
        <div className="w-full">
          <label className="font-cairo text-sm text-gray-500">
            {t("expected")} *
          </label>
          <input
            {...register("expected", { required: true })}
            type="number"
            min={0}
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.expected && "border-red-500"
            }`}
          />
        </div>
        <div className="w-full">
          <label className="font-cairo text-sm text-gray-500">
            {t("cv")} *
          </label>
          <input
            {...register("cv", { required: true })}
            type="file"
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.cv && "border-red-500"
            }`}
          />
        </div>
        <div className="w-full">
          <label className="font-cairo text-sm text-gray-500">
            {t("time")} *
          </label>
          <input
            {...register("time", { required: true })}
            type="date"
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.time && "border-red-500"
            }`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1  gap-5 w-full mt-7">
        <div className="w-full col-span-2">
          <label className="font-cairo text-sm text-gray-500">
            {t("language")} *
          </label>
          <input
            {...register("language", { required: true })}
            className={`border-2 border-gray-300 mt-2 rounded-md p-2 w-full focus:outline-none focus:border-green-600 ${
              errors.language && "border-red-500"
            }`}
          />
        </div>

        <div className="w-full">
          <h5 className="font-cairo text-sm text-gray-500">{t("gender")} *</h5>
          <div className="mt-4 flex gap-5">
            <div className="flex items-center gap-2">
              <input
                {...register("gender", { required: true })}
                type="radio"
                id="male"
                value="male"
              />
              <label
                className="text-gray-500 text-xs font-cairo"
                htmlFor="male"
              >
                {t("male")}
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                {...register("gender", { required: true })}
                type="radio"
                id="female"
                value="female"
              />
              <label
                className="text-gray-500 text-xs font-cairo"
                htmlFor="female"
              >
                {t("female")}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9">
        {loading ? (
          <div className="flex justify-center ">
            <PacmanLoader color="green" />
          </div>
        ) : (
          <button className="font-cairo px-7 py-2 rounded-md text-white bg-green-500 duration-500 hover:bg-green-800">
            {t("send")}
          </button>
        )}
      </div>
    </form>
  );
}
