import { extend } from "vee-validate";
import { required, alpha, email, image } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required",
});

extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters",
});
extend("email", {
  ...email,
  message: "This field must be email only.",
});
extend("image", {
  ...image,
  message: "This field must be image only.",
});
