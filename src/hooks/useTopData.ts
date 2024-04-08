import { putTopData } from "../api/useApi";
import { TopFormSchemaType } from "../schema/validationSchema";
import useCookiesHooks from "./useCookiesHooks";

const useTopData = () => {
  const { cookies } = useCookiesHooks()

  const handleTopSubmit = async ({ product, learning, profile, contact }: TopFormSchemaType) => {
    const topData = {
      uid: cookies.uid,
      productText: product,
      learningText: learning,
      profileText: profile,
      contactText: contact
    }
    const result = await putTopData(topData)
    return result;
  }
  return { handleTopSubmit }
}

export default useTopData;