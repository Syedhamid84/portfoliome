import * as Yup from "yup";
import { emailRegex, phoneRegex } from "@/lib/regex";

// creating from schema for all field showing error if form is not validate.

export const formSchema = Yup.object().shape({
  useremail: Yup.string()
    .email("Invalid Email")
    .required("Email is required")
    .test("is-email", "Please enter a valid email", (value) => {
      if (!value) return false;
      return emailRegex.test(value);
    }),

  firstname: Yup.string().required("Name is required"),
  lastname: Yup.string().required("Last name is required"),
  usernumber: Yup.string()
    .required("phone number is required")
    .test("is-number", "Please enter a valid number", (value) => {
      if (!value) return false;
      return phoneRegex.test(value);
    }),

  userskills: Yup.string().required("skill names are required"),
  usercity: Yup.string().required("city name is required"),
  usermessage: Yup.string().required("message is required"),
});
