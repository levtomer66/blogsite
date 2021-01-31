import { extend } from "vee-validate";
import { required, alpha } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "שדה חובה"
});

extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters"
});
